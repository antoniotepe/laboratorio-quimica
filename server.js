
var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

const PDFDocument = require('pdfkit-table');
const fs = require('fs');

const execute = require('./connection');


var http = require('http').Server(app);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
const { exec } = require("child_process");
app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 2024;

//app.use(bodyParser.json());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  
  next();
});




app.get("/",function(req,res){
  
	res.sendFile(path + 'index.html');
  
}); 



app.get("/login",function(req,res){
  res.redirect('/');
}); 

//EMPRESAS
//-------------------------------

app.post("/lista_empresas",function(req,res){

    //const {} = req.query;

    let qry = `SELECT CODEMPRESA AS CODIGO, EMPRESA FROM EMPRESAS`;
    execute.Query(res,qry);

}); 


app.post("/insert_empresa",function(req,res){

  //const {} = req.query;


});

app.post("/edit_empresa",function(req,res){

  //const {} = req.query;


}); 

app.post("/delete_empresa",function(req,res){

  //const {} = req.query;


}); 


//-------------------------------
//EMPRESAS



//CLIENTES
//-------------------------------


app.post("/verify_codigo",function(req,res){

  const {codigo,codempresa} = req.body;

  let qry = `SELECT CODIGO, CODEMPRESA 
              FROM CLIENTES
              WHERE CODEMPRESA=${codempresa} AND CODIGO='${codigo}';`;

  execute.Query(res,qry);

}); 

app.post("/listado_clientes",function(req,res){

      const {filtro,lastupdate,st} = req.body;

      if(st=='PENDIENTES'){
            if(filtro=='TODOS'){
              qry = `
              SELECT top 350 CLIENTES.CODEMPRESA, EMPRESAS.EMPRESA, CLIENTES.CODIGO, CLIENTES.DPI, CLIENTES.NOMBRE, CLIENTES.FECHA_NACIMIENTO, CLIENTES.AREA_TRABAJO AS AREA, CLIENTES.SECTOR, CLIENTES.TARJETA_SALUD AS SALUD, 
                                CLIENTES.TARJETA_ALIMENTOS AS ALIMENTOS, CLIENTES.TARJETA_PULMONES AS PULMONES, ATENDIDO, ISNULL(LASTUPDATE,'2024-01-01') AS LASTUPDATE
              FROM     CLIENTES LEFT OUTER JOIN
                                EMPRESAS ON CLIENTES.CODEMPRESA = EMPRESAS.CODEMPRESA
                    WHERE CLIENTES.LASTUPDATE <> '${lastupdate}'   
              `
            }else{
              qry = `
              SELECT top 350 CLIENTES.CODEMPRESA, EMPRESAS.EMPRESA, CLIENTES.CODIGO, CLIENTES.DPI, CLIENTES.NOMBRE, CLIENTES.FECHA_NACIMIENTO, CLIENTES.AREA_TRABAJO AS AREA, CLIENTES.SECTOR, CLIENTES.TARJETA_SALUD AS SALUD, 
                                CLIENTES.TARJETA_ALIMENTOS AS ALIMENTOS, CLIENTES.TARJETA_PULMONES AS PULMONES, ATENDIDO, ISNULL(LASTUPDATE,'2024-01-01') AS LASTUPDATE
              FROM     CLIENTES LEFT OUTER JOIN
                                EMPRESAS ON CLIENTES.CODEMPRESA = EMPRESAS.CODEMPRESA
                    WHERE CLIENTES.NOMBRE LIKE '%${filtro}%' AND CLIENTES.LASTUPDATE <> '${lastupdate}' 
                    OR CLIENTES.CODIGO='${filtro}' AND CLIENTES.LASTUPDATE <> '${lastupdate}'  
                `
            }   
      }else{
          if(filtro=='TODOS'){
            qry = `
            SELECT top 350 CLIENTES.CODEMPRESA, EMPRESAS.EMPRESA, CLIENTES.CODIGO, CLIENTES.DPI, CLIENTES.NOMBRE, CLIENTES.FECHA_NACIMIENTO, CLIENTES.AREA_TRABAJO AS AREA, CLIENTES.SECTOR, CLIENTES.TARJETA_SALUD AS SALUD, 
                              CLIENTES.TARJETA_ALIMENTOS AS ALIMENTOS, CLIENTES.TARJETA_PULMONES AS PULMONES, ATENDIDO, ISNULL(LASTUPDATE,'2024-01-01') AS LASTUPDATE
            FROM     CLIENTES LEFT OUTER JOIN
                              EMPRESAS ON CLIENTES.CODEMPRESA = EMPRESAS.CODEMPRESA
                  WHERE CLIENTES.LASTUPDATE = '${lastupdate}'   
            `
          }else{
            qry = `
            SELECT top 350 CLIENTES.CODEMPRESA, EMPRESAS.EMPRESA, CLIENTES.CODIGO, CLIENTES.DPI, CLIENTES.NOMBRE, CLIENTES.FECHA_NACIMIENTO, CLIENTES.AREA_TRABAJO AS AREA, CLIENTES.SECTOR, CLIENTES.TARJETA_SALUD AS SALUD, 
                              CLIENTES.TARJETA_ALIMENTOS AS ALIMENTOS, CLIENTES.TARJETA_PULMONES AS PULMONES, ATENDIDO, ISNULL(LASTUPDATE,'2024-01-01') AS LASTUPDATE
            FROM     CLIENTES LEFT OUTER JOIN
                              EMPRESAS ON CLIENTES.CODEMPRESA = EMPRESAS.CODEMPRESA
                  WHERE CLIENTES.NOMBRE LIKE '%${filtro}%' AND CLIENTES.LASTUPDATE = '${lastupdate}' 
                  OR CLIENTES.CODIGO='${filtro}' AND CLIENTES.LASTUPDATE = '${lastupdate}'  
              `
          }   
      }


   

    execute.Query(res,qry);


}); 

app.post("/insert_cliente",function(req,res){

  const {codempresa,codigo,dpi,nombre,fechanacimiento,area,sector,tsalud,talimentos,tpulmones,f1,f2,f3,fecha} = req.body;


  let qry = `
    INSERT INTO CLIENTES (CODIGO,CODEMPRESA,DPI,NOMBRE,FECHA_NACIMIENTO,AREA_TRABAJO,SECTOR,TARJETA_SALUD,TARJETA_ALIMENTOS,
      TARJETA_PULMONES,FOTO_SELFIE,FOTO_DPI_1,FOTO_DPI_2,LASTUPDATE,ATENDIDO) 
      SELECT '${codigo}' AS CODIGO, ${codempresa} AS CODEMPRESA, '${dpi}' AS DPI,
      '${nombre}' AS NOMBRE, '${fechanacimiento}' AS FECHA_NACIMIENTO, '${area}' AS AREA_TRABAJO,
      '${sector}' AS SECTOR, '${tsalud}' AS TARJETA_SALUD, '${talimentos}' AS TARJETA_ALIMENTOS,
      '${tpulmones}' AS TARJETA_PULMONES,'${f1}' AS FOTO_SELFIE,
      '${f2}' AS FOTO_DPI_1, '${f3}' AS FOTO_DPI_2, '${fecha}' AS LASTUPDATE, 'NO' AS ATENDIDO 

  `

  execute.Query(res,qry);

}); 


app.post("/edit_cliente",function(req,res){

  const {codempresa,codigo,dpi,nombre,fechanacimiento,fecha,area,sector,tsalud,talimentos,tpulmones} = req.body;


  let qry = `
    UPDATE CLIENTES SET 
          DPI='${dpi}',
          NOMBRE='${nombre}',
          FECHA_NACIMIENTO='${fechanacimiento}',
          AREA_TRABAJO='${area}',
          SECTOR='${sector}',
          TARJETA_SALUD='${tsalud}',
          TARJETA_ALIMENTOS='${talimentos}',
        TARJETA_PULMONES='${tpulmones}',
        LASTUPDATE='${fecha}'
    WHERE
    CODEMPRESA=${codempresa} AND CODIGO='${codigo}'


    

  `

  execute.Query(res,qry);

}); 

app.post("/fotos_cliente",function(req,res){

  const {codempresa,codigo} = req.body;


  let qry = `
      SELECT FOTO_SELFIE, FOTO_DPI_1,FOTO_DPI_2 FROM CLIENTES WHERE CODEMPRESA='${codempresa}' AND CODIGO='${codigo}';

  `

  execute.Query(res,qry);

}); 


app.post("/datos_cliente",function(req,res){

  const {codempresa,codigo} = req.body;


  let qry = `
      SELECT CODEMPRESA,CODIGO,
            DPI,NOMBRE, FECHA_NACIMIENTO,
            AREA_TRABAJO, SECTOR,
            TARJETA_SALUD, TARJETA_ALIMENTOS,
            TARJETA_PULMONES,LASTUPDATE 
      FROM CLIENTES 
      WHERE CODEMPRESA='${codempresa}' AND CODIGO='${codigo}';

  `

  execute.Query(res,qry);

}); 


app.post("/update_fotos_cliente",function(req,res){

  const {codempresa,codigo,fecha,f1,f2,f3} = req.body;


  let qry = `
      UPDATE CLIENTES SET FOTO_SELFIE='${f1}', 
                          FOTO_DPI_1='${f2}',
                          FOTO_DPI_2='${f3}',
                          LASTUPDATE='${fecha}'  
      WHERE CODEMPRESA='${codempresa}' AND CODIGO='${codigo}';

  `

  execute.Query(res,qry);

}); 


//-------------------------------
//CLIENTES



// -------------------------------
// USUARIOS

app.post("/lista_usuarios", function(req, res) {

  let qry = `SELECT NO_DPI, NOMBRE, CLAVE, TIPO
              FROM LAB_USUARIOS`;
              
  execute.Query(res, qry);
})

app.post("/crear_usuarios", function(req, res) {
  
  const { no_dpi, nombre, clave, tipo } = req.body;

  let qry = `
      INSERT INTO LAB_USUARIOS
        (CODUSUARIO, NOMBRE, CLAVE, TIPO)
        VALUES
        ('${no_dpi}','${nombre}','${clave}','${tipo}')
  `;
  
    execute.Query(res, qry);

});

app.post("/update_usuario", function(req, res) {

  const { id, nombre, clave, tipo } = req.body;

  let qry = `
        UPDATE LAB_USUARIOS
        SET TIPO='${tipo}',
            NOMBRE='${nombre}',
            CLAVE='${clave}'
          WHERE CODUSUARIO='${id}'
  `;
  execute.Query(res, qry);

})

// Login de usuarios
app.post("/loginLaboratorio", function(req, res) {
  const { nombre, clave } = req.body;

  let qry = `
    SELECT NO_DPI, NOMBRE, CLAVE, TIPO FROM LAB_USUARIOS
    WHERE NOMBRE='${nombre}' AND CLAVE='${clave}'
  `;

  execute.Query(res, qry);
});

// Registro de examenes
// app.post("/regitro_ciprologia", function(req, res) {
//   const {  } = req.body;
// })

// Pacientes
app.post("/insert_paciente", function(req, res) {

  const {noDPI, nombre, fecha_nacimiento, empresa } = req.body;

  // const calcularEdad = (fecha) => {
  //   const nacimiento = new Date(fecha);
  //   const hoy = new Date();
  //   let edad = hoy.getFullYear() - nacimiento.getFullYear();
  //   const mes = hoy.getMonth() - nacimiento.getMonth();

  //   if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
  //     edad--;
  //   }
  //   return edad;
  // };

  // const edad = calcularEdad(fecha_nacimiento);



  let qry = `
    INSERT INTO PACIENTES
      (NO_DPI, NOMBRE, FECHA_NACIMIENTO, EMPRESA_ID)
        VALUES
      ('${noDPI}','${nombre}','${fecha_nacimiento}',${empresa})
  `;
  execute.Query(res, qry);
  console.log(` Los datos de insert paciente ${noDPI} ${nombre} ${fecha_nacimiento} ${empresa} ${qry}`);

})

app.post("/lista_pacientes", function (req, res) {
  let qry = `
      SELECT 
          p.id,
          p.no_dpi, 
          p.nombre AS nombre_paciente, 
          p.fecha_nacimiento,  
          p.empresa_id,
          e.nombre AS nombre_empresa
      FROM PACIENTES p
      LEFT JOIN EMPRESAS e ON p.empresa_id = e.id;
  `;

  execute.Query(res, qry);
});

app.post("/datos_pacientes", (req, res) => {

  const { id } = req.body;

  let qry = `
      SELECT NO_DPI, NOMBRE,
             FECHA_NACIMIENTO,
             EMPRESA_ID
      FROM PACIENTES
      WHERE ID=${id};
  `;

  execute.Query(res, qry);
  console.log(qry);

})

// Actualizar pacientes
app.post("/update_paciente", (req, res) => {

  const { id, noDPI, nombre, fecha_nacimiento, empresa } = req.body;

  let qry = `
    UPDATE PACIENTES
      SET NO_DPI='${noDPI}',
          NOMBRE='${nombre}',
          FECHA_NACIMIENTO='${fecha_nacimiento}',
          EMPRESA_ID=${empresa}
      WHERE ID=${id}
  `;

  execute.Query(res, qry);
  console.log(qry);
})

// obtener empresas
app.post("/catalogo_empresas_pacientes", (req, res) => {
  let qry = `
    SELECT ID, NOMBRE 
      FROM EMPRESAS
      WHERE ST=TRUE
  `;
  execute.Query(res, qry)
})

// enviar datos para crear nueva empresa
app.post("/insert_empresa_paciente", (req, res) => {
  
  const { nombreEmpresa } = req.body;

  let qry = `
    INSERT INTO EMPRESAS
    (NOMBRE)
      VALUES
    ('${nombreEmpresa}') `;

    execute.Query(res, qry);

})

// Eliminar empresa
app.post("/eliminar_empresa", (req, res) => {
  const { id } = req.body;

  let qry = `
    UPDATE EMPRESAS 
      SET ST = false
      WHERE ID=${id}
  `;

  execute.Query(res, qry);
  console.log(qry);

})


// Insertar datos de examen ciprologia
app.post("/insert_examen_ciprologia", function(req, res) {
  const { tipo_examen, paciente_id, importe, medico_tratante, fecha, anio, mes, copro_macroscopio_color, copro_macroscopio_restos_alimenticios, copro_macroscopio_sangre, copro_macroscopio_consistencia, copro_macroscopio_Moco, copro_macroscopio_PH, copro_quimico_leucocitos, copro_quimico_celulas_vegetales, copro_quimico_almidones, copro_quimico_levaduras, copro_quimico_huevo, copro_quimico_quistes, copro_microscopio_eritrocitos, copro_microscopio_grasas, copro_microscopio_jabon, copro_microscopio_bacterias } = req.body;


  let qry = `
      INSERT INTO EXAMENES
      (TIPO_EXAMEN, PACIENTE_ID, IMPORTE, MEDICO_TRATANTE, FECHA, ANIO, MES, COPRO_MACROSCOPIO_COLOR, COPRO_MACROSCOPIO_RESTOS_ALIMENTICIOS, COPRO_MACROSCOPIO_SANGRE, COPRO_MACROSCOPIO_CONSISTENCIA, COPRO_MACROSCOPIO_MOCO, COPRO_MACROSCOPIO_PH, COPRO_QUIMICO_LEUCOCITOS, COPRO_QUIMICO_CELULAS_VEGETALES, COPRO_QUIMICO_ALMIDONES, COPRO_QUIMICO_LEVADURAS, COPRO_QUIMICO_HUEVO, COPRO_QUIMICO_QUISTES, COPRO_MICROSCOPIO_ERITROCITOS, COPRO_MICROSCOPIO_GRASAS, COPRO_MICROSCOPIO_JABON, COPRO_MICROSCOPIO_BACTERIAS)
        VALUES
      ('${tipo_examen}', ${paciente_id}, ${importe}, '${medico_tratante}', '${fecha}', '${anio}', '${mes}', '${copro_macroscopio_color}', '${copro_macroscopio_restos_alimenticios}', '${copro_macroscopio_sangre}', '${copro_macroscopio_consistencia}', '${copro_macroscopio_Moco}', '${copro_macroscopio_PH}', '${copro_quimico_leucocitos}', '${copro_quimico_celulas_vegetales}', '${copro_quimico_almidones}', '${copro_quimico_levaduras}', '${copro_quimico_huevo}', '${copro_quimico_quistes}', '${copro_microscopio_eritrocitos}', '${copro_microscopio_grasas}', '${copro_microscopio_jabon}', '${copro_microscopio_bacterias}')
  `;

  execute.Query(res, qry);
  console.log(qry);

})

// Obtener examen ciprologia
app.post("/obtenerExamenesCoprologia", (req, res) => {
  const { tipo, mes, anio } = req.body;

  let qry = `
    SELECT EXAMENES.*, PACIENTES.nombre AS nombre_paciente
    FROM EXAMENES
    INNER JOIN PACIENTES ON EXAMENES.paciente_id = PACIENTES.id
    WHERE (tipo_examen LIKE '%${tipo}%')
    AND (mes = ${mes})
    AND (anio = ${anio})
    AND (st = 1)
  `;

  execute.Query(res, qry);
  console.log(qry);
});


app.post("/eliminar_examen", (req, res) => {
  const { id } = req.body;

  const qry = `
    UPDATE EXAMENES
    SET st = 0
    WHERE id = ${id};
  `;

  // Ejecutar la consulta
  execute.Query(res, qry,);
  console.log(qry, [id]);
});


// Insertar datos de examen urologia
app.post("/insert_examen_urologia", (req, res) => {
  const { tipo_examen, paciente_id, importe, medico_tratante, fecha, anio, mes, uro_macro_color, uro_macro_aspecto, uro_macro_densidad, uro_macro_ph, uro_quimico_leucocitos, uro_quimico_glucosa, uro_quimico_proteinas, uro_quimico_cetonas, uro_quimico_hemoglobina, uro_quimico_urobilinogeno, uro_quimico_nitritos, uro_quimico_acido_ascorbico, uro_quimico_bilirrubina, uro_micro_leucocitos, uro_micro_eritocitos, uro_micro_c_epiteliales, uro_micro_bacterias, uro_micro_cristales, uro_micro_cilindros, uro_micro_otros } = req.body;

  let qry = `
    INSERT INTO EXAMENES
    (TIPO_EXAMEN, PACIENTE_ID, IMPORTE, MEDICO_TRATANTE, FECHA, ANIO, MES, URO_MACRO_COLOR, URO_MACRO_ASPECTO, URO_MACRO_DENSIDAD, URO_MACRO_PH, URO_QUIMICO_LEUCOCITOS, URO_QUIMICO_GLUCOSA, URO_QUIMICO_PROTEINAS, URO_QUIMICO_CETONAS, URO_QUIMICO_HEMOGLOBINA, URO_QUIMICO_UROBILINOGENO, URO_QUIMICO_NITRITOS, URO_QUIMICO_ACIDO_ASCORBICO, URO_QUIMICO_BILIRRUBINA, URO_MICRO_LEUCOCITOS, URO_MICRO_ERITOCITOS, URO_MICRO_C_EPITELIALES, URO_MICRO_BACTERIAS, URO_MICRO_CRISTALES, URO_MICRO_CILINDROS, URO_MICRO_OTROS)
      VALUES
    ('${tipo_examen}', ${paciente_id}, ${importe}, '${medico_tratante}', '${fecha}', '${anio}', '${mes}', '${uro_macro_color}', '${uro_macro_aspecto}', '${uro_macro_densidad}', '${uro_macro_ph}', '${uro_quimico_leucocitos}', '${uro_quimico_glucosa}', '${uro_quimico_proteinas}', '${uro_quimico_cetonas}', '${uro_quimico_hemoglobina}', '${uro_quimico_urobilinogeno}', '${uro_quimico_nitritos}', '${uro_quimico_acido_ascorbico}', '${uro_quimico_bilirrubina}', '${uro_micro_leucocitos}', '${uro_micro_eritocitos}', '${uro_micro_c_epiteliales}', '${uro_micro_bacterias}', '${uro_micro_cristales}', '${uro_micro_cilindros}', '${uro_micro_otros}')
  `;

    execute.Query(res, qry);
    console.log(qry);

})

// Obtener examenes de administracion
app.post("/obtenerExamenesPorFecha", (req, res) => {
  const { tipo, fechaInicio, fechaFinal } = req.body;

  let qry = `
    SELECT EXAMENES.*, PACIENTES.nombre AS nombre_paciente
    FROM EXAMENES
    INNER JOIN PACIENTES ON EXAMENES.paciente_id = PACIENTES.id
    WHERE (tipo_examen LIKE '%${tipo}%') 
    AND (FECHA BETWEEN '${fechaInicio}' AND '${fechaFinal}')
    AND (st = 1)
  `;

  execute.Query(res, qry);
  console.log(qry);

})

// Obtener datos del examen para dibujar pdf
app.post("/datos_examenes_para_pdf", (req, res) => {
  const { id } = req.body;
  
  let qry = `
      SELECT EXAMENES.*, PACIENTES.nombre AS nombre_paciente FROM EXAMENES
      INNER JOIN PACIENTES ON EXAMENES.paciente_id = PACIENTES.id
      WHERE EXAMENES.id = ${id}
  `;

  function formatearFechaANormal (fechaISO){
    // Crear un objeto Date a partir de la fecha ISO
     const fecha = new Date(fechaISO);

     // Obtener día, mes y año
     const dia = String(fecha.getDate()).padStart(2, '0'); // Asegura 2 dígitos
     const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
     const anio = fecha.getFullYear();

     // Devolver la fecha en formato dd-mm-yyyy
     return `${dia}/${mes}/${anio}`;
 }

  execute.QueryData(qry)
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const examen = data[0];
        let doc = new PDFDocument({ margin: 30, size: 'A4' });

          const fileName = `examen_${examen.tipo_examen}.pdf`;
          const stream = fs.createWriteStream(fileName);
          doc.pipe(stream);
          doc.image('./build/img/logo_laboratorio.jpg', 430, 15, {fit: [80, 80], align: 'center', valign: 'bottom'})
          doc.moveDown(6);   
          doc.fontSize(11).text(`Nombre: ${examen.nombre_paciente}`, { align: "left"});   
          doc.fontSize(11).text(`Fecha: ${formatearFechaANormal(examen.fecha)}`, { align: "left" });   
          doc.fontSize(11).text(`Tratante: ${examen.medico_tratante}`, { align: "left" });   
          doc.moveDown(2);
          doc.fontSize(18).font("Helvetica-Bold").text(`EXAMEN ${examen.tipo_examen}`, { align: "center" });
          doc.moveDown();
          doc.fontSize(11).text(`EXAMEN MACROSCÓPICO:`, { align: "center" });
          doc.moveDown();
        
        
         // table
         const tableMacroscopicoCopro = {
          //   title: {label: 'Titulo de prueba'},
          //   subtitle: "Sub titulo de la tabla",
            headers: [
              { label: "Color", property: 'color_heces', width: 60, renderer: null, headerColor: "#de0606", headerOpacity: 0.15 },
              { label: "Restos Alimenticios", property: 'restos_alimenticios', width: 150, renderer: null, headerColor: "#de0606", headerOpacity: 0.15 }, 
              { label: "Sangre", property: 'sangre', width: 100, renderer: null, headerColor: "#de0606", headerOpacity: 0.15 }, 
              { label: "Consistencia", property: 'consitencia', width: 100, renderer: null, headerColor: "#de0606", headerOpacity: 0.15 }, 
              { label: "Moco", property: 'moco', width: 80, renderer: null, headerColor: "#de0606", headerOpacity: 0.15 }, 
              { label: "PH", property: 'ph', width: 43, headerColor: "#de0606", headerOpacity: 0.15 },
            ],
            // complex data
            datas: [
              { 
                color_heces: `${examen.copro_macroscopio_color}`, 
                restos_alimenticios: `${examen.copro_macroscopio_restos_alimenticios}`, 
                sangre: `${examen.copro_macroscopio_sangre}`, 
                consitencia: `${examen.copro_macroscopio_consistencia}`, 
                moco: `${examen.copro_macroscopio_Moco}`, 
                ph: `${examen.copro_macroscopio_PH}`, 
              },
              { 
           
              },
              
            ],
            
          };
          // the magic
          doc.table(tableMacroscopicoCopro, {
            prepareHeader: () => doc.font("Helvetica").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
              doc.font("Helvetica-Bold").fontSize(8);
              indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
          });
  
          doc.moveDown(2);
          doc.fontSize(11).text(`EXAMEN QUIMICO:`, { align: "center" });
          doc.moveDown();
  
          const tableQuimicoCopro = {
              //   title: {label: 'Titulo de prueba'},
              //   subtitle: "Sub titulo de la tabla",
                headers: [
                  { label: "Leucocitos", property: 'leucocitos', width: 60, renderer: null, headerColor: "#64fd00", headerOpacity: 0.15 },
                  { label: "Celulas Vegetales", property: 'celulas_vegetales', width: 150, renderer: null, headerColor: "#64fd00", headerOpacity: 0.15 }, 
                  { label: "Almidones", property: 'almidones', width: 100, renderer: null, headerColor: "#64fd00", headerOpacity: 0.15 }, 
                  { label: "Levaduras", property: 'levaduras', width: 100, renderer: null, headerColor: "#64fd00", headerOpacity: 0.15 }, 
                  { label: "Huevo", property: 'huevo', width: 80, renderer: null, headerColor: "#64fd00", headerOpacity: 0.15 }, 
                  { label: "Quistes", property: 'quistes', width: 43, headerColor: "#64fd00", headerOpacity: 0.15 },
                ],
                // complex data
                datas: [
                  { 
                    leucocitos: `${examen.copro_quimico_leucocitos}`, 
                    celulas_vegetales: `${examen.copro_quimico_celulas_vegetales}`, 
                    almidones: `${examen.copro_quimico_almidones}`, 
                    levaduras: `${examen.copro_quimico_levaduras}`, 
                    huevo: `${examen.copro_quimico_huevo}`, 
                    quistes: `${examen.copro_quimico_quistes}`, 
                  },
                  { 
                 
                  },
                  
                ],
                // simeple data
  
              };
              // the magic
              doc.table(tableQuimicoCopro, {
                prepareHeader: () => doc.font("Helvetica").fontSize(8),
                prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                  doc.font("Helvetica-Bold").fontSize(8);
                  indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
                },
              });
  
              doc.moveDown(2);
              doc.fontSize(11).text(`EXAMEN MICROSCOPICO:`, { align: "center" });
              doc.moveDown();
  
  
              const tableMicroscopicoCopro = {
                  //   title: {label: 'Titulo de prueba'},
                  //   subtitle: "Sub titulo de la tabla",
                    headers: [
                      { label: "Eritrocitos", property: 'eritrocitos', width: 150, renderer: null, headerColor: "#053a91", headerOpacity: 0.15 },
                      { label: "Grasas", property: 'grasas', width: 150, renderer: null, headerColor: "#053a91", headerOpacity: 0.15 }, 
                      { label: "Jabón", property: 'jabon', width: 150, renderer: null, headerColor: "#053a91", headerOpacity: 0.15 }, 
                      { label: "Bacterias", property: 'bacterias', width: 80, renderer: null, headerColor: "#053a91", headerOpacity: 0.15 }, 
                    ],
                    // complex data
                    datas: [
                      { 
                        eritrocitos: `${examen.copro_microscopio_eritrocitos}`, 
                        grasas: `${examen.copro_microscopio_grasas}`, 
                        jabon: `${examen.copro_microscopio_jabon}`, 
                        bacterias: `${examen.copro_microscopio_bacterias}`, 
                      },
                      { 
                      
                      },
                      // {...},
                    ],
                    // simeple data
     
                  };
                  // the magic
                  doc.table(tableMicroscopicoCopro, {
                    prepareHeader: () => doc.font("Helvetica").fontSize(8),
                    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                      doc.font("Helvetica-Bold").fontSize(8);
                      indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
                    },
                  });
  
          // done!
          doc.end();
          stream.on('finish', () => {
                  res.download(fileName, () => {
                      fs.unlinkSync(fileName); 
                  });
              });
        
      } else {
        res.status(404).json({ error: "No se encontraron datos" });
      }
    })
    .catch(error => {
      console.error("Error al obtener los datos:", error);
      res.status(500).json({ error: "Error en la consulta" });
    });
});


app.use("/",router);

app.use("*",function(req,res){
  res.redirect('/');
});





http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});



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

// Busqueda de pacientes con filtro
app.post('/busquedaDePacientes', function (req, res) {

  const {dpi, nombre, fecha_nacimiento, empresa} = req.body;

  let qry = `
      SELECT * FROM PACIENTES
        WHERE nombre LIKE '%${dpi}%'
        AND (NO_DPI LIKE '%${nombre}%')
        AND (FECHA_NACIMIENTO LIKE '%${fecha_nacimiento}%')
        AND (EMPRESA_ID LIKE '%${empresa}%');
      ';
  `;

  execute.Query(res, qry);

})

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
})

// Insertar datos de examen enfermedades infecciosas
app.post("/insert_enfermedades_infecciosas", (req, res) => {
  const { tipo_examen, paciente_id, importe, medico_tratante, fecha, anio, mes, enfermedades_infecciosas_analisis, enfermedades_infecciosas_resultados, enfermedades_infecciosas_valor_referencia } = req.body;

  let qry = `
    INSERT INTO EXAMENES
    (TIPO_EXAMEN, PACIENTE_ID, IMPORTE, MEDICO_TRATANTE, FECHA, ANIO, MES, ENFERMEDADES_INFECCIOSAS_ANALISIS, ENFERMEDADES_INFECCIOSAS_RESULTADOS, ENFERMEDADES_INFECCIOSAS_VALOR_REFERENCIA)
      VALUES
      ('${tipo_examen}', ${paciente_id}, ${importe}, '${medico_tratante}', '${fecha}', '${anio}', '${mes}', '${enfermedades_infecciosas_analisis}', '${enfermedades_infecciosas_resultados}', '${enfermedades_infecciosas_valor_referencia}')
  `;

  execute.Query(res, qry);
  console.log(qry);
})

app.post("/insert_examenes_bacteriologicos", (req, res) => {
  const { tipo_examen, paciente_id, importe, medico_tratante, fecha, anio, mes, examenes_bacteriologicos_analisis, examenes_bacteriologicos_resultado, examenes_bacteriologicos_valor_de_referencia } = req.body;

  let qry = `
    INSERT INTO EXAMENES
    (TIPO_EXAMEN, PACIENTE_ID, IMPORTE, MEDICO_TRATANTE, FECHA, ANIO, MES, EXAMENES_BACTERIOLOGICOS_ANALISIS, EXAMENES_BACTERIOLOGICOS_RESULTADO, EXAMENES_BACTERIOLOGICOS_VALOR_DE_REFERENCIA)
      VALUES
      ('${tipo_examen}', ${paciente_id}, ${importe}, '${medico_tratante}', '${fecha}', '${anio}', '${mes}', '${examenes_bacteriologicos_analisis}', '${examenes_bacteriologicos_resultado}', '${examenes_bacteriologicos_valor_de_referencia}')
  `;
  execute.Query(res, qry);
})

app.post("/insert_examen_pruebas_especiales", (req, res) => {
  const { tipo_examen, paciente_id, importe, medico_tratante, fecha, anio, mes, pruebas_especiales_examen_resultado, pruebas_especiales_resultado, pruebas_especiales_valor_de_referencia } = req.body;

  let qry = `
    INSERT INTO EXAMENES
    (TIPO_EXAMEN, PACIENTE_ID, IMPORTE, MEDICO_TRATANTE, FECHA, ANIO, MES, PRUEBAS_ESPECIALES_EXAMEN_RESULTADO, PRUEBAS_ESPECIALES_RESULTADO, PRUEBAS_ESPECIALES_VALOR_DE_REFERENCIA)
      VALUES
    ('${tipo_examen}', ${paciente_id}, ${importe}, '${medico_tratante}', '${fecha}', '${anio}', '${mes}', '${pruebas_especiales_examen_resultado}', '${pruebas_especiales_resultado}', '${pruebas_especiales_valor_de_referencia}')
  `;

  execute.Query(res, qry);
  console.log(qry);

})

// Insertar datos de examenes hemoglobina glicosilada
app.post("/insert_examenes_hemoglobina_glicosilada", (req, res) => {
  const { tipo_examen, paciente_id, importe, medico_tratante, fecha, anio, mes, hemoglobina_inmunologia_examen, hemoglobina_inmunologia_resultado, hemoglobina_inmunologia_valor_normal, hemoglobina_inmunologia_prueba_de_hba1c, hemoglobina_inmunologia_promedio_de_glicemia, hemoglobina_inmunologia_calificacion } = req.body;

  let qry = `
    INSERT INTO EXAMENES
    (TIPO_EXAMEN, PACIENTE_ID, IMPORTE, MEDICO_TRATANTE, FECHA, ANIO, MES, HEMOGLOBINA_INMUNOLOGIA_EXAMEN, HEMOGLOBINA_INMUNOLOGIA_RESULTADO, HEMOGLOBINA_INMUNOLOGIA_VALOR_NORMAL, HEMOGLOBINA_INMUNOLOGIA_PRUEBA_DE_HBA1C, HEMOGLOBINA_INMUNOLOGIA_PROMEDIO_DE_GLICEMIA, HEMOGLOBINA_INMUNOLOGIA_CALIFICACION)
      VALUES
    ('${tipo_examen}', ${paciente_id}, ${importe}, '${medico_tratante}', '${fecha}', '${anio}', '${mes}', '${hemoglobina_inmunologia_examen}', '${hemoglobina_inmunologia_resultado}', '${hemoglobina_inmunologia_valor_normal}', '${hemoglobina_inmunologia_prueba_de_hba1c}', '${hemoglobina_inmunologia_promedio_de_glicemia}', '${hemoglobina_inmunologia_calificacion}')
  `;

  execute.Query(res, qry);
})

// Insertar datos examenes hcg cauntitativa
app.post("/insert_examenes_hcg_cuantitativa", (req, res) => {
  const { tipo_examen, paciente_id, importe, medico_tratante, fecha, anio, mes, hcg_cuantitativa_analisis, hcg_cuantitativa_resultado, hcg_cuantitativa_valores_de_referencia } = req.body;

  let qry = `
    INSERT INTO EXAMENES
    (TIPO_EXAMEN, PACIENTE_ID, IMPORTE, MEDICO_TRATANTE, FECHA, ANIO, MES, 
    HCG_CUANTITATIVA_ANALISIS, HCG_CUANTITATIVA_RESULTADO, HCG_CUANTITATIVA_VALORES_DE_REFERENCIA)
      VALUES
    ('${tipo_examen}', ${paciente_id}, ${importe}, '${medico_tratante}', '${fecha}','${anio}','${mes}','${hcg_cuantitativa_analisis}','${hcg_cuantitativa_resultado}','${hcg_cuantitativa_valores_de_referencia}')
  `;
  execute.Query(res, qry);
  console.log(qry);
})

// Insertar datos examenes quimica sanguinea
app.post("/insert_examen_quimica_sanguinea", (req, res) => {
  const { tipo_examen, paciente_id, importe, medico_tratante, fecha, anio, mes, quimica_sanguinea_examen, quimica_sanguinea_resultado, quimica_sanguinea_valor_normal } = req.body;

  let qry = `
    INSERT INTO EXAMENES
    (TIPO_EXAMEN, PACIENTE_ID, IMPORTE, MEDICO_TRATANTE, FECHA, ANIO, MES, 
    QUIMICA_SANGUINEA_EXAMEN, QUIMICA_SANGUINEA_RESULTADO, QUIMICA_SANGUINEA_VALOR_NORMAL)
      VALUES
    ('${tipo_examen}', ${paciente_id}, ${importe}, '${medico_tratante}', '${fecha}','${anio}','${mes}','${quimica_sanguinea_examen}','${quimica_sanguinea_resultado}','${quimica_sanguinea_valor_normal}')
  `;
  execute.Query(res, qry);
  console.log(qry);
})

app.post("/insert_examen_resultados_varios", (req, res) => {
  const { tipo_examen, paciente_id, importe, medico_tratante, fecha, anio, mes, resultados_varios_examen, resultados_varios_resultado, resultados_varios_valor_normal, resultados_varios_grupo_sanguineo_analisis, resultados_varios_grupo_sanguineo_rh, resultados_varios_inmunoserologia_examen_widal, resultados_varios_inmunoserologia_resultado, resultados_varios_inmunoserologia_valor_normal, resultados_varios_dengue_analisis, resultados_varios_dengue_resultado, resultados_varios_dengue_valor_normal } = req.body;

  let qry = `
    INSERT INTO EXAMENES
      (TIPO_EXAMEN, PACIENTE_ID, IMPORTE, MEDICO_TRATANTE, FECHA, ANIO, MES,
      RESULTADOS_VARIOS_EXAMEN, RESULTADOS_VARIOS_RESULTADO, RESULTADOS_VARIOS_VALOR_NORMAL, RESULTADOS_VARIOS_GRUPO_SANGUINEO_ANALISIS, RESULTADOS_VARIOS_GRUPO_SANGUINEO_RH, RESULTADOS_VARIOS_INMUNOSEROLOGIA_EXAMEN_WIDAL, RESULTADOS_VARIOS_INMUNOSEROLOGIA_RESULTADO, RESULTADOS_VARIOS_INMUNOSEROLOGIA_VALOR_NORMAL, RESULTADOS_VARIOS_DENGUE_ANALISIS, RESULTADOS_VARIOS_DENGUE_RESULTADO, RESULTADOS_VARIOS_DENGUE_VALOR_NORMAL)
      VALUES
      ('${tipo_examen}', ${paciente_id}, ${importe}, '${medico_tratante}', '${fecha}', '${anio}', '${mes}', '${resultados_varios_examen}', '${resultados_varios_resultado}', '${resultados_varios_valor_normal}', '${resultados_varios_grupo_sanguineo_analisis}', '${resultados_varios_grupo_sanguineo_rh}', '${resultados_varios_inmunoserologia_examen_widal}', '${resultados_varios_inmunoserologia_resultado}', '${resultados_varios_inmunoserologia_valor_normal}', '${resultados_varios_dengue_analisis}', '${resultados_varios_dengue_resultado}', '${resultados_varios_dengue_valor_normal}')
  `;
  execute.Query(res, qry);

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

})

// Obtener total de examenes
app.post("/obtenerTotalDeExamenes", (req, res) => {
  const { fechaInicial, fechaFinal } = req.body;

  // let qry = `
  //   SELECT EXAMENES.*, COUNT(*) AS total_examen
  //   FROM EXAMENES
  //   WHERE (tipo_examen LIKE '%${tipo}%')
  //   AND (st = 1)
  //   GROUP BY EXAMENES.id
  // `;

  let qry = `
    SELECT tipo_examen, importe, COUNT(*) AS total_examenes, SUM(importe) AS importe FROM examenes WHERE (FECHA BETWEEN '${fechaInicial}' AND '${fechaFinal}')
    AND (st = 1)
    GROUP BY tipo_examen, importe
  `;

  execute.Query(res, qry);

  console.log(qry);

})

// Obtener datos del examen para dibujar pdf
app.post("/datos_examenes_para_pdf", (req, res) => {
  const { id } = req.body;

  let qry = `
    SELECT EXAMENES.*, PACIENTES.nombre AS nombre_paciente 
    FROM EXAMENES
    INNER JOIN PACIENTES ON EXAMENES.paciente_id = PACIENTES.id
    WHERE EXAMENES.id = ${id}
  `;

  function formatearFechaANormal(fechaISO) {
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  }

  execute.QueryData(qry)
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const examen = data[0];
        let doc = new PDFDocument({ margin: 30, size: 'A4' });
        console.log(examen);

        const fileName = `examen_${examen.tipo_examen}.pdf`;
        const stream = fs.createWriteStream(fileName);
        doc.pipe(stream);

        doc.image('./build/img/logo_laboratorio.jpg', 430, 15, { fit: [80, 80], align: 'center', valign: 'bottom' });
        doc.moveDown(6);
        doc.fontSize(11).text(`Nombre: ${examen.nombre_paciente || 'No especificado'}`, { align: "left" });
        doc.fontSize(11).text(`Fecha: ${formatearFechaANormal(examen.fecha) || 'No especificado'}`, { align: "left" });
        doc.fontSize(11).text(`Tratante: ${examen.medico_tratante || 'No especificado'}`, { align: "left" });
        doc.fontSize(11).text(`Importe: Q. ${examen.importe || 'No especificado'}`, { align: "left" });
        doc.moveDown(2);
        doc.moveDown(2);
        doc.fontSize(18).font("Helvetica-Bold").text(`EXAMEN ${examen.tipo_examen}`, { align: "center" });
        doc.moveDown();

        if (examen.tipo_examen === 'COPROLOGÍA') {
          // Tabla Macroscópico Copro
          doc.fontSize(11).text("EXAMEN MACROSCÓPICO:", { align: "center" });
          doc.moveDown();

          const tableMacroscopicoCopro = {
            headers: [
              { label: "Color", property: 'color_heces', width: 60, headerColor: "#de0606", headerOpacity: 0.15 },
              { label: "Restos Alimenticios", property: 'restos_alimenticios', width: 150, headerColor: "#de0606", headerOpacity: 0.15 },
              { label: "Sangre", property: 'sangre', width: 100, headerColor: "#de0606", headerOpacity: 0.15 },
              { label: "Consistencia", property: 'consitencia', width: 100, headerColor: "#de0606", headerOpacity: 0.15 },
              { label: "Moco", property: 'moco', width: 80, headerColor: "#de0606", headerOpacity: 0.15 },
              { label: "PH", property: 'ph', width: 43, headerColor: "#de0606", headerOpacity: 0.15 },
            ],
            datas: [
              {
                color_heces: examen.copro_macroscopio_color || 'No especificado',
                restos_alimenticios: examen.copro_macroscopio_restos_alimenticios || 'No especificado',
                sangre: examen.copro_macroscopio_sangre || 'No especificado',
                consitencia: examen.copro_macroscopio_consistencia || 'No especificado',
                moco: examen.copro_macroscopio_Moco || 'No especificado',
                ph: examen.copro_macroscopio_PH || 'No especificado',
              },
            ],
          };

          doc.table(tableMacroscopicoCopro, {
            prepareHeader: () => doc.font("Helvetica").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
              doc.font("Helvetica-Bold").fontSize(8);
              indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
          });

          // Tabla Químico Copro
          doc.moveDown(2);
          doc.fontSize(11).text("EXAMEN QUIMICO:", { align: "center" });
          doc.moveDown();

          const tableQuimicoCopro = {
            headers: [
              { label: "Leucocitos", property: 'leucocitos', width: 60, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Celulas Vegetales", property: 'celulas_vegetales', width: 150, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Almidones", property: 'almidones', width: 100, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Levaduras", property: 'levaduras', width: 100, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Huevo", property: 'huevo', width: 80, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Quistes", property: 'quistes', width: 43, headerColor: "#64fd00", headerOpacity: 0.15 },
            ],
            datas: [
              {
                leucocitos: examen.copro_quimico_leucocitos || 'No especificado',
                celulas_vegetales: examen.copro_quimico_celulas_vegetales || 'No especificado',
                almidones: examen.copro_quimico_almidones || 'No especificado',
                levaduras: examen.copro_quimico_levaduras || 'No especificado',
                huevo: examen.copro_quimico_huevo || 'No especificado',
                quistes: examen.copro_quimico_quistes || 'No especificado',
              },
            ],
          };

          doc.table(tableQuimicoCopro, {
            prepareHeader: () => doc.font("Helvetica").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
              doc.font("Helvetica-Bold").fontSize(8);
              indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
          });

          // Tabla Microscópico Copro
          doc.moveDown(2);
          doc.fontSize(11).text("EXAMEN MICROSCOPICO:", { align: "center" });
          doc.moveDown();

          const tableMicroscopicoCopro = {
            headers: [
              { label: "Eritrocitos", property: 'eritrocitos', width: 150, headerColor: "#053a91", headerOpacity: 0.15 },
              { label: "Grasas", property: 'grasas', width: 150, headerColor: "#053a91", headerOpacity: 0.15 },
              { label: "Jabón", property: 'jabon', width: 150, headerColor: "#053a91", headerOpacity: 0.15 },
              { label: "Bacterias", property: 'bacterias', width: 80, headerColor: "#053a91", headerOpacity: 0.15 },
            ],
            datas: [
              {
                eritrocitos: examen.copro_microscopio_eritrocitos || 'No especificado',
                grasas: examen.copro_microscopio_grasas || 'No especificado',
                jabon: examen.copro_microscopio_jabon || 'No especificado',
                bacterias: examen.copro_microscopio_bacterias || 'No especificado',
              },
            ],
          };

          doc.table(tableMicroscopicoCopro, {
            prepareHeader: () => doc.font("Helvetica").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
              doc.font("Helvetica-Bold").fontSize(8);
              indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
          });

        } else if (examen.tipo_examen === 'UROLOGIA') {
          // Tabla Macroscópico Uro
          doc.fontSize(11).text("EXAMEN MACROSCÓPICO:", { align: "center" });
          doc.moveDown();

          const tableMacroscopicoUro = {
            headers: [
              { label: "Color", property: 'color', width: 60, headerColor: "#de0606", headerOpacity: 0.15 },
              { label: "Aspecto", property: 'aspecto', width: 150, headerColor: "#de0606", headerOpacity: 0.15 },
              { label: "Densidad", property: 'densidad', width: 100, headerColor: "#de0606", headerOpacity: 0.15 },
              { label: "PH", property: 'ph', width: 100, headerColor: "#de0606", headerOpacity: 0.15 },
            ],
            datas: [
              {
                color: examen.uro_macro_color || 'No especificado',
                aspecto: examen.uro_macro_aspecto || 'No especificado',
                densidad: examen.uro_macro_densidad || 'No especificado',
                ph: examen.uro_macro_ph || 'No especificado',
              },
            ],
          };

          doc.table(tableMacroscopicoUro, {
            prepareHeader: () => doc.font("Helvetica").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
              doc.font("Helvetica-Bold").fontSize(8);
              indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
          });

          // Tabla Químico Uro
          doc.moveDown(2);
          doc.fontSize(11).text("EXAMEN QUIMICO:", { align: "center" });
          doc.moveDown();

          const tableQuimicoUro = {
            headers: [
              { label: "Leucocitos", property: 'leucocitos', width: 60, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Glucosa", property: 'glucosa', width: 60, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Proteinas", property: 'proteinas', width: 60, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Cetonas", property: 'cetonas', width: 60, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Hemoglobina", property: 'hemoglobina', width: 60, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Urobilinogeno", property: 'urobilinogeno', width: 45, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Nitritos", property: 'nitritos', width: 45, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Acido Ascórbico", property: 'acido_ascorbico', width: 45, headerColor: "#64fd00", headerOpacity: 0.15 },
              { label: "Bilirrubina", property: 'bilirrubina', width: 45, headerColor: "#64fd00", headerOpacity: 0.15 },
            ],
            datas: [
              {
                leucocitos: examen.uro_quimico_leucocitos || 'No especificado',
                glucosa: examen.uro_quimico_glucosa || 'No especificado',
                proteinas: examen.uro_quimico_proteinas || 'No especificado',
                cetonas: examen.uro_quimico_cetonas || 'No especificado',
                hemoglobina: examen.uro_quimico_hemoglobina || 'No especificado',
                urobilinogeno: examen.uro_quimico_urobilinogeno || 'No especificado',
                nitritos: examen.uro_quimico_nitritos || 'No especificado',
                acido_ascorbico: examen.uro_quimico_acido_ascorbico || 'No especificado',
                bilirrubina: examen.uro_quimico_bilirrubina || 'No especificado',
              },
            ],
          };

          doc.table(tableQuimicoUro, {
            prepareHeader: () => doc.font("Helvetica").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
              doc.font("Helvetica-Bold").fontSize(8);
              indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
          });

          // Tabla Microscópico Uro
          doc.moveDown(2);
          doc.fontSize(11).text("EXAMEN MICROSCOPICO:", { align: "center" });
          doc.moveDown();

          const tableMicroscopicoUro = {
            headers: [
              { label: "Leucocitos", property: 'leucocitos', width: 60, headerColor: "#053a91", headerOpacity: 0.15 },
              { label: "Eritrocitos", property: 'eritrocitos', width: 60, headerColor: "#053a91", headerOpacity: 0.15 },
              { label: "Células Epiteliales", property: 'c_epiteliales', width: 60, headerColor: "#053a91", headerOpacity: 0.15 },
              { label: "Bacterias", property: 'bacterias', width: 60, headerColor: "#053a91", headerOpacity: 0.15 },
              { label: "Cristales", property: 'cristales', width: 60, headerColor: "#053a91", headerOpacity: 0.15 },
              { label: "Cilindros", property: 'cilindros', width: 60, headerColor: "#053a91", headerOpacity: 0.15 },
              { label: "Otros", property: 'otros', width: 60, headerColor: "#053a91", headerOpacity: 0.15 },
            ],
            datas: [
              {
                leucocitos: examen.uro_micro_leucocitos || 'No especificado',
                eritrocitos: examen.uro_micro_eritocitos || 'No especificado',
                c_epiteliales: examen.uro_micro_c_epiteliales || 'No especificado',
                bacterias: examen.uro_micro_bacterias || 'No especificado',
                cristales: examen.uro_micro_cristales || 'No especificado',
                cilindros: examen.uro_micro_cilindros || 'No especificado',
                otros: examen.uro_micro_otros || 'No especificado',
              },
            ],
          };

          doc.table(tableMicroscopicoUro, {
            prepareHeader: () => doc.font("Helvetica").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
              doc.font("Helvetica-Bold").fontSize(8);
              indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
          });
        } else if (examen.tipo_examen === 'ENFERMEDADES INFECCIOSAS') {
      
          // Tabla de resultados
          const tableResultados = {
              headers: [
                  { label: "ANÁLISIS", property: 'analisis', width: 200, headerColor: "#de0606", headerOpacity: 0.15 },
                  { label: "RESULTADO", property: 'resultado', width: 150, headerColor: "#de0606", headerOpacity: 0.15 },
                  { label: "VALOR REFERENCIA", property: 'valor_referencia', width: 150, headerColor: "#de0606", headerOpacity: 0.15 }
              ],
              datas: [
                  {
                      analisis: examen.enfermedades_infecciosas_analisis || 'No especificado',
                      resultado: examen.enfermedades_infecciosas_resultados || 'No especificado',
                      valor_referencia: examen.enfermedades_infecciosas_valor_referencia || 'No especificado',
                  }
              ]
          };
      
          doc.table(tableResultados, {
              prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
              prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                doc.font("Helvetica-Bold").fontSize(8);
                indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
              },
          });
      } else if (examen.tipo_examen === 'EXAMENES BACTERIOLOGICOS') {
      
        // Tabla de resultados
        const tableResultados = {
            headers: [
                { label: "ANÁLISIS", property: 'analisis_bacteriologico', width: 200, headerColor: "#de0606", headerOpacity: 0.15 },
                { label: "RESULTADO", property: 'resultado_bacteriologico', width: 150, headerColor: "#de0606", headerOpacity: 0.15 },
                { label: "VALOR REFERENCIA", property: 'valor_referencia_bacteriologico', width: 150, headerColor: "#de0606", headerOpacity: 0.15 }
            ],
            datas: [
                {
                    analisis_bacteriologico: examen.examenes_bacteriologicos_analisis || 'No especificado',
                    resultado_bacteriologico: examen.examenes_bacteriologicos_resultado || 'No especificado',
                    valor_referencia_bacteriologico: examen.examenes_bacteriologicos_valor_de_referencia || 'No especificado',
                }
            ]
        };
    
        doc.table(tableResultados, {
            prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
              doc.font("Helvetica-Bold").fontSize(8);
              indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
        });

    } else if (examen.tipo_examen == 'HEMOGLOBINA GLICOSILADA') {
      doc.fontSize(11).text("INMUNOLOGIA:", { align: "center" });
      doc.moveDown();

      const tableHemoglobinaGlicosilada = {
        headers: [
          { label: "EXAMEN", property: 'examen_hm', width: 80, headerColor: "#64fd00", headerOpacity: 0.15 },
          { label: "RESULTADO", property: 'resultado_hm', width: 100, headerColor: "#64fd00", headerOpacity: 0.15 },
          { label: "VALOR NORMAL", property: 'valor_normal_hm', width: 100, headerColor: "#64fd00", headerOpacity: 0.15 },
          { label: "PRUEBA DE HBA1C EN %", property: 'prueba_de_hba1c_hm', width: 100, headerColor: "#64fd00", headerOpacity: 0.15 },
          { label: "PROMEDIO DE GLICEMIA EN MG/DL", property: 'promedio_de_glicemia_hm', width: 80, headerColor: "#64fd00", headerOpacity: 0.15 },
          { label: "CALIFICACION", property: 'califcacion_hm', width: 60, headerColor: "#64fd00", headerOpacity: 0.15 },
        ],
        datas: [
          {
            examen_hm: examen.hemoglobina_inmunologia_examen || 'No especificado',
            resultado_hm: examen.hemoglobina_inmunologia_resultado || 'No especificado',
            valor_normal_hm: examen.hemoglobina_inmunologia_valor_normal || 'No especificado',
            prueba_de_hba1c_hm: examen.hemoglobina_inmunologia_prueba_de_hba1c || 'No especificado',
            promedio_de_glicemia_hm: examen.hemoglobina_inmunologia_promedio_de_glicemia || 'No especificado',
            califcacion_hm: examen.hemoglobina_inmunologia_calificacion || 'No especificado',
          },
        ],
      };

      doc.table(tableHemoglobinaGlicosilada, {
        prepareHeader: () => doc.font("Helvetica").fontSize(8),
        prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
          doc.font("Helvetica-Bold").fontSize(8);
          indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
        },
      });
    } else if (examen.tipo_examen === 'EXAMENES BACTERIOLOGICOS') {
      
        // Tabla de resultados
        const tableResultados = {
            headers: [
                { label: "ANÁLISIS", property: 'analisis_bacteriologico', width: 200, headerColor: "#de0606", headerOpacity: 0.15 },
                { label: "RESULTADO", property: 'resultado_bacteriologico', width: 150, headerColor: "#de0606", headerOpacity: 0.15 },
                { label: "VALOR REFERENCIA", property: 'valor_referencia_bacteriologico', width: 150, headerColor: "#de0606", headerOpacity: 0.15 }
            ],
            datas: [
                {
                    analisis_bacteriologico: examen.examenes_bacteriologicos_analisis || 'No especificado',
                    resultado_bacteriologico: examen.examenes_bacteriologicos_resultado || 'No especificado',
                    valor_referencia_bacteriologico: examen.examenes_bacteriologicos_valor_de_referencia || 'No especificado',
                }
            ]
        };
    
        doc.table(tableResultados, {
            prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
              doc.font("Helvetica-Bold").fontSize(8);
              indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
            },
        });
    } else if (examen.tipo_examen === 'HCG CUALITATIVA') {

       // Tabla de resultados
       const tableResultadosHCG = {
        headers: [
            { label: "EXAMEN RESULTADO", property: 'examen_resultado_hcg', width: 200, headerColor: "#de0606", headerOpacity: 0.15 },
            { label: "RESULTADO", property: 'resultado_hcg', width: 150, headerColor: "#de0606", headerOpacity: 0.15 },
            { label: "VALOR REFERENCIA", property: 'valor_referencia_hcg', width: 150, headerColor: "#de0606", headerOpacity: 0.15 }
        ],
        datas: [
            {
                examen_resultado_hcg: examen.pruebas_especiales_examen_resultado || 'No especificado',
                resultado_hcg: examen.pruebas_especiales_resultado || 'No especificado',
                valor_referencia_hcg: examen.pruebas_especiales_valor_de_referencia || 'No especificado',
            }
        ]
    };

    doc.table(tableResultadosHCG, {
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
        prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
          doc.font("Helvetica-Bold").fontSize(8);
          indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
        },
    });
    } else if (examen.tipo_examen === 'HCG CUANTITATIVA') {

        // Tabla de resultados
        const tableResultadosHCG = {
        headers: [
            { label: "ANALISIS", property: 'analisis_hcg_cuantitativa', width: 200, headerColor: "#de0606", headerOpacity: 0.15 },
            { label: "RESULTADO", property: 'resultado_hcg_cuantitativa', width: 150, headerColor: "#de0606", headerOpacity: 0.15 },
            { label: "VALOR REFERENCIA", property: 'valor_referencia_hcg_cuantitativa', width: 150, headerColor: "#de0606", headerOpacity: 0.15 }
        ],
        datas: [
            {
                analisis_hcg_cuantitativa: examen.hcg_cuantitativa_analisis || 'No especificado',
                resultado_hcg_cuantitativa: examen.hcg_cuantitativa_resultado || 'No especificado',
                valor_referencia_hcg_cuantitativa: examen.hcg_cuantitativa_valores_de_referencia || 'No especificado',
            }
        ]
    };

    doc.table(tableResultadosHCG, {
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
        prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
          doc.font("Helvetica-Bold").fontSize(8);
          indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
        },
    });
    } else if (examen.tipo_examen === 'QUIMICA SANGUINEA') {

      // Tabla de resultados
      const tableResultadosHCG = {
      headers: [
          { label: "EXAMEN", property: 'examen_quimica', width: 200, headerColor: "#de0606", headerOpacity: 0.15 },
          { label: "RESULTADO", property: 'resultado_quimica', width: 150, headerColor: "#de0606", headerOpacity: 0.15 },
          { label: "VALOR NORMAL", property: 'valor_normal_quimica', width: 150, headerColor: "#de0606", headerOpacity: 0.15 }
      ],
      datas: [
          {
              examen_quimica: examen.quimica_sanguinea_examen || 'No especificado',
              resultado_quimica: examen.quimica_sanguinea_resultado || 'No especificado',
              valor_normal_quimica: examen.quimica_sanguinea_valor_normal || 'No especificado',
          }
      ]
  };

  doc.table(tableResultadosHCG, {
      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
        doc.font("Helvetica-Bold").fontSize(8);
        indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
      },
  });
  } else if (examen.tipo_examen === 'RESULTADOS VARIOS') {

    doc.fontSize(11).text("RESULTADOS VARIOS:", { align: "center" });
    doc.moveDown();
    const tableResultadosVarios = {
      headers: [
        { label: "EXAMEN", property: 'examen_resultados_varios', width: 180, headerColor: "#de0606", headerOpacity: 0.15 },
        { label: "RESULTADOS", property: 'resultados_de_resultados_varios', width: 180, headerColor: "#de0606", headerOpacity: 0.15 },
        { label: "VALOR NORMAL", property: 'valor_normal_resultados_varios', width: 180, headerColor: "#de0606", headerOpacity: 0.15 },
      ],
      datas: [
        {
          examen_resultados_varios: examen.resultados_varios_examen || 'No especificado',
          resultados_de_resultados_varios: examen.resultados_varios_resultado || 'No especificado',
          valor_normal_resultados_varios: examen.resultados_varios_valor_normal || 'No especificado',
        },
      ],
    };

    doc.table(tableResultadosVarios, {
      prepareHeader: () => doc.font("Helvetica").fontSize(8),
      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
        doc.font("Helvetica-Bold").fontSize(8);
        indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
      },
    });

   
    doc.moveDown(2);
    doc.fontSize(11).text("GRUPO SANGUINEO:", { align: "center" });
    doc.moveDown();

    const tableGrupoSanguineo = {
      headers: [
        { label: "ANALISIS", property: 'analisis_grupo_sanguineo', width: 250, headerColor: "#64fd00", headerOpacity: 0.15 },
        { label: "RH", property: 'rh_grupo_sanguineo', width: 250, headerColor: "#64fd00", headerOpacity: 0.15 },
      ],
      datas: [
        {
          analisis_grupo_sanguineo: examen.resultados_varios_grupo_sanguineo_analisis || 'No especificado',
          rh_grupo_sanguineo: examen.resultados_varios_grupo_sanguineo_rh || 'No especificado',
        },
      ],
    };

    doc.table(tableGrupoSanguineo, {
      prepareHeader: () => doc.font("Helvetica").fontSize(8),
      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
        doc.font("Helvetica-Bold").fontSize(8);
        indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
      },
    });

    
    doc.moveDown(2);
    doc.fontSize(11).text("INMUNOSEROLOGIA", { align: "center" });
    doc.moveDown();

    const tableInmunoserologia = {
      headers: [
        { label: "EXAMEN WIDAL", property: 'examen_widal_inmunoserologia', width: 180, headerColor: "#053a91", headerOpacity: 0.15 },
        { label: "RESULTADO", property: 'resultado_inmunoserologia', width: 180, headerColor: "#053a91", headerOpacity: 0.15 },
        { label: "VALOR NORMAL", property: 'valor_normal_inmunoserologia', width: 180, headerColor: "#053a91", headerOpacity: 0.15 },
      ],
      datas: [
        {
          examen_widal_inmunoserologia: examen.resultados_varios_inmunoserologia_examen_widal || 'No especificado',
          resultado_inmunoserologia: examen.resultados_varios_inmunoserologia_resultado || 'No especificado',
          valor_normal_inmunoserologia: examen.resultados_varios_inmunoserologia_valor_normal || 'No especificado',
        },
      ],
    };

    doc.table(tableInmunoserologia, {
      prepareHeader: () => doc.font("Helvetica").fontSize(8),
      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
        doc.font("Helvetica-Bold").fontSize(8);
        indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
      },
    });

    doc.moveDown(2);
    doc.fontSize(11).text("DENGUE", { align: "center" });
    doc.moveDown();

    const tableDengue = {
      headers: [
        { label: "ANALISIS", property: 'analisis_dengue', width: 180, headerColor: "#053a91", headerOpacity: 0.15 },
        { label: "RESULTADO", property: 'resultado_dengue', width: 180, headerColor: "#053a91", headerOpacity: 0.15 },
        { label: "VALOR NORMAL", property: 'valor_normal_dengue', width: 180, headerColor: "#053a91", headerOpacity: 0.15 },
      ],
      datas: [
        {
          analisis_dengue: examen.resultados_varios_dengue_analisis || 'No especificado',
          resultado_dengue: examen.resultados_varios_dengue_resultado || 'No especificado',
          valor_normal_dengue: examen.resultados_varios_dengue_valor_normal || 'No especificado',
        },
      ],
    };

    doc.table(tableDengue, {
      prepareHeader: () => doc.font("Helvetica").fontSize(8),
      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
        doc.font("Helvetica-Bold").fontSize(8);
        indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
      },
    });

  }

        // Finalizar el PDF
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


function getView() {
  let view = {
    body: () => {
      return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `;
    },
    vista_listado: () => {
      return `
            <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-md-6 text-center mt-2">
                                <h3 class="text-center mt-5">ARCHIVO</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row mt-3 mb-3 d-flex justify-content-between">
                                    <div class="col-12 col-md-6">
                                        <label class="form-label mb-0 text-white">TIPO:</label>
                                        <select class="form-control negrita" id="txtSelectTipo">
                                            <option value="COPROLOGIA">COPROLOGIA</option>
                                            <option value="UROLOGIA">UROLOGIA</option>
                                            <option value="ENFERMEDADES INFECCIOSAS">EXAMENES INFECCIOSOS</option>
                                            <option value="EXAMENES BACTERIOLOGICOS">EXAMENES BACTERIOLOGICOS</option>
                                            <option value="HEMOGLOBINA GLICOSILADA">HEMOGLOBINA GLICOSILADA</option>
                                            <option value="HCG CUALITATIVA">HGC CUALITATIVA</option>
                                            <option value="HCG CUANTITATIVA">HGC CUANTITATIVA</option>
                                            <option value="QUIMICA SANGUINEA">QUIMICA SANGUINEA</option>
                                            <option value="RESULTADOS VARIOS">RESULTADOS VARIOS</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-3">
                                        <label class="form-label mb-0 text-white">MES:</label>
                                        <select class="form-control negrita" id="txtSelectMes">
                                            <option value='1'>Enero</option>
                                            <option value='2'>Febrero</option>
                                            <option value='3'>Marzo</option>
                                            <option value='4'>Abril</option>
                                            <option value='5'>Mayo</option>
                                            <option value='6'>Junio</option>
                                            <option value='7'>Julio</option>
                                            <option value='8'>Agosto</option>
                                            <option value='9'>Septiembre</option>
                                            <option value='10'>Octubre</option>
                                            <option value='11'>Noviembre</option>
                                            <option value='12'>Diciembre</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-3">
                                        <label class="form-label mb-0 text-white">AÑO:</label>
                                        <select class="form-control negrita" id="txtSelectAnio">
                                            <option value='2025'>2025</option>
                                            <option value='2026'>2026</option>
                                            <option value='2027'>2027</option>
                                            <option value='2028'>2028</option>
                                            <option value='2029'>2029</option>
                                            <option value='2030'>2030</option>
                                            <option value='2031'>2031</option>
                                            <option value='2032'>2032</option>
                                            <option value='2033'>2033</option>
                                            <option value='2034'>2034</option>
                                            <option value='2035'>2035</option>
                                            <option value='2036'>2036</option>
                                            <option value='2037'>2037</option>
                                            <option value='2038'>2038</option>
                                            <option value='2039'>2039</option>
                                            <option value='2040'>2040</option>
                                            <option value='2041'>2041</option>
                                            <option value='2042'>2042</option>
                                            <option value='2043'>2043</option>
                                            <option value='2044'>2044</option>
                                            <option value='2045'>2045</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="table-responsive ">
                                    <table class="table">
                                        <thead class="thead-primary text-white">
                                            <tr>
                                                <td>FECHA</td>
                                                <td>NOMBRE</td>
                                                <td>IMPORTE</td>
                                                <td></td>
                                            </tr>
                                            </thead>
                                            <tbody id="tblDeExamenes">
                                            </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l  hand shadow" onclick="Navegar.laboratorista()">
                        <i class="fal fa-arrow-left"></i>
                    </button>
            `;
    },
    vista_modal_editar_examen: () => {
      return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_editar_examenes">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <hr class="solid">
                                        <div class="negrita text-secondary" id="lbStatusDatos"></div>

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPIUpdate"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePacienteUpdate"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita" id="txtFechaNacimientoUpdate" />
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control" id="cmbEmpresaPacienteE">
                                                    
                                                </select>
                                                
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>                               
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow"  data-bs-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnEditarPaciente">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    },
  };

  root.innerHTML = view.body();
}

function addListeners() {
  const tipoSelect = document.getElementById("txtSelectTipo");
  const mesSelect = document.getElementById("txtSelectMes");
  const anioSelect = document.getElementById("txtSelectAnio");

  // Establecer mes actual al cargar
  setMesActual();

  // Filtrar exámenes al cambiar los valores
  filtrarExamenes();

  tipoSelect.addEventListener("change", filtrarExamenes);
  mesSelect.addEventListener("change", filtrarExamenes);
  anioSelect.addEventListener("change", filtrarExamenes);
}

function setMesActual() {
  const mesSelect = document.getElementById("txtSelectMes");

  // Obtener el mes actual
  const mesActual = new Date().getMonth(); // Devuelve un valor entre 0 y 11

  // Establecer el valor del select al mes actual (sumamos 1 porque getMonth() devuelve un índice 0-11)
  mesSelect.value = mesActual + 1; // Ajustamos para que sea un valor entre 1-12
}

function initView() {
  getView();
  addListeners();
}

function filtrarExamenes() {
  let tipoSelect = document.getElementById("txtSelectTipo").value;
  let mesSelect = document.getElementById("txtSelectMes").value;
  let anioSelect = document.getElementById("txtSelectAnio").value;

  obtenerExamenes(tipoSelect, mesSelect, anioSelect)
    .then((data) => {
      let strTableExamenes = "";
      data.map((examen) => {
        strTableExamenes += `
          <tr>
              <td>${F.formatearFechaANormal(examen.fecha)}</td>
              <td>${examen.nombre_paciente}</td>
              <td>Q.${examen.importe}</td>
              <td>
                  <button class="btn btn-danger rounded-circle btn-sm" onclick="getEliminarExamen(${examen.id})">
                      <i class="fal fa-trash"></i>
                  </button>
                  <button class="btn btn-info rounded-circle btn-sm" onclick="getAbrirExamenEnPdf(${examen.id})">
                      <i class="fal fa-print"></i>
                  </button>
                  <button class="btn btn-secondary rounded-circle btn-sm" onclick="getEditarExamen(${examen.id})">
                      <i class="fal fa-edit"></i>
                  </button>
              </td>
          </tr>
      `;
      });
      document.getElementById("tblDeExamenes").innerHTML = strTableExamenes;
    })
    .catch((error) => {
      document.getElementById("tblDeExamenes").innerHTML =
        '<tr><td colspan="3">No hay registros de examenes...</td></tr>';
      console.error(error);
    })
    .finally((f) => {
      console.log(`Termino el proceso de obtener los examenes ${f}`);
    });
}


function getEliminarExamen(id) {
  F.Confirmacion("¿Estás seguro de que deseas eliminar este examen?").then(
    (value) => {
      if (value == true) {
        axios
          .post("/eliminar_examen", { id: id })
          .then(() => {
            F.Aviso("Examen eliminado exitosamente!!!");
            filtrarExamenes()
          })
          .catch((error) => {
            console.error("Error al eliminar el examen:", error);
            F.AvisoError("Error al eliminar el examen");
          });
      }
    }
  );
}

function getAbrirExamenEnPdf(id) {
  axios({
    url: "/datos_examenes_para_pdf",
    method: "POST",
    responseType: "blob", // Importante: Especifica que esperas un archivo
    data: { id: id }
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
    window.open(url, "_blank");
  }).catch((error) => {
    console.error("Error al abrir el PDF:", error);
    alert("Hubo un problema al abrir el PDF.");
  });
}



function getEditarExamen() {}

function obtenerExamenes(tipo, mes, anio) {
  return new Promise((resolve, reject) => {
    axios
      .post("/obtenerExamenesCoprologia", {
        tipo: tipo,
        mes: mes,
        anio: anio,
      })
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data) && data.length > 0) {
          resolve(data);
        } else {
          reject("No hay datos o la respuesta no es un array");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

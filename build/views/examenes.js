
function getView(){
    let view = {
        body:()=>{
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
               
            `
        },
        vista_listado:()=>{
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
                                            <option value="ENFERMEDADES_INFECCIOSAS">ENFERMEDADES INFECCIOSAS</option>
                                            <option value="ENFERMEDADES_BACTERIOLOGICOS">ENFERMEDADES BACTERIOLOGICOS</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-3">
                                        <label class="form-label mb-0 text-white">TIPO:</label>
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
                                        <label class="form-label mb-0 text-white">TIPO:</label>
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
                                                <td>ACCIONES</td>
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
            `
        },
        vista_nuevo:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){
    pintarTablaExamen();
    const tipoSelect = document.getElementById("txtSelectTipo");
    const mesSelect = document.getElementById("txtSelectMes");
    const anioSelect = document.getElementById("txtSelectAnio");

    const filtrar = () => {
        const tipoSeleccionado = tipoSelect.value;
        const mesSeleccionado = mesSelect.value;
        const anioSeleccionado = anioSelect.value;
        pintarTablaExamen(tipoSeleccionado, mesSeleccionado, anioSeleccionado);
    };

    tipoSelect.addEventListener("change", filtrar);
    mesSelect.addEventListener("change", filtrar);
    anioSelect.addEventListener("change", filtrar);

}

function initView(){
    getView();
    addListeners();

    // Obtener los valores iniciales de los selectores y pintar la tabla
    const tipoInicial = document.getElementById("txtSelectTipo").value;
    const mesInicial = document.getElementById("txtSelectMes").value;
    const anioInicial = document.getElementById("txtSelectAnio").value;
    pintarTablaExamen(tipoInicial, mesInicial, anioInicial);
}


async function pintarTablaExamen(tipo, mes, anio) {
    const tbody = document.getElementById("tblDeExamenes");
    tbody.innerHTML = GlobalLoader;

    let str = '';

    axios.post("/obtenerExamenesCoprologia", { tipo: tipo, mes: mes, anio: anio })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0) {
                data.map((examen) => {
                    str += `
                      <tr>
                        <td>${F.formatearFechaANormal(examen.fecha)}</td>
                        <td>${examen.nombre_paciente}</td>
                        <td>Q.${examen.importe}</td>
                        <td>
                          <button class="btn btn-danger rounded-circle btn-sm" onclick="getEliminarExamen(${examen.id})">
                            <i class="fal fa-trash"></i>
                          </button>
                          <button class="btn btn-info rounded-circle btn-sm" onclick="getAbrirExamenEnPdf(${examen.id})">
                            <i class="fal fa-file"></i>
                          </button>
                          <button class="btn btn-secondary rounded-circle btn-sm" onclick="getEditarExamen(${examen.id})">
                            <i class="fal fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                    `;
                  });
                tbody.innerHTML = str;
            } else {
                tbody.innerHTML = '<tr><td colspan="3">No hay datos de examenes...</td></tr>';
            }
        })
        .catch((error) => {
            tbody.innerHTML = '<tr><td colspan="3">No hay datos de examenes...</td></tr>';
            console.log(error);
        })
}

async function getEliminarExamen(id) {
    F.Confirmacion("¿Estás seguro de que deseas eliminar este examen?")
    .then((value) => {
        if(value == true) {

            axios.post("/eliminarExamen", { id: id });
            pintarTablaExamen();
        }
    })
    .catch((error) => {
        console.error("Error al eliminar el examen:", error);
        F.AvisoError("Error al eliminar el examen")
    });

  }

function getAbrirExamenEnPdf() {

}

function getEditarExamen() {

}
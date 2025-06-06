
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                           ${view.vista_inicio_dashboard()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_tabla_usuarios() + view.vista_modal_crear_usuario() + view.vista_modal_editar_usuario()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_examenes_por_fechas()}
                        </div> 
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledy="home-tab">
                           ${view.view_tabla_total_examenes()}
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
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i>
                            </a>
                        </li>      
                    </ul>
                    
                </div>
               
            `
        },
        vista_inicio_dashboard:()=> {
            return `
                <div class="container-fluid">
                    <div class="row justify-content-center">
                            <div class="col-md-6 text-center mt-2">
                                <h3 class="text-center mt-5">ADMINISTRACION</h3>
                            </div>
                        </div>
                    <div class="row text-center">
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_usuarios">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">USUARIOS</h5>
                                    <img src="../img/usuarios.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="USUARIOS" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_examenes_por_fecha">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">
                                        EXAMENES POR FECHA
                                    </h5>
                                    <img src="../img/examen-nuevo.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="EXAMENES FECHA" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_total_examenes">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">
                                        TOTAL DE EXAMENES
                                    </h5>
                                    <img src="../img/icon-examen-por-fecha.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="TOTAL DE EXAMENES"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" onclick="Navegar.login()">
                    <i class="fal fa-lock"></i>
                </button>
            `;
        },
        vista_tabla_usuarios:()=>{
            return `
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 text-center mt-2">
                        <h3 class="text-center mt-5">Listado de Usuarios</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="table-responsive">
                        <table class="table table-bordered h-full">
                            <thead class="thead-primary text-white">
                                <tr>
                                    <td>NOMBRE</td>
                                    <td>CLAVE</td>
                                    <td>TIPO</td>
                                    <td>ACCION</td>
                                </tr>
                            </thead>
                            <tbody id="tblLabUsuarios">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-arrow-left"></i>
            </button>

            <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" id="btnAgregarUsuario">
                <i class="fal fa-plus"></i>
            </button>
            `
        },
        vista_examenes_por_fechas:()=> {
            return `
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mt-2">
                            <h3 class="text-center mt-5">EXAMENES POR FECHA</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row mt-3 mb-3 d-flex justify-content-between">
                                <div class="col-12 col-md-6">
                                    <label class="form-label mb-0 negrita">TIPO:</label>
                                    <select class="form-control negrita" id="cmbSelectTipoExamen">
                                        <option value="COPROLOGIA">COPROLOGIA</option>
                                        <option value="UROLOGIA">UROLOGIA</option>
                                        <option value="ENFERMEDADES INFECCIOSAS">EXAMENES INFECCIOSOS</option>
                                        <option value="EXAMENES BACTERIOLOGICOS">EXAMENES BACTERIOLOGICOS</option>
                                        <option value="HEMOGLOBINA GLICOSILADA">HEMOGLOBINA GLICOSILADA</option>
                                        <option value="HCG CUALITATIVA">HGC CUALITATIVA</option>
                                        <option value="HCG CUANTITATIVA">HGC CUANTITATIVA</option>
                                        <option value="QUIMICA SANGUINEA">QUIMICA SANGUINEA</option>
                                        <option value="RESULTADOS VARIOS">RESULTADOS VARIOS</option>
                                        <option value="">TODOS</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-3">
                                    <label class="form-label mb-0">FECHA INICIO</label>
                                    <input type="date" class="form-control negrita" id="txtFechaInicio"/>
                                </div>
                                <div class="col-12 col-md-3">
                                    <label class="form-label mb-0">FECHA FINAL</label>
                                    <input type="date" class="form-control negrita" id="txtFechaFinal"/>
                                </div>
                                <div class="table-responsive mt-2">
                                    <table class="table">
                                        <thead class="thead-primary text-white">
                                            <tr>
                                                <td>FECHA</td>
                                                <td>TIPO</td>
                                                <td>CLIENTE</td>
                                                <td>IMPORTE</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblExamenesPorFecha">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l  hand shadow" onclick="Navegar.dashboard()">
                    <i class="fal fa-arrow-left"></i>
                </button>
            `;
        },
        vista_modal_crear_usuario:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_nuevo_usuario">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">
                                        
                                       <h1 style="font-size:280%" class="negrita text-left">Agregar Usuario</h1>

                                       <div class="form-group">
                                            <label>NO DPI (DOCUMENTO DE IDENTIFICACION)</label>
                                            <input type="text" class="form-control" id="txtNoDpiUsuario">
                                       </div>

                                        <div class="form-group">
                                            <label>Tipo:</label>
                                            <select class="form-control negrita text-danger" id="cmbTipoUsuario">
                                                <option value="GERENTE">GERENTE</option>
                                                <option value="LABORATORIO">LABORATORIO</option>
                                                <option value="JORNADA">JORNADA</option>
                                            </select>
                                        </div>

                                       <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombreUsuario"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Clave:</label>
                                            <input type="text" class="form-control" id="txtClaveUsuario"/>
                                        </div>


                                    </div>
                                </div>
                                
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-bs-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarUsuario">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },

        vista_modal_editar_usuario:() => {
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_editar_usuario">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            


                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">
                                        
                                       <h1 style="font-size:280%" class="negrita text-left">Editar Usuario</h1>

                                       <div class="form-group">
                                            <label>NO DPI (DOCUMENTO DE IDENTIFICACION)</label>
                                            <input type="text" class="form-control" id="txtNoDpiUsuarioUpdate">
                                       </div>

                                        <div class="form-group">
                                            <label>Tipo:</label>
                                            <select class="form-control negrita text-danger" id="cmbTipoUsuarioUpdate">
                                                <option value="GERENTE">GERENTE</option>
                                                <option value="LABORATORIO">LABORATORIO</option>
                                                <option value="JORNADA">JORNADA</option>
                                            </select>
                                        </div>

                                       <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombreUsuarioUpdate">
                                        </div>

                                        <div class="form-group">
                                            <label>Clave:</label>
                                            <input type="text" class="form-control" id="txtClaveUsuarioUpdate">
                                        </div>


                                    </div>
                                </div>
                            
                                
                                
                                
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-bs-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnEditarUsuario">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        view_tabla_total_examenes:() => {
            return `
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mt-2">
                            <h3 class="text-center mt-5">TOTAL DE EXAMENES</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row mt-3 mb-3 d-flex justify-content-between">
                            <div class="col-12 col-md-6">
                                <label class="form-label mb-0 negrita">Filtrar por Fecha Inicio:
                                </label>
                                <input type="date" class="form-control negrita" id="txtFechaInicioTotalDeExamenes" />
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="form-label mb-0 negrita">
                                    Filtrar por Fecha Final:
                                </label>
                                <input type="date" class="form-control negrita" id="txtFechaFinalTotalDeExamenes" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive mt-2">
                    <table class="table">
                        <thead class="thead-primary text-white">
                            <tr>
                                <td>TIPO</td>
                                <td>TOTAL EXAMENES</td>
                                <td>IMPORTE</td>
                            </tr>
                        </thead>
                        <tbody id="idTablaTotalExamenes">
                        </tbody>
                    </table>
                </div>
                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l  hand shadow" onclick="Navegar.dashboard()">
                    <i class="fal fa-arrow-left"></i>
                </button>
            `;
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    // Establecer valores iniciales para las fechas
    document.getElementById("txtFechaInicio").value = F.getFecha();
    document.getElementById("txtFechaFinal").value = F.getFecha();

    document.getElementById("txtFechaInicioTotalDeExamenes").value = F.getFecha();
    document.getElementById("txtFechaFinalTotalDeExamenes").value = F.getFecha();

    // Obtener referencias a los elementos del DOM
    let tipoExamen = document.getElementById("cmbSelectTipoExamen");
    let fechaInicio = document.getElementById("txtFechaInicio");
    let fechaFinal = document.getElementById("txtFechaFinal");

    // variables de referencias del dom en total de examenes
    let fechaInicioTotalDeExamenes = document.getElementById("txtFechaInicioTotalDeExamenes");
    let fechaFinalTotalDeExamenes = document.getElementById("txtFechaFinalTotalDeExamenes");

    // Llamar a la función filtrar con los valores iniciales
    filtrar();
    filtrarTotalDeExamenes();

    // Agregar listeners para los cambios en los campos
    tipoExamen.addEventListener("change", filtrar);
    fechaInicio.addEventListener("change", filtrar);
    fechaFinal.addEventListener("change", filtrar);

    fechaInicioTotalDeExamenes.addEventListener("change", filtrarTotalDeExamenes)
    fechaFinalTotalDeExamenes.addEventListener("change", filtrarTotalDeExamenes)



   


    document.getElementById('btnAgregarUsuario').addEventListener('click', () => {
        $("#modal_nuevo_usuario").modal('show');
    });

    document.getElementById("card_usuarios").addEventListener('click', () => {
        F.slideAnimationTabs();
        document.getElementById("tab-dos").click();
    })

    document.getElementById("card_examenes_por_fecha").addEventListener('click', () => {
        F.slideAnimationTabs();
        document.getElementById("tab-tres").click();
    })

    document.getElementById("card_total_examenes").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-cuatro").click();
    })

    get_lista_usuarios();

    let btnGuardarUsuario = document.getElementById('btnGuardarUsuario');
    btnGuardarUsuario.addEventListener('click', () => {
        
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
        .then((value) => {
            if(value==true) {
                let no_dpi = document.getElementById('txtNoDpiUsuario').value;
                let tipo = document.getElementById('cmbTipoUsuario').value;
                let nombre = document.getElementById('txtNombreUsuario').value;
                let clave = document.getElementById('txtClaveUsuario').value;

                btnGuardarUsuario.disabled = true;
                btnGuardarUsuario.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                crear_usuarios(no_dpi, nombre, clave, tipo)
                .then(() => {

                    F.Aviso('Usuario creado exitosamente');
                    get_lista_usuarios();
                    $("#modal_nuevo_usuario").modal('hide');
                    
                    btnGuardarUsuario.disabled = false;
                    btnGuardarUsuario.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch(() => {
                    F.AvisoError('No se pudo guardar el usuario');
                    btnGuardarUsuario.disabled = false;
                    btnGuardarUsuario.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
            }
        })
    })

};

function initView(){

    getView();
    addListeners();

};

function limpiar_datos_usuario() {
    document.getElementById('txtNoDpiUsuario').value = '';
    document.getElementById('cmbTipoUsuario').value = '';
    document.getElementById('txtNombreUsuario').value = '';
    document.getElementById('txtClaveUsuario').value = '';
}

function get_lista_usuarios() {
    let container = document.getElementById('tblLabUsuarios');
    container.innerHTML = GlobalLoader; // Muestra un loader mientras carga los datos
    let str = '';

    axios.post("/lista_usuarios", {
        filtro: ''
    })
    .then((response) => {
        let data = response.data; 
        if (Array.isArray(data) && data.length > 0) { 
            data.map((usuario) => { 
                str += `
                    <tr>
                        <td class="negrita">${usuario.NOMBRE}</td>
                        <td class="negrita">${usuario.CLAVE}</td>
                        <td class="negrita">${usuario.TIPO}</td>
                        <td>
                            <button class="btn btn-info btn-circle btn-md hand shadow" onclick="get_datos_update_usuario('${usuario.NO_DPI}', '${usuario.NOMBRE}', '${usuario.CLAVE}', '${usuario.TIPO}')">
                                <i class="fal fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
            container.innerHTML = str; 
        } else {
            container.innerHTML = 'No hay datos...'; 
        }
    })
    .catch((error) => {
        container.innerHTML = 'Error al cargar los datos...' + error;
    });
}

function get_datos_update_usuario(no_dpi, nombre, clave, tipo) {
    $("#modal_editar_usuario").modal('show');

    // Asignar los valores a los campos del modal
    document.getElementById('txtNoDpiUsuarioUpdate').value = no_dpi;
    document.getElementById('cmbTipoUsuarioUpdate').value = tipo;
    document.getElementById('txtNombreUsuarioUpdate').value = nombre;
    document.getElementById('txtClaveUsuarioUpdate').value = clave;

    let btnEditarUsuario = document.getElementById('btnEditarUsuario');
    btnEditarUsuario.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro que desea editar el usuario?")
        .then((value) => {
            if(value==true) {
                let no_dpi_update = document.getElementById('txtNoDpiUsuarioUpdate').value;
                let tipoUpdate = document.getElementById('cmbTipoUsuarioUpdate').value;
                let nombreUpdate = document.getElementById('txtNombreUsuarioUpdate').value;
                let claveUpdate = document.getElementById('txtClaveUsuarioUpdate').value;

                btnEditarUsuario.disabled = true;
                btnEditarUsuario.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                update_usuario(no_dpi_update, nombreUpdate, claveUpdate, tipoUpdate)
                .then(() => {
                    F.Aviso('Usuario actualizado exitosamente!!!');
                    get_lista_usuarios();
                    $("#modal_editar_usuario").modal('hide');
                    limpiar_datos_usuario();

                    btnEditarUsuario.disabled = false;
                    btnEditarUsuario.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .catch((e) => {
                    F.AvisoError('No se pudo actualizar el usuario: ' + e.message);
                    btnEditarUsuario.disabled = false;
                    btnEditarUsuario.innerHTML = `<i class="fal fa-save"></i>`;
                });
            }
        });
    });
}

function filtrar(event) {
    let tipoSeleccionado = document.getElementById("cmbSelectTipoExamen").value;
    let fechaInicio = F.devuelveFecha("txtFechaInicio");
    let fechaFinal = F.devuelveFecha("txtFechaFinal");

    obtenerExamenesPorFecha(tipoSeleccionado, fechaInicio, fechaFinal)
        .then((data) => {
            let strTableExamenesPorFecha = '';
            data.map((examen) => {
                strTableExamenesPorFecha += `
                    <tr>
                        <td>${F.formatearFechaANormal(examen.fecha)}</td>
                        <td>${examen.tipo_examen}</td>
                        <td>${examen.nombre_paciente}</td>
                        <td>${examen.importe}</td>
                        <td>
                            <button class="btn btn-info btn-sm btn-rounded" onclick="getAbrirExamenEnPdf(${
                                  examen.id
                                })">
                                <i class="fal fa-print"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
            document.getElementById("tblExamenesPorFecha").innerHTML = strTableExamenesPorFecha;
        })
        .catch((error) => {
            document.getElementById("tblExamenesPorFecha").innerHTML = '<tr><td colspan="4">No hay registros de examenes...</td></tr>';
            console.error(error);
        })
        .finally(() => {
            console.log(`Termino el proceso de obtener los examenes`);
        });
}

function filtrarTotalDeExamenes(event) {
    let fechaInicialTotal  = F.devuelveFecha("txtFechaInicioTotalDeExamenes");
    let fechaFinalTotal = F.devuelveFecha("txtFechaFinalTotalDeExamenes");

    obtenerTotalDeExamenes(fechaInicialTotal, fechaFinalTotal)
    .then((data) => {
        let strTablaTotalDeExamenes = '';
        data.map((examen) => {
            strTablaTotalDeExamenes += `
                <tr>
                    <td>${examen.tipo_examen}</td>
                    <td>${examen.total_examenes}</td>
                    <td>${examen.importe}</td>
                </tr>
            `;
        })
        document.getElementById("idTablaTotalExamenes").innerHTML = strTablaTotalDeExamenes;
    })
    .catch((err) => {
        document.getElementById("idTablaTotalExamenes").innerHTML = '<tr><td colspsan="4">No hay registros</td></tr>';
        console.error(err)
    })
    .finally(() => {
        console.info(`Termino el proceso de obtener los examenes`);
    })

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


function crear_usuarios(no_dpi ,nombre, clave, tipo) {
    return new Promise((resolve, reject) => {
        axios.post("/crear_usuarios", {
            no_dpi: no_dpi,
            nombre: nombre,
            clave: clave,
            tipo: tipo
        })
        .then((response) => {
            let data = response.data;
            if (data && data.affectedRows > 0) { // Verifica affectedRows
                resolve(data);
            } else {
                reject();
            }
        })
        .catch((error) => {
            reject();
        });
    });
}


function update_usuario(id, nombre, clave, tipo) {
    return new Promise((resolve, reject) => {

        axios.post('/update_usuario', {
            id: id,
            nombre: nombre,
            clave: clave,
            tipo: tipo
        })
        .then((response) => {
            let data = response.data;
            if (data && data.affectedRows > 0) {
                resolve(data);
            }else {
                reject();
            }
        })
        .catch((error) => {
            reject(error);
        });
    });
}

function obtenerExamenesPorFecha(tipo, fechaInicio, fechaFinal) {
    return new Promise((resolve, reject) => {

        axios.post('/obtenerExamenesPorFecha', {
            tipo: tipo,
            fechaInicio: fechaInicio,
            fechaFinal: fechaFinal
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0) {
                resolve(data);
            }else {
                reject();
            }
        })
        .catch((error) => {
            reject(error);
        })
    })
}

function obtenerTotalDeExamenes(fechaInicial, fechaFinal) {
    return new Promise((resolve, reject) => {

        axios.post("/obtenerTotalDeExamenes", {
            fechaInicial:fechaInicial,
            fechaFinal:fechaFinal
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0) {
                resolve(data);
            } else {
                reject();
            }
        })
        .catch((err) => {
            reject(err);
        })

    })
}
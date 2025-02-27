
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
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_estadistica">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">
                                        ESTADISTICA
                                    </h5>
                                    <img src="../img/estadisticas.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="ESTADISTICAS" />
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
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-naranja text-white">
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
                        
                        <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                            <i class="fal fa-arrow-left"></i>
                        </button>

                        <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" id="btnAgregarUsuario">
                            <i class="fal fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            `
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
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    document.getElementById('btnAgregarUsuario').addEventListener('click', () => {
        $("#modal_nuevo_usuario").modal('show');
    });

    document.getElementById("card_usuarios").addEventListener('click', () => {
        F.slideAnimationTabs();
        document.getElementById("tab-dos").click();
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
                        <td>${usuario.NOMBRE}</td>
                        <td>${usuario.CLAVE}</td>
                        <td>${usuario.TIPO}</td>
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
            reject();
        });
    });
}
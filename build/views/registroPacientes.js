
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_usuarios() + view.vista_modal_agregar_paciente() + view.vista_modal_agregar_empresas() + view.vista_modal_editar_pacientes()}
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
        vista_usuarios:()=> {
            return `
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-md-6 text-center mt-2">
                                <h3 class="text-center mt-5">Registro de Pacientes</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead class="thead-primary text-white">
                                            <tr>
                                                <td>NO. DPI</td>
                                                <td>NOMBRE</td>
                                                <td>FECHA NACIMIENTO</td>
                                                <td>EMPRESA</td>
                                                <td></td>
                                            </tr>
                                            </thead>
                                            <tbody id="tblDePacientes">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l  hand shadow" onclick="Navegar.laboratorista()">
                        <i class="fal fa-arrow-left"></i>
                    </button>
                    <button class="btn btn-circle btn-xl btn-success btn-bottom-r   hand shadow" id="btnAgregarPacienteModal">
                        <i class="fal fa-plus"></i>
                    </button> 
            `;
        },
        vista_modal_agregar_paciente:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPI"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePaciente"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control" id="txtFechaNacimiento"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control" id="cmbEmpresaPaciente">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" id="btnAbrirModalEmpresa">
                                                    <i class="fal fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>                               
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow"  data-bs-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPaciente">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresa"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="table-responsive">
                                            
                                                <table class="table">
                                                    <thead class="thead-primary">
                                                        <tr>
                                                            <th>ID EMPRESA</th>
                                                            <th>NOMBRE</th>
                                                            <th>ACCIONES</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientes">
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-bs-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPaciente">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        vista_modal_editar_pacientes:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_editar_paciente">
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
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    get_listado_pacientes();

    document.getElementById("txtFechaNacimiento").value = F.getFecha();

    cargarEmpresas();

    get_data_empresas_pacientes()
    .then((data) => {
        
        let str = '<option value="">Seleccione una empresa</option>';
        data.forEach((r) => {
            str += `<option value='${r.ID}'>${r.NOMBRE}</option>`; 
        });
        document.getElementById('cmbEmpresaPaciente').innerHTML = str;
        document.getElementById('cmbEmpresaPacienteE').innerHTML = str;
    })
    .catch((error) => {
        console.error("Error al cargar las empresas:", error);
        document.getElementById('cmbEmpresaPaciente').innerHTML = '<option value="">No hay datos</option>';
        document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
    });

    // Abrir modal para guardar empresa
    document.getElementById("btnAbrirModalEmpresa").addEventListener("click", () => {
        $("#modal_agregar_empresa").modal('show'); 
    });

    // Abrir el modal para guardar nuevo paciente
    document.getElementById("btnAgregarPacienteModal").addEventListener('click', () => {
        $("#modal_agregar_paciente").modal('show');
        })

    // Logica para guardar pacientes
    let btnGuardarPaciente = document.getElementById('btnGuardarPaciente');
    btnGuardarPaciente.addEventListener('click', () => {

        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
        .then((value) => {
            if(value==true) {
                let noDPI = document.getElementById("txtnoDPI").value;
                let nombrePaciente = document.getElementById("txtNombrePaciente").value;
                let fecha_nacimiento = document.getElementById("txtFechaNacimiento").value;
                let empresaPaciente = document.getElementById("cmbEmpresaPaciente").value;

                
                btnGuardarPaciente.disabled = true;
                btnGuardarPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                console.log(fecha_nacimiento);
                

                insert_paciente(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                .then(() => {
                    F.Aviso("Paciente guardado exitosamente!!!");
                    $("#modal_agregar_paciente").modal('hide');
                    get_listado_pacientes();
                    limpiar_datos_pacientes();

                    btnGuardarPaciente.disabled = false;
                    btnGuardarPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                    console.log(e);
                    btnGuardarPaciente.disabled = false;
                    btnGuardarPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .finally(() => {
                    btnGuardarPaciente.disabled = false;
                    btnGuardarPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
            }
        })
    });


    // Logica para guardar empresa de paciente
    let btnGuardarEmpresaPaciente = document.getElementById("btnGuardarEmpresaPaciente");
    btnGuardarEmpresaPaciente.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresa").value;
                
                btnGuardarEmpresaPaciente.disabled = true;
                btnGuardarEmpresaPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa").modal('hide'); 
                    cargarEmpresas();
                    limpiar_input_empresa();
                   
                    btnGuardarEmpresaPaciente.disabled = false;
                    btnGuardarEmpresaPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.log(e);
                    btnGuardarEmpresaPaciente.disabled = false;
                    btnGuardarEmpresaPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPaciente.disabled = false;
                    btnGuardarEmpresaPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })

            }
        })
    })

    let btnEditarPaciente = document.getElementById("btnEditarPaciente");
    btnEditarPaciente.addEventListener('click', () => {

        F.Confirmacion('Esta seguro que desea Editar este cliente?')
        .then((value) => {
            if(value==true) {
                let dpi = document.getElementById("txtnoDPIUpdate").value || '';
                if(dpi==''){F.AvisoError('Escriba un DPI CUI valido');return;}

                let nombre = document.getElementById("txtNombrePacienteUpdate").value || '';
                if(nombre==''){F.AvisoError('Escriba un nombre valido');return;}

                btnEditarPaciente.disabled = true;
                btnEditarPaciente.innerHTML = `<i class="fal fa-save"></i>`;

                updatePacientes()
                .then(()=> {
                    F.Aviso('Paciente actualizado exitosamente!!');

                    btnEditarPaciente.disabled = false;
                    btnEditarPaciente.innerHTML = `<i class="fal fa-save"></i>`;

                    $("#modal_editar_paciente").modal('hide');
                    get_listado_pacientes();
                })
                .catch((e) => {
                    F.AvisoError('No se pudo actualizar el paciente');
                    console.log(e);
                    btnEditarPaciente.disabled = false;
                    btnEditarPaciente.innerHTML = `<i class="fal fa-save"></i>`;
                })


            }
        })

    })

};

function initView(){

    getView();
    addListeners();
    get_listado_pacientes();
};



function get_listado_pacientes() {
    let container = document.getElementById('tblDePacientes');
    container.innerHTML = GlobalLoader;
    let str = '';

    axios.post('/lista_pacientes', {
        filtro: '' 
    })
    .then((response) => {
        let data = response.data;


        if (Array.isArray(data) && data.length > 0) {
            data.map((r) => {
                str += `
                    <tr class="hand">
                        <td>${r.no_dpi || 'Sin numero de DPI'}</td>
                        <td>${r.nombre_paciente}</td>
                        <td>${F.formatearFechaANormal(r.fecha_nacimiento)}</td>
                        <td>${r.nombre_empresa || 'Sin empresa'}
                        <td>
                            <br>
                            <button class="btn btn-info btn-sm btn-circle shadow" onclick="get_datos_paciente('${r.id}','${r.fecha_nacimiento}')">
                                <i class="fal fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });

            container.innerHTML = str;
        } else {
            container.innerHTML = 'No hay datos de pacientes...';
        }
    })
    .catch((error) => {
        container.innerHTML = 'Error al cargar los datos...';
        console.error(error);
    });
}

function cargarEmpresas() {
    get_data_empresas_pacientes()
        .then((data) => {
            // Cargar empresas en la tabla
            let strTable = '';
            data.forEach((r) => {
                strTable += `
                    <tr>
                        <td>${r.ID}</td>
                        <td>${r.NOMBRE}</td>
                        <td>
                            <button class="btn btn-sm btn-danger" onclick="eliminarEmpresaPaciente('${r.ID}')">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
            document.getElementById("tblDeEmpresasPacientes").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPaciente').innerHTML = strCombo;
            document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("tblDeEmpresasPacientes").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPaciente').innerHTML = '<option value="">No hay datos</option>';
            document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function limpiar_datos_pacientes() {
    document.getElementById("txtnoDPI").value = '';
    document.getElementById("txtNombrePaciente").value = '';
    document.getElementById("txtFechaNacimiento").value = '';
    document.getElementById("cmbEmpresaPaciente").value = '';
}

function limpiar_input_empresa() {
    document.getElementById("txtNombreEmpresa").value = '';
}

function eliminarEmpresaPaciente(id) {
    F.Confirmacion("¿Está seguro de eliminar esta empresa?")
      .then((value) => {
        if (value == true) {
          axios.post("/eliminar_empresa", { id: id })
            .then(() => {
              F.Aviso("Empresa eliminada exitosamente!!!");
              cargarEmpresas(); // Recargar la lista de empresas
            })
            .catch((error) => {
              F.AvisoError("No se pudo eliminar la empresa: " + error);
              console.error(error);
            });
        }
      });
  }

function insert_paciente(noDPI, nombre, fecha_nacimiento, empresa) {
    return new Promise((resolve, reject) => {

        axios.post("/insert_paciente", {
            noDPI: noDPI,
            nombre: nombre,
            fecha_nacimiento: fecha_nacimiento,
            empresa: empresa,
        })
        .then((response) => {
            let data = response.data;
            if (data && data.affectedRows > 0) { 
                resolve(data);
            } else {
                reject();
            }
        })
    })
}

function get_datos_paciente(id_paciente, fecha_nacimiento) {

    $("#modal_editar_paciente").modal('show');

    document.getElementById('lbStatusDatos').innerHTML = '';
    document.getElementById('lbStatusDatos').innerHTML = 'Cargando datos...' + GlobalLoader;
    GlobalIdPaciente = id_paciente;
    GlobalFechaAActualizar = fecha_nacimiento;
    get_data_datos_paciente(id_paciente)
    .then((data) => {
        console.log(data);
        data.forEach((r) => {
            document.getElementById("cmbEmpresaPacienteE").value=r.EMPRESA_ID;
            document.getElementById("txtnoDPIUpdate").value=r.NO_DPI;
            document.getElementById("txtNombrePacienteUpdate").value=r.NOMBRE;
            document.getElementById("txtFechaNacimientoUpdate").value=F.convertirFecha(r.FECHA_NACIMIENTO);
        });
        document.getElementById("lbStatusDatos").innerHTML = '';
    })
    .catch(()=> {
        document.getElementById("lbStatusDatos").innerHTML = '';

        document.getElementById("txtnoDPIUpdate").value='';
        document.getElementById("txtNombrePacienteUpdate").value='';
        document.getElementById("txtFechaNacimientoUpdate").value=F.getFecha();
    })    
}

function get_data_empresas_pacientes() {
    return new Promise((resolve, reject) => {
        axios.post("/catalogo_empresas_pacientes", {
            param: 0
        })
        .then((response) => {
            let data = response.data;
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

function insert_empresas(nombreEmpresa) {
    return new Promise((resolve, reject) => {
        axios.post("/insert_empresa_paciente", {
            nombreEmpresa: nombreEmpresa
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0) {
                resolve(data);
            } else {
                reject();
            }
        })
    })
}

function get_data_datos_paciente(id_paciente) {
    return new Promise((resolve, reject) => {
        axios.post("/datos_pacientes", {
            id: id_paciente
        })
        .then((response) => {
            let data = response.data;
            if (Array.isArray(data) && data.length > 0) { 
                resolve(data);
            } else {
                reject();
            }
        }, (error) => {
            reject();
        })
    })
}

function updatePacientes() {

    let noDpi = document.getElementById("txtnoDPIUpdate").value;
    let nombrePacienteUpdate = document.getElementById("txtNombrePacienteUpdate").value;
    let fechaNacimientoUpdate = document.getElementById('txtFechaNacimientoUpdate').value;
    let codEmpresa = document.getElementById("cmbEmpresaPacienteE").value;

    console.log(noDpi, nombrePacienteUpdate, fechaNacimientoUpdate, codEmpresa, F.convertirFecha(GlobalFechaAActualizar));

    return new Promise((resolve, reject) => {

        axios.post("/update_paciente", {
            id: GlobalIdPaciente,
            noDPI: noDpi,
            nombre: nombrePacienteUpdate,
            fecha_nacimiento: F.convertirFecha(fechaNacimientoUpdate) || F.convertirFecha(GlobalFechaAActualizar),
            empresa: codEmpresa
        })
        .then((response) => {
            let data = response.data;
            if (data && data.affectedRows > 0) { 
                resolve(data);
            } else {
                reject();
            }
        })
    })
}
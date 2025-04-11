
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
                            ${view.vista_ciproanalisis() + view.vista_modal_pacientes_copro() }
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_uroanalisis() + view.vista_modal_pacientes_urologia() + view.vista_modal_agregar_paciente_urologia() + view.vista_modal_agregar_empresas_urologia()}
                        </div>    
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_enfermedades_infecciosas() + view.vista_modal_enfermedades_infecciosas_pacientes() + view.vista_modal_agregar_paciente_enfer_infecciosas() + view.vista_modal_agregar_empresas_enfer_infecciosas()}
                        </div>
                        <div class="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_enfermedades_bacteriologicos() + view.vista_modal_enfermedades_bacteriologicos_pacientes() + view.vista_modal_agregar_paciente_enfer_bacteriologico() + view.vista_modal_agregar_empresas_enfer_bacteriologico()}
                        </div>
                        <div class="tab-pane fade" id="seis" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_hemoglobina_glicosilada() + view.vista_modal_pacientes_hemoglobina_pacientes() + view.vista_modal_agregar_paciente_hemoglobina() + view.vista_modal_agregar_empresas_hemoglobina()}
                        </div>
                        <div class="tab-pane fade" id="siete" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_pruebas_especiales() + view.vista_modal_pruebas_especiales_pacientes() + view.vista_modal_agregar_paciente_pruebas_especiales() + view.vista_modal_agregar_empresas_pruebas_especiales()}
                        </div>
                        <div class="tab-pane fade" id="ocho" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_examenes_hcg_cuantitativa() + view.vista_modal_hcg_cuantitativa_pacientes() + view.vista_modal_agregar_paciente_hcg_cuantitativa() + view.vista_modal_agregar_empresas_hcg_cuantitativa()}
                        </div>
                        <div class="tab-pane fade" id="nueve" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_examenes_quimica_sanguinea() + view.vista_modal_quimica_sanguinea() + view.vista_modal_agregar_quimica_sanguinea() + view.vista_modal_agregar_empresas_quimica_sanguinea()}
                        </div>
                        <div class="tab-pane fade" id="diez" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_examenes_resultados_varios() + view.vista_modal_resultados_varios() + view.vista_modal_agregar_resultados_varios() + view.vista_modal_agregar_empresas_resultados_varios()}
                        </div>
                        <div class="tab-pane fade" id="once" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_mostrar_pacientes() + view.vista_modal_agregar_paciente() + view.vista_modal_agregar_empresas()} 
                        </div>
                        <div class="tab-pane fade" id="doce" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_listado_examenes()}

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
                                <i class="fal fa-comments"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cinco" data-toggle="tab" href="#cinco" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-seis" data-toggle="tab" href="#seis" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-siete" data-toggle="tab" href="#siete" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-ocho" data-toggle="tab" href="#ocho" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-nueve" data-toggle="tab" href="#nueve" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-diez" data-toggle="tab" href="#diez" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-once" data-toggle="tab" href="#once" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-doce" data-toggle="tab" href="#doce" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 

                    </ul>
                    
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
                <div class="container-fluid mt-5">
                    <div class="row text-center">
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_nuevo_examen">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">NUEVO EXAMEN</h5>
                                    <img src="../img/add_examen.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="TABLA USUARIOS" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_tbla_examenes">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">ARCHIVOS</h5>
                                    <img src="../img/carpeta_icon.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="ARCHIVOS" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_tbla_pacientes">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">REGISTRO DE PACIENTES</h5>
                                    <img src="../img/icon_user.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="TABLA USUARIOS" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" onclick="Navegar.login()">
                    <i class="fal fa-lock"></i>
                </button>
            `
        },
        vista_listado_examenes:()=>{
            return `
                <div class="container-fluid mt-5">
                    <div class="row rounded d-flex justify-content-between">
                            <div class="col-12- col-md-3 mt-3 mb-2">    
                                <div class="input-group">
                                    <label class="col-form-label text-info">Nombre:</label>
                                    <input class="form-control negrita bg-amarillo" type="search" placeholder="Buscar paciente..." autocomplete="off" id="txtFiltrarPacientesPaciente" disabled />
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mt-3 mb-2">
                                <div class="input-group">
                                    <label class="col-form-label text-info">Tratante:</label>
                                    <input class="form-control bg-amarillo negrita" type="text" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoPaciente" />
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mt-3 mb-2">
                                <div class="input-group">
                                    <label class="col-form-label text-info">REFERENCIA:</label>
                                    <input type="text" class="form-control negrita bg-amarillo" value="FEB25-001" id="txtReferenciaDeExamenPaciente">
                                </div>
                            </div>
                            <div class="col-12 col-md-3 mt-3 mb-2">
                                <div class="input-group">
                                    <label class="col-form-label text-info">Fecha:</label>
                                    <input type="date" class="form-control negrita bg-amarillo" id="fechaPaciente">
                                </div>
                            </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_coproanalisis">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">COPROLOGÍA</h5>
                                    <img src="../img/ciproanalisi.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="COPROANALIS" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_uroanalisis">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">UROLOGÍA</h5>
                                    <img src="../img/uroanalisis.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="UROLOGIA" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="enfermedades_infecciosas">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">ENFERMEDADES INFECCIOSAS</h5>
                                    <img src="../img/QUIMICA_SANGUINEA.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="ENFERMEDADES INFECCIOSAS" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_enfermedades_bacteriologicos">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">ENFERMEDADES BACTERIOLOGICOS</h5>
                                    <img src="../img/hematology.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="HEMATOLOGIA COMPLETA" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_hemoglobina_glicosilada">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">HEMOGLOBINA GLICOSILADA</h5>
                                    <img src="../img/HEMOGLOBINA_GLICOSILADA.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="HEMOGLOBINA GLICOSILADA" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_pruebas_especiales">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">HCG CUALITATIVA</h5>
                                    <img src="../img/pruebas_especiales.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="PRUEBAS ESPECIALES" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_examenes_hcg_cuantitativa">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">EXAMENES HCG CUANTITATIVA</h5>
                                    <img src="../img/HGC_CAUNTITATIVA.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="HCG CUANTITATIVA" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_examenes_quimica_sanguinea">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">EXAMENES QUIMICA SANGUINEA</h5>
                                    <img src="../img/QUIMICA_SANGUINEA_LAB.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="QUIMICA SANGUINEA" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_examenes_resultados_varios">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">EXAMENES RESULTADOS VARIOS</h5>
                                    <img src="../img/RESULTADOS_VARIOS.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="RESULTADOS VARIOS" />
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l  hand shadow" id="idRetrocederVistaCardsExamenes">
                            <i class="fal fa-arrow-left"></i>
                        </button>
                    </div>
                </div>
            `;             
        },
        vista_mostrar_pacientes:()=>{
            return `
                <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-6 text-center mt-2">
                                <h3 class="text-center mt-5">Listado de pacientes</h3>
                            </div>
                        </div>
                        <div class="row justify-content-left">
                            <div class="col-12 col-md-3 mt-2">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Buscar paciente por nombre..." id="txtFiltrarBusquedaDePaciente" />
                                    <button class="btn btn-info btn-sm hand shadow">
                                        <i class="fal fa-search"></i> 
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-bordered h-full">
                                        <thead class="thead-primary text-white">
                                            <tr>
                                                <td>NO. DPI</td>
                                                <td>NOMBRE</td>
                                                <td>FECHA NACIMIENTO</td>
                                                <td>EMPRESA</td>
                                                <td></td>
                                            </tr>
                                            </thead>
                                            <tbody id="tblPacientesParaExamenes">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l  hand shadow" onclick="Navegar.laboratorista()">
                        <i class="fal fa-arrow-left"></i>
                    </button>
                    <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" onclick="btnAgregarPacienteModal()">
                        <i class="fal fa-plus"></i>
                    </button> 
            `;
        },
        vista_ciproanalisis:()=>{
            return `
                <div class="container-fluid mt-4">
                    <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">                        
                       <div class="col-12 col-md-6 mt-3">
                            <div class="h3" id="txtTipoExamenCopro">
                                <strong>COPROLOGÍA</strong>
                            </div>    
                       </div>
                    </div>
                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Importe:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Q. Ingrese el valor del importe" autocomplete="off" id="FloatImporteCiprologia">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <div class="card-header bg-info text-center text-white">Macroscopio</div>
                                <div class="card-body">
                                    <label class="form-label text-info">Color:</label>
                                    <input type="search" class="form-control bg-amarillo" id="colorHecesMacroscopio" list="colorHecesListCoprologia" placeholder="Ingrese valor..." />
                                    <datalist id="colorHecesListCoprologia">
                                        <option value="CAFE"/>
                                        <option value="VERDE"/>
                                        <option value="AMARILLA" />
                                        <option value="ROJA" />
                                        <option value="NEGRAS" />
                                    </datalist>
                                    <label class="form-label text-info">Restos Alimenticios:</label>
                                    <input type="search" class="form-control bg-amarillo" id="restoAlimenticiosMacro" list="restoAlimenticiosListCoprologia" placeholder="Ingrese valor..."/>
                                    <datalist id="restoAlimenticiosListCoprologia">
                                        <option value="POSITIVO" />
                                        <option value="NEGATIVO" />
                                    </datalist>
                                    <label class="form-label text-info">Sangre:</label>
                                    <input type="search" class="form-control bg-amarillo" id="sangreMacro" list="sangreListCoprologia" placeholder="Ingrese valor..."/>
                                    <datalist id="sangreListCoprologia">
                                        <option value="POSITIVO" />
                                        <option value="NEGATIVO" />
                                    </datalist>
                                    <label class="form-label text-info">Consistencia:</label>
                                    <input type="search" class="form-control bg-amarillo" id="consistenciaMacro" list="consistenciaListCoprologia" placeholder="Ingrese valor..."/>
                                    <datalist id="consistenciaListCoprologia">
                                        <option value="FORMADO" />
                                        <option value="SEMI FORMADO" />
                                        <option value="DIARREICO" />
                                        <option value="SEMI DIARREICO" />
                                    </datalist>
                                    <label class="form-label text-info">Moco:</label>
                                    <input type="search" class="form-control bg-amarillo" id="mocoMacro" list="mocoListCoprologia" placeholder="Ingrese valor..."/>
                                    <datalist id="mocoListCoprologia">
                                        <option value="POSITIVO" />
                                        <option value="NEGATIVO" />
                                    </datalist>
                                    <label class="form-label text-info">PH:</label>
                                    <input type="search" class="form-control bg-amarillo" id="phMacro" list="phListCoprologia" placeholder="Ingrese valor..."/>
                                    <datalist id="phListCoprologia">
                                        <option value="6"  />
                                        <option value="5" />
                                        <option value="6.5" />
                                        <option value="7.0" />
                                        <option value="7.5" />
                                    </datlist>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <div class="card-header bg-info text-center text-white">Químico</div>
                                <div class="card-body">
                                    <label class="form-label text-info">Leucocitos:</label>
                                    <input type="search" class="form-control bg-amarillo" id="leucocitosQuimico" list="idLeucitosQuimico" placeholder="Ingrese valor..." />
                                    <datalist id="idLeucitosQuimico">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                    <label class="form-label text-info">Células Vegetales:</label>
                                    <input type="search" class="form-control bg-amarillo" id="celulasVegQuimico" list="idCelulasQuimico" placeholder="Ingrese valor..." />
                                    <datalist id="idCelulasQuimico">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                    <label class="form-label text-info">Almidones:</label>
                                    <input type="search" class="form-control bg-amarillo" id="almidonesQuimico" list="idAlmidonesQuimico" placeholder="Ingrese valor..." />
                                    <datalist id="idAlmidonesQuimico">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                    <label class="form-label text-info">levaduras:</label>
                                    <input type="search" class="form-control bg-amarillo" id="levadurasQuimico" list="idLevadurasQuimico" placeholder="Ingrese valor..." />
                                    <datalist id="idLevadurasQuimico">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                    <label class="form-label text-info">Huevo:</label>
                                    <input type="search" class="form-control bg-amarillo" id="huevoQuimico" list="idHuevoQuimico" placeholder="Ingrese valor..." />
                                    <datalist id="idHuevoQuimico">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                    <label class="form-label text-info">Quistes:</label>
                                    <input type="search" class="form-control bg-amarillo" id="quistesQuimico" list="idQuistesQuimico" placeholder="Ingrese valor..." />
                                    <datalist id="idQuistesQuimico">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <div class="card-header bg-info text-center text-white">Microscopio</div>
                                <div class="card-body">
                                    <label class="form-label text-info">Eritrocitos:</label>
                                    <input type="search" class="form-control bg-amarillo" id="eritrocitosMicro" list="idEritrocitosMicro" placeholder="Ingrese valor..." />
                                    <datalist id="idEritrocitosMicro">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                    <label class="form-label text-info">Grasas:</label>
                                    <input type="search" class="form-control bg-amarillo" id="grasasMicro" list="idGrasasMicro" placeholder="Ingrese valor..." />
                                    <datalist id="idGrasasMicro">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                    <label class="form-label text-info">Jabón:</label>
                                    <input type="search" class="form-control bg-amarillo" id="jabonMicro" list="idJabonMicro" placeholder="Ingrese valor..." />
                                    <datalist id="idJabonMicro">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                    <label class="form-label text-info">Bacterias:</label>
                                    <input type="search" class="form-control bg-amarillo" id="bacteriasMicro" list="idBacteriasMicro" placeholder="Ingrese valor..." />
                                    <datalist id="idBacteriasMicro">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow"  id="idRetrocederDeVistaExamenCoprologia">
                        <i class="fal fa-arrow-left"></i>
                    </button>
                    <button class="btn btn-circle btn-xl btn-referencia btn-bottom-r hand shadow" id="btnGuardarExamenCopro">
                        <i class="fal fa-save"></i>
                    </button>
                      
                  
                </div>
                
            `;
        },
        vista_uroanalisis:()=> {
            return `
                <div class="container-fluid mt-4">
                
                <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">                        
                       <div class="col-12 col-md-6 mt-3">
                            <div class="h3" id="txtTipoExamenUrologia">
                                <strong>UROLOGIA</strong>
                            </div>
                       </div>
                </div>
                <div class="row mb-2 rounded d-flex justify-content-between">
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Importe:</label>
                            <input class="form-control bg-amarillo rounded" type="text" placeholder="Q. Ingreso el valor del importe" autocomplete="off" id="FloatImporteUrologia">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">MACROSCÓPICO</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label text-info">Color:</label>
                                    <input type="search" class="form-control bg-amarillo" id="colorHecesMacroUrologia" list="colorHecesListUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="colorHecesListUrologia">
                                        <option value="AMARILLO"/>
                                        <option value="MARRON"/>
                                        <option value="ROJO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Aspecto:</label>
                                    <input type="search" class="form-control bg-amarillo" id="aspectoMacroUrologia" list="aspectoListUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="aspectoListUrologia">
                                        <option value="LIGERAMENTE TURBIO"/>
                                        <option value="TURBIO"/>
                                        <option value="LIMPIDO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Densidad:</label>
                                    <input type="search" class="form-control bg-amarillo" id="densidadMacroUrologia" list="densidadListUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="densidadListUrologia">
                                        <option value="1.000" />
                                        <option value="1.005" />
                                        <option value="1.010" />
                                        <option value="1.015" />
                                        <option value="1.020" />
                                        <option value="1.010" />
                                        <option value="1.030" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">PH:</label>
                                    <input type="search" class="form-control bg-amarillo" id="phMacroUrologia" list="phListUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="phListUrologia">
                                        <option value="5.0" />
                                        <option value="6.0" />
                                        <option value="6.5" />
                                        <option value="7.0" />
                                        <option value="7.5" />
                                        <option value="8.0" />
                                        <option value="8.5" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">Químico</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label text-info">Leucocitos:</label>
                                    <input type="search" class="form-control bg-amarillo" id="leucocitosQuimicoUrologia" list="leucocitosListQuimicoUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="leucocitosListQuimicoUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Glucosa:</label>
                                    <input type="search" class="form-control bg-amarillo" id="glucosaQuimicoUrologia" list="glucosaListQuimicoUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="glucosaListQuimicoUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                        <option value="++++" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Proteínas:</label>
                                    <input type="search" class="form-control bg-amarillo" id="proteinasQuimicoUrologia" list="proteinasQuimicoListUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="proteinasQuimicoListUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                    </datalist>
                                </div>    
                                <div class="mb-3">
                                    <label class="form-label text-info">Cetonas:</label>
                                    <input type="search" class="form-control bg-amarillo" id="cetonasQuimicoUrologia" list="cetonasQuimicoListUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="cetonasQuimicoListUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="0.5 mmol/l" />
                                        <option value="1.5 mmol/l" />
                                        <option value="4.0 mmol/l" />
                                        <option value="8.0 mmol/l" />
                                        <option value="16 mmol/l" />
                                    </datalist>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label text-info">Hemoglobina:</label>
                                    <input type="search" class="form-control bg-amarillo" id="hemoglobinaQuimicoUrologia" list="idHemoglobinaUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="idHemoglobinaUrologia">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Urobilinógeno:</label>
                                    <input type="search" class="form-control bg-amarillo" id="urobiligenoQuimicoUrologia" list="urobiligenoListQuimicoUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="urobiligenoListQuimicoUrologia">
                                        <option value="NORMAL" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Nitritos:</label>
                                    <input type="search" class="form-control bg-amarillo" id="nitritoQuimicoUrologia" list="nitritosListQuimicoUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="nitritosListQuimicoUrologia">
                                        <option value="POSITIVO" />
                                        <option value="NEGATIVO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Ácido Ascórbico:</label>
                                    <input type="search" class="form-control bg-amarillo" id="acidoAscorbicoQuimicoUrologia" list="idAcidoAscorbicoUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="idAcidoAscorbicoUrologia">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Bilirrubina:</label>
                                    <input type="search" class="form-control bg-amarillo" id="bilirrubinaQuimicoUrologia" list="bilirrubinaListQuimicoUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="bilirrubinaListQuimicoUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="17 µmol/l" />
                                        <option value="50 µmol/l" />
                                        <option value="100 µmol/l" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">Microscopio</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label text-info">Leucocitos:</label>
                                    <input type="search" class="form-control bg-amarillo" id="leucocitosMicroUrologia" list="leucocitosListMicroscopioUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="leucocitosListMicroscopioUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Eritocitos:</label>
                                    <input type="search" class="form-control bg-amarillo" id="eritrocitosMicroUrologia" list="idEritocitosUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="idEritocitosUrologia">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">C. Epiteliales:</label>
                                    <input type="search" class="form-control bg-amarillo" id="epitelialesMicroUrologia" list="idEpitelialesUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="idEpitelialesUrologia">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Bacterias:</label>
                                    <input type="search" class="form-control bg-amarillo" id="bacteriasMicroUrologia" list="idBacteriasUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="idBacteriasUrologia">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Cristales:</label>
                                    <input type="search" class="form-control bg-amarillo" id="cristalesMicroUrologia" list="idCristalesUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="idCristalesUrologia">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Cilindros:</label>
                                    <input type="search" class="form-control bg-amarillo" id="cilindrosMicroUrologia" list="idCilindrosUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="idCilindrosUrologia">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Otros:</label>
                                    <input type="search" class="form-control bg-amarillo" id="otrosMicroUrologia" list="idOtrosUrologia" placeholder="Ingrese valor..." />
                                    <datalist id="idOtrosUrologia">
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                        <option value="VALOR DE EJEMPLO" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    
                </div>

              
                    <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" id="idRetrocederDeVistaExamenUrologia">
                        <i class="fal fa-arrow-left"></i>
                    </button>
                    <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarExamenUrologia">
                        <i class="fal fa-save"></i>
                    </button>
            </div>
            `;
        },
        vista_enfermedades_infecciosas:()=> {
            return `
                <div class="container-fluid mt-4">
               
                <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">
                   
                    <div class="col-12 col-md-6 mt-3">
                        <div class="h3" id="txtTipoExamenEmfeInfecciosas">
                            <strong>ENFERMEDADES INFECCIOSAS</strong>
                        </div>
                    </div>
                </div>
                <div class="row mb-2 rounded d-flex justify-content-between">
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Importe:</label>
                            <input class="form-control bg-amarillo rounded" type="text" placeholder="Q. Ingrese el valor del importe" autocomplete="off" id="floatImporteEnfInfecciosas">
                        </div>
                    </div>
                </div>
                
                <div class="card mb-4">
                    <div class="card-header bg-info text-center">
                        <h5 class="card-title mb-0 text-white">ENFERMEDADES INFECCIOSAS</h5>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-4">
                                <label class="form-label text-info">ANALISIS</label>
                                <div class="input-group">
                                    <input type="text" class="form-control bg-amarillo" id="txtAnalisisEnfermedadesInfecciosas" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label text-info">RESULTADO:</label>
                                <input type="text" class="form-control bg-amarillo" id="txtResultadosEnfermedadesInfecciosas" />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label text-info">VALOR REFERENCIA:</label>
                                <input type="text" class="form-control bg-amarillo" id="txtValorReferenciaEnfermedadesInfecciosas" />
                            </div>
                        </div>
                    </div>
                </div>

                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" id="idRetrocederVistaDeEnfermedadesInfecciosas">
                    <i class="fal fa-arrow-left"></i>
                </button>
                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarExamenEnfermedadesInfecc">
                        <i class="fal fa-save"></i>
                </button>
            </div>
            `;
        },
        vista_enfermedades_bacteriologicos:()=> {
            return `
                <div class="container-fluid mt-4">
               
                <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">
                   
                    <div class="col-12 col-md-6 mt-3">
                        <div class="h3" id="txtTipoExamenBacteriologicos">
                            <strong>EXAMENES BACTERIOLOGICOS</strong>
                        </div>
                    </div>
                </div>

                <div class="row mb-2 rounded d-flex justify-content-between">
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Importe:</label>
                            <input class="form-control bg-amarillo rounded" type="text" placeholder="Q. Ingrese el valor del importe" autocomplete="off" id="floatImporteExamenesBacteriologicos">
                        </div>
                    </div>
                </div>
                
                <div class="card mb-4">
                    <div class="card-header bg-info text-center">
                        <h5 class="card-title mb-0 text-white">EXAMENES BACTERIOLOGICAS</h5>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-4">
                                <label class="form-label text-info">ANALISIS</label>
                                <div class="input-group">
                                    <input type="text" class="form-control bg-amarillo" id="txtExamenesExamenesBacteriologicos" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label text-info">RESULTADO:</label>
                                <input type="text" class="form-control bg-amarillo" id="txtResultadosExamenesBacteriologicos" />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label text-info">VALOR DE REFERENCIA:</label>
                                <input type="text" class="form-control bg-amarillo" id="txtValorReferenciaExamenesBacteriologicos" />
                            </div>
                        </div>
                    </div>
                </div>

                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" id="idRetrocederVistaEnfermedadesBacteriologicos">
                    <i class="fal fa-arrow-left"></i>
                </button>
                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarExamenBacteriologicos">
                        <i class="fal fa-save"></i>
                </button>
            </div>
            `;
        },
        vista_hemoglobina_glicosilada:()=> {
            return `
                <div class="container-fluid mt-4">
                    <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">                        
                       <div class="col-12 col-md-6 mt-3">
                            <div class="h3" id="txtTipoHemoglobinaGlicosilada">
                                <strong>HEMOGLOBINA GLICOSILADA</strong>
                            </div>    
                       </div>
                    </div>
                    
                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Importe:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Q. Ingrese el valor del importe" autocomplete="off" id="FloatImporteHemoglobinaGlicosilada">
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header bg-info text-center">
                            <h5 class="card-title mb-0 text-white">Inmunologia</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label text-info">EXAMEN:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtExamenHemoglobinaGlicosilada" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">RESULTADO:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtResultadoHemoglobinaGlicosilada" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">VALOR NORMAL:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtvalorNormalHemoglobinaGlicosilada"/>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">PRUEBA DE HBA1C EN %:</label>
                                    <input type="search" class="form-control bg-amarillo" id="txtPruebaDeHba1c" list="listPruebaHba1c" placeholder="Ingrese valor..." />
                                    <datalist id="listPruebaHba1c">
                                        <option value="5-6"/>
                                        <option value="7-8"/>
                                        <option value="8-9"/>
                                        <option value="9-10"/>
                                        <option value="10-11"/>
                                        <option value="11-12"/>
                                    </datalist>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">PROMEDIO DE GLICEMIA EN MG/DL:</label>
                                    <input type="search" class="form-control bg-amarillo" id="txtPromedioDeGlicemia" list="listPromedioDeGlicemia" placeholder="Ingrese valor...">
                                    <datalist id="listPromedioDeGlicemia">
                                        <option value="80-120" />
                                        <option value="120-150" />
                                        <option value="150-180" />
                                        <option value="180-210" />
                                        <option value="210-240" />
                                        <option value="240-270" />
                                        <option value="270-300" />
                                    </datalist>

                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">CALIFICACION:</label>
                                    <input type="search" class="form-control bg-amarillo" id="txtCalificacionGlicemia" list="listaCalificacion" placeholder="Ingrese valor..." />
                                    <datalist id="listaCalificacion">
                                        <option value="EXCELENTE" />
                                        <option value="MUY BUENO" />
                                        <option value="BUENO" />
                                        <option value="REGULAR" />
                                        <option value="PROBLEMATICO" />
                                        <option value="MALO" />
                                        <option value="MUY MALO" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" id="idRetrocederVistaHemoglobinaGlicosilada"/>
                        <i class="fal fa-arrow-left"></i>
                    </button>
                    <button
                        class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow"
                        id="btnGuardarExamenHemoglobinaGlicosilada"
                    >
                        <i class="fal fa-save"></i>
                    </button>

                </div>
            `;
        },
        vista_pruebas_especiales:() => {
            return `
                <div class="container-fluid mt-4">

                    <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">
                    
                        <div class="col-12 col-md-6 mt-3">
                            <div class="h3" id="txtTipoHcgCualitativa">
                                <strong>HCG CUALITATIVA</strong>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2 rounded d-flex justify-content-between">
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Importe:</label>
                            <input class="form-control bg-amarillo rounded" type="text" placeholder="Q. Ingrese el valor del importe" autocomplete="off" id="floatImportePruebasEspeciales">
                        </div>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-header bg-info text-center">
                        <h5 class="card-title mb-0 text-white">PRUEBAS ESPECIALES</h5>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-4">
                                <label class="form-label text-info">EXAMEN RESULTADO:</label>
                                <div class="input-group">
                                    <input type="text" class="form-control bg-amarillo" id="txtExamenResultadoPruebasEspeciales"/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label text-info">RESULTADO:</label>
                                <input type="text" class="form-control bg-amarillo" id="txtResultadoPruebasEspeciales"/>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label text-info">VALOR REFERENCIA:</label>
                                <input type="text" class="form-control me-2 bg-amarillo" id="txtvalorReferenciaPruebasEspeciales">
                                    
                            </div>
                        </div>
                      
                        
                    </div>
                </div>

                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" id="idRetrocederVistaPruebasEspeciales">
                    <i class="fal fa-arrow-left"></i>
                </button>
                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarExamenPruebasEspeciales">
                        <i class="fal fa-save"></i>
                </button>

                </div>
            `;
        },
        vista_examenes_hcg_cuantitativa:() => {
            return `
                <div class="container-fluid">

                    <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">                        
                       <div class="col-12 col-md-6 mt-3">
                            <div class="h3" id="txtTipoHcgCuantitativa">
                                <strong>EXAMEN HCG CUANTITATIVA</strong>
                            </div>    
                       </div>
                    </div>

                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Importe:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Q. Ingrese el valor del importe" autocomplete="off" id="FloatImporteHcgCuantitativa">
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header bg-info text-center">
                            <h5 class="card-title mb-0 text-white">EXAMENES HCG CUANTITATIVA</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label text-info">ANALISIS:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtAnalisisHcgCuantitativa" list="listAnalisisHcgCuantitativa" />
                                    <datalist id="listAnalisisHcgCuantitativa">
                                        <option value="B-HCG Cuantificada" />
                                    </datalist>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">RESULTADO:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtResultadoHcgCuantitativa" list="listResultadoHcgCuantitativa" />
                                    <datalist id="listResultadoHcgCuantitativa">
                                        <option value="< 4 .00 mlU/mL" />
                                    </datalist>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">VALORES DE REFERENCIA:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtvalorDeReferenciaHcgCuantitativa" list="listValorRefHcgCuantitativa"/>
                                    <datalist id="listValorRefHcgCuantitativa">
                                        <option value="3 Semanas: 5 – 50" />
                                        <option value="4 Semanas: 5 – 426" />
                                        <option value="5 Semanas: 18 – 7340" />
                                        <option value="6 Semanas: 1080 – 56500" />
                                        <option value="7-8 Semanas: 7650 – 229000" />
                                        <option value="9-12 Semanas: 25700 – 288000" />
                                        <option value="13-16 Semanas: 13300 – 254000" />
                                        <option value="17-24 Semanas: 4060 – 165400" />
                                        <option value="25-40 Semanas: 3640 – 117000" />
                                        <option value="Sin embarazo: < menor de 10 mlU/mL" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" id="idRetrocederVistaHcgCuantitativa" />
                        <i class="fal fa-arrow-left"></i>
                    </button>
                    <button
                        class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow"
                        id="btnGuardarHcgCuantitativa"
                    >
                        <i class="fal fa-save"></i>
                    </button>

                </div>
            `;
        },
        vista_examenes_quimica_sanguinea:() => {
            return `
                <div class="container-fluid">

                    <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">
                    
                        <div class="col-12 col-md-6 mt-3">
                            <div class="h3" id="txtTipoQuimicaSanguinea">
                                <strong>QUIMICA SANGUINEA</strong>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Importe:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Q. Ingrese el valor del importe" autocomplete="off" id="FloatImporteQuimicaSanguinea">
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header bg-info text-center">
                            <h5 class="card-title mb-0 text-white">Quimica Sanguinea</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label text-info">EXAMEN:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtExamenQuimicaSanguinea" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">RESULTADO:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtResultadoQuimicaSanguinea" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">VALOR NORMAL:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtvalorNormalQuimicaSanguinea"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" id="idRetrocederVistaQuimicaSanguinea" />
                        <i class="fal fa-arrow-left"></i>
                    </button>
                    <button
                        class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow"
                        id="btnGuardarQuimicaSanguinea"
                    >
                        <i class="fal fa-save"></i>
                    </button>

                </div>
            `;
        },
        vista_examenes_resultados_varios:() => {
            return `
                <div class="container-fluid">

                    <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">
                    
                        <div class="col-12 col-md-6 mt-3">
                            <div class="h3" id="txtTipoResultadosVarios">
                                <strong>RESULTADOS VARIOS</strong>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Importe:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Q. Ingrese el valor del importe" autocomplete="off" id="FloatImporteResultadoVarios">
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header bg-info text-center">
                            <h5 class="card-title mb-0 text-white">Resultados Varios</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label text-info">EXAMEN:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtExamenResultadoVarios" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">RESULTADO:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtResultadoResultadoVarios" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">VALOR NORMAL:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtvalorNormalResultadoVarios"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header bg-info text-center">
                            <h5 class="card-title mb-0 text-white">GRUPO SANGUINEO</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label text-info">ANALISIS GRUPO SANGUINEO:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtAnalisisResultadoVariosGrupoSanguineo" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">RH:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtRhResultadoVariosGrupoSanguineo" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header bg-info text-center">
                            <h5 class="card-title mb-0 text-white">INMUNOSEROLOGIA</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label text-info">EXAMEN WIDAL:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtInmunoserologiaExamenWidalResultadosVarios" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">RESULTADO:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtInmunoserologiaResultadoResultadosVarios" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">VALOR NORMAL:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtInmunoserologiaVarlorNormalResultadosVarios" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header bg-info text-center">
                            <h5 class="card-title mb-0 text-white">DENGUE</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <label class="form-label text-info">ANALISIS:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtAnalisisDengueResultadosVarios" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">RESULTADO:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtResultadoDengueResultadosVarios" />
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label text-info">VALOR NORMAL:</label>
                                    <input type="text" class="form-control bg-amarillo" id="txtValorNormalDengueResultadosVarios" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" id="idRetrocederVistaResutltadosVarios" />
                        <i class="fal fa-arrow-left"></i>
                    </button>
                    <button
                        class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow"
                        id="btnGuardarResultadoVarios"
                    >
                        <i class="fal fa-save"></i>
                    </button>

                </div>
            `;  
        },
        vista_modal_pacientes_copro() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_coprologia">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-2">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class="thead-primary">
                                                    <tr>
                                                        <td class="text-white">ID PACIENTE</td>
                                                        <td class="text-white">NOMBRE</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblCatalogoPacientesCoprologia">
                                                   
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
                            <button class="btn btn-circle btn-xl btn-bottom-r btn-info btn-rounded" onclick="modalAgregarNuevoUsuarioCoprologia()">
                                <i class="fal fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        vista_modal_pacientes_urologia() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_urologia">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-2">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class="thead-primary">
                                                    <tr>
                                                        <td class="text-white">ID PACIENTE</td>
                                                        <td class="text-white">NOMBRE</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblCatalogoPacientesUrologia">
                                                   
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
                            <button class="btn btn-circle btn-xl btn-bottom-r btn-info btn-rounded" onclick="modalAgregarNuevoUsuarioUrologia()">
                                <i class="fal fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        vista_modal_enfermedades_infecciosas_pacientes() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_enfermedades_infecciosas">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-2">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class="thead-primary">
                                                    <tr>
                                                        <td class="text-white">ID PACIENTE</td>
                                                        <td class="text-white">NOMBRE</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblCatalogoPacientesEnfermedadesInfecciosas">
                                                   
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
                            <button class="btn btn-circle btn-xl btn-bottom-r btn-info btn-rounded" onclick="modalAgregarNuevoUsuarioEnferInfecciosas()">
                                <i class="fal fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        vista_modal_enfermedades_bacteriologicos_pacientes() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_examenes_bacteriologicos">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-2">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class="thead-primary">
                                                    <tr>
                                                        <td class="text-white">ID PACIENTE</td>
                                                        <td class="text-white">NOMBRE</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblCatalogoPacientesExamenesBacteriologicos">
                                                   
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
                            <button class="btn btn-circle btn-xl btn-bottom-r btn-info btn-rounded" onclick="modalAgregarNuevoUsuarioEnferBacteriologico()">
                                <i class="fal fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        vista_modal_pacientes_hemoglobina_pacientes() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_hemoglobina">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-2">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class="thead-primary">
                                                    <tr>
                                                        <td class="text-white">ID PACIENTE</td>
                                                        <td class="text-white">NOMBRE</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblCatalogoPacientesHemoglobina">
                                                   
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
                            <button class="btn btn-circle btn-xl btn-bottom-r btn-info" onclick="modalAgregarNuevoUsuarioHemoglobina()">
                                <i class="fal fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        vista_modal_pruebas_especiales_pacientes() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_pruebas_especiales">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-2">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class="thead-primary">
                                                    <tr>
                                                        <td class="text-white">ID PACIENTE</td>
                                                        <td class="text-white">NOMBRE</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblCatalogoPacientesPruebasEspeciales">
                                                   
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
                            <button class="btn btn-circle btn-xl btn-info btn-bottom-r btn-rounded" onclick="modalAgregarNuevoUsuarioPruebasEspeciales()">
                            <i class="fal fa-user-plus"></i>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        vista_modal_hcg_cuantitativa_pacientes() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_hcg_cuantitativa">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-2">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class="thead-primary">
                                                    <tr>
                                                        <td class="text-white">ID PACIENTE</td>
                                                        <td class="text-white">NOMBRE</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblCatalogoPacientesHgcCuantitativa">
                                                   
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
                            <button class="btn btn-circle btn-xl btn-bottom-r btn-info btn-rounded" onclick="modalAgregarNuevoUsuarioHcgCuantitativa()">
                                <i class="fal fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        vista_modal_quimica_sanguinea() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_quimica_sanguinea">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-2">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class="thead-primary">
                                                    <tr>
                                                        <td class="text-white">ID PACIENTE</td>
                                                        <td class="text-white">NOMBRE</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblCatalogoPacientesQuimicaSanguinea">
                                                   
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
                            <button class="btn btn-circle btn-xl btn-bottom-r btn-info btn-rounded" onclick="modalAgregarNuevoUsuarioQuimicaSanguinea()">
                                <i class="fal fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        vista_modal_resultados_varios() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_resultados_varios">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-2">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class="thead-primary">
                                                    <tr>
                                                        <td class="text-white">ID PACIENTE</td>
                                                        <td class="text-white">NOMBRE</td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody id="tblCatalogoPacientesResultadosVarios">
                                                   
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
                            <button class="btn btn-circle btn-xl btn-bottom-r btn-info btn-rounded" onclick="modalAgregarNuevoUsuarioResultadosVarios()">
                                <i class="fal fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
                                            <input type="text" class="form-control" id="txtnoDPIPaciente"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePacientePaciente"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita text-info" id="txtFechaNacimientoPaciente"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control negrita text-info" id="cmbEmpresaPacientePaciente">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" onclick="btnAbrirModalEmpresaPaciente()">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPacientePaciente">
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
                                            <input type="text" class="form-control" id="txtNombreEmpresaPaciente"/>
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
                                                            <td class="text-white">ID EMPRESA</td>
                                                            <td class="text-white">NOMBRE</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientesLaboratorioPacientes">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPacienteLaboratorioPaciente">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        vista_modal_agregar_paciente_urologia:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente_urologia">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPIUro"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePacienteUro"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita text-info" id="txtFechaNacimientoUro"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control negrita text-info" id="cmbEmpresaPacienteUro">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" onclick="btnAbrirModalEmpresaUro()">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPacienteUro">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas_urologia:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa_urologia">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresaUro"/>
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
                                                            <td class="text-white">ID EMPRESA</td>
                                                            <td class="text-white">NOMBRE</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientesLaboratorioUro">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPacienteLaboratorioUro">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        vista_modal_agregar_paciente_enfer_infecciosas:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente_enfer_infecciosas">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPIEnferInfecciosas"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePacienteEnferInfecciosas"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita text-info" id="txtFechaNacimientoEnferInfecciosas"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control negrita text-info" id="cmbEmpresaPacienteEnferInfecciones">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" onclick="btnAbrirModalEmpresaEnferInfecciosas()">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPacienteEnferInfecciosas">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas_enfer_infecciosas:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa_enfer_infecciosas">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresaEnferInfecciosas"/>
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
                                                            <td class="text-white">ID EMPRESA</td>
                                                            <td class="text-white">NOMBRE</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientesLaboratorioEnferInfecciosas">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        vista_modal_agregar_paciente_enfer_bacteriologico:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente_enfer_bacteriologico">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPIEnferBacteriologico"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePacienteEnferBacteriologico"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita text-info" id="txtFechaNacimientoEnferBacteriologico"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control negrita text-info" id="cmbEmpresaPacienteEnferBacteriologico">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" onclick="btnAbrirModalEmpresaEnferBacteriologico()">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPacienteEnferBacteriologico">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas_enfer_bacteriologico:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa_enfer_bacteriologico">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresaEnferBacteriologico"/>
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
                                                            <td class="text-white">ID EMPRESA</td>
                                                            <td class="text-white">NOMBRE</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientesLaboratorioEnferBacteriologico">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        vista_modal_agregar_paciente_hemoglobina:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente_hemoglobina">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPIHemoglobina"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control negrita" id="txtNombrePacienteHemoglobina"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita text-info" id="txtFechaNacimientoHemoglobina"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control negrita text-info" id="cmbEmpresaPacienteHemoglobina">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" onclick="btnAbrirModalEmpresaHemoglobina()">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPacienteHemoglobina">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas_hemoglobina:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa_hemoglobina">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresaHemoglobina"/>
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
                                                            <td class="text-white">ID EMPRESA</td>
                                                            <td class="text-white">NOMBRE</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientesLaboratorioHemoglobina">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPacienteLaboratorioHemoglobina">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        vista_modal_agregar_paciente_pruebas_especiales:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente_pruebas_especiales">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPIPruebasEspeciales"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePacientePruebasEspeciales"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita text-info" id="txtFechaNacimientoPruebasEspeciales"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control negrita text-info" id="cmbEmpresaPacientePruebasEspeciales">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" onclick="btnAbrirModalEmpresaPruebasEspeciales()">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPacientePruebasEspeciales">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas_pruebas_especiales:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa_pruebas_especiales">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresaPruebasEspeciales"/>
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
                                                            <td class="text-white">ID EMPRESA</td>
                                                            <td class="text-white">NOMBRE</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientesLaboratorioPruebasEspeciales">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        vista_modal_agregar_paciente_hcg_cuantitativa:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente_hcg_cuantitativa">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPIHcgCuantitativa"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePacienteHcgCuantitativa"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita text-info" id="txtFechaNacimientoHcgCuantitativa"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control negrita text-info" id="cmbEmpresaPacienteHcgCuantitativa">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" onclick="btnAbrirModalEmpresaHcgCuantitativa()">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPacienteHcgCuantitativa">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas_hcg_cuantitativa:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa_hcg_cuantitativa">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresaHcgCuantitativa"/>
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
                                                            <td class="text-white">ID EMPRESA</td>
                                                            <td class="text-white">NOMBRE</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientesLaboratorioHcgCuantitativa">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        vista_modal_agregar_quimica_sanguinea:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente_quimica_sanguinea">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPIQuimicaSanguinea"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePacienteQuimicaSanguinea"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita text-info" id="txtFechaNacimientoQuimicaSanguinea"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control negrita text-info" id="cmbEmpresaPacienteQuimicaSanguinea">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" onclick="btnAbrirModalEmpresaQuimicaSanguinea()">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPacienteQuimicaSanguinea">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas_quimica_sanguinea:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa_quimica_sanguinea">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresaQuimicaSanguinea"/>
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
                                                            <td class="text-white">ID EMPRESA</td>
                                                            <td class="text-white">NOMBRE</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientesLaboratorioQuimicaSanguinea">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        vista_modal_agregar_resultados_varios:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente_resultados_varios">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>NO. DPI:</label>
                                            <input type="text" class="form-control" id="txtnoDPIResultadosVarios"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePacienteResultadosVarios"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control negrita text-info" id="txtFechaNacimientoResultadosVarios"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control negrita text-info" id="cmbEmpresaPacienteResultadosVarios">
                                                    
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" onclick="btnAbrirModalEmpresaResultadosVarios()">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPacienteResultadosVarios">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas_resultados_varios:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa_resultados_varios">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresaResultadosVarios"/>
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
                                                            <td class="text-white">ID EMPRESA</td>
                                                            <td class="text-white">NOMBRE</td>
                                                            <td></td>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientesLaboratorioResultadosVarios">
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
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPacienteLaboratorioResultadosVarios">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
    
    }
    


    root.innerHTML = view.body();
    
};

function addListeners(){
    navegacionPage();
    cargarEmpresasLaboratorioPaciente();
    cargarEmpresasLaboratorioUro();
    cargarEmpresasLaboratorioEnferBacteriologico();
    cargarEmpresasLaboratorioEnferInfecciosas();
    cargarEmpresasLaboratorioHemoglobina();
    cargarEmpresasLaboratorioHcgCuantitativa();
    cargarEmpresasLaboratorioQuimicaSanguinea();
    cargarEmpresasLaboratoriResultadosVarios();
    cargarEmpresasLaboratorioPruebasEspeciales()
    document.getElementById("fechaPaciente").value = F.getFecha();
    document.getElementById("txtFechaNacimientoPaciente").value = F.getFecha();


    catalogoPacientesParaNuevoExamen()
    .then((data) => {
        let strTablePacientes = '';
        data.forEach(pacientes => {
            strTablePacientes += `
                <tr>
                    <td class="negrita">${pacientes.no_dpi || 'Sin Documento de identificación'}</td>
                    <td class="negrita">${pacientes.nombre_paciente}</td>
                    <td class="negrita">${F.formatearFechaANormal(pacientes.fecha_nacimiento)}</td>
                    <td class="negrita">${pacientes.nombre_empresa}</td>
                    <td>
                        <button class="btn btn-sm btn-success btn-rounded"
                            data-nombre="${pacientes.nombre_paciente}"
                            data-id="${pacientes.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>  
                </tr>
            `;
        });
        document.getElementById("tblPacientesParaExamenes").innerHTML = strTablePacientes;
        
        // Agregar evento de click a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblPacientesParaExamenes .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPacientesPaciente").value = nombrePaciente;
                F.slideAnimationTabs();
                const tabTres = document.getElementById("tab-doce"); // Selecciona la pestaña "dos"
                const tabLink = new bootstrap.Tab(tabTres); // Usamos Bootstrap Tab para cambiar de pestaña
                tabLink.show();
                // document.getElementById("nombrePaciente").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                // $("#modal_catalogo_pacientes_coprologia").modal('hide');
            });
        });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblPacientesParaExamenes").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })

    let btnGuardarExamenCopro = document.getElementById("btnGuardarExamenCopro");
    btnGuardarExamenCopro.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar el examen?")
        .then((value) => {
            if(value==true) {
                
               
                let importe = document.getElementById("FloatImporteCiprologia").value || '';
                if(importe==''){F.AvisoError("Ingrese el valor de IMPORTE!!!");return};

                let colorHecesMacro = document.getElementById("colorHecesMacroscopio").value || '';
                if(colorHecesMacro==''){F.AvisoError("Ingrese el valor en COLOR DE HECES!!!");return;};

                let restoAlimentacionMacro = document.getElementById("restoAlimenticiosMacro").value || '';
                if(restoAlimentacionMacro==''){F.AvisoError("Ingrese el valor en RESTOS DE ALIMENTOS!!!");return;};

                let sangreMacro = document.getElementById("sangreMacro").value || '';
                if(sangreMacro==''){F.AvisoError("Ingrese el valor en SANGRE!!!");return;};

                let consistenciaMacro = document.getElementById("consistenciaMacro").value || '';
                if(consistenciaMacro==''){F.AvisoError("Ingrese el valor en CONSISTENCIA!!!");return;};

                let mocoMacro = document.getElementById("mocoMacro").value || '';
                if(mocoMacro==''){F.AvisoError("Ingrese el valor de MOCO!!!");return;};

                let phMacro = document.getElementById("phMacro").value || '';
                if(phMacro==''){F.AvisoError("Ingrese el valor en PH!!!");return;};

                let leucocitosQuimicos = document.getElementById("leucocitosQuimico").value || '';
                if(leucocitosQuimicos==''){F.AvisoError("Ingrese el valor en LEUCOCITOS");return;};

                let celulasQuimico = document.getElementById("celulasVegQuimico").value || '';
                if(celulasQuimico==''){F.AvisoError("Ingrese el valor en CELULAS");return;};

                let almidonesQuimico = document.getElementById("almidonesQuimico").value || '';
                if(almidonesQuimico==''){F.AvisoError("Ingrese el valor en ALMIDONES");return;}

                let levadurasQuimico = document.getElementById("levadurasQuimico").value || '';
                if(levadurasQuimico==''){F.AvisoError("Ingrese el valor en LEVADURAS");return;};

                let huevoQuimico = document.getElementById("huevoQuimico").value || '';
                if(huevoQuimico==''){F.AvisoError("Ingrese el valor en HUEVO");return;};

                let quistesQuimico = document.getElementById("quistesQuimico").value || '';
                if(quistesQuimico==''){F.AvisoError("Ingrese el valor en QUISTES");return;};

                let eritrocitosMicro = document.getElementById("eritrocitosMicro").value || '';
                if(eritrocitosMicro==''){F.AvisoError("Ingrese el valor en ERITROCITOS");return;};

                let grasasMicro = document.getElementById("grasasMicro").value || '';
                if(grasasMicro==''){F.AvisoError("Ingrese el valor en GRASAS");return;};

                let jabonMicro = document.getElementById("jabonMicro").value || '';
                if(jabonMicro==''){F.AvisoError("Ingrese el valor en JABON");return;};

                let bacterias = document.getElementById("bacteriasMicro").value || '';
                if(bacterias==''){F.AvisoError("Ingrese el valor en BACTERIAS");return;};

                btnGuardarExamenCopro.disabled = true;
                btnGuardarExamenCopro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insertDatosExamenCipro()
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!");
                    btnGuardarExamenCopro.disabled = false;
                    btnGuardarExamenCopro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    // getAbrirExamenEnPdf()
                    limpiarDatosDeExamenCoprologia()
                })
                .catch((e) => {
                    if (e instanceof TypeError) {
                        F.AvisoError("Error de conexión. Revise su red.");
                    } else {
                        F.AvisoError("No se pudo guardar el examen: " + e.message);
                    }
                    console.error("Error detallado:", e);
                })
                .finally(() => {
                    btnGuardarExamenCopro.disabled = false;
                    btnGuardarExamenCopro.innerHTML = `<i class="fal fa-save"></i>`; 
                })
            }
        })
        .catch((error) => {
            F.AvisoError("Hubo un error al guardar con la peticion");
            console.error(error);
        })
    })

    let btnGuardarExamenUrologia = document.getElementById('btnGuardarExamenUrologia');
    btnGuardarExamenUrologia.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro de guardar el examen?")
        .then((value) => {
            if(value == true) {

                
                let importeUro = document.getElementById("FloatImporteUrologia").value || '';
                if(importeUro==''){F.AvisoError("Ingrese el valor de IMPORTE!!!");return;};

                let colorHecesMacroUro = document.getElementById("colorHecesMacroUrologia").value || '';
                if(colorHecesMacroUro==''){F.AvisoError("Ingrese el valor en COLOR DE HECES!!!");return;};

                let aspectoMacroUro = document.getElementById("aspectoMacroUrologia").value || '';
                if(aspectoMacroUro==''){F.AvisoError("Ingrese el valor de ASPECTO");return;};

                let densidadMacroUro = document.getElementById("densidadMacroUrologia").value || '';
                if(densidadMacroUro==''){F.AvisoError("Ingrese el valor en DENSIDAD");return;};

                let phMacroUro = document.getElementById("phMacroUrologia").value || '';
                if(phMacroUro==''){F.AvisoError("Ingrese el valor en PH!!!");return;};

                let leucocitosQuimUro = document.getElementById("leucocitosQuimicoUrologia").value || '';
                if(leucocitosQuimUro==''){F.AvisoError("Ingrese el valor en LEUCOCITOS");return;};

                let glucosaQuimUro = document.getElementById("glucosaQuimicoUrologia").value || '';
                if(glucosaQuimUro==''){F.AvisoError("Ingrese el valor en GLUCOSA");return;};

                let proteinasQuimUro = document.getElementById("proteinasQuimicoUrologia").value || '';
                if(proteinasQuimUro==''){F.AvisoError("Ingrese el valor en PROTEINAS");return;};

                let cetonasQuimUro = document.getElementById("cetonasQuimicoUrologia").value || '';
                if(cetonasQuimUro==''){F.AvisoError("Ingrese el valor en CETONAS");return;};

                let hemoglobinaQuimUro = document.getElementById("hemoglobinaQuimicoUrologia").value || '';
                if(hemoglobinaQuimUro==''){F.AvisoError("Ingrese el valor en HEMOGLOBINA");return;};

                let urobiligenoQuimUro = document.getElementById("urobiligenoQuimicoUrologia").value || '';
                if(urobiligenoQuimUro==''){F.AvisoError("Ingrese el valor en UROBILIGENO");return;};

                let nitritosQuimUro = document.getElementById("nitritoQuimicoUrologia").value || '';
                if(nitritosQuimUro==''){F.AvisoError("Ingrese el valor en NITRITOS");return;};

                let acidoAscorbicoQuimUro = document.getElementById("acidoAscorbicoQuimicoUrologia").value || '';
                if(acidoAscorbicoQuimUro==''){F.AvisoError("Ingrese el valor en ACIDO ASCORBICO");return;};

                let bilirrubinaQuimUro = document.getElementById("bilirrubinaQuimicoUrologia").value || '';
                if(bilirrubinaQuimUro==''){F.AvisoError("Ingrese el valor en BILIRRUBINA");return;};                

                let leucocitosMicroUro = document.getElementById("leucocitosMicroUrologia").value || '';
                if(leucocitosMicroUro==''){F.AvisoError("Ingrese el valor de LEUCOCITOS");return;};

                let eritrocitosMicroUro = document.getElementById("eritrocitosMicroUrologia").value || '';
                if(eritrocitosMicroUro==''){F.AvisoError("Ingrese el valor de ERITROCITOS");return;};

                let epitelialesMicroUro = document.getElementById("epitelialesMicroUrologia").value || '';
                if(epitelialesMicroUro==''){F.AvisoError("Ingrese el valor de EPITELIALES");return;};

                let bacteriasMicroUro = document.getElementById("bacteriasMicroUrologia").value || '';
                if(bacteriasMicroUro==''){F.AvisoError("Ingrese el valor de BACTERIAS");return;};

                let cristalesMicroUro = document.getElementById("cristalesMicroUrologia").value || '';
                if(cristalesMicroUro==''){F.AvisoError("Ingrese el valor de CRISTALES");return;};

                let cilindrosMicroUro = document.getElementById("cilindrosMicroUrologia").value || '';
                if(cilindrosMicroUro==''){F.AvisoError("Ingrese el valor de CILINDROS");return;};

                let otroMicroUro = document.getElementById("otrosMicroUrologia").value || '';
                if(otroMicroUro==''){F.AvisoError("Ingrese el valor de OTROS");return;};

                btnGuardarExamenUrologia.disabled = true;
                btnGuardarExamenUrologia.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insertDatosExamenUro()
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!");
                    btnGuardarExamenUrologia.disabled = false;
                    btnGuardarExamenUrologia.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    limpiarDatosDeExamenUrologia()
                })
                .catch((e) => {
                    if (e instanceof TypeError) {
                        F.AvisoError("Error de conexión. Revise su red.");
                    } else {
                        F.AvisoError("No se pudo guardar el examen: " + e.message);
                    }
                    console.error("Error detallado:", e);
                })
                .finally(() => {
                    btnGuardarExamenCopro.disabled = false;
                    btnGuardarExamenCopro.innerHTML = `<i class="fal fa-save"></i>`; 
                })

            }
        })
        .catch((error) => {
            F.AvisoError("Hubo un error al guardar con la peticion");
            console.error(error);
        })        
    })
    

    // Agregar eventos de filtrado
    document.getElementById("txtFiltrarBusquedaDePaciente").addEventListener("input", filtrarPacientesPorNombre);
    document.querySelector("#txtFiltrarBusquedaDePaciente + button").addEventListener("click", filtrarPacientesPorNombreClick);


    // Cargar pacientes al iniciar
    cargarPacientes();

    
};

function initView(){

    getView();
    addListeners();

};


function navegacionPage() {
    document.getElementById("card_coproanalisis").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-dos").click();
    });

    document.getElementById("card_uroanalisis").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-tres").click()
    });

    document.getElementById("enfermedades_infecciosas").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-cuatro").click();
    })

    document.getElementById("card_enfermedades_bacteriologicos").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-cinco").click();
    });

    document.getElementById("card_hemoglobina_glicosilada").addEventListener('click', () => {
        F.slideAnimationTabs();
        document.getElementById("tab-seis").click();
    })

    document.getElementById("card_pruebas_especiales").addEventListener('click', () => {
        F.slideAnimationTabs();
        document.getElementById("tab-siete").click();
    })

    document.getElementById("card_examenes_hcg_cuantitativa").addEventListener('click', () => {
        F.slideAnimationTabs();
        document.getElementById("tab-ocho").click();
    })

    document.getElementById("card_examenes_quimica_sanguinea").addEventListener('click', () => {
        F.slideAnimationTabs();
        document.getElementById("tab-nueve").click();
    })

    document.getElementById("card_examenes_resultados_varios").addEventListener('click', () => {
        F.slideAnimationTabs();
        document.getElementById("tab-diez").click();
    })

    document.getElementById("card_nuevo_examen").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-once").click();
    });

    document.getElementById("card_tbla_pacientes").addEventListener('click', () => {
        Navegar.registroPacientes(); 
    });

    document.getElementById("card_tbla_examenes").addEventListener('click', () => {
        Navegar.examenes();
    })

    document.getElementById("idRetrocederVistaCardsExamenes").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-once").click();
    });

    document.getElementById("idRetrocederDeVistaExamenCoprologia").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-doce").click();
    });

    document.getElementById("idRetrocederDeVistaExamenUrologia").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-doce").click();
    });
    
    document.getElementById("idRetrocederVistaDeEnfermedadesInfecciosas").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-doce").click();
    });
    
    document.getElementById("idRetrocederVistaEnfermedadesBacteriologicos").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-doce").click();
    });
    
    document.getElementById("idRetrocederVistaHemoglobinaGlicosilada").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-doce").click();
    });
    
    document.getElementById("idRetrocederVistaPruebasEspeciales").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-doce").click();
    });

    document.getElementById("idRetrocederVistaHcgCuantitativa").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-doce").click();
    });

    document.getElementById("idRetrocederVistaQuimicaSanguinea").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-doce").click();
    });

    document.getElementById("idRetrocederVistaResutltadosVarios").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-doce").click();
    });

}



// Función para filtrar mientras se escribe
function filtrarPacientesPorNombre() {
    const filtro = this.value.toLowerCase();
    if (filtro.length === 0) {
        dibujarTablaPacientes(todosLosPacientes);
        return;
    }
    
    const pacientesFiltrados = todosLosPacientes.filter(paciente => {
        // Buscar en nombre
        const nombreMatch = paciente.nombre_paciente.toLowerCase().includes(filtro);
        
        // Buscar en DPI (eliminando guiones para mejor búsqueda)
        const dpiClean = paciente.no_dpi ? paciente.no_dpi.replace(/-/g, '') : '';
        const dpiMatch = dpiClean.includes(filtro.replace(/-/g, ''));
        
        // Buscar en fecha (formateada)
        const fechaFormateada = F.formatearFechaANormal(paciente.fecha_nacimiento);
        const fechaMatch = fechaFormateada.includes(filtro);
        
        return nombreMatch || dpiMatch || fechaMatch;
    });
    
    dibujarTablaPacientes(pacientesFiltrados);
}

// Función para filtrar al hacer click en el botón
function filtrarPacientesPorNombreClick() {
    const input = document.getElementById("txtFiltrarBusquedaDePaciente");
    const filtro = input.value.toLowerCase();
    
    if (filtro.length === 0) {
        dibujarTablaPacientes(todosLosPacientes);
        return;
    }
    
    const pacientesFiltrados = todosLosPacientes.filter(paciente => {
        // Buscar en nombre
        const nombreMatch = paciente.nombre_paciente.toLowerCase().includes(filtro);
        
        // Buscar en DPI (eliminando guiones para mejor búsqueda)
        const dpiClean = paciente.no_dpi ? paciente.no_dpi.replace(/-/g, '') : '';
        const dpiMatch = dpiClean.includes(filtro.replace(/-/g, ''));
        
        // Buscar en fecha (formateada)
        const fechaFormateada = F.formatearFechaANormal(paciente.fecha_nacimiento);
        const fechaMatch = fechaFormateada.includes(filtro);
        
        return nombreMatch || dpiMatch || fechaMatch;
    });
    
    dibujarTablaPacientes(pacientesFiltrados);
}

function limpiarDatosDeExamenCoprologia() {
    document.getElementById("FloatImporteCiprologia").value = '';
    document.getElementById("colorHecesMacroscopio").value = '';
    document.getElementById("restoAlimenticiosMacro").value = '';
    document.getElementById("sangreMacro").value = '';  
    document.getElementById("consistenciaMacro").value = '';
    document.getElementById("mocoMacro").value = '';
    document.getElementById("phMacro").value = '';
    document.getElementById("leucocitosQuimico").value = '';
    document.getElementById("celulasVegQuimico").value = '';
    document.getElementById("almidonesQuimico").value = '';
    document.getElementById("levadurasQuimico").value = '';
    document.getElementById("huevoQuimico").value = '';
    document.getElementById("quistesQuimico").value = '';
    document.getElementById("eritrocitosMicro").value = '';
    document.getElementById("grasasMicro").value = '';
    document.getElementById("jabonMicro").value = '';
    document.getElementById("bacteriasMicro").value = '';               
}

function dibujarTablaPacientes(data) {
    let strTable = '';
    
    if (data.length === 0) {
        strTable = '<tr><td colspan="5">No se encontraron pacientes</td></tr>';
    } else {
        data.forEach(pacientesExamen => {
            strTable += `
                <tr>
                    <td class="negrita">${pacientesExamen.no_dpi || 'Sin Documento de identificación'}</td>
                    <td class="negrita">${pacientesExamen.nombre_paciente}</td>
                    <td class="negrita">${F.formatearFechaANormal(pacientesExamen.fecha_nacimiento)}</td>
                    <td class="negrita">${pacientesExamen.nombre_empresa}</td>
                    <td>
                        <button class="btn btn-sm btn-success btn-rounded"
                            data-nombre="${pacientesExamen.nombre_paciente}"
                            data-id="${pacientesExamen.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>  
                </tr>
            `;
        });
    }
    
    document.getElementById("tblPacientesParaExamenes").innerHTML = strTable;
    
    // Agregar evento de click a los botones de agregar
    const botonesAgregar = document.querySelectorAll("#tblPacientesParaExamenes .btn-rounded");
    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const nombrePaciente = boton.getAttribute("data-nombre");
            const idPaciente = boton.getAttribute("data-id");

            // Guardar el ID del paciente en la variable global
            GlobalIdPaciente = idPaciente;

            // Actualizar el campo de búsqueda con el nombre del paciente
            document.getElementById("txtFiltrarPacientesPaciente").value = nombrePaciente;
            F.slideAnimationTabs();
            const tabTres = document.getElementById("tab-doce"); // Selecciona la pestaña "dos"
            const tabLink = new bootstrap.Tab(tabTres); // Usamos Bootstrap Tab para cambiar de pestaña
            tabLink.show();
            // document.getElementById("nombrePaciente").value = nombrePaciente;

            // Cerrar el modal (si estás usando Bootstrap)
            // $("#modal_catalogo_pacientes_coprologia").modal('hide');
        });
    });
}

async function btnAgregarPacienteModal() {
    $("#modal_agregar_paciente").modal('show'); 

    let btnGuardarPacientePaciente = document.getElementById('btnGuardarPacientePaciente');
    btnGuardarPacientePaciente.addEventListener('click', async () => {
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
            .then(async (value) => {
                if(value==true) {
                    let noDPI = document.getElementById("txtnoDPIPaciente").value;
                    let nombrePaciente = document.getElementById("txtNombrePacientePaciente").value;
                    let fecha_nacimiento = document.getElementById("txtFechaNacimientoPaciente").value;
                    let empresaPaciente = document.getElementById("cmbEmpresaPacientePaciente").value;
    
                    btnGuardarPacientePaciente.disabled = true;
                    btnGuardarPacientePaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    
                    try {
                        await insert_paciente_laboratorio(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                        F.Aviso("Paciente guardado exitosamente!!!");
                        limpiarDatosAgregarPacientes()
                        
                        // Actualizar la lista completa de pacientes
                        todosLosPacientes = await catalogoPacientesParaNuevoExamen();
                        dibujarTablaPacientes(todosLosPacientes);
                        
                        $("#modal_agregar_paciente").modal('hide');
                    } catch (e) {
                        F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                        console.error(`Error al agregar paciente: ${e}`);
                    } finally {
                        btnGuardarPacientePaciente.disabled = false;
                        btnGuardarPacientePaciente.innerHTML = `<i class="fal fa-save"></i>`;
                    }
                }
            });
    });
}

function limpiarDatosAgregarPacientes() {
    document.getElementById("txtnoDPIPaciente").value = '';
    document.getElementById("txtNombrePacientePaciente").value = '';
    document.getElementById("txtFechaNacimientoPaciente").value = F.getFecha();
    document.getElementById("cmbEmpresaPacientePaciente").value = '';
}

function btnAbrirModalEmpresaPaciente(){
    $("#modal_agregar_empresa").modal('show');

    let btnGuardarEmpresaPacienteLaboratorioPaciente = document.getElementById("btnGuardarEmpresaPacienteLaboratorioPaciente");
    btnGuardarEmpresaPacienteLaboratorioPaciente.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresaPaciente").value;
                
                btnGuardarEmpresaPacienteLaboratorioPaciente.disabled = true;
                btnGuardarEmpresaPacienteLaboratorioPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa").modal('hide'); 
                    cargarEmpresasLaboratorioPaciente();
                    // limpiar_input_empresa();
                   
                    btnGuardarEmpresaPacienteLaboratorioPaciente.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.error(`Error guardar empresa: ${e}`);
                    btnGuardarEmpresaPacienteLaboratorioPaciente.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioPaciente.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPacienteLaboratorioPaciente.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioPaciente.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function cargarEmpresasLaboratorioPaciente() {
    get_data_empresas_pacientes_laboratorio()
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
            document.getElementById("tblDeEmpresasPacientesLaboratorioPacientes").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPacientePaciente').innerHTML = strCombo;
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("cmbEmpresaPacientePaciente").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPacientePaciente').innerHTML = '<option value="">No hay datos</option>';
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function limpiarDatosDeExamenUrologia() {
    document.getElementById("FloatImporteUrologia").value = '';
    document.getElementById("colorHecesMacroUrologia").value = '';
    document.getElementById("aspectoMacroUrologia").value = '';
    document.getElementById("densidadMacroUrologia").value = '';
    document.getElementById("phMacroUrologia").value = '';
    document.getElementById("leucocitosQuimicoUrologia").value = '';
    document.getElementById("glucosaQuimicoUrologia").value = '';
    document.getElementById("proteinasQuimicoUrologia").value = '';
    document.getElementById("cetonasQuimicoUrologia").value = '';
    document.getElementById("hemoglobinaQuimicoUrologia").value = '';
    document.getElementById("urobiligenoQuimicoUrologia").value = '';
    document.getElementById("nitritoQuimicoUrologia").value = '';
    document.getElementById("acidoAscorbicoQuimicoUrologia").value = '';
    document.getElementById("bilirrubinaQuimicoUrologia").value = '';
    document.getElementById("leucocitosMicroUrologia").value = '';
    document.getElementById("eritrocitosMicroUrologia").value = '';
    document.getElementById("epitelialesMicroUrologia").value = '';
    document.getElementById("bacteriasMicroUrologia").value = '';
    document.getElementById("cristalesMicroUrologia").value = '';
    document.getElementById("cilindrosMicroUrologia").value = '';
    document.getElementById("otrosMicroUrologia").value = '';
}

function modalAgregarNuevoUsuarioUrologia() {
    $("#modal_agregar_paciente_urologia").modal('show'); 

    let btnGuardarPacienteUro = document.getElementById('btnGuardarPacienteUro');
    btnGuardarPacienteUro.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
            .then((value) => {
                if(value==true) {
                    let noDPI = document.getElementById("txtnoDPIUro").value;
                    let nombrePaciente = document.getElementById("txtNombrePacienteUro").value;
                    let fecha_nacimiento = document.getElementById("txtFechaNacimientoUro").value;
                    let empresaPaciente = document.getElementById("cmbEmpresaPacienteUro").value;
    
                    
                    btnGuardarPacienteUro.disabled = true;
                    btnGuardarPacienteUro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    
    
                    insert_paciente_laboratorio(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                    .then(() => {
                        F.Aviso("Paciente guardado exitosamente!!!");
                        $("#modal_agregar_paciente_urologia").modal('hide');
                        catalogoPacientesUro();
                        // limpiar_datos_pacientes();
    
                        btnGuardarPacienteUro.disabled = false;
                        btnGuardarPacienteUro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    })
                    .catch((e) => {
                        F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                        console.error(`Error al agregar paciente: ${e}`);
                        btnGuardarPacienteUro.disabled = false;
                        btnGuardarPacienteUro.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                    .finally(() => {
                        btnGuardarPacienteUro.disabled = false;
                        btnGuardarPacienteUro.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                }
            })
        
    })
}

function btnAbrirModalEmpresaUro(){
    $("#modal_agregar_empresa_urologia").modal('show');

    let btnGuardarEmpresaPacienteLaboratorioUro = document.getElementById("btnGuardarEmpresaPacienteLaboratorioUro");
    btnGuardarEmpresaPacienteLaboratorioUro.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresaUro").value;
                
                btnGuardarEmpresaPacienteLaboratorioUro.disabled = true;
                btnGuardarEmpresaPacienteLaboratorioUro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa").modal('hide'); 
                    cargarEmpresasLaboratorioUro();
                    // limpiar_input_empresa();
                   
                    btnGuardarEmpresaPacienteLaboratorioUro.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioUro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.error(`Error guardar empresa: ${e}`);
                    btnGuardarEmpresaPacienteLaboratorioUro.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioUro.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPacienteLaboratorioUro.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioUro.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function cargarEmpresasLaboratorioUro() {
    get_data_empresas_pacientes_laboratorio()
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
            document.getElementById("tblDeEmpresasPacientesLaboratorioUro").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPacienteUro').innerHTML = strCombo;
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("cmbEmpresaPacienteUro").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPacienteUro').innerHTML = '<option value="">No hay datos</option>';
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function getAbrirModalPacientesEnfInfecciosas() {
    $("#modal_catalogo_pacientes_enfermedades_infecciosas").modal("show");

    let btnGuardarExamenEnfermedadesInfecc = document.getElementById("btnGuardarExamenEnfermedadesInfecc");
    btnGuardarExamenEnfermedadesInfecc.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro de guardar el examen?")
        .then((value) => {
            if(value==true) {

                let importe = document.getElementById("floatImporteEnfInfecciosas").value || '';
                if(importe==''){F.AvisoError("Ingrese el valor del IMPORTE!!!");return};

                let AnalisisEnfermedadesInfecciosas = document.getElementById("txtAnalisisEnfermedadesInfecciosas").value || '';
                if(AnalisisEnfermedadesInfecciosas==''){F.AvisoError("Ingrese el valor de ANALISIS!!!");return;}

                let resultadosEnfermedadesInfecciosas = document.getElementById("txtResultadosEnfermedadesInfecciosas").value || '';
                if(resultadosEnfermedadesInfecciosas==''){F.AvisoError("Ingrese el valor de RESULTADO!!!");return;}

                let valorReferenciaEnfermedadesInfecciosas = document.getElementById("txtValorReferenciaEnfermedadesInfecciosas").value || '';
                if(valorReferenciaEnfermedadesInfecciosas==''){F.AvisoError("Ingrese el valor de VALOR REFERENCIA!!!");return;}

                btnGuardarExamenEnfermedadesInfecc.disabled = true;
                btnGuardarExamenEnfermedadesInfecc.innerHTML = `<i class="fal fa-spin"></i>`;

                insertDatosEnfermedadesInfecciosas()
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!");
                    btnGuardarExamenEnfermedadesInfecc.disabled = false;
                    btnGuardarExamenEnfermedadesInfecc.innerHTML = `<i class="fal fa-save"></i>`;
                    Navegar.laboratorista();
                })
                .catch((e) => {
                    if (e instanceof TypeError) {
                        F.AvisoError("Error de conexión. Revise su red.");
                    } else {
                        F.AvisoError("No se pudo guardar el examen: " + e.message);
                    }
                    console.error("Error detallado:", e);
                })
                .finally(() => {
                    btnGuardarExamenEnfermedadesInfecc.disabled = false;
                    btnGuardarExamenEnfermedadesInfecc.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function modalAgregarNuevoUsuarioEnferInfecciosas(){
    $("#modal_agregar_paciente_enfer_infecciosas").modal('show'); 

    let btnGuardarPacienteEnferInfecciosas = document.getElementById('btnGuardarPacienteEnferInfecciosas');
    btnGuardarPacienteEnferInfecciosas.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
            .then((value) => {
                if(value==true) {
                    let noDPI = document.getElementById("txtnoDPIEnferInfecciosas").value;
                    let nombrePaciente = document.getElementById("txtNombrePacienteEnferInfecciosas").value;
                    let fecha_nacimiento = document.getElementById("txtFechaNacimientoEnferInfecciosas").value;
                    let empresaPaciente = document.getElementById("cmbEmpresaPacienteEnferInfecciones").value;
    
                    
                    btnGuardarPacienteEnferInfecciosas.disabled = true;
                    btnGuardarPacienteEnferInfecciosas.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    
    
                    insert_paciente_laboratorio(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                    .then(() => {
                        F.Aviso("Paciente guardado exitosamente!!!");
                        catalogoPacientes();
                        $("#modal_agregar_paciente_enfer_infecciosas").modal('hide');
                        // limpiar_datos_pacientes();
    
                        btnGuardarPacienteEnferInfecciosas.disabled = false;
                        btnGuardarPacienteEnferInfecciosas.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    })
                    .catch((e) => {
                        F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                        console.error(`Error al agregar paciente: ${e}`);
                        btnGuardarPacienteEnferInfecciosas.disabled = false;
                        btnGuardarPacienteEnferInfecciosas.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                    .finally(() => {
                        btnGuardarPacienteEnferInfecciosas.disabled = false;
                        btnGuardarPacienteEnferInfecciosas.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                }
            })
        
    })
}

function btnAbrirModalEmpresaEnferInfecciosas(){
    $("#modal_agregar_empresa_enfer_infecciosas").modal('show');

    let btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas = document.getElementById("btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas");
    btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresaEnferInfecciosas").value;
                
                btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas.disabled = true;
                btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa_enfer_infecciosas").modal('hide'); 
                    cargarEmpresasLaboratorioEnferInfecciosas();
                    // limpiar_input_empresa();
                   
                    btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.error(`Error guardar empresa: ${e}`);
                    btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioEnferInfecciosas.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function cargarEmpresasLaboratorioEnferInfecciosas() {
    get_data_empresas_pacientes_laboratorio()
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
            document.getElementById("tblDeEmpresasPacientesLaboratorioEnferInfecciosas").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPacienteEnferInfecciones').innerHTML = strCombo;
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("cmbEmpresaPacienteEnferInfecciones").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPacienteEnferInfecciones').innerHTML = '<option value="">No hay datos</option>';
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function getAbrirModalPacientesExamenesBacteriologicos() {
    $("#modal_catalogo_pacientes_examenes_bacteriologicos").modal("show");

    let btnGuardarExamenBacteriologicos = document.getElementById("btnGuardarExamenBacteriologicos");
    btnGuardarExamenBacteriologicos.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar el examen?")
        .then((value) => {
            if(value==true) {
                
                let importe = document.getElementById("floatImporteExamenesBacteriologicos").value || '';
                if(importe==''){F.AvisoError("Ingrese el valor del IMPORTE!!!");return};

                let examenesBacteriologicosAnalisis = document.getElementById("txtExamenesExamenesBacteriologicos").value || '';
                if(examenesBacteriologicosAnalisis==''){F.AvisoError("Ingrese el valor de ANALISIS!!!");return;}

                let resultadosExamenesBacteriologicos = document.getElementById("txtResultadosExamenesBacteriologicos").value || '';
                if(resultadosExamenesBacteriologicos==''){F.AvisoError("Ingrese el valor de RESULTADO!!!");return;}

                let valorReferenciaExamenesBacteriologicos = document.getElementById("txtValorReferenciaExamenesBacteriologicos").value || '';
                if(valorReferenciaExamenesBacteriologicos==''){F.AvisoError("Ingrese el valor de VALOR REFERENCIA!!!");return;}

                btnGuardarExamenBacteriologicos.disabled = true;
                btnGuardarExamenBacteriologicos.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insertDatosExamenesBacteriologicos()
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!")
                    btnGuardarExamenBacteriologicos.disabled = false;
                    btnGuardarExamenBacteriologicos.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    Navegar.laboratorista();
                })
                .catch((errr) => {
                    if (errr instanceof TypeError) {
                        F.AvisoError("Error de conexión. Revise su red.");
                    } else {
                        F.AvisoError("No se pudo guardar el examen: " + errr.message);
                    }
                    console.error("Error detallado:", errr);
                })
                .finally(() => {
                    btnGuardarExamenBacteriologicos.disabled = false;
                    btnGuardarExamenBacteriologicos.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })    
}

function modalAgregarNuevoUsuarioEnferBacteriologico(){
    $("#modal_agregar_paciente_enfer_bacteriologico").modal('show'); 

    let btnGuardarPacienteEnferBacteriologico = document.getElementById('btnGuardarPacienteEnferInfecciosas');
    btnGuardarPacienteEnferBacteriologico.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
            .then((value) => {
                if(value==true) {
                    let noDPI = document.getElementById("txtnoDPIEnferBacteriologico").value;
                    let nombrePaciente = document.getElementById("txtNombrePacienteEnferBacteriologico").value;
                    let fecha_nacimiento = document.getElementById("txtFechaNacimientoEnferBacteriologico").value;
                    let empresaPaciente = document.getElementById("txtFechaNacimientoEnferBacteriologico").value;
    
                    
                    btnGuardarPacienteEnferBacteriologico.disabled = true;
                    btnGuardarPacienteEnferBacteriologico.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    
    
                    insert_paciente_laboratorio(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                    .then(() => {
                        F.Aviso("Paciente guardado exitosamente!!!");
                        catalogoPacientes();
                        $("#modal_agregar_paciente_enfer_infecciosas").modal('hide');
                        // limpiar_datos_pacientes();
    
                        btnGuardarPacienteEnferBacteriologico.disabled = false;
                        btnGuardarPacienteEnferBacteriologico.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    })
                    .catch((e) => {
                        F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                        console.error(`Error al agregar paciente: ${e}`);
                        btnGuardarPacienteEnferBacteriologico.disabled = false;
                        btnGuardarPacienteEnferBacteriologico.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                    .finally(() => {
                        btnGuardarPacienteEnferBacteriologico.disabled = false;
                        btnGuardarPacienteEnferBacteriologico.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                }
            })
        
    })
}

function btnAbrirModalEmpresaEnferBacteriologico(){
    $("#modal_agregar_empresa_enfer_bacteriologico").modal('show');

    let btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico = document.getElementById("btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico");
    btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresaEnferBacteriologico").value;
                
                btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico.disabled = true;
                btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa_enfer_bacteriologico").modal('hide'); 
                    cargarEmpresasLaboratorioEnferBacteriologico();
                    // limpiar_input_empresa();
                   
                    btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.error(`Error guardar empresa: ${e}`);
                    btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioEnferBacteriologico.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function cargarEmpresasLaboratorioEnferBacteriologico() {
    get_data_empresas_pacientes_laboratorio()
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
            document.getElementById("tblDeEmpresasPacientesLaboratorioEnferBacteriologico").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPacienteEnferBacteriologico').innerHTML = strCombo;
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("cmbEmpresaPacienteEnferBacteriologico").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPacienteEnferBacteriologico').innerHTML = '<option value="">No hay datos</option>';
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function getAbrirModalHemoglobinaGlicosilada() {
    $("#modal_catalogo_pacientes_hemoglobina").modal("show");

    let btnGuardarExamenHemoglobinaGlicosilada = document.getElementById("btnGuardarExamenHemoglobinaGlicosilada");
    btnGuardarExamenHemoglobinaGlicosilada.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro de guardar el examen?")
        .then((value) => {
            if(value==true){
                
                let importe = document.getElementById("FloatImporteHemoglobinaGlicosilada").value || '';
                if(importe==''){F.AvisoError("Ingrese el valor del IMPORTE!!!");return};

                let examenHemoglobinaGlicosilada = document.getElementById("txtExamenHemoglobinaGlicosilada").value || '';
                if(examenHemoglobinaGlicosilada==''){F.AvisoError("Ingrese el valor de EXAMEN!!!"); return};

                let resultadoHemoglobinaGlicosilada = document.getElementById("txtResultadoHemoglobinaGlicosilada").value || '';
                if(resultadoHemoglobinaGlicosilada==''){F.AvisoError("Ingrese el valor de RESULTADO!!!"); return};

                let valorNormalHemoglobinaGlicosilada = document.getElementById("txtvalorNormalHemoglobinaGlicosilada").value || '';
                if(valorNormalHemoglobinaGlicosilada==''){F.AvisoError("Ingrese el valor de VALOR NORMAL!!!"); return}
;
                let pruebaDeHba1c = document.getElementById("txtPruebaDeHba1c").value || '';
                if(pruebaDeHba1c==''){F.AvisoError("Ingrese el valor de PRUEBA DE HBA1C!!!"); return};

                let promedioDeGlicemia = document.getElementById("txtPromedioDeGlicemia").value || '';
                if(promedioDeGlicemia==''){F.AvisoError("Ingrese el valor de PROMEDIO DE GLICEMIA"); return};

                let calificacionGlicemia = document.getElementById("txtCalificacionGlicemia").value || '';
                if(calificacionGlicemia==''){F.AvisoError("Ingrese el valor de CALIFICACION"); return};

                btnGuardarExamenHemoglobinaGlicosilada.disabled = true;
                btnGuardarExamenHemoglobinaGlicosilada.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insertDatosExamenHemoglobinaGlicosilada()
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!");
                    btnGuardarExamenHemoglobinaGlicosilada.disabled = false;
                    btnGuardarExamenHemoglobinaGlicosilada.innerHTML = `<i class="fal fa-save"></i>`;
                    Navegar.laboratorista();
                })
                .catch((e) => {
                    if (e instanceof TypeError) {
                        F.AvisoError("Error de conexión. Revise su red.");
                    } else {
                        F.AvisoError("No se pudo guardar el examen: " + e.message);
                    }
                    console.error("Error detallado:", e);
                })
                .finally(() => {
                    btnGuardarExamenHemoglobinaGlicosilada.disabled = false;
                    btnGuardarExamenHemoglobinaGlicosilada.innerHTML = `<i class="fal fa-save"></i>`;
                })


            }
        })
    })

}

function modalAgregarNuevoUsuarioHemoglobina(){
    $("#modal_agregar_paciente_hemoglobina").modal('show'); 

    let btnGuardarPacienteHemoglobina = document.getElementById('btnGuardarPacienteHemoglobina');
    btnGuardarPacienteHemoglobina.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
            .then((value) => {
                if(value==true) {
                    let noDPI = document.getElementById("txtnoDPIHemoglobina").value;
                    let nombrePaciente = document.getElementById("txtNombrePacienteHemoglobina").value;
                    let fecha_nacimiento = document.getElementById("txtFechaNacimientoHemoglobina").value;
                    let empresaPaciente = document.getElementById("cmbEmpresaPacienteHemoglobina").value;
    
                    
                    btnGuardarPacienteHemoglobina.disabled = true;
                    btnGuardarPacienteHemoglobina.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    
    
                    insert_paciente_laboratorio(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                    .then(() => {
                        F.Aviso("Paciente guardado exitosamente!!!");
                        catalogoPacientes();
                        $("#modal_agregar_paciente_hemoglobina").modal('hide');
                        // limpiar_datos_pacientes();
                        btnGuardarPacienteHemoglobina.disabled = false;
                        btnGuardarPacienteHemoglobina.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    })
                    .catch((e) => {
                        F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                        console.error(`Error al agregar paciente: ${e}`);
                        btnGuardarPacienteHemoglobina.disabled = false;
                        btnGuardarPacienteHemoglobina.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                    .finally(() => {
                        btnGuardarPacienteHemoglobina.disabled = false;
                        btnGuardarPacienteHemoglobina.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                }
            })
        
    })
}

function btnAbrirModalEmpresaHemoglobina(){
    $("#modal_agregar_empresa_hemoglobina").modal('show');

    let btnGuardarEmpresaPacienteLaboratorioHemoglobina = document.getElementById("btnGuardarEmpresaPacienteLaboratorioHemoglobina");
    btnGuardarEmpresaPacienteLaboratorioHemoglobina.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresaHemoglobina").value;
                
                btnGuardarEmpresaPacienteLaboratorioHemoglobina.disabled = true;
                btnGuardarEmpresaPacienteLaboratorioHemoglobina.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa_hemoglobina").modal('hide'); 
                    cargarEmpresasLaboratorioHemoglobina();
                    // limpiar_input_empresa();
                   
                    btnGuardarEmpresaPacienteLaboratorioHemoglobina.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioHemoglobina.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.error(`Error guardar empresa: ${e}`);
                    btnGuardarEmpresaPacienteLaboratorioHemoglobina.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioHemoglobina.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPacienteLaboratorioHemoglobina.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioHemoglobina.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function cargarEmpresasLaboratorioHemoglobina() {
    get_data_empresas_pacientes_laboratorio()
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
            document.getElementById("tblDeEmpresasPacientesLaboratorioHemoglobina").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPacienteHemoglobina').innerHTML = strCombo;
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("cmbEmpresaPacienteHemoglobina").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPacienteHemoglobina').innerHTML = '<option value="">No hay datos</option>';
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function getAbrirModalPruebasEspeciales() {
    $("#modal_catalogo_pacientes_pruebas_especiales").modal("show");

    let btnGuardarExamenPruebasEspeciales = document.getElementById("btnGuardarExamenPruebasEspeciales");
    btnGuardarExamenPruebasEspeciales.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro de guardar el examen?")
        .then((value) => {
            if(value==true) {

                let importe = document.getElementById("floatImportePruebasEspeciales").value || '';
                if(importe==''){F.AvisoError("Ingrese el valor de IMPORTE!!!"); return};

                let examenResultadoPruebasEspeciales = document.getElementById("txtExamenResultadoPruebasEspeciales").value || '';
                if(examenResultadoPruebasEspeciales==''){F.AvisoError("Ingrese el valor de EXAMEN");return};
                let resultadoPruebasEspeciales = document.getElementById("txtResultadoPruebasEspeciales").value || '';
                if(resultadoPruebasEspeciales==''){F.AvisoError("Ingrese el valro de RESULTADO!!!");return};
                let valorReferenciaPruebasEspeciales = document.getElementById("txtvalorReferenciaPruebasEspeciales").value || '';
                if(valorReferenciaPruebasEspeciales==''){F.AvisoError("Ingrese el valro de VALOR REFERENCIA!!!");return};

                btnGuardarExamenPruebasEspeciales.disabled = true;
                btnGuardarExamenPruebasEspeciales.innerHTML = `<i class="fal fa-spin"></i>`;

                insertarDatosPruebasEspeciales()
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!");
                    btnGuardarExamenPruebasEspeciales.disabled = false;
                    btnGuardarExamenPruebasEspeciales.innerHTML = `<i class="fal fa-save"></i>`;
                    Navegar.laboratorista();
                })
                .catch((e) => {
                    if (e instanceof TypeError) {
                        F.AvisoError("Error de conexión. Revise su red.");
                    } else {
                        F.AvisoError("No se pudo guardar el examen: " + e.message);
                    }
                    console.error("Error detallado:", e);
                })
                .finally(() => {
                    btnGuardarExamenPruebasEspeciales.disabled = false;
                    btnGuardarExamenPruebasEspeciales.innerHTML = `<i class="fal fa-save"></i>`;
                })
            }
        })
    })

}

function modalAgregarNuevoUsuarioPruebasEspeciales(){
    $("#modal_agregar_paciente_pruebas_especiales").modal('show'); 

    let btnGuardarPacientePruebasEspeciales = document.getElementById('btnGuardarPacientePruebasEspeciales');
    btnGuardarPacientePruebasEspeciales.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
            .then((value) => {
                if(value==true) {
                    let noDPI = document.getElementById("txtnoDPIPruebasEspeciales").value;
                    let nombrePaciente = document.getElementById("txtNombrePacientePruebasEspeciales").value;
                    let fecha_nacimiento = document.getElementById("txtFechaNacimientoPruebasEspeciales").value;
                    let empresaPaciente = document.getElementById("cmbEmpresaPacientePruebasEspeciales").value;
    
                    
                    btnGuardarPacientePruebasEspeciales.disabled = true;
                    btnGuardarPacientePruebasEspeciales.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    
    
                    insert_paciente_laboratorio(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                    .then(() => {
                        F.Aviso("Paciente guardado exitosamente!!!");
                        catalogoPacientes();
                        $("#modal_agregar_paciente_pruebas_especiales").modal('hide');
                        // limpiar_datos_pacientes();
                        btnGuardarPacientePruebasEspeciales.disabled = false;
                        btnGuardarPacientePruebasEspeciales.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    })
                    .catch((e) => {
                        F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                        console.error(`Error al agregar paciente: ${e}`);
                        btnGuardarPacientePruebasEspeciales.disabled = false;
                        btnGuardarPacientePruebasEspeciales.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                    .finally(() => {
                        btnGuardarPacientePruebasEspeciales.disabled = false;
                        btnGuardarPacientePruebasEspeciales.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                }
            })
        
    })
}

function btnAbrirModalEmpresaPruebasEspeciales(){
    $("#modal_agregar_empresa_pruebas_especiales").modal('show');

    let btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales = document.getElementById("btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales");
    btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresaPruebasEspeciales").value;
                
                btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales.disabled = true;
                btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa_pruebas_especiales").modal('hide'); 
                    cargarEmpresasLaboratorioPruebasEspeciales();
                    // limpiar_input_empresa();
                   
                    btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.error(`Error guardar empresa: ${e}`);
                    btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioPruebasEspeciales.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function cargarEmpresasLaboratorioPruebasEspeciales() {
    get_data_empresas_pacientes_laboratorio()
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
            document.getElementById("tblDeEmpresasPacientesLaboratorioPruebasEspeciales").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPacientePruebasEspeciales').innerHTML = strCombo;
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("cmbEmpresaPacientePruebasEspeciales").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPacientePruebasEspeciales').innerHTML = '<option value="">No hay datos</option>';
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function getAbrirModalHcgCuantitativa() {
    $("#modal_catalogo_pacientes_hcg_cuantitativa").modal("show");

    let btnGuardarHcgCuantitativa = document.getElementById("btnGuardarHcgCuantitativa");
    btnGuardarHcgCuantitativa.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro de guardar el examen?")
        .then((value) => {
            if(value==true) {

                let importe = document.getElementById("FloatImporteHcgCuantitativa").value || '';
                if(importe==''){F.AvisoError("Ingrese el valor del IMPORTE!!!"); return};

                let analisisHcgCuantitativa = document.getElementById("txtAnalisisHcgCuantitativa").value || '';
                if(analisisHcgCuantitativa==''){F.AvisoError("Ingrese el valor de ANALISIS!!!"); return};

                let resultadoHcgCuantitativa = document.getElementById("txtResultadoHcgCuantitativa").value || '';
                if(resultadoHcgCuantitativa==''){F.AvisoError("Ingrese el valor de RESULTADO!!!"); return};

                let valorDeReferenciaHcgCuantitativa = document.getElementById("txtvalorDeReferenciaHcgCuantitativa").value || '';
                if(valorDeReferenciaHcgCuantitativa==''){F.AvisoError("Ingrese el valor de VALOR DE REFERENCIA!!!"); return};

                btnGuardarHcgCuantitativa.disabled = true;
                btnGuardarHcgCuantitativa.innerHTML = `<i class="fal fa-spin"></i>`;

                insertDatosHcgCuantitativa()
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!");
                    btnGuardarHcgCuantitativa.disabled = false;
                    btnGuardarHcgCuantitativa.innerHTML = `<i class="fal fa-save"></i>`;
                    Navegar.laboratorista();
                })
                .catch((e) => {
                    if (e instanceof TypeError) {
                        F.AvisoError("Error de conexión. Revise su red.");
                    } else {
                        F.AvisoError("No se pudo guardar el examen: " + e.message);
                    }
                    console.error("Error detallado:", e);
                })
                .finally(() => {
                    btnGuardarHcgCuantitativa.disabled = false;
                    btnGuardarHcgCuantitativa.innerHTML = `<i class="fal fa-save"></i>`;
                })
            }
        })
    })
}

function modalAgregarNuevoUsuarioHcgCuantitativa(){
    $("#modal_agregar_paciente_hcg_cuantitativa").modal('show'); 

    let btnGuardarPacienteHcgCuantitativa = document.getElementById('btnGuardarPacienteHcgCuantitativa');
    btnGuardarPacienteHcgCuantitativa.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
            .then((value) => {
                if(value==true) {
                    let noDPI = document.getElementById("txtnoDPIHcgCuantitativa").value;
                    let nombrePaciente = document.getElementById("txtNombrePacienteHcgCuantitativa").value;
                    let fecha_nacimiento = document.getElementById("txtFechaNacimientoHcgCuantitativa").value;
                    let empresaPaciente = document.getElementById("cmbEmpresaPacienteHcgCuantitativa").value;
    
                    
                    btnGuardarPacienteHcgCuantitativa.disabled = true;
                    btnGuardarPacienteHcgCuantitativa.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    
    
                    insert_paciente_laboratorio(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                    .then(() => {
                        F.Aviso("Paciente guardado exitosamente!!!");
                        catalogoPacientes();
                        $("#modal_agregar_paciente_hcg_cuantitativa").modal('hide');
                        // limpiar_datos_pacientes();
                        btnGuardarPacienteHcgCuantitativa.disabled = false;
                        btnGuardarPacienteHcgCuantitativa.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    })
                    .catch((e) => {
                        F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                        console.error(`Error al agregar paciente: ${e}`);
                        btnGuardarPacienteHcgCuantitativa.disabled = false;
                        btnGuardarPacienteHcgCuantitativa.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                    .finally(() => {
                        btnGuardarPacienteHcgCuantitativa.disabled = false;
                        btnGuardarPacienteHcgCuantitativa.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                }
            })
        
    })
}

function btnAbrirModalEmpresaHcgCuantitativa(){
    $("#modal_agregar_empresa_hcg_cuantitativa").modal('show');

    let btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa = document.getElementById("btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa");
    btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresaHcgCuantitativa").value;
                
                btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa.disabled = true;
                btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa_hcg_cuantitativa").modal('hide'); 
                    cargarEmpresasLaboratorioHcgCuantitativa();
                    // limpiar_input_empresa();
                   
                    btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.error(`Error guardar empresa: ${e}`);
                    btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioHcgCuantitativa.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function cargarEmpresasLaboratorioHcgCuantitativa() {
    get_data_empresas_pacientes_laboratorio()
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
            document.getElementById("tblDeEmpresasPacientesLaboratorioHcgCuantitativa").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPacienteHcgCuantitativa').innerHTML = strCombo;
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("cmbEmpresaPacienteHcgCuantitativa").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPacienteHcgCuantitativa').innerHTML = '<option value="">No hay datos</option>';
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function getAbrirModalQuimicaSanguinea() {
    $("#modal_catalogo_pacientes_quimica_sanguinea").modal("show");

    let btnGuardarQuimicaSanguinea = document.getElementById("btnGuardarQuimicaSanguinea");

    btnGuardarQuimicaSanguinea.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro de guardar el examen?")
        .then((value) => {
            if(value==true) {

                let importe = document.getElementById("FloatImporteQuimicaSanguinea").value || '';
                if(importe==''){F.AvisoError("Ingrese el valor del IMPORTE!!!"); return};

                let examenQuimicaSanguinea = document.getElementById("txtExamenQuimicaSanguinea").value || '';
                if(examenQuimicaSanguinea==''){F.AvisoError("Ingrese el valor del EXAMEN!!!"); return};
                let resultadoQuimicaSanguinea = document.getElementById("txtResultadoQuimicaSanguinea").value || '';
                if(resultadoQuimicaSanguinea==''){F.AvisoError("Ingrese el valor de RESULTADO!!!"); return};
                let valorNormalQuimicaSanguinea = document.getElementById("txtvalorNormalQuimicaSanguinea").value || '';
                if(valorNormalQuimicaSanguinea==''){F.AvisoError("Ingrese el valor de VALOR NORMAL")};

                btnGuardarQuimicaSanguinea.disabled = true;
                btnGuardarQuimicaSanguinea.innerHTML = `<i class="fal fa-spin"></i>`;

                insertDatosQuimicaSanguinea()
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!");
                    btnGuardarQuimicaSanguinea.disabled = false;
                    btnGuardarQuimicaSanguinea.innerHTML = `<i class="fal fa-save"></i>`;
                    Navegar.laboratorista();
                })
                .catch((e) => {
                    if (e instanceof TypeError) {
                        F.AvisoError("Error de conexión. Revise su red.");
                    } else {
                        F.AvisoError("No se pudo guardar el examen: " + e.message);
                    }
                    console.error("Error detallado:", e);
                })
                .finally(() => {
                    btnGuardarQuimicaSanguinea.disabled = false;
                    btnGuardarQuimicaSanguinea.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })

}

function modalAgregarNuevoUsuarioQuimicaSanguinea(){
    $("#modal_agregar_paciente_quimica_sanguinea").modal('show'); 

    let btnGuardarPacienteQuimicaSanguinea = document.getElementById('btnGuardarPacienteQuimicaSanguinea');
    btnGuardarPacienteQuimicaSanguinea.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
            .then((value) => {
                if(value==true) {
                    let noDPI = document.getElementById("txtnoDPIQuimicaSanguinea").value;
                    let nombrePaciente = document.getElementById("txtNombrePacienteQuimicaSanguinea").value;
                    let fecha_nacimiento = document.getElementById("txtFechaNacimientoQuimicaSanguinea").value;
                    let empresaPaciente = document.getElementById("cmbEmpresaPacienteQuimicaSanguinea").value;
    
                    
                    btnGuardarPacienteQuimicaSanguinea.disabled = true;
                    btnGuardarPacienteQuimicaSanguinea.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    
    
                    insert_paciente_laboratorio(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                    .then(() => {
                        F.Aviso("Paciente guardado exitosamente!!!");
                        catalogoPacientes();
                        $("#modal_agregar_paciente_quimica_sanguinea").modal('hide');
                        // limpiar_datos_pacientes();
                        btnGuardarPacienteQuimicaSanguinea.disabled = false;
                        btnGuardarPacienteQuimicaSanguinea.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    })
                    .catch((e) => {
                        F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                        console.error(`Error al agregar paciente: ${e}`);
                        btnGuardarPacienteQuimicaSanguinea.disabled = false;
                        btnGuardarPacienteQuimicaSanguinea.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                    .finally(() => {
                        btnGuardarPacienteQuimicaSanguinea.disabled = false;
                        btnGuardarPacienteQuimicaSanguinea.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                }
            })
        
    })
}

function btnAbrirModalEmpresaQuimicaSanguinea(){
    $("#modal_agregar_empresa_quimica_sanguinea").modal('show');

    let btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea = document.getElementById("btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea");
    btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresaQuimicaSanguinea").value;
                
                btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea.disabled = true;
                btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa_quimica_sanguinea").modal('hide'); 
                    cargarEmpresasLaboratorioQuimicaSanguinea();
                    // limpiar_input_empresa();
                   
                    btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.error(`Error guardar empresa: ${e}`);
                    btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioQuimicaSanguinea.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function cargarEmpresasLaboratorioQuimicaSanguinea() {
    get_data_empresas_pacientes_laboratorio()
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
            document.getElementById("tblDeEmpresasPacientesLaboratorioQuimicaSanguinea").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPacienteQuimicaSanguinea').innerHTML = strCombo;
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("cmbEmpresaPacienteQuimicaSanguinea").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPacienteQuimicaSanguinea').innerHTML = '<option value="">No hay datos</option>';
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function getAbrirModalResultadosVarios() {
    $("#modal_catalogo_pacientes_resultados_varios").modal("show");
}

function modalAgregarNuevoUsuarioResultadosVarios(){
    $("#modal_agregar_paciente_resultados_varios").modal('show'); 

    let btnGuardarPacienteResultadosVarios = document.getElementById('btnGuardarPacienteResultadosVarios');
    btnGuardarPacienteResultadosVarios.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
            .then((value) => {
                if(value==true) {
                    let noDPI = document.getElementById("txtnoDPIResultadosVarios").value;
                    let nombrePaciente = document.getElementById("txtNombrePacienteResultadosVarios").value;
                    let fecha_nacimiento = document.getElementById("txtFechaNacimientoResultadosVarios").value;
                    let empresaPaciente = document.getElementById("cmbEmpresaPacienteResultadosVarios").value;
    
                    
                    btnGuardarPacienteResultadosVarios.disabled = true;
                    btnGuardarPacienteResultadosVarios.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    
    
                    insert_paciente_laboratorio(noDPI, F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                    .then(() => {
                        F.Aviso("Paciente guardado exitosamente!!!");
                        catalogoPacientesResultadosVarios();
                        $("#modal_agregar_paciente_resultados_varios").modal('hide');
                        $("#modal_catalogo_pacientes_resultados_varios").modal('hide');
                        // limpiar_datos_pacientes();
                        btnGuardarPacienteResultadosVarios.disabled = false;
                        btnGuardarPacienteResultadosVarios.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    })
                    .catch((e) => {
                        F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                        console.error(`Error al agregar paciente: ${e}`);
                        btnGuardarPacienteResultadosVarios.disabled = false;
                        btnGuardarPacienteResultadosVarios.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                    .finally(() => {
                        btnGuardarPacienteResultadosVarios.disabled = false;
                        btnGuardarPacienteResultadosVarios.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                }
            })
        
    })
}

function btnAbrirModalEmpresaResultadosVarios(){
    $("#modal_agregar_empresa_resultados_varios").modal('show');

    let btnGuardarEmpresaPacienteLaboratorioResultadosVarios = document.getElementById("btnGuardarEmpresaPacienteLaboratorioResultadosVarios");
    btnGuardarEmpresaPacienteLaboratorioResultadosVarios.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresaResultadosVarios").value;
                
                btnGuardarEmpresaPacienteLaboratorioResultadosVarios.disabled = true;
                btnGuardarEmpresaPacienteLaboratorioResultadosVarios.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa_resultados_varios").modal('hide'); 
                    cargarEmpresasLaboratoriResultadosVarios();
                    // limpiar_input_empresa();
                   
                    btnGuardarEmpresaPacienteLaboratorioResultadosVarios.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioResultadosVarios.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.error(`Error guardar empresa: ${e}`);
                    btnGuardarEmpresaPacienteLaboratorioResultadosVarios.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioResultadosVarios.innerHTML = `<i class="fal fa-save"></i>`;
                })
                .finally(()=> {
                    btnGuardarEmpresaPacienteLaboratorioResultadosVarios.disabled = false;
                    btnGuardarEmpresaPacienteLaboratorioResultadosVarios.innerHTML = `<i class="fal fa-save"></i>`;
                })

            }
        })
    })
}

function cargarEmpresasLaboratoriResultadosVarios() {
    get_data_empresas_pacientes_laboratorio()
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
            document.getElementById("tblDeEmpresasPacientesLaboratorioResultadosVarios").innerHTML = strTable;

            // Cargar empresas en el selector
            let strCombo = '<option value="">Seleccione una empresa</option>';
            data.forEach((r) => {
                strCombo += `<option value='${r.ID}'>${r.NOMBRE}</option>`;
            });
            document.getElementById('cmbEmpresaPacienteResultadosVarios').innerHTML = strCombo;
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = strCombo;
        })
        .catch((error) => {
            console.error("Error al cargar las empresas: ", error);
            document.getElementById("cmbEmpresaPacienteResultadosVarios").innerHTML = 'No hay datos...';
            document.getElementById('cmbEmpresaPacienteResultadosVarios').innerHTML = '<option value="">No hay datos</option>';
            // document.getElementById('cmbEmpresaPacienteE').innerHTML = '<option value="">No hay datos</option>';
        });
}

function catalogoPacientesCopro() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function catalogoPacientesUro() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function catalogoPacientesUro() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function catalogoPacientesEnferInfecciosas() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function catalogoPacientesHemoglobina() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function catalogoPacientesPruebaEspeciales() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function catalogoPacientesHcgCuantitativa() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function catalogoPacientesQuimicaSanguinea() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function catalogoPacientesResultadosVarios() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function catalogoPacientesParaNuevoExamen() {
    return new Promise((resolve, reject) => {
        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if(Array.isArray(data) && data.length > 0){
                resolve(data); 
            } else{
                reject(); 
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Catalogo pacientes finalizado");
        })
    })
}

function insertDatosExamenCipro() {

    // Fecha base para tomar mes y año 
    let fechaBaseParaTomarMesYAnio =  new Date(document.getElementById("fechaPaciente").value);
                
    let tipo_examen_copro =  document.getElementById('txtTipoExamenCopro').querySelector('strong').textContent;
    let medicoTratante = document.getElementById("txtMedicoPaciente").value;
    let importe = document.getElementById("FloatImporteCiprologia").value;
    let fecha = F.devuelveFecha("fechaPaciente");
    let colorHecesMacro = document.getElementById("colorHecesMacroscopio").value;
    let restoAlimentacionMacro = document.getElementById("restoAlimenticiosMacro").value;
    let sangreMacro = document.getElementById("sangreMacro").value;
    let consistenciaMacro = document.getElementById("consistenciaMacro").value;
    let mocoMacro = document.getElementById("mocoMacro").value;
    let phMacro = document.getElementById("phMacro").value;

    let leucocitosQuimicos = document.getElementById("leucocitosQuimico").value;
    let celulasQuimico = document.getElementById("celulasVegQuimico").value;
    let almidonesQuimico = document.getElementById("almidonesQuimico").value;
    let levadurasQuimico = document.getElementById("levadurasQuimico").value;
    let huevoQuimico = document.getElementById("huevoQuimico").value;
    let quistesQuimico = document.getElementById("quistesQuimico").value;
    
    let eritrocitosMicro = document.getElementById("eritrocitosMicro").value;
    let grasasMicro = document.getElementById("grasasMicro").value;
    let jabonMicro = document.getElementById("jabonMicro").value;
    let bacterias = document.getElementById("bacteriasMicro").value;
    let anio =  fechaBaseParaTomarMesYAnio.getFullYear();
    let mes = fechaBaseParaTomarMesYAnio.getUTCMonth()+1;


    return new Promise((resolve, reject) => {
        axios.post("/insert_examen_ciprologia", {
            tipo_examen: tipo_examen_copro,
            paciente_id: GlobalIdPaciente,
            importe: importe,
            medico_tratante: medicoTratante || 'Sin medico referido',
            fecha: fecha,
            anio: anio,
            mes: mes,
            copro_macroscopio_color: colorHecesMacro,
            copro_macroscopio_restos_alimenticios: restoAlimentacionMacro,
            copro_macroscopio_sangre: sangreMacro,
            copro_macroscopio_consistencia: consistenciaMacro,
            copro_macroscopio_Moco: mocoMacro,
            copro_macroscopio_PH: phMacro,
            copro_quimico_leucocitos: leucocitosQuimicos,
            copro_quimico_celulas_vegetales: celulasQuimico,
            copro_quimico_almidones: almidonesQuimico,
            copro_quimico_levaduras: levadurasQuimico,
            copro_quimico_huevo: huevoQuimico,
            copro_quimico_quistes: quistesQuimico,
            copro_microscopio_eritrocitos: eritrocitosMicro,
            copro_microscopio_grasas: grasasMicro,
            copro_microscopio_jabon: jabonMicro,
            copro_microscopio_bacterias: bacterias
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0) {
                resolve(data.insertId);
            } else {
                reject();
            }
        })
        .catch((error) => {
            console.error(error);
            reject();
        })
        .finally(() => {
            console.info("Datos de examen copro Finalizados");
        })
    })
}

function insertDatosExamenUro() {

    let fechaBaseParaTomarMesYAnioUrologia =  new Date(document.getElementById("fechaPaciente").value);

    let tipo_examen_uro = document.getElementById("txtTipoExamenUrologia").querySelector('strong').textContent;
    let medicoTratante = document.getElementById("txtMedicoPaciente").value;
    let importeUro = document.getElementById("FloatImporteUrologia").value;
    let fechaUro = F.devuelveFecha("fechaPaciente");
    let anioUro = fechaBaseParaTomarMesYAnioUrologia.getFullYear();
    let mesUro = fechaBaseParaTomarMesYAnioUrologia.getUTCMonth()+1;

    let colorHecesMacroUro = document.getElementById("colorHecesMacroUrologia").value;
    let aspectoMacroUro = document.getElementById("aspectoMacroUrologia").value;
    let densidadMacroUro = document.getElementById("densidadMacroUrologia").value;
    let phMacroUro = document.getElementById("phMacroUrologia").value;


    let leucocitosQuimUro = document.getElementById("leucocitosQuimicoUrologia").value;
    let glucosaQuimUro = document.getElementById("glucosaQuimicoUrologia").value;
    let proteinasQuimUro = document.getElementById("proteinasQuimicoUrologia").value;
    let cetonasQuimUro = document.getElementById("cetonasQuimicoUrologia").value;
    let hemoglobinaQuimUro = document.getElementById("hemoglobinaQuimicoUrologia").value;
    let urobiligenoQuimUro = document.getElementById("urobiligenoQuimicoUrologia").value;
    let nitritosQuimUro = document.getElementById("nitritoQuimicoUrologia").value;
    let acidoAscorbicoQuimUro = document.getElementById("acidoAscorbicoQuimicoUrologia").value;
    let bilirrubinaQuimUro = document.getElementById("bilirrubinaQuimicoUrologia").value;
                

    let leucocitosMicroUro = document.getElementById("leucocitosMicroUrologia").value;
    let eritrocitosMicroUro = document.getElementById("eritrocitosMicroUrologia").value;
    let epitelialesMicroUro = document.getElementById("epitelialesMicroUrologia").value;
    let bacteriasMicroUro = document.getElementById("bacteriasMicroUrologia").value;
    let cristalesMicroUro = document.getElementById("cristalesMicroUrologia").value;
    let cilindrosMicroUro = document.getElementById("cilindrosMicroUrologia").value;
    let otroMicroUro = document.getElementById("otrosMicroUrologia").value;

    return new Promise((resolve, reject) => {
        axios.post("/insert_examen_urologia", {
            tipo_examen: tipo_examen_uro,
            paciente_id: GlobalIdPaciente,
            importe: importeUro,
            medico_tratante: medicoTratante || 'Sin medico referido',
            fecha: fechaUro,
            anio: anioUro,
            mes: mesUro,
            uro_macro_color: colorHecesMacroUro,
            uro_macro_aspecto: aspectoMacroUro,
            uro_macro_densidad: densidadMacroUro,
            uro_macro_ph: phMacroUro,
            uro_quimico_leucocitos: leucocitosQuimUro,
            uro_quimico_glucosa: glucosaQuimUro,
            uro_quimico_proteinas: proteinasQuimUro,
            uro_quimico_cetonas: cetonasQuimUro,
            uro_quimico_hemoglobina: hemoglobinaQuimUro,
            uro_quimico_urobilinogeno: urobiligenoQuimUro,
            uro_quimico_nitritos: nitritosQuimUro,
            uro_quimico_acido_ascorbico: acidoAscorbicoQuimUro,
            uro_quimico_bilirrubina: bilirrubinaQuimUro,
            uro_micro_leucocitos: leucocitosMicroUro,
            uro_micro_eritocitos: eritrocitosMicroUro,
            uro_micro_c_epiteliales: epitelialesMicroUro,
            uro_micro_bacterias: bacteriasMicroUro,
            uro_micro_cristales: cristalesMicroUro,
            uro_micro_cilindros: cilindrosMicroUro,
            uro_micro_otros: otroMicroUro
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0) {
                resolve(data);
            } else {
                reject();
            }
        })
        .catch((error) => {
            console.error(error)
            reject(error);
        })
        .finally(() => {
            console.info("Datos de examen uro Finalizados");
        })
    })

}

function insertDatosEnfermedadesInfecciosas() {

    let fechaEnfeInfecciosasTomarMesYAnio = new Date(document.getElementById("fechaPaciente").value);

    let tipoExamenEnfermedadesInfecciosas = document.getElementById("txtTipoExamenEmfeInfecciosas").querySelector('strong').textContent;
    let medicoTratante = document.getElementById("txtMedicoPaciente").value;
    let importeEnfInfecciosas = document.getElementById("floatImporteEnfInfecciosas").value;
    let fechaEnfeInfecciosas = F.devuelveFecha("fechaPaciente");
    let anioEnfeInfecciosas = fechaEnfeInfecciosasTomarMesYAnio.getFullYear();
    let mesEnfeInfecciosas = fechaEnfeInfecciosasTomarMesYAnio.getUTCMonth()+1;

    let analisisEnfermedadesInfecciosas = document.getElementById("txtAnalisisEnfermedadesInfecciosas").value;
    let resultadosEnfermedadesInfecciosas = document.getElementById("txtResultadosEnfermedadesInfecciosas").value;
    let valorReferenciaEnfermedadesInfecciosas = document.getElementById("txtValorReferenciaEnfermedadesInfecciosas").value;

        
    return new Promise((resolve, reject) => {
        axios.post("/insert_enfermedades_infecciosas", {
            tipo_examen: tipoExamenEnfermedadesInfecciosas,
            paciente_id: GlobalIdPaciente,
            importe: importeEnfInfecciosas,
            medico_tratante: medicoTratante || 'Sin medico referido',
            fecha: fechaEnfeInfecciosas,
            anio: anioEnfeInfecciosas,
            mes: mesEnfeInfecciosas,
            enfermedades_infecciosas_analisis: analisisEnfermedadesInfecciosas,
            enfermedades_infecciosas_resultados: resultadosEnfermedadesInfecciosas,
            enfermedades_infecciosas_valor_referencia: valorReferenciaEnfermedadesInfecciosas
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0) {
                resolve(data);
            } else {
                reject();
            }
        })
        .catch((error) => {
            console.error(error)
            reject(error);
        })
        .finally(() => {
            console.info("Datos de enfermedades infecciosas Finalizados");
        })
    })
}

function insertDatosExamenesBacteriologicos() {

    let fechaExamenBacteriologicoTomarMesyAnio =  new Date(document.getElementById("fechaPaciente").value);

    let tipoExamenBacteriologico = document.getElementById("txtTipoExamenBacteriologicos").querySelector('strong').textContent;
    let medicoTratante = document.getElementById("txtMedicoPaciente").value;
    let importeExamenBacteriologicos = document.getElementById("floatImporteExamenesBacteriologicos").value;
    let fechaExamenBacteriologico = F.devuelveFecha("fechaPaciente");
    let anioExamenBacteriologico = fechaExamenBacteriologicoTomarMesyAnio.getFullYear();
    let mesExamenBacteriologico = fechaExamenBacteriologicoTomarMesyAnio.getUTCMonth()+1;
    let analisisExamenBacteriologico = document.getElementById("txtExamenesExamenesBacteriologicos").value;
    let resultadosExamenBacteriologico = document.getElementById("txtResultadosExamenesBacteriologicos").value;
    let valorReferenciaExamenBacteriologico = document.getElementById("txtValorReferenciaExamenesBacteriologicos").value;

    
    return new Promise((resolve, reject) => {
        axios.post("/insert_examenes_bacteriologicos", {
            tipo_examen: tipoExamenBacteriologico,
            paciente_id: GlobalIdPaciente,
            importe: importeExamenBacteriologicos,
            medico_tratante: medicoTratante || 'Sin medico referido',
            fecha: fechaExamenBacteriologico,
            anio: anioExamenBacteriologico,
            mes: mesExamenBacteriologico,
            examenes_bacteriologicos_analisis: analisisExamenBacteriologico,
            examenes_bacteriologicos_resultado: resultadosExamenBacteriologico,
            examenes_bacteriologicos_valor_de_referencia: valorReferenciaExamenBacteriologico
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0) {
                resolve(data);
            } else {
                reject();
            }
        })
        .catch((error) => {
            console.error(error)
            reject(error);
        })
        .finally(() => {
            console.info("Datos de examenes bacteriologicos Finalizados");
        })
    })
}

function insertDatosExamenHemoglobinaGlicosilada() {

    let fechaExamenHemoglobinaGlicosiladaTomarMesyAnio =  new Date(document.getElementById("fechaPaciente").value);

    let tipoExamenHemoglobinaGlicosilada = document.getElementById("txtTipoHemoglobinaGlicosilada").querySelector('strong').textContent;
    let medicoTratante = document.getElementById("txtMedicoPaciente").value;
    let importeExamenHemoglobinaGlicosilada = document.getElementById("FloatImporteHemoglobinaGlicosilada").value;
    let fechaExamenHemoglobinaGlicosilada = F.devuelveFecha("fechaPaciente");
    let anioExamenHemoglobinaGlicosilada = fechaExamenHemoglobinaGlicosiladaTomarMesyAnio.getFullYear();
    let mesExamenHemoglobinaGlicosilada = fechaExamenHemoglobinaGlicosiladaTomarMesyAnio.getUTCMonth()+1;

    let examenHemoglobinaGlicosilada = document.getElementById("txtExamenHemoglobinaGlicosilada").value;
    let resultadoHemoglobinaGlicosilada = document.getElementById("txtResultadoHemoglobinaGlicosilada").value;
    let valorNormalHemoglobinaGlicosilada = document.getElementById("txtvalorNormalHemoglobinaGlicosilada").value;
    let pruebaDeHba1c = document.getElementById("txtPruebaDeHba1c").value;
    let promedioDeGlicemia = document.getElementById("txtPromedioDeGlicemia").value;
    let calificacionGlicemia = document.getElementById("txtCalificacionGlicemia").value;

    return new Promise((resolve, reject) => {
        axios.post("/insert_examenes_hemoglobina_glicosilada", {
            tipo_examen:tipoExamenHemoglobinaGlicosilada,
            paciente_id:GlobalIdPaciente,
            importe:importeExamenHemoglobinaGlicosilada,
            medico_tratante:medicoTratante || 'Sin medico referido',
            fecha:fechaExamenHemoglobinaGlicosilada,
            anio:anioExamenHemoglobinaGlicosilada,
            mes:mesExamenHemoglobinaGlicosilada,
            hemoglobina_inmunologia_examen:examenHemoglobinaGlicosilada,
            hemoglobina_inmunologia_resultado:resultadoHemoglobinaGlicosilada,
            hemoglobina_inmunologia_valor_normal:valorNormalHemoglobinaGlicosilada,
            hemoglobina_inmunologia_prueba_de_hba1c:pruebaDeHba1c,
            hemoglobina_inmunologia_promedio_de_glicemia:promedioDeGlicemia,
            hemoglobina_inmunologia_calificacion:calificacionGlicemia
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0) {
                resolve(data);
            } else {
                reject();
            }
        })
        .catch((err) => {
            console.error(err);
            reject(err);
        })
        .finally(() => {
            console.info("Datos de examenes hemoglobina glicosilada Finalizados");
        })
    })
}

function insertarDatosPruebasEspeciales() {

    let fechaExamenPruebasEspecialesTomarMesyAnio =  new Date(document.getElementById("fechaPaciente").value);

    let tipoExamenPruebasEspeciales = document.getElementById("txtTipoHcgCualitativa").querySelector('strong').textContent;
    let medicoTratante = document.getElementById("txtMedicoPaciente").value;
    let importePruebasEspeciales = document.getElementById("floatImportePruebasEspeciales").value;
    let fechaPruebasEspeciales = F.devuelveFecha("fechaPaciente");
    let anioPruebasEspeciales = fechaExamenPruebasEspecialesTomarMesyAnio.getFullYear();
    let mesPruebasEspeciales = fechaExamenPruebasEspecialesTomarMesyAnio.getUTCMonth()+1;

    let examenResultadoPruebasEspeciales = document.getElementById("txtExamenResultadoPruebasEspeciales").value;
    let resultadoPruebasEspeciales  = document.getElementById("txtResultadoPruebasEspeciales").value;
    let valorReferenciaPruebasEspeciales = document.getElementById("txtvalorReferenciaPruebasEspeciales").value;

    return new Promise((resolve, reject) => {
        
        axios.post("/insert_examen_pruebas_especiales", {
            tipo_examen:tipoExamenPruebasEspeciales,
            paciente_id: GlobalIdPaciente,
            importe:importePruebasEspeciales,
            medico_tratante:medicoTratante || 'Sin medico referido',
            fecha:fechaPruebasEspeciales,
            anio:anioPruebasEspeciales,
            mes:mesPruebasEspeciales,
            pruebas_especiales_examen_resultado:examenResultadoPruebasEspeciales,
            pruebas_especiales_resultado:resultadoPruebasEspeciales,
            pruebas_especiales_valor_de_referencia:valorReferenciaPruebasEspeciales
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0) {
                resolve(data);
            }else {
                reject();
            }
        })
        .catch((err) => {
            console.error(err);
            reject(err);
        })
        .finally(() => {
            console.info("Datos de examenes pruebas especiales Finalizados");
        })
    })
}

function insertDatosHcgCuantitativa() {

    let fechaExamenHcgCuantitativaTomarMesyAnio =  new Date(document.getElementById("fechaPaciente").value);
    let tipoExamenHcgCuantitativa = document.getElementById("txtTipoHcgCuantitativa").querySelector('strong').textContent;
    let medicoTratante = document.getElementById("txtMedicoPaciente").value;
    let importeHcgCuantitativa = document.getElementById("FloatImporteHcgCuantitativa").value;
    let analisisHcgCuantitativa = document.getElementById("txtAnalisisHcgCuantitativa").value;
    let resultadoHcgCuantitativa = document.getElementById("txtResultadoHcgCuantitativa").value;
    let valoresDeReferenciaHcgCuantitativa = document.getElementById("txtvalorDeReferenciaHcgCuantitativa").value;
    let fechaHcgCuantitativa = F.devuelveFecha("fechaPaciente");
    let anioExamenHcgCuantitativa = fechaExamenHcgCuantitativaTomarMesyAnio.getFullYear();
    let mesExamenHcgCuantitativa = fechaExamenHcgCuantitativaTomarMesyAnio.getUTCMonth()+1;

    

    return new Promise((resolve, reject) => {
        axios.post("/insert_examenes_hcg_cuantitativa", {
            tipo_examen:tipoExamenHcgCuantitativa,
            paciente_id: GlobalIdPaciente,
            importe:importeHcgCuantitativa,
            medico_tratante: medicoTratante || 'Sin medico referido',
            fecha:fechaHcgCuantitativa,
            anio: anioExamenHcgCuantitativa,
            mes: mesExamenHcgCuantitativa,
            hcg_cuantitativa_analisis: analisisHcgCuantitativa,
            hcg_cuantitativa_resultado: resultadoHcgCuantitativa,
            hcg_cuantitativa_valores_de_referencia: valoresDeReferenciaHcgCuantitativa
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0) {
                resolve(data);
            } else {
                reject();
            }
        })
        .catch((err) => {
            console.error(err);
            reject(err);
        })
        .finally(() => {
            console.info("Datos de examenes hcg cuantitativa Finalizados");
        })
    })
}

function insertDatosQuimicaSanguinea() {

    let fechaQuimicaSanguineaTomarMesyAnio =  new Date(document.getElementById("fechaPaciente").value);
    let tipoExamenQuimicaSanguinea = document.getElementById("txtTipoQuimicaSanguinea").querySelector('strong').textContent;
    let medicoTratante = document.getElementById("txtMedicoPaciente").value;
    let fechaQuimicaSanguinea = F.devuelveFecha("fechaPaciente");
    let anioQuimicaSanguinea = fechaQuimicaSanguineaTomarMesyAnio.getFullYear();
    let mesQuimicaSanguinea = fechaQuimicaSanguineaTomarMesyAnio.getUTCMonth()+1;

    let importe = document.getElementById("FloatImporteQuimicaSanguinea").value;
    let examenQuimicaSanguinea = document.getElementById("txtExamenQuimicaSanguinea").value;
    let resultadoQuimicaSanguinea = document.getElementById("txtResultadoQuimicaSanguinea").value;
    let valorNormalQuimicaSanguinea = document.getElementById("txtvalorNormalQuimicaSanguinea").value;

    return new Promise((resolve, reject) => {
        axios.post("/insert_examen_quimica_sanguinea", {
            tipo_examen: tipoExamenQuimicaSanguinea,
            paciente_id: GlobalIdPaciente,
            importe: importe,
            medico_tratante:medicoTratante || 'Sin medico referido',
            fecha: fechaQuimicaSanguinea,
            anio: anioQuimicaSanguinea,
            mes: mesQuimicaSanguinea,
            quimica_sanguinea_examen: examenQuimicaSanguinea,
            quimica_sanguinea_resultado: resultadoQuimicaSanguinea,
            quimica_sanguinea_valor_normal: valorNormalQuimicaSanguinea
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0){
                resolve(data);
            } else {
                reject();
            }
        })
        .catch((err) => {
            console.error(err);
            reject(err);
        })
        .finally(() => {
            console.info("Datos de examenes hcg cuantitativa Finalizados");
        })
    })
}

function insert_paciente_laboratorio(noDPI, nombre, fecha_nacimiento, empresa) {
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
        .catch((error) => {
            console.error("Error al insertar paciente: ", error);
            reject();
        });
    })
}

function insert_empresas_laboratorio(nombreEmpresa) {
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
        .catch((error) => {
            reject(error);
        })
    })
}

function get_data_empresas_pacientes_laboratorio() {
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
        .catch((error) => {
            reject(error);
        })
    })
}
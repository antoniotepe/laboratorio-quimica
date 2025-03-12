
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
                            ${view.vista_ciproanalisis() + view.vista_modal_pacientes_copro()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_uroanalisis() + view.vista_modal_pacientes_urologia()}
                        </div>    
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_enfermedades_infecciosas() + view.vista_modal_enfermedades_infecciosas_pacientes()}
                        </div>
                        <div class="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_enfermedades_bacteriologicos() + view.vista_modal_enfermedades_bacteriologicos_pacientes()}
                        </div>
                        <div class="tab-pane fade" id="seis" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_hemoglobina_glicosilada() + view.vista_modal_pacientes_hemoglobina_pacientes()}
                        </div>
                        <div class="tab-pane fade" id="siete" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_pruebas_especiales() + view.vista_modal_pruebas_especiales_pacientes()}
                        </div>
                        <div class="tab-pane fade" id="ocho" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_examenes_hcg_cuantitativa() + view.vista_modal_hcg_cuantitativa_pacientes()}
                        </div>
                        <div class="tab-pane fade" id="nueve" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_examenes_quimica_sanguinea() + view.vista_modal_quimica_sanguinea()}
                        </div>
                        <div class="tab-pane fade" id="diez" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_examenes_resultados_varios() + view.vista_modal_resultados_varios()}
                        </div>
                        <div class="tab-pane fade" id="once" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>
                        <div class="tab-pane fade" id="doce" role="tabpanel" aria-labelledby="home-tab">

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
        vista_ciproanalisis:()=>{
            return `
                <div class="container-fluid mt-4">
                    <div class="row text-white p-1 mb-3 rounded d-flex bg-info justify-content-between">                        
                       <div class="col-12 col-md-6 mt-3">
                            <div class="h3" id="txtTipoExamenCopro">
                                <strong>COPROLOGÍA</strong>
                            </div>    
                       </div>
                       <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">REF:</label>
                                <input type="text" class="form-control" value="FEB25-001" readonly>
                            </div>
                       </div>
                       <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">Fecha:</label>
                                <input type="date" class="form-control" id="fechaCoprologia">
                            </div>
                       </div>
                    </div>

                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Nombre:</label>
                                <input class="form-control" type="search" placeholder="Buscar paciente..." autocomplete="off" id="txtFiltrarPacientesCiprologia" disabled>
                                <button class="btn btn-info btn-sm hand shadow" onclick="getAbrirModalCoprologia()">
                                    <i class="fal fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-4 col-form-label text-info">Medico tratante:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoCiprologia" />
                            </div>
                        </div>
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

                    
                    <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" onclick="retrocederVistaLaboratorista()">
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
                       <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">REF:</label>
                                <input type="text" class="form-control" value="FEB25-001" readonly>
                            </div>
                       </div>
                       <div class="col-12 col-md-3">
                            <div>
                                <label class="form-label mb-0 text-white">Fecha:</label>
                                <input type="date" class="form-control" id="fechaUrologia">
                            </div>
                       </div>
                </div>
               
                <div class="row mb-2 rounded d-flex justify-content-between">
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Nombre:</label>
                            <input class="form-control" type="search" placeholder="Buscar paciente..." autocomplete="off" id="txtFiltrarPacientesUrologia" disabled>
                            <button class="btn btn-info btn-sm hand shadow" onclick="getAbrirModalPacientesUrologia()">
                                <i class="fal fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-4 col-form-label text-info">Medico tratante:</label>
                            <input type="text" class="form-control bg-amarillo rounded" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoUrologia" />
                        </div>
                    </div>
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

              
                    <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" onclick="retrocederVistaLaboratorista()">
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
                    <div class="col-12 col-md-3">
                        <div class="mb-2">
                            <label class="form-label mb-0 text-white">REF:</label>
                            <input type="text" class="form-control" id="txtRefEnferInfe" value="FEB25-001" readonly />
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div>
                            <label class="form-label mb-0 text-white">Fecha:</label>
                            <input type="date" class="form-control" id="fechaEnfermedadesInfecciosas" />
                        </div>
                    </div>
                </div>

                <div class="row mb-2 rounded d-flex justify-content-between">
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Nombre:</label>
                            <input class="form-control" type="search" placeholder="Buscar paciente..." autocomplete="off"
                            id="txtFiltrarPacienteEnfermedadesInfecciosas" disabled/>
                            <button class="btn btn-info btn-sm hand shadow" onclick="getAbrirModalPacientesEnfInfecciosas()">
                                <i class="fal fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-4 col-form-label text-info">Medico tratante:</label>
                            <input type="text" class="form-control bg-amarillo rounded" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoEnferInfeccio" />
                        </div>
                    </div>
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

                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" onclick="retrocederVistaLaboratorista()">
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
                    <div class="col-12 col-md-3">
                        <div class="mb-2">
                            <label class="form-label mb-0 text-white">REF:</label>
                            <input type="text" class="form-control" id="txtRefEnfermedadesBacteriologicos" value="FEB25-001" readonly />
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div>
                            <label class="form-label mb-0 text-white">Fecha:</label>
                            <input type="date" class="form-control" id="fechaExamenesBacteriologicos" />
                        </div>
                    </div>
                </div>

                <div class="row mb-2 rounded d-flex justify-content-between">
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Nombre:</label>
                            <input class="form-control" type="search" placeholder="Buscar paciente..." autocomplete="off"
                            id="txtFiltrarPacienteExamenesBacteriologicos" disabled/>
                            <button class="btn btn-info btn-sm hand shadow" onclick="getAbrirModalPacientesExamenesBacteriologicos()">
                                <i class="fal fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-4 col-form-label text-info">Medico tratante:</label>
                            <input type="text" class="form-control bg-amarillo rounded" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoExamenesBacteriologicos" />
                        </div>
                    </div>
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

                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" onclick="retrocederVistaLaboratorista()">
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
                       <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">REF:</label>
                                <input type="text" class="form-control" value="FEB25-001" readonly id="txtRefHemoglobinaGlicosilada" />
                            </div>
                       </div>
                       <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">Fecha:</label>
                                <input type="date" class="form-control" id="fechaHemoglobinaGlicosilada">
                            </div>
                       </div>
                    </div>
                    
                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Nombre:</label>
                                <input class="form-control" type="search" placeholder="Buscar paciente..." autocomplete="off" id="txtFiltrarPacientesHemoglobinaGlicosilada" disabled>
                                <button class="btn btn-info btn-sm hand shadow" onclick="getAbrirModalHemoglobinaGlicosilada()">
                                    <i class="fal fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-4 col-form-label text-info">Medico tratante:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoHemoglobinaGlicosilada" />
                            </div>
                        </div>
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
                        class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow"
                        onclick="retrocederVistaLaboratorista()"
                    >
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
                        <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">REF:</label>
                                <input type="text" class="form-control" id="txtRefPruebasEspeciales" value="FEB25-001" readonly />
                            </div>
                        </div>
                        <div class="col-12 col-md-3">
                            <div>
                                <label class="form-label mb-0 text-white">Fecha:</label>
                                <input type="date" class="form-control" id="fechaPruebasEspeciales" />
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Nombre:</label>
                                <input class="form-control" type="search" placeholder="Buscar paciente..." autocomplete="off"
                                id="txtFiltrarPruebasEspeciales" disabled/>
                                <button class="btn btn-info btn-sm hand shadow" onclick="getAbrirModalPruebasEspeciales()">
                                    <i class="fal fa-search"></i>
                                </button>
                            </div>
                        </div>
                    <div class="col-12 col-md-4">
                        <div class="input-group">
                            <label class="col-12 col-md-4 col-lg-4 col-form-label text-info">Medico tratante:</label>
                            <input type="text" class="form-control bg-amarillo rounded" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoPruebasEspeciales" />
                        </div>
                    </div>
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

                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" onclick="retrocederVistaLaboratorista()">
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
                       <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">REF:</label>
                                <input type="text" class="form-control" value="FEB25-001" readonly id="txtRefHcgCuantitativa" />
                            </div>
                       </div>
                       <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">Fecha:</label>
                                <input type="date" class="form-control" id="fechaHcgCuantitativa">
                            </div>
                       </div>
                    </div>

                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Nombre:</label>
                                <input class="form-control" type="search" placeholder="Buscar paciente..." autocomplete="off" id="txtFiltrarPacientesHcgCuantitativa" disabled>
                                <button class="btn btn-info btn-sm hand shadow" onclick="getAbrirModalHcgCuantitativa()">
                                    <i class="fal fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-4 col-form-label text-info">Medico tratante:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoHcgCuantitativa" />
                            </div>
                        </div>
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
                        class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow"
                        onclick="retrocederVistaLaboratorista()"
                    >
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
                        <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">REF:</label>
                                <input type="text" class="form-control" id="txtRefQuimicaSanguinea" value="FEB25-001" readonly />
                            </div>
                        </div>
                        <div class="col-12 col-md-3">
                            <div>
                                <label class="form-label mb-0 text-white">Fecha:</label>
                                <input type="date" class="form-control" id="fechaQuimicaSanguinea" />
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Nombre:</label>
                                <input class="form-control" type="search" placeholder="Buscar paciente..." autocomplete="off" id="txtFiltrarPacientesQuimicaSanguinea" disabled>
                                <button class="btn btn-info btn-sm hand shadow" onclick="getAbrirModalQuimicaSanguinea()">
                                    <i class="fal fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-4 col-form-label text-info">Medico tratante:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoQuimicaSanguinea" />
                            </div>
                        </div>
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
                        class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow"
                        onclick="retrocederVistaLaboratorista()"
                    >
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
                        <div class="col-12 col-md-3">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">REF:</label>
                                <input type="text" class="form-control" id="txtRefResultadosVarios" value="FEB25-001" readonly />
                            </div>
                        </div>
                        <div class="col-12 col-md-3">
                            <div>
                                <label class="form-label mb-0 text-white">Fecha:</label>
                                <input type="date" class="form-control" id="fechaResultadosVarios" />
                            </div>
                        </div>
                    </div>

                    <div class="row mb-2 rounded d-flex justify-content-between">
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-2 col-form-label text-info">Nombre:</label>
                                <input class="form-control" type="search" placeholder="Buscar paciente..." autocomplete="off" id="txtFiltrarPacientesResultadosVarios" disabled>
                                <button class="btn btn-info btn-sm hand shadow" onclick="getAbrirModalResultadosVarios()">
                                    <i class="fal fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="input-group">
                                <label class="col-12 col-md-4 col-lg-4 col-form-label text-info">Medico tratante:</label>
                                <input class="form-control bg-amarillo" type="text" placeholder="Ingrese el nombre del medico..." autocomplete="off" id="txtMedicoResultadosVarios" />
                            </div>
                        </div>
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
                        class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow"
                        onclick="retrocederVistaLaboratorista()"
                    >
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
                                                        <th>ID PACIENTE</th>
                                                        <th>NOMBRE</th>
                                                        <th></th>
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
    document.getElementById("fechaCoprologia").value = F.getFecha();
    document.getElementById("fechaUrologia").value = F.getFecha();
    document.getElementById("fechaEnfermedadesInfecciosas").value = F.getFecha();
    document.getElementById("fechaExamenesBacteriologicos").value = F.getFecha();
    document.getElementById("fechaHemoglobinaGlicosilada").value = F.getFecha();
    document.getElementById("fechaPruebasEspeciales").value = F.getFecha();
    document.getElementById("fechaHcgCuantitativa").value = F.getFecha();
    document.getElementById("fechaQuimicaSanguinea").value = F.getFecha();
    document.getElementById("fechaResultadosVarios").value = F.getFecha();


    catalogoPacientes()
    .then((data) => {
        let strTableCopro = '';
        data.forEach(pacienteCopro => {
            strTableCopro += `
                <tr>
                    <td>${pacienteCopro.id || 'Sin Documento de identificación'}</td>
                    <td>${pacienteCopro.nombre_paciente}
                    </td>
                    <td>
                        <button class="btn btn-sm btn-info btn-rounded"
                            data-nombre="${pacienteCopro.nombre_paciente}"
                            data-id="${pacienteCopro.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>
                    
                </tr>
            `;
        });
        document.getElementById("tblCatalogoPacientesCoprologia").innerHTML = strTableCopro;
        
        // Agregar evento de click a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblCatalogoPacientesCoprologia .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPacientesCiprologia").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                $("#modal_catalogo_pacientes_coprologia").modal('hide');

            });
        });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblCatalogoPacientesCoprologia").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })


    // Pacientes en urologia
    catalogoPacientes()
    .then((data) => {
        let strTableUro = '';
        data.forEach(pacienteUro => {
            strTableUro += `
                <tr>
                    <td>${pacienteUro.id || 'Sin Documento de identificación'}</td>
                    <td>${pacienteUro.nombre_paciente}</td>
                    <td>
                        <button class="btn btn-sm btn-info btn-rounded"
                            data-nombre="${pacienteUro.nombre_paciente}"
                            data-id="${pacienteUro.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        document.getElementById("tblCatalogoPacientesUrologia").innerHTML = strTableUro;
        
        // Agregar evento de clic a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblCatalogoPacientesUrologia .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPacientesUrologia").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                $("#modal_catalogo_pacientes_urologia").modal('hide');

        });
    });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblCatalogoPacientesUrologia").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })

    // Pacientes enfermedades infecciosas
    catalogoPacientes()
    .then((data) => {
        let strTableEnfeInfecciosas = '';
        data.forEach(pacienteEnfeInfecciosas => {
            strTableEnfeInfecciosas += `
                <tr>
                    <td>${pacienteEnfeInfecciosas.id || 'Sin Documento de identificación'}</td>
                    <td>${pacienteEnfeInfecciosas.nombre_paciente}</td>
                    <td>
                        <button class="btn btn-sm btn-info btn-rounded"
                            data-nombre="${pacienteEnfeInfecciosas.nombre_paciente}"
                            data-id="${pacienteEnfeInfecciosas.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        document.getElementById("tblCatalogoPacientesEnfermedadesInfecciosas").innerHTML = strTableEnfeInfecciosas;
        
        // Agregar evento de click a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblCatalogoPacientesEnfermedadesInfecciosas .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPacienteEnfermedadesInfecciosas").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                $("#modal_catalogo_pacientes_enfermedades_infecciosas").modal('hide');

            });
        });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblCatalogoPacientesEnfermedadesInfecciosas").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })

    // Pacientes examenes bacteriologicos
    catalogoPacientes()
    .then((data) => {
        let strTableExamBacteriologicos = '';
        data.forEach(pacienteExamBacteriologicos => {
            strTableExamBacteriologicos += `
                <tr>
                    <td>${pacienteExamBacteriologicos.id || 'Sin Documento de identificación'}</td>
                    <td>${pacienteExamBacteriologicos.nombre_paciente}</td>
                    <td>
                        <button class="btn btn-sm btn-info btn-rounded"
                            data-nombre="${pacienteExamBacteriologicos.nombre_paciente}"
                            data-id="${pacienteExamBacteriologicos.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        document.getElementById("tblCatalogoPacientesExamenesBacteriologicos").innerHTML = strTableExamBacteriologicos;
        
        // Agregar evento de click a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblCatalogoPacientesExamenesBacteriologicos .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPacienteExamenesBacteriologicos").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                $("#modal_catalogo_pacientes_examenes_bacteriologicos").modal('hide');

            });
        });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblCatalogoPacientesExamenesBacteriologicos").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })

    // Pacientes Hemoglobina Glicosilada
    catalogoPacientes()
    .then((data) => {
        let strTableHemoglobina = '';
        data.forEach(pacienteHemoglobina => {
            strTableHemoglobina += `
                <tr>
                    <td>${pacienteHemoglobina.id || 'Sin Documento de identificación'}</td>
                    <td>${pacienteHemoglobina.nombre_paciente}</td>
                    <td>
                        <button class="btn btn-sm btn-info btn-rounded"
                            data-nombre="${pacienteHemoglobina.nombre_paciente}"
                            data-id="${pacienteHemoglobina.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        document.getElementById("tblCatalogoPacientesHemoglobina").innerHTML = strTableHemoglobina;
        
        // Agregar evento de click a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblCatalogoPacientesHemoglobina .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPacientesHemoglobinaGlicosilada").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                $("#modal_catalogo_pacientes_hemoglobina").modal('hide');

            });
        });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblCatalogoPacientesHemoglobina").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })

    // Pacientes pruebas especiales
    catalogoPacientes()
    .then((data) => {
        let strTablePruebasEspeciales = '';
        data.forEach(pacientePruebasEspeciales => {
            strTablePruebasEspeciales += `
                <tr>
                    <td>${pacientePruebasEspeciales.id || 'Sin Documento de identificación'}</td>
                    <td>${pacientePruebasEspeciales.nombre_paciente}</td>
                    <td>
                        <button class="btn btn-sm btn-info btn-rounded"
                            data-nombre="${pacientePruebasEspeciales.nombre_paciente}"
                            data-id="${pacientePruebasEspeciales.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        document.getElementById("tblCatalogoPacientesPruebasEspeciales").innerHTML = strTablePruebasEspeciales;
        
        // Agregar evento de click a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblCatalogoPacientesPruebasEspeciales .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPruebasEspeciales").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                $("#modal_catalogo_pacientes_pruebas_especiales").modal('hide');

            });
        });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblCatalogoPacientesPruebasEspeciales").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })

    // Pacientes hcg cuantitativa
    catalogoPacientes()
    .then((data) => {
        let strTableHgcCuantitativa = '';
        data.forEach(pacienteHgcCuantitativa => {
            strTableHgcCuantitativa += `
                <tr>
                    <td>${pacienteHgcCuantitativa.id || 'Sin Documento de identificación'}</td>
                    <td>${pacienteHgcCuantitativa.nombre_paciente}</td>
                    <td>
                        <button class="btn btn-sm btn-info btn-rounded"
                            data-nombre="${pacienteHgcCuantitativa.nombre_paciente}"
                            data-id="${pacienteHgcCuantitativa.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        document.getElementById("tblCatalogoPacientesHgcCuantitativa").innerHTML = strTableHgcCuantitativa;
        
        // Agregar evento de click a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblCatalogoPacientesHgcCuantitativa .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPacientesHcgCuantitativa").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                $("#modal_catalogo_pacientes_hcg_cuantitativa").modal('hide');

            });
        });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblCatalogoPacientesHgcCuantitativa").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })

    // Pacientes Quimica Sanguinea
    catalogoPacientes()
    .then((data) => {
        let strTableQuimicaSanguinea = '';
        data.forEach(pacienteQuimicaSanguinea => {
            strTableQuimicaSanguinea += `
                <tr>
                    <td>${pacienteQuimicaSanguinea.id || 'Sin Documento de identificación'}</td>
                    <td>${pacienteQuimicaSanguinea.nombre_paciente}</td>
                    <td>
                        <button class="btn btn-sm btn-info btn-rounded"
                            data-nombre="${pacienteQuimicaSanguinea.nombre_paciente}"
                            data-id="${pacienteQuimicaSanguinea.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        document.getElementById("tblCatalogoPacientesQuimicaSanguinea").innerHTML = strTableQuimicaSanguinea;
        
        // Agregar evento de click a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblCatalogoPacientesQuimicaSanguinea .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPacientesQuimicaSanguinea").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                $("#modal_catalogo_pacientes_quimica_sanguinea").modal('hide');

            });
        });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblCatalogoPacientesQuimicaSanguinea").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })

    // Pacientes Resultados varios
    catalogoPacientes()
    .then((data) => {
        let strTableResultadosVarios = '';
        data.forEach(pacienteResultadosVarios => {
            strTableResultadosVarios += `
                <tr>
                    <td>${pacienteResultadosVarios.id || 'Sin Documento de identificación'}</td>
                    <td>${pacienteResultadosVarios.nombre_paciente}</td>
                    <td>
                        <button class="btn btn-sm btn-info btn-rounded"
                            data-nombre="${pacienteResultadosVarios.nombre_paciente}"
                            data-id="${pacienteResultadosVarios.id}">
                            <i class="fal fa-plus"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
        document.getElementById("tblCatalogoPacientesResultadosVarios").innerHTML = strTableResultadosVarios;
        
        // Agregar evento de click a los botones de agregar
        const botonesAgregar = document.querySelectorAll("#tblCatalogoPacientesResultadosVarios .btn-rounded");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const nombrePaciente = boton.getAttribute("data-nombre");
                const idPaciente = boton.getAttribute("data-id");

                // Guardar el ID del paciente en la variable global
                GlobalIdPaciente = idPaciente;

                // Actualizar el campo de búsqueda con el nombre del paciente
                document.getElementById("txtFiltrarPacientesResultadosVarios").value = nombrePaciente;

                // Cerrar el modal (si estás usando Bootstrap)
                $("#modal_catalogo_pacientes_resultados_varios").modal('hide');

            });
        });
    })
    .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
        document.getElementById("tblCatalogoPacientesResultadosVarios").innerHTML = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
    })

    
    retrocederVistaLaboratorista();

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


    document.getElementById("card_tbla_pacientes").addEventListener('click', () => {
        Navegar.registroPacientes(); 
    });

    document.getElementById("card_tbla_examenes").addEventListener('click', () => {
        Navegar.examenes();
    })
}

function retrocederVistaLaboratorista() {
    F.slideAnimationTabs();
    document.getElementById("tab-uno").click();

    // Verificar si el modal está visible y recargar los datos si es necesario
    if ($('#modal_catalogo_pacientes_coprologia').is(':visible')) {
        modalPacientesCoprologia();
    }

    if($('#modal_catalogo_pacientes_urologia').is(':visible', )) {
        modalPacientesUrologia();
    }
}

function getAbrirModalCoprologia() {
    $("#modal_catalogo_pacientes_coprologia").modal("show");

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
}

function getAbrirModalPacientesUrologia() {
    $("#modal_catalogo_pacientes_urologia").modal("show");


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
                btnGuardarExamenEnfermedadesInfecc.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

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

function getAbrirModalPruebasEspeciales() {
    $("#modal_catalogo_pacientes_pruebas_especiales").modal("show");
}

function getAbrirModalHcgCuantitativa() {
    $("#modal_catalogo_pacientes_hcg_cuantitativa").modal("show");
}

function getAbrirModalQuimicaSanguinea() {
    $("#modal_catalogo_pacientes_quimica_sanguinea").modal("show");
}

function getAbrirModalResultadosVarios() {
    $("#modal_catalogo_pacientes_resultados_varios").modal("show");
}

function catalogoPacientes() {
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
    let fechaBaseParaTomarMesYAnio =  new Date(document.getElementById("fechaCoprologia").value);
                
    let tipo_examen_copro =  document.getElementById('txtTipoExamenCopro').querySelector('strong').textContent;
    let nombreMedico = document.getElementById("txtMedicoCiprologia").value;
    let importe = document.getElementById("FloatImporteCiprologia").value;
    let fecha = F.devuelveFecha("fechaCoprologia");
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
            medico_tratante: nombreMedico || 'Sin medico referido',
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
                resolve(data);
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

    let fechaBaseParaTomarMesYAnioUrologia =  new Date(document.getElementById("fechaUrologia").value);

    let tipo_examen_uro = document.getElementById("txtTipoExamenUrologia").querySelector('strong').textContent;
    let nombreMedicoUro = document.getElementById("txtMedicoUrologia").value;
    let importeUro = document.getElementById("FloatImporteUrologia").value;
    let fechaUro = F.devuelveFecha("fechaUrologia");
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
            medico_tratante: nombreMedicoUro || 'Sin medico referido',
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

    let fechaEnfeInfecciosasTomarMesYAnio = new Date(document.getElementById("fechaEnfermedadesInfecciosas").value);

    let tipoExamenEnfermedadesInfecciosas = document.getElementById("txtTipoExamenEmfeInfecciosas").querySelector('strong').textContent;
    let nombreMedicoEnfeInfecciosas = document.getElementById("txtMedicoEnferInfeccio").value;
    let importeEnfInfecciosas = document.getElementById("floatImporteEnfInfecciosas").value;
    let fechaEnfeInfecciosas = F.devuelveFecha("fechaEnfermedadesInfecciosas");
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
            medico_tratante: nombreMedicoEnfeInfecciosas || 'Sin medico referido',
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

    let fechaExamenBacteriologicoTomarMesyAnio =  new Date(document.getElementById("fechaExamenesBacteriologicos").value);

    let tipoExamenBacteriologico = document.getElementById("txtTipoExamenBacteriologicos").querySelector('strong').textContent;
    let nombreMedicoExamenBacteriologico = document.getElementById("txtMedicoExamenesBacteriologicos").value;
    let importeExamenBacteriologicos = document.getElementById("floatImporteExamenesBacteriologicos").value;
    let fechaExamenBacteriologico = F.devuelveFecha("fechaExamenesBacteriologicos");
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
            medico_tratante: nombreMedicoExamenBacteriologico || 'Sin medico referido',
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

    let fechaExamenHemoglobinaGlicosiladaTomarMesyAnio =  new Date(document.getElementById("fechaHemoglobinaGlicosilada").value);

    let tipoExamenHemoglobinaGlicosilada = document.getElementById("txtTipoHemoglobinaGlicosilada").querySelector('strong').textContent;
    let nombreMedicoExamenHemoglobinaGlicosilada = document.getElementById("txtMedicoHemoglobinaGlicosilada").value;
    let importeExamenHemoglobinaGlicosilada = document.getElementById("FloatImporteHemoglobinaGlicosilada").value;
    let fechaExamenHemoglobinaGlicosilada = F.devuelveFecha("fechaHemoglobinaGlicosilada");
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
            medico_tratante:nombreMedicoExamenHemoglobinaGlicosilada || 'Sin medico referido',
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

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
                            ${view.vista_enfermedades_infecciosas()}
                        </div>
                        <div class="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_hematologia()}
                        </div>
                        <div class="tab-pane fade" id="seis" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_examenes()}
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
                                    <img src="../img/ciproanalisi.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Coproanálisis" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_uroanalisis">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">UROLOGÍA</h5>
                                    <img src="../img/uroanalisis.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Uroanálisis" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="enfermedades_infecciosas">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">ENFERMEDADES INFECCIOSAS</h5>
                                    <img src="../img/QUIMICA_SANGUINEA.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Química Sanguínea" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_hematologia">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">HEMATOLOGÍA COMPLETA</h5>
                                    <img src="../img/hematology.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Hematología" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_tbla_examenes">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">ARCHIVOS</h5>
                                    <img src="../img/carpeta_icon.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Hematología" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_tbla_pacientes">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">REGISTRO DE PACIENTES</h5>
                                    <img src="../img/icon_user.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Usuarios" />
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
                                <input type="date" class="form-control" id="fechaCiprologia">
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
                                <input class="form-control bg-amarillo" type="text" placeholder="$ Ingreso de importe" autocomplete="off" id="FloatImporteCiprologia">
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
                    <button class="btn btn-circle btn-xl btn-referencia btn-bottom-r hand shadow" id="btnGuardarExamenCipro">
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
                            <input class="form-control" type="search" placeholder="Buscar paciente..." autcomplete="off" id="txtFiltrarPacientesUrologia" disabled>
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
                            <input class="form-control bg-amarillo rounded" type="text" placeholder="$ Ingreso de importe" autocomplete="off" id="FloatImporteUrologia">
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
               
                <div class="row bg-info text-white p-2 align-items-center mb-2 rounded">
                   
                    <div class="col-12 col-md-6">
                        <h1 class="mb-0">ENFERMEDADES INFECCIOSAS</h1>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="d-flex flex-column align-items-end">
                            <div class="mb-2">
                                <label class="form-label mb-0 text-white">REF:</label>
                                <input type="text" class="form-control" value="FEB25-001" readonly>
                            </div>
                        
                            <div>
                                <label class="form-label mb-0 text-white">Fecha:</label>
                                <input type="text" class="form-control" value="6/02/2025" readonly>
                            
                            </div>
                        </div>
                    </div>
                   
                </div>

                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Nombre:</label>
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Buscar paciente" autocomplete="off" />
                                    <button class="btn btn-info btn-sm hand shadow" id="">
                                        <i class="fal fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-3 col-form-label text-info">Fecha nacimiento:</label>
                            <div class="col-sm-9">
                                <input type="date" class="form-control" id="fechaNacimientoPacienteEnfermedadesInfec">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Tratante:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" placeholder="Buscar medico" />
                            </div>
                        </div>
                       
                    </div>
                </div>

                
                <div class="card mb-4">
                    <div class="card-header bg-info text-center">
                        <h5 class="card-title mb-0 text-white">Química Sanguínea</h5>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="form-label text-info">Exámen realizado:</label>
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"></button>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label text-info">Valores normales:</label>
                                <input type="text" class="form-control" readonly>
                            </div>
                            <div class="col-md-2">
                                <label class="form-label text-info">Obtenidos:</label>
                                <div class="d-flex">
                                    <input type="text" class="form-control me-2">
                                    <button class="btn btn-info">
                                        <i class="bi bi-plus-lg"></i> Agregar
                                    </button>
                                </div>
                            </div>
                        </div>

                       
                        <div class="table-responsive mb-3">
                            <table class="table table-bordered">
                                <thead class="table-light">
                                    <tr>
                                        <th>Examen</th>
                                        <th>Valores normales</th>
                                        <th>Valores Obtenidos</th>
                                        <th>Medida</th>
                                        <th>PosNeg</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>

                      
                        <div class="mb-3">
                            <label class="form-label text-info">Otros:</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 text-end">
                        <button class="btn btn-info btn-lg">
                            <i class="fal fa-save"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
            `;
        },
        vista_hematologia:()=> {
            return `
                <div class="container-fluid py-3">
                
                <div class="row bg-info text-white p-3 align-items-center mb-4">
                    <div class="col-1">
                        <button class="btn btn-outline-light" onclick="Navegar.laboratorista()">&lt;&lt;</button>
                    </div>
                    <div class="col-1">
                        <span class="fs-1">i</span>
                    </div>
                    <div class="col">
                        <h1 class="mb-0 text-white">Hematología Completa</h1>
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">Tipo:</label>
                            </div>
                            <div class="col-5">
                                <select class="form-control">
                                    <option>Hematología</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">REF:</label>
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" value="FEB25-001" readonly>
                            </div>
                        </div>
                        <div class="row align-items-center mt-2">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">Fecha:</label>
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" value="6/02/2025" readonly>
                            </div>
                        </div>
                    </div>
                    
                </div>

                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Paciente:</label>
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <select class="form-control"></select>
                                    <button class="btn btn-outline-secondary">
                                        <i class="fal fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-3 col-form-label text-info">Edad:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Médico:</label>
                            <div class="col-sm-9">
                                <select class="form-control"></select>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-3 col-form-label text-info">Laboratorista:</label>
                            <div class="col-sm-9">
                                <select class="form-control"></select>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div class="row">
                    
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">Hematología</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Hematocrito:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Hemoglobina:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">g/dl</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Eritrosedimentación:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">mm/hora</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Glóbulos Rojos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">Eri/mm³</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Glóbulos Blancos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">Leuc/mm³</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Plaquetas:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">mm³</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">Fórmula Diferencial</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Segmentados:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Basófilos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Linfocitos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Monocitos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Eosinófilos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Cayados:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div class="alert alert-danger mb-0">
                                        <strong>Diferencial:</strong> Falso
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div class="row mb-4">
                    <div class="col-12">
                        <label class="form-label text-info">Otros:</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>

               
                <div class="row">
                    <div class="col-12 text-end">
                        <button class="btn btn-info btn-lg">
                            <i class="fal fa-save"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
            `;
        },
        vista_examenes:()=> {
            return ``;
        },
        vista_modal_pacientes_copro() {
            return `
                <div class="modal fade" id="modal_catalogo_pacientes_coprologia">
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
                                        <div class="table-wrap">
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
    }

    root.innerHTML = view.body();

};

function addListeners(){

  



    document.getElementById("fechaCiprologia").value = F.getFecha();

    document.getElementById("fechaUrologia").value = F.getFecha();

    document.getElementById("fechaNacimientoPacienteEnfermedadesInfec").value = F.getFecha();

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

    document.getElementById("card_hematologia").addEventListener('click', ()=> {
        F.slideAnimationTabs();
        document.getElementById("tab-cinco").click();
    });

    document.getElementById("card_tbla_pacientes").addEventListener('click', () => {
        Navegar.registroPacientes(); 
    });

    document.getElementById("card_tbla_examenes").addEventListener('click', () => {
        Navegar.examenes();
    })
    
    retrocederVistaLaboratorista();

};

function initView(){

    getView();
    addListeners();

};


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



async function modalPacientesCoprologia() {
    const tbody = document.getElementById("tblCatalogoPacientesCoprologia");
    tbody.innerHTML = GlobalLoader; 
    let str = '';

    

        axios.post("/lista_pacientes", {
            filtro: ''
        })
        .then((response) => {
            let data = response.data;
            if (Array.isArray(data) && data.length > 0) {
                data.forEach((pacientesCopro) => {
                    console.log(pacientesCopro);
                    str += `
                        <tr>
                            <td>${pacientesCopro.id || 'Sin ID'}</td>
                            <td>${pacientesCopro.nombre_paciente}</td>
                            <td>
                                <button class="btn btn-sm btn-info btn-rounded" 
                                        data-nombre="${pacientesCopro.nombre_paciente}" 
                                        data-id="${pacientesCopro.id}">
                                    <i class="fal fa-plus"></i>
                                </button>
                            </td>
                        </tr>
                    `;
                    tbody.innerHTML = str;
                    // Agregar evento de clic a los botones de agregar
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


                            // Opcional: Mostrar el ID en consola para verificar
                            console.log("ID del paciente seleccionado:", GlobalIdPaciente);
                        });
                    });
                });
            } else {
                str = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
            }
        })
        .catch((error) => {
            console.error('Error al cargar los pacientes:', error);
            tbody.innerHTML = '<tr><td colspan="3">Error al cargar los pacientes</td></tr>';
        })
    
}

function limpiar_datos_examen_ciprologia() {
    document.getElementById("txtMedicoCiprologia").value = '';
    document.getElementById("fechaNacimientoPacienteCiprologia").value = '';
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

function insertDatosExamenCipro(tipo_examen, importe, medico_tratante, fecha, anio, mes, copro_macroscopio_color, copro_macroscopio_restos_alimenticios, copro_macroscopio_sangre, copro_macroscopio_consistencia, copro_macroscopio_Moco, copro_macroscopio_PH, copro_quimico_leucocitos, copro_quimico_celulas_vegetales, copro_quimico_almidones, copro_quimico_levaduras, copro_quimico_huevo, copro_quimico_quistes, copro_microscopio_eritrocitos, copro_microscopio_grasas, copro_microscopio_jabon, copro_microscopio_bacterias) {
   
    return new Promise((resolve, reject) => {
        axios.post("/insert_examen_ciprologia", {
            tipo_examen: tipo_examen,
            paciente_id: GlobalIdPaciente,
            importe: importe,
            medico_tratante: medico_tratante,
            fecha: fecha,
            anio: anio,
            mes: mes,
            copro_macroscopio_color: copro_macroscopio_color,
            copro_macroscopio_restos_alimenticios: copro_macroscopio_restos_alimenticios,
            copro_macroscopio_sangre: copro_macroscopio_sangre,
            copro_macroscopio_consistencia: copro_macroscopio_consistencia,
            copro_macroscopio_Moco: copro_macroscopio_Moco,
            copro_macroscopio_PH: copro_macroscopio_PH,
            copro_quimico_leucocitos: copro_quimico_leucocitos,
            copro_quimico_celulas_vegetales: copro_quimico_celulas_vegetales,
            copro_quimico_almidones: copro_quimico_almidones,
            copro_quimico_levaduras: copro_quimico_levaduras,
            copro_quimico_huevo: copro_quimico_huevo,
            copro_quimico_quistes: copro_quimico_quistes,
            copro_microscopio_eritrocitos: copro_microscopio_eritrocitos,
            copro_microscopio_grasas: copro_microscopio_grasas,
            copro_microscopio_jabon: copro_microscopio_jabon,
            copro_microscopio_bacterias: copro_microscopio_bacterias
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


function getAbrirModalCoprologia() {
    
        $("#modal_catalogo_pacientes_coprologia").modal("show");

    
    // Forzar la recarga de datos cuando el modal se muestra
    $('#modal_catalogo_pacientes_coprologia').on('shown.bs.modal', function () {
        modalPacientesCoprologia();
    });

    // Guardar examen
    let btnGuardarExamenCipro = document.getElementById('btnGuardarExamenCipro');
    btnGuardarExamenCipro.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro de guardar el examen?")
        .then((value) => {
            if(value == true) {
                
                // Fecha base para tomar mes y año 
                let fechaBaseParaTomarMesYAnio =  new Date(document.getElementById("fechaCiprologia").value);
                
                let tipo_examen_copro =  document.getElementById('txtTipoExamenCopro').querySelector('strong').textContent;
                let nombreMedico = document.getElementById("txtMedicoCiprologia").value;
                let importe = document.getElementById("FloatImporteCiprologia").value;
                let fecha = F.devuelveFecha("fechaCiprologia");
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


                btnGuardarExamenCipro.disabled = true;
                btnGuardarExamenCipro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insertDatosExamenCipro(tipo_examen_copro, importe, nombreMedico, fecha, anio, mes, colorHecesMacro, restoAlimentacionMacro, sangreMacro, consistenciaMacro, mocoMacro, phMacro, leucocitosQuimicos, celulasQuimico, almidonesQuimico, levadurasQuimico, huevoQuimico, quistesQuimico, eritrocitosMicro, grasasMicro, jabonMicro, bacterias)
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!");
                    Navegar.laboratorista();
                    // limpiar_datos_examen_ciprologia();
                    // document.getElementById("tab-dos").click();
                    btnGuardarExamenCipro.disabled = false;
                    btnGuardarExamenCipro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se pudo guardar el examen" + e);
                    console.log(e);
                    btnGuardarExamenCipro.disabled = false;
                    btnGuardarExamenCipro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .finally(()=> {
                    btnGuardarExamenCipro.disabled = false;
                    btnGuardarExamenCipro.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
            }
        })
    })
}

function getAbrirModalPacientesUrologia() {
    $("#modal_catalogo_pacientes_urologia").modal("show");

    // Forzar la recarga de datos cuando el modal se muestra
    $('#modal_catalogo_pacientes_urologia').on('shown.bs.modal', function () {
        modalPacientesUrologia(); // Llama a la función correcta
    });

    let btnGuardarExamenUrologia = document.getElementById('btnGuardarExamenUrologia');
    btnGuardarExamenUrologia.addEventListener('click', () => {
        F.Confirmacion("¿Está seguro de guardar el examen?")
        .then((value) => {
            if(value == true) {

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

                btnGuardarExamenUrologia.disabled = true;
                btnGuardarExamenUrologia.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insertDatosExamenUro(tipo_examen_uro, importeUro, nombreMedicoUro, fechaUro, anioUro, mesUro, colorHecesMacroUro, aspectoMacroUro, densidadMacroUro, phMacroUro, leucocitosQuimUro, glucosaQuimUro, proteinasQuimUro, cetonasQuimUro, hemoglobinaQuimUro, urobiligenoQuimUro, nitritosQuimUro, acidoAscorbicoQuimUro, bilirrubinaQuimUro, leucocitosMicroUro, eritrocitosMicroUro, epitelialesMicroUro, bacteriasMicroUro, cristalesMicroUro, cilindrosMicroUro, otroMicroUro)
                .then(() => {
                    F.Aviso("Examen guardado exitosamente!!!");
                    Navegar.laboratorista();

                    btnGuardarExamenUrologia.disabled = false;
                    btnGuardarExamenUrologia.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                })
                .catch((e) => {
                    F.AvisoError("No se pudo guardar el examen!!" + e);
                    console.log(e);
                    btnGuardarExamenUrologia.disabled = false;
                    btnGuardarExamenUrologia.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .finally(() => {
                    btnGuardarExamenUrologia.disabled = false;
                    btnGuardarExamenUrologia.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })

            }
        })
    })

}

async function modalPacientesUrologia() {
    const tbody = document.getElementById("tblCatalogoPacientesUrologia");
    tbody.innerHTML = GlobalLoader; 

        let str = '';

        axios.post("/lista_pacientes", {
            filtro:''
        })
        .then((response) => {
            let data = response.data;

            if (Array.isArray(data) && data.length > 0) {
                data.forEach((pacienteUro) => {
                    console.log(pacienteUro);
                    str += `
                        <tr>
                            <td>${pacienteUro.id_paciente || 'Sin ID'}</td>
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
    
                    tbody.innerHTML = str;
    
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
    
    
                            // Opcional: Mostrar el ID en consola para verificar
                            console.log("ID del paciente seleccionado:", GlobalIdPaciente);
                    });
                });
            });
            } else {
                str = '<tr><td colspan="3">No hay pacientes disponibles</td></tr>';
            }

        })
        .catch((error) => {
            console.error('Error al cargar los pacientes:', error);
            tbody.innerHTML = '<tr><td colspan="3">Error al cargar los pacientes</td></tr>';

        })
    
}

function insertDatosExamenUro(tipo_examen, importe, medico_tratante='Sin medico', fecha, anio, mes, uro_macro_color, uro_macro_aspecto, uro_macro_densidad, uro_macro_ph, uro_quimico_leucocitos, uro_quimico_glucosa, uro_quimico_proteinas, uro_quimico_cetonas, uro_quimico_hemoglobina, uro_quimico_urobilinogeno, uro_quimico_nitritos, uro_quimico_acido_ascorbico, uro_quimico_bilirrubina, uro_micro_leucocitos, uro_micro_eritocitos, uro_micro_c_epiteliales, uro_micro_bacterias, uro_micro_cristales, uro_micro_cilindros, uro_micro_otros) {

    return new Promise((resolve, reject) => {
        axios.post("/insert_examen_urologia", {
            tipo_examen: tipo_examen,
            paciente_id: GlobalIdPaciente,
            importe: importe,
            medico_tratante: medico_tratante,
            fecha: fecha,
            anio: anio,
            mes: mes,
            uro_macro_color: uro_macro_color,
            uro_macro_aspecto: uro_macro_aspecto,
            uro_macro_densidad: uro_macro_densidad,
            uro_macro_ph: uro_macro_ph,
            uro_quimico_leucocitos: uro_quimico_leucocitos,
            uro_quimico_glucosa: uro_quimico_glucosa,
            uro_quimico_proteinas: uro_quimico_proteinas,
            uro_quimico_cetonas: uro_quimico_cetonas,
            uro_quimico_hemoglobina: uro_quimico_hemoglobina,
            uro_quimico_urobilinogeno: uro_quimico_urobilinogeno,
            uro_quimico_nitritos: uro_quimico_nitritos,
            uro_quimico_acido_ascorbico: uro_quimico_acido_ascorbico,
            uro_quimico_bilirrubina: uro_quimico_bilirrubina,
            uro_micro_leucocitos: uro_micro_leucocitos,
            uro_micro_eritocitos: uro_micro_eritocitos,
            uro_micro_c_epiteliales: uro_micro_c_epiteliales,
            uro_micro_bacterias: uro_micro_bacterias,
            uro_micro_cristales: uro_micro_cristales,
            uro_micro_cilindros: uro_micro_cilindros,
            uro_micro_otros: uro_micro_otros
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
            console.log(error)
            reject(error);
        })
    })

}
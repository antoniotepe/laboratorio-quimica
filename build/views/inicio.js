
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

                <div class="container text-center animate__animated animate__fadeInDown">
                    <a href="" >
                        <img src="../img/favicon.png" class="rounded img-fluid banner-image" />
                    </a>
                    <div class="">
                        <h1 class="banner-title display-4">Laboratorio Clínico Bio-Química</h1>
                        <p class="banner-subtitle lead">Expertos en análisis clínicos y cuidado de tu salud</p>
                        <button class="button btn-lg hand shadow" id="btn-servicios">Servicios</button>
                    </div>
                </div>


                <div class="container my-5" id="seccion-servicios">
                <h2 class="font-weight-bold text-center mb-4 display-4">Servicios</h2>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                                <img src="../img/hematology.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">HEMATOLOGÍA</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Hematología completa</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Hemoglobina-Hematocrito</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Recuento de Glóbulos Rojos</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Recuento de Reticulocitos</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Recuento de Eosinófilos</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Recuento de Plaquetas</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Clasificación de Anemia</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Gota gruesa</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/heces.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">HECES</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Examen de Heces Completo</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Pylori Cuantitativo</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Azul de metileno</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Sangre oculta</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Rotavirus</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Pylori en Heces</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/orina.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">ORINA</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Examen Completo de Orina</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Creatinina (orina 24 Hrs.)</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Azul de metileno</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Sangre oculta</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Rotavirus</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Pylori en Heces</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>
                        
                         <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/enfermedades_infecciosas.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">ENFERMEDADES INFECCIOSAS</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Hepatitis A: Anticuerpo IgM</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Hepatitis B: HBsAg. Antigeno de superficie australiano</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Hepatitis B: HBc-IgM. anticuerpos contra el anligeno central Core</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Hepatitis C: Anticuerpos IgM</small>
                                            </li>
                                            <li>
                                                <small class="negrita">HIV 1 / HIV 2</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Reacción de Widal</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Helicobacter pylori</small>
                                            </li>
                                            <li>
                                                <small class="negrita">VDRL (Cardiolipina)</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Anticuerpos Anti-M Tuberculosis (IgM-IgG)</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Dengue IgM</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Dengue IgG</small>
                                            </li>
                                            <li>
                                                <small class="negrita">TORCH IgM</small>
                                            </li>
                                            <li>
                                                <small class="negrita">TORCH IgG</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Toxoplasma, anticuerpos IgM</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Toxoplasma, anticuerpos IgG</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Citomegalovirus, anticuerpos IgM</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Citomegalovirus, anticuerpos IgG</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Rubeola, anticuerpos IgM</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Rubeola, anticuerpos IgG</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Herpes, anticuerpo IgM</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Herpes, anticuerpos IgG</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Pylory cuantitativo</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                         <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/coagulacion.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">COAGULACIÓN</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Tiempo de Sangría</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Tiempo de Coagulación</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Tiempo de Protrombina (TP)</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Tiempo Parcial de Tromboplastina (TPT)</small>
                                            </li>
                                            <li>
                                                <small class="negrita">INR</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/REUMATOLOGIA.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">REUMATOLOGIA</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Antiestreptolisina "O"</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Factor Reumatoide</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Proteína "C" Reactiva</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">C3-C4</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Anticuerpos antinucleares (FANA)</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/IMMUNOHEMATOLOGY.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">INMUNOHEMATOLOGIA</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Grupo Sanguíneo y Factor Rh</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Compatibilidad</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Coombs Directo</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Coombs Indirecto</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/QUIMICA_SANGUINEA.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">QUIMICA SANGUINEA</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Glucosa Pre-prandial</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Glucosa Post-prandial</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Hemoglobina glicosilada</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Acido úrico</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Creatinina</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Nitrógeno de urea</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Proteínas totales</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Albúmina Sérica</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Relación A/G</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Electrolitos Na+, K+, Calcio</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/hormonas.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">HORMONAS</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Hormonas Estimulantes de la Tiroides (TSH)</small>
                                            </li>
                                            <li>
                                                <small class="negrita">T3-T4</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Prólactina (PRL)</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Hormona Folículo Estimulante (FSH)</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Hormona Luteinizante LH</small>
                                            </li>
                                            <li>
                                                <small class="negrita">HCG subunidad beta cuantitiva</small>
                                            </li>
                                            <li>
                                                <small class="negrita">HCG cualitativa</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Estradiol</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/marcadores_tumorales.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">MARCADORES TUMORALES</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Afa-fetoproteína (AFP)</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Antigeno Carcinoembrionario/Colon (CEA)</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Antígeno Protático Específico (PSA)</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Antígeno CA 125-Ovario</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Antígeno CEA-19-9</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Antígeno PSA libre</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/microbiology.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">MICROBIOLOGIA</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Gram</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Baciloscopía</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Orocultivo</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Urocultivo</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Coprocultivo</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Cultivo de Secreciones</small>
                                            </li>
                                            <li>
                                                <small class="negrita">KOH</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Esperograma</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/perfil_hepatico.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">PERFIL HEPATICO</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Bilirrubinas</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Trans. Glutámico Pirúvica (TGP)</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Trans. Glutámico Oxalacética (TGO)</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Fosfatasa Alcalina (FA)</small>
                                            </li>
                                            

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/perfil_lipidos.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">PERFIL DE LIPIDOS</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Colesterol Total</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Colesterol HDL</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Colesterol LDL</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Triglicéridos</small>
                                            </li>
                                            
                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/perfil_pancreatico.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">PERFIL PANCREATICO</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Amilasa Sérica</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Lipasa Sérica</small>
                                            </li>
                                                                                      

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/perfil_prostata.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">PERFIL PROSTATICO</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Fosfatasa Acida Total</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Fosfatasa Acida Prostática</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Antigeno Prostático Especifico</small>
                                            </li>
                                            

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/perfil_cardiaco.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">PERFIL CARDIACO</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Creatin Kinasa total (CK)</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Creatin Kinasa Fracción MB</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Deshidrogenasa Láctina (LDH)</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">TGO</small>
                                            </li>
                                            
                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/perfil_prenatal_1.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">PAQUETE PRENATAL I</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Hematología</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Grupo y Rh</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Glucosa</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">VDRL</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Heces</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Orina</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">HIV</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/perfil_prenatal_2.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">PAQUETE PRENATAL II</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Hematología</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Grupo y Rh</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Glucosa</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">VDRL</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Heces</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Orina</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">HIV</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Toxoplasma</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded m-2 p-3 hand shadow">
                            <img src="../img/perfil_prenatal_3.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">PAQUETE PRENATAL III</h5>
                                    
                                        <ul>
                                            <li>
                                                <small class="negrita">Hematología</small>
                                            </li>
                                            <li>
                                                <small class="negrita">Grupo y Rh</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Glucosa</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">VDRL</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Heces</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">Orina</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">HIV</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">TORCH</small>
                                            </li>
                                            <li>
                                                <small class=" negrita">OTROS</small>
                                            </li>

                                        </ul>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                    


                <div class="container-fluid fondo-contenedor mt-5" id ="contacto">
                    <h2 class="font-weight-bold text-center mb-4 display-4">Contacto</h2>
                    <div class="row mt-5">
                       
                        <div class="col-12 col-md-6">
                            <div class="card-rounded shadow-lg p-4 bg-white ">
                                <h3 class="text-center mb-4" style="color: #0e6ec5; font-weight: bold;">LABORATORIO CLÍNICO BIO-QUÍMICA</h3>
                                <h4 class="mb-3" style="color: #0e6ec5; font-weight: bold;">Contactos</h4>
                                <p class="mb-3">
                                    <i class="fal fa-phone text-primary me-2"></i> 
                                    <strong>Teléfonos:</strong> 
                                    <a href="tel:+50278726113">7872-6113</a> | 
                                    <a href="tel:+50247543975">4754-3975</a>
                                </p>
                               <p class="mb-3">
                                    <i class="fal fa-envelope text-primary me-2"></i> 
                                    <strong>Correo:</strong> 
                                    <a href="mailto:laboratorioclinicobioquimica@gmail.com">laboratorioclinicobioquimica@gmail.com</a>
                                </p>
                                <p class="mb-4">
                                    <i class="fal fa-clock text-primary me-2"></i> 
                                    <strong>Horario:</strong> Lunes a Domingo, 06:00 AM - 7:00 PM
                                </p>

                                <h4 class="mb-3" style="color: #0e6ec5; font-weight: bold;">Dirección</h4>
                                <p class="mb-0">
                                    <i class="fal fa-map-marker-alt text-primary me-2"></i> 
                                    <strong>Ubicación:</strong> LOCAL NO. 03 C.C. PASEO CARNAVAL, MAZATENANGO, SUCHITEPEQUEZ
                                    <div class="d-flex justify-content-start m-2">
                                        <button type="button" class="btn btn-primary btn-xs shadow" style="background-color: #0e6ec5;" onclick="F.gotoGoogleMaps(14.53579, -91.52220)">Ir</button>
                                    </div>
                                </p>
                            </div>
                        </div>

                       
                        <div class="col-12 col-md-6 mt-3">
                            <div class="card-rounded shadow-lg p-4 bg-white rounded-3">
                                <h4 class="text-center mb-4" style="color: #0e6ec5; font-weight: bold;">Envíanos un mensaje</h4>
                                <form>
                                    <div class="form-group mb-3">
                                        <input
                                            type="text"
                                            class="form-control py-3 rounded-3"
                                            id="nombreUsuarioW"
                                            placeholder="Nombre completo..."
                                        />
                                    </div>
                                    
                                    <div class="form-group mb-4">
                                        <textarea
                                            class="form-control py-3 rounded-3"
                                            id="mensajeUsuarioW"
                                            rows="4"
                                            placeholder="Mensaje..."
                                        ></textarea>
                                    </div>
                                    <div class="text-center">
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-lg px-5 py-2 shadow rounded-3"
                                            id="btnRegistroUsuarioW"
                                            style="background-color: #0e6ec5; border: none;"
                                        >
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid" id="seccion-mision">
                    <div class="row mt-4">
                        <div class="col-12 col-md-6">
                            
                            <h2 class="text-center negrita">Our history</h2>
                            <img src="../img/imagen_fondo_history.jpg" class="card-img-top card-rounded mt-5">
                            <h3 class="mt-3">Mirum est notare quam littera gothica</h3>
                            <p class="mt-4">Dolor in hen drerit in vul putate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto dio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming</p>
                            <h3 class="mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus.</h3>
                            <p class="mt-3">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lector</p>

                            <ul>
                                <li>In pede mi, aliquet sit amet, euismod in,auctor ut, ligula</li>
                                <li>Aliquam dapibus tincidunt metus</li>
                                <li>Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem</li>
                                <li>Vestibulum sed ante</li>
                            </ul>

                            <p class="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean    nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.
                            Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci.</p>

                        </div>

                        <div class="col-12 col-md-6">
                            <h2 class="text-center m-4 negrita">Our mission</h2>
                            <p class="mt-3"><i class="fal fa-quote-left" style="font-size: 30px;"></i> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem.</p>
                            <p class="mt-2 text-end">Mark Johnson / legentis iniis qui</p>
                        </div>


                        

                    </div>
                </div>


                <!-- Mapa -->
                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-12 p-0">
                            <h2 class="font-weight-bold text-center mb-4 display-4">Ubicación</h2>
                    
                        <div class="card-rounded shadow-lg bg-white rounded-3">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d123552.76564763446!2d-91.736317!3d14.5977125!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses-419!2sgt!4v1738532088834!5m2!1ses-419!2sgt" 
                                    width="100%" 
                                    height="400" 
                                    style="border:0;" 
                                    allowfullscreen="" 
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    class="rounded-3"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>


            <small class="negrita text-naranja text-end">By ${byAuthor} (${versionapp})</small>

                

            `
        },
        vista_nuevo:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    document.getElementById('btn-servicios').addEventListener('click', function() {
        // Desplazamiento suave
        smoothScrollTo('#seccion-servicios', 1000);
    
        
        setTimeout(() => {
            const cards = document.querySelectorAll('#seccion-servicios .card-rounded');
            cards.forEach(card => {
                card.classList.remove('animate__animated', 'animate__fadeInUp');
                void card.offsetWidth; // Forzar el reinicio de la animación (truco de reflow)
                card.classList.add('animate__animated', 'animate__fadeInUp');
                card.style.setProperty('--animated-duration', '2s') 
            });
        }, 800); 
    });

    document.addEventListener('scroll', () => {
        const serviciosSection = document.getElementById("seccion-servicios");
        const serviciosPosition = serviciosSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (serviciosPosition < screenPosition) {
            const cards = document.querySelectorAll("#seccion-servicios");
            cards.forEach(card => {
                card.classList.add('animate__animated', 'animate__fadeInUp');
            })
        }

    })

    document.addEventListener('scroll', () => {
        const contactosSection = document.getElementById("contacto");
        const contactosPosition = contactosSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (contactosPosition < screenPosition) {
            const cards = document.querySelectorAll('#contacto');
            cards.forEach(card => {
                card.classList.add('animate__animated', 'animate__fadeInUp');
            })
        }

    })

    document.addEventListener('scroll', () => {
        const misionSection = document.getElementById("seccion-mision");
        const misionPosition = misionSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;


        if(misionPosition < screenPosition) {
            const cards = document.querySelectorAll('#seccion-mision');
            cards.forEach(card => {
                card.classList.add('animate__animated', 'animate__fadeInUp');
            })
        }

    })

    document.getElementById("btnRegistroUsuarioW").addEventListener("click", () => {
        
        const nombre = document.getElementById("nombreUsuarioW").value.trim();
        const mensaje = document.getElementById("mensajeUsuarioW").value.trim();
        
        
        if (!nombre || !mensaje) {
            alert("Por favor, ingresa tu nombre y un mensaje.");
            return;
        }
    
        // Formatear el mensaje para WhatsApp
        const numeroWhatsApp = "+50247543985";
        const mensajeWhatsApp = `Hola, mi nombre es ${nombre}. ${mensaje}`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
    
        // Redirigir a WhatsApp
        window.open(url, "_blank");
    });

};

function initView(){

    getView();
    addListeners();

};


// Funcion para un desplamiento suave
function smoothScrollTo(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.getElementById('btn-servicios').addEventListener('click', function() {
    smoothScrollTo('#seccion-servicios', 800); 
});

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
            <div class="container my-5 animate__animated animate__fadeInUp">
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
            `
        },
        vista_nuevo:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

};

function initView(){

    getView();
    addListeners();

};



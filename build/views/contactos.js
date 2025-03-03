
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
            <div class="container-fluid fondo-contenedor mt-5 animate__animated animate__fadeInUp">
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
            `
        },
        vista_nuevo:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

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

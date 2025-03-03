
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
            <div class="container-fluid animate__animated animate__fadeInUp">
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

};

function initView(){

    getView();
    addListeners();

};

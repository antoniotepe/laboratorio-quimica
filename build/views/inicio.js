
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

   

};

function initView(){

    getView();
    addListeners();

};


// Funcion para un desplamiento suave

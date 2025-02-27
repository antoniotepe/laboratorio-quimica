
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
            <div class="container-fluid mt-5" style="display: grid; place-items: center;">
            <div class="card card-rounded shadow col-12 col-sm-12 col-md-6 col-md-8 col-lg-5 col-xl-5" >
                <div class="card-body p-2">
                   
                        <div class="form-group text-center">
                            <img src="./favicon.png" width="100px" height="100px">
                        </div>

                        <div class="form-group">
                            <label>Nombre de usuario</label>
                            <input type="text" class="form-control negrita" id="nombreUsuario"/>
                        </div>
                        <div class="form-group">
                            <label>Clave</label>
                            <input type="password" class="form-control" id="claveUsuario"/>
                        </div>
                        
                        <div class="form-group text-center">
                            <button type="button" class="btn btn-info btn-xl btn-circle hand shadow" id="btnLoginUsuario">
                                <i class="fal fa-lock"></i>
                            </button>
                        </div>

                        <small class="negrita text-naranja text-end">By ${byAuthor} (${versionapp})</small>
                    
                </div>
            </div>
        </div>
            `
        },
        vista_nuevo:()=>{
            ``
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){
    document.getElementById('btnLoginUsuario').addEventListener('click', () => {
        loginValidacion();
    })
};

function initView(){

    getView();
    addListeners();

};

function loginValidacion() {
    return new Promise((resolve, reject) => {
        let nombreUsuario = document.getElementById('nombreUsuario').value;
        let claveUsuario = document.getElementById('claveUsuario').value;

        F.limpiarTexto(nombreUsuario);
        F.limpiarTexto(claveUsuario);

        if (!nombreUsuario || !claveUsuario) {
            return reject(F.AvisoError("Debe ingresar su nombre y clave"));
        }

        btnLoginUsuario.disabled = true;
        btnLoginUsuario.innerHTML = `<i class="fal fa-unlock fa-spin"></i>`;

        axios.post("/loginLaboratorio", {
            nombre: nombreUsuario,
            clave: claveUsuario
        })
        .then((response) => {
            let data = response.data;

            if (data && data.length > 0) {
                let datosObtenidos = data[0];
                GlobalCodigoUsuario = datosObtenidos.CODUSUARIO;
                GlobalUsuario = datosObtenidos.NOMBRE;
                GlobalPass = datosObtenidos.CLAVE;
                GlobalRolUsuario = datosObtenidos.TIPO;

                switch (datosObtenidos.TIPO) {
                    case "GERENTE":
                        Navegar.dashboard();
                        break;
                    case "LABORATORIO":
                        Navegar.laboratorista();
                        break;
                    case "JORNADA":
                        Navegar.jornada();
                        break;
                    default:
                        F.AvisoError("Usuario no registrado");
                }

                resolve(data);
            } else {
                F.AvisoError("Usuario no registrado");
            }
        })
        .catch((err) => {
            console.error(`Hubo un error al iniciar sesión: ${err.message}`);
            F.AvisoError(`Hubo un error al iniciar sesión: ${err.message}`);
            reject(err);
        })
        .finally(() => {
            btnLoginUsuario.disabled = false;
            btnLoginUsuario.innerHTML = `<i class="fal fa-unlock"></i>`;
        });
    });
}



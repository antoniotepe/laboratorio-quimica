// Función auxiliar para cerrar el navbar
const closeNavbar = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
};

// Función auxiliar para cargar vista
const loadView = (viewPath) => {
    return F.loadScript(viewPath, 'root')
        .then(() => {
            initView();
            closeNavbar();
        });
};

let Navegar = {
    dashboard: () => loadView('./views/dashboard.js'),
    laboratorista: () => loadView('./views/laboratorista.js'),
    registroPacientes:() => loadView('./views/registroPacientes.js'),
    examenes: () => loadView('./views/examenes.js'),
    jornada: () => loadView('./views/jornada.js'),
    inicio: () => loadView('./views/inicio.js'),
    login:() => loadView('./views/login.js'),
};
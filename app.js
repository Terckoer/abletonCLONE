addEventListener('DOMContentLoaded', () =>{
    const btnNavbar = document.querySelector(".btn-navbar");
    if(btnNavbar){
        btnNavbar.addEventListener('click', ()=>{
            const navbar_menus = document.querySelector('.navbar-menus');
            navbar_menus.classList.toggle('show');
            const color = document.querySelector('.menu');
            color.classList.toggle('color');
        });
        console.log("Gaaaaaa")
    }
});
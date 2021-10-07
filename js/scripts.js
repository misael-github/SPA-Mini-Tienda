
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function habilitarBotonDePago(){

const myIframe = document.getElementById("form")
const button = document.querySelector(".btn-pagar")


let load = 0;

myIframe.onload = function(){
    /Execute on every reload on iFrame/
    load++;
    if(load > 1){
        /Second reload is a submit/
        // document.location = "https://www.google.com/search?q=thanks&tbm=isch";
         Swal.fire({
            title: "Pago",
            text:"Método de pago disponible Mercado Pago.",
            confirmButtonText:`<a style="color:white; text-decoration:none; "; href="https://mpago.la/2eZwHmu">Pagar</a> `,
            
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            // icon:"success",
        })
    }
}

}
habilitarBotonDePago() 
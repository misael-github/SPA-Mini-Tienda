/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

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
var load = 0;

document.getElementById('form').onload = function(){
    /*Execute on every reload on iFrame*/
    load++;
    if(load > 1){
        /*Second reload is a submit*/
        document.location = "https://www.karvi.com.ar";
    }
}
// function submitForm() {
//     const formEl = document.getElementById("contactForm");
//     const messageEl = document.querySelector(".form-control");
  
//     formEl.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const formData = new FormData(e.target);
//       const value = Object.fromEntries(formData.entries());
//       fetch("https://apx-api.vercel.app/api/utils/dwf", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//           to: "dmisael2000@gmail.com",
//           message: `
//           Recibiste un mensaje de: ${value.name}.Mail: ${value.email}. Mensaje: ${value.message}`,
//         }),
        
//       });
//       messageEl.style.display = "inherit";
//       // messageEl.style.color = "lime";
//       formEl.reset();
//     });
//   }
// submitForm()
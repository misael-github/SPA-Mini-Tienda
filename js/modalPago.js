function enableButtonPayment() {
    const myIframe = document.getElementById("form");
   
    let load = 0;
  
    myIframe.onload = function () {
      // Execute on every reload on iFrame
      load++;
      if (load > 1) {
        // Second reload is a submit
        // document.location = "https://www.google.com/search?q=thanks&tbm=isch";
        Swal.fire({
          title: "Pago",
          text: "Método de pago disponible Mercado Pago.",
          confirmButtonText: `<a style="color:white; text-decoration:none; "; href="https://mpago.la/2eZwHmu">Pagar</a> `,
  
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          // icon:"success",
        });
      }
    };
  }
  enableButtonPayment();
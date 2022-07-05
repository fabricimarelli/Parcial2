window.onload=function(){
   
    //variables
    var formUsuario=document.getElementById('login-form');
    var email = document.getElementById('email');
    var contraseña = document.getElementById('contraseña');
    var error_email = document.getElementById('error-email');
    var modal = document.getElementById("modal-error");
    var expRegular= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var span=document.getElementsByClassName("close")[0];
    
    if(localStorage.getItem('login')){
        window.location.href="dashboard.html"
    }
    
    formUsuario.addEventListener('submit',function(evento){
        evento.preventDefault();
        
        if(expRegular.test(email.value)){
            error_email.classList.add('ocultar-error');
            fetch("https://basic-server-one.vercel.app/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                email: email.value,
                password: contraseña.value,
                })
            })

            .then(function(response){
                //Exito
                if (response.status===200) {
                    console.log('inicio OK');
                    //Local storage
                    localStorage.setItem('login',true);
                    modal.style.display="none";
                    //redireccion al dashboard
                    window.location.href = 'dashboard.html';
                }
    
                //Error
                else{
                    console.log('Error inicio sesion');
                    modal.style.display='block';
                }
                
            })
            
            .catch(error=>console.log('Hay un error', error))
        }
        else{
            modal.style.display='none';
            error_email.classList.remove('ocultar-error');
        }


    })
        
    
    //MODAL

    //para cerrar el modal cuando click X
    span.onclick = function() {
    modal.style.display = "none";
    }

    //para cerrar modela click en pantalla
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //setea el intervalo y color de parpadeo
    window.setInterval(parpadea,500);
    var color="red";

    //funcion parpadea el mensaje de exito
    function parpadea(){
        
        var mensaje_parpadea=document.getElementById("mensaje_parpadea")
        color=(color=="#08cc15")? "red" : "#08cc15";
        mensaje_parpadea.style.color=color;
    }
    
}
    
    
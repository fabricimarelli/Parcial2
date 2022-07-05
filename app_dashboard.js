window.onload= function(){
    
    var cerrar_sesion=document.getElementById('cerrar-sesion');
    var error_datos=document.getElementById('error-datos');
    
    

    cerrar_sesion.addEventListener("click", function(){
        localStorage.removeItem('login')
        window.location.href="index_login.html"
    })

    fetch("https://basic-server-one.vercel.app/users").then(
        res=>{
            res.json().then(
                data=>{
                    console.log(data.data);
                    if(data.data.length > 0){
                        error_datos.classList.add('ocultar-error')
                        var temp = "";

                        //lo recorre
                        data.data.forEach((u)=>{
                            temp += "<tr>";
                            temp += "<td>"+u.id+"</td>";
                            temp += "<td>"+u.name+"</td>";
                            temp += "<td>"+u.email+"</td>";
                            temp += "<td>"+u.phone+"</td>";
                        });
                        
                        document.getElementById("data").innerHTML = temp;
                    }
                    
                    if (res.status!=200) {
                        console.log('hay un error');
                        
                        error_datos.classList.remove("ocultar-error");
                    }
                }
            )
        }
    )

}    


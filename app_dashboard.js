window.onload= async function(){
    var cerrar_sesion=document.getElementById('cerrar-sesion')

    cerrar_sesion.addEventListener("click", function(){
        localStorage.removeItem('login')
        window.location.href="index_login.html"
    })
}

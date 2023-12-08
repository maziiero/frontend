function animarBarraProgresso()
{

    var Progresso = 0;
    var Barra = $(".progress-bar");
    var BarraProgresso = $(".progress");

    var intervalo = setInterval(function(){
        if(Progresso >100)
        {
            clearInterval(intervalo);
            BarraProgresso.hide();
            document.body.style.backgroundImage = `url(https://images.pexels.com/photos/9482134/pexels-photo-9482134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
        }
        else{
            Progresso++;
            Barra.css("width", Progresso+ "%");
        }
    },50);
}
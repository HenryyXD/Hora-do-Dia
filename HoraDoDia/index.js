const h = new Date();

var horas = h.getHours();

var img = document.querySelector('#image');
var text = document.querySelector('#horas');


/*
color
manha : rgb(209,192,147)
tarde : rgb(214, 155, 126)
noite : rgb(52, 51, 82)
*/

setarDados();

document.body.style.background = cor;
img.src = dir;
text.innerHTML = "<b>Agora são " + horas + " horas</b>";

function setarDados(){
    if(verificaHora() == 0){
    
        cor = "rgb(209,192,147)";
        dir = "img/dia.jpg";
    
    } else if(verificaHora() == 1){
    
        cor = " rgb(214, 155, 126)";
        dir = "img/tarde.jpg";
    
    } else if(verificaHora() == 2){
        
        cor = "rgb(52, 51, 82)";
        dir = "img/noite.jpg";
    
    }else{
        alert("HORA INVÁLIDA (0 - 23)");
        alert("PEGANDO HORA ATUAL...");
        horas = h.getHours();
        setarDados();
    }
}

function verificaHora(){
    if(horas>=5 && horas<12){
        return 0;//manha
    } else if(horas>=12 && horas < 18){
        return 1;//tarde
    } else if(horas>=18 && horas < 24 || horas < 5){
        return 2;//noite
    }
}

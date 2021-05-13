var carregar = setInterval(function(){
    clearInterval(carregar);

    document.getElementById("imagem-inicial").style.display = "none";
    document.getElementById("nome").style.display = "inline";
},4000)
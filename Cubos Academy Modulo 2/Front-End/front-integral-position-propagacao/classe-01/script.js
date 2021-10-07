const imagem = document.querySelector('.senha img');
const revelaSenha = document.querySelector('.senha input');


imagem.addEventListener('click', () => {

    if (revelaSenha.type === "password") {
        imagem.src = "/assets/olho-aberto.svg";
        revelaSenha.type = "text";
    } else {
        imagem.src = "/assets/olho-fechado.svg";
        revelaSenha.type = "password";
    }

});




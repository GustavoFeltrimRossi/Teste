//Variáveis:
var ind_img = 1;
var opc_img = 1;
var reduzir = true;
var id_mover, id_opacidade, id_trocar;
function trocar_imagem() {
    ind_img++;
    if (ind_img > 7) ind_img = 1;
    const imagem = document.getElementById("imagem");
    imagem.src = "https://softgraf.com/img/img" + ind_img + ".jpg";
}


function mudar_opacidade() {
    const imagem = document.getElementById("imagem");

    if (opc_img <= 0) reduzir = false;
    else if (opc_img >= 1) reduzir = true;

    if (reduzir) opc_img -= 0.1;
    else opc_img += 0.1;

    imagem.style.opacity = opc_img
}

function mover_imagem(){
    const imagem = document.getElementById("imagem");
    let pos_img = parseInt(imagem.style.marginLeft);
    let larg_tela = window.innerWidth;
    let larg_img = imagem.clientWidth;
    if(Number.isNaN(pos_img)) //NaN -> Not a number.
        pos_img =50;
    else pos_img += 50;

    if(pos_img > larg_tela)
        pos_img = -larg_img;
    imagem.style.marginLeft= pos_img + 'px';

}

const auto_trocar = () => {
    id_trocar = setInterval('trocar_imagem()', 1000) // milisegundos;
}

const auto_opacidade = () => {
    id_opacidade = setInterval('mudar_opacidade()', 1000);
}

const auto_mover = () =>{
    id_mover = setInterval('mover_imagem()', 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    auto_mover();
    auto_opacidade();
    auto_trocar();
    
    document.getElementById("btn_pare").onclick = () => {
        clearInterval (id_mover);
        clearInterval (id_opacidade);
        clearInterval (id_trocar);
    }
})
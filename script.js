const dino = document.querySelector('.divDino');
const divFundo = document.querySelector('.divFundo');
let ponto = 0;

//Reiniciar Jogo
function reiniciar(tecla){
    if(tecla.keyCode === 32 || tecla.key == 'ArrowUp'){
        document.location.replace('index.html');
    }
}
//Dinossauro
let posicaoDino = 0;
let pulando = false;
function pular(){
    pulando = true;
    let subir = setInterval(() => {
        if(posicaoDino >= 150){
            clearInterval(subir);
            let descer = setInterval(() => {
                if(posicaoDino <= 0){
                    clearInterval(descer);  
                    pulando = false;
                } else {
                posicaoDino -= 20;
                dino.style.bottom = posicaoDino + 'px';
                }
            }, 20);
        } else {
            posicaoDino += 20;
            dino.style.bottom = posicaoDino + 'px';
        }
    }, 20);    
    
}

function clicouEmUmaTecla(tecla){
    if(tecla.keyCode === 32 || tecla.key == 'ArrowUp'){
        if(!pulando){
            pular(); 
        }
    }
}

//Cactos
function criaCacto(){
    const cacto = document.createElement('div');
    cacto. classList.add('divCacto');
    divFundo.appendChild(cacto);
    
    let posicao = 2000;
    cacto.style.left = 2000 + 'px';
    let tempoAleatorio = Math.random() * 10000;
    
    let intervalo = setInterval(() => {
        if(posicao  < -60){
            clearInterval(intervalo);
            divFundo.removeChild(cacto);
            ponto++;
            document.getElementById('divPontuacao').innerHTML = '<h2 id="pontuacao">Pontos: '+ ponto +'</h2>';
        } else if(posicao > 0 && posicao < 50 && posicaoDino < 55){
            clearInterval(intervalo);
            document.body.innerHTML = '<h1 class="fimDeJogo">FIM DE JOGO</h1>'
            document.addEventListener('keyup', reiniciar);
        } else {
            posicao -= 10;
            cacto.style.left = posicao + 'px';
        }
    }, 20);

    setTimeout(criaCacto, tempoAleatorio);
}

criaCacto();
document.addEventListener('keyup', clicouEmUmaTecla);
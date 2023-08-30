
// Ativar link do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){

    const url = location.href;
    const href  = link.href;

    if(url.includes(href))//includes verifica se te tem a mesma palavra no texto link
    {
        link.classList.add('ativo')//classList add serve para adicionar uma classe.
    
    }
    console.log(url);
    console.log(href);
}

links.forEach(ativarLink);//ativar a função para cada um dos intens


// *----------------------------------------------------------*



// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
   console.log(elemento);
}

parametros.forEach(ativarProduto);


// *----------------------------------------------------------*


// PERGUNTAS FREQUENTES

const perguntas  = document.querySelectorAll(".perguntas button");//ACESSOU O BUTTON DENTRO DA CLASSE PERGUNTAS

function ativarPergunta(event) {//CRIOU UMA FUNÇÃO COM O EVENTO DENTRO, POIS ESSA FUNÇÃO TERA UM EVENTO DE CLIQUE

    const pergunta = event.currentTarget; //CRIOU UMA VARIAVEL PERGUNTA, QUE PUXARA O EVENTO ONDE O CURRENTTARGET PUXA O LINK/LOCAL

    const controls = pergunta.getAttribute("aria-controls");//CRIOU UMA VARIAVEL CONTROLS ONDE IRA PEGAR O ATRIUTO DADO NO HTML

    const resposta = document.getElementById(controls);//CRIOU UMA VARIAVEL RESPOSTA QUE VAI PEGAR O ID PERGUNTA1 QUE ESTA NO HTML


    resposta.classList.toggle("ativa"); //AO CLICAR NA RESPOSTA, O JS IRA ATIVAR A CLASSE "ATIVA" DENTRO DO CSS

    const ativa = resposta.classList.contains("ativa"); //CRIOU UMA VARIAVEL ATIVA COLOCOU O CONTAINS PARA APARECER TUDO QUE CONTINHA DENTRO DA CLASSE "ATIVA"


    pergunta.setAttribute("aria-expanded", ativa); //QUANDO A RESPOSTA FOR CLICADA O ARIA EXPANDED SERÁ TRUE, OU SEJA ELE ESTARA ATIVO E APARECERÁ.


    console.log(ativa );
}

function eventosPerguntas(pergunta){//CRIOU UMA FUNÇÃO PARA CHAMAR O LAÇO DE REPETIÇÃO
    pergunta.addEventListener('click',ativarPergunta);// AO CLICAR, A FUNÇÃO ativarPergunta SERA ATIVA
}

perguntas.forEach(eventosPerguntas);//O LAÇO CHAMA A FUNÇÃO A CIMA(eventosPerguntas).
console.log(perguntas); 

// *----------------------------------------------------------*


//GALERIA DE BICICLETAS

const galeria = document.querySelectorAll(".bicicleta-imagens img");

const galeriaContainer = document.querySelector(".bicicleta-imagens");''

function trocarImagem(event)
{
    const img = event.currentTarget;//CURRENTTARGET identifica o elemento clicado/que esta ocorrendo  evento.

    const media = matchMedia('(min-width: 1000px)').matches; //match media é o @media()
    
    if(media){
        galeriaContainer.prepend(img)//ele remove o elemento onde ele estava e colozca em outro lugar

    }
    console.log(img);
}


function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}
galeria.forEach(eventosGaleria);

if(window.SimpleAnime){
    new SimpleAnime();
}


let tituloPostReferencia = document.querySelector('#tituloPost')
let textoPostReferencia = document.querySelector('#textoPost')
let imgPostReferencia = document.querySelector('#imgPost')
const botaoPostarReferencia = document.querySelector('button')

botaoPostarReferencia.addEventListener('click', function (event) {
    event.preventDefault()

    let post = {
        titulo: tituloPostReferencia.value,
        texto: textoPostReferencia.value,
        imagem: imgPostReferencia.value
    }
})



let postsContent = document.querySelector('#posts')

let posts = [
    {
        titulo: "Anse Source d´Argent, La Digue, Seychelles",
        texto: "A mais bela praia entre todas as 115 ilhas do arquipélago é rodeada por rochas de granito, tem areias brancas e águas cristalinas. Um cenário estonteante de mar muito calmo, graças a uma barreira de corais. Anse Source d´Argent está presente em diversos rankings como a praia mais bela do mundo. Forbes, CNN, Global Experiences, e a Travelller’s World Magazine são penas alguns exemplos. Essa praia também ganhou o título de patrimônio da humanidade pela Unesco.",
        imagem: "https://coris.com.br/blog/wp-content/uploads/2018/02/seychelles_01.jpg"
    },
    {
        titulo: "Bora Bora, Polinésia Francesa",
        texto: "A romântica ilha da Polinésia Francesa é destino de muitos casais em lua de mel e não é por menos: atmosfera tranquila e bangalôs construídos sobre o mar clarinho fazem parte da paisagem. O destino também atrai os praticantes de esportes, como windsurf e jet-ski. Outra atividade bem interessante, se tiver coragem, é mergulhar no Lagoonarium. O local é repleto de animais da fauna local incluindo tubarões. O passeio é feito com guias especializados para garantir a segurança dos visitantes.",
        imagem: "https://coris.com.br/blog/wp-content/uploads/2018/02/bora_bora_01.jpg"
    },
    {
        titulo: "Maldivas",
        texto: "Localizada ao sul da Índia e do Sri Lanka, com mar azul-turquesa de impressionar até os turistas mais experientes. Esse paraíso no Oceano Índico tem 26 atóis com cenários de tranquilidade e muita beleza natural. São mais de 1.200 ilhas e diversas barreiras de corais para explorar, com certeza será difícil visitar só uma. As águas límpidas proporcionam uma visão de profundidade impressionante, podendo chegar a 60 metros. Apesar do preço elevado por ser um local bem exclusivo, a experiência pode valer muito a pena em momentos especiais. Já imaginou ser pedido em casamento ou comemorar o aniversário de namoro em um cenário lindo como esse?",
        imagem: "https://coris.com.br/blog/wp-content/uploads/2018/02/maldivas_01.jpg"
    },
    {
        titulo: "Cas Abao Beach, Curaçao",
        texto: "Uma das ilhas mais visitadas do Caribe, Curaçao tem paisagem digna de um cartão postal, enfeitada pela vegetação exuberante, pedras e algumas poucas palapas distribuídas pelas areias brancas. É uma praia privada e com acesso exclusivo para carros. Para acessar a área é necessário pagar uma taxa e respeitar o horário de funcionamento, que é das 8h às 18h. O valor também diferencia dependendo do número de pessoas e do tipo do veículo.",
        imagem: "https://coris.com.br/blog/wp-content/uploads/2018/02/cas_abao.jpg"
    },
    {
        titulo: "Playa del Amor, Ilhas Marietas, México",
        texto: "Parcialmente coberto por formações rochosas, que proporcionam sombras em parte da praia, esse destino localizado no Pacífico mexicano tem mar calmo e é muito concorrido pelos turistas. Para chegar ao arquipélago é necessário ir de barco, no qual diversas companhias oferecem o transporte. Nadando por uma estreita fenda nas rochas, os turistas chegam a Playa del Amor para curtir uma das praias mais belas e isoladas do mundo.",
        imagem: "https://guiaviajarmelhor.com.br/wp-content/uploads/2014/07/Ecotoursvallarta.jpg"
    },
    {
        titulo: "Lanikai Beach, Havaí",
        texto: "O panorama havaiano é de cair o queixo: palmeiras balançam com a brisa suave, vegetação tropical e dias de muito sol atraem visitantes de todo o mundo. Sem contar o mar tranquilo de tons esverdeados, protegido por uma barreira de corais. O Havaí também é conhecido por ser um dos destinos turísticos mais famosos dos Estados Unidos. Lanikai fica localizada na ilha de Oahu, principal porta de entrada para o arquipélago. A praia também é conhecida por ser um local tranquilo, ideal para famílias e casais.",
        imagem: "https://coris.com.br/blog/wp-content/uploads/2018/02/lanikai_01.jpg"
    }]



for (let post of posts) {
    postsContent.innerHTML += `
    <div class="post">
        <img src="${post.imagem}">
        <h2>${post.titulo}</h2>
        <p>${post.texto}</p>
    </div>
    `
} 

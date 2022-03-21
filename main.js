let tituloPostReferencia = document.querySelector('#tituloPost')
let textoPostReferencia = document.querySelector('#textoPost')
let imgPostReferencia = document.querySelector('#imgPost')
let postsContent = document.querySelector('#posts')
const botaoPostarReferencia = document.querySelector('#botaoPostar')

let posts = []

botaoPostarReferencia.addEventListener('click', function (event) {
    event.preventDefault()

    let post = {
        titulo: tituloPostReferencia.value,
        texto: textoPostReferencia.value,
        imagem: imgPostReferencia.value
    }
    //posts.push(post)
    posts = []
    init(post, posts)
})

/*     {
    titulo: "Titulo",
    texto: "Titulo Aute sunt aliqua tempor officia. Quis nostrud mollit esse duis in quis aliquip enim laborum eiusmod aliqua. Exercitation occaecat culpa et laborum non. ",
    imagem: "http://loucosporpraia.com.br/wp-content/uploads/2013/01/Praia-do-Cedro-Ubatuba-por-valterarag%C3%A3o-21.jpg"
}
} */


function init(post, posts) {
    posts.push(post)
    //console.log(post)
    //console.log(posts);
    for (let post of posts) {
        postsContent.innerHTML += `
        <div class="post">
            <img src="${post.imagem}">
            <h2>${post.titulo}</h2>
            <p>${post.texto}</p>
        </div>
        `
    }
}



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

    posts = []
    init(post, posts)
    clearForm()
})

function init(post, posts) {

    posts.push(post)

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

function clearForm() {
    textoPostReferencia.value = ""
    imgPostReferencia.value = ""
    tituloPostReferencia.value = ""
}


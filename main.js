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
        titulo: "Titulo",
        texto: "Titulo Aute sunt aliqua tempor officia. Quis nostrud mollit esse duis in quis aliquip enim laborum eiusmod aliqua. Exercitation occaecat culpa et laborum non. ",
        imagem: "http://loucosporpraia.com.br/wp-content/uploads/2013/01/Praia-do-Cedro-Ubatuba-por-valterarag%C3%A3o-21.jpg"
    },
    {
        titulo: "Titulo",
        texto: "Titulo Officia veniam commodo qui nulla cillum elit. Exercitation laboris do laboris ea sunt culpa. Non adipisicing consectetur aute adipisicing occaecat enim ex non enim reprehenderit Lorem proident. Voluptate enim velit eiusmod sint consequat dolor aute aute. Ad labore laboris nulla fugiat. fdfvd fvfvf vfzdvdfv dsv ds v dfdf ssdfef evdsd vsdvdsdv vs dv sdvvdsv dsvsdvsdvsdv sdv sdv",
        imagem: "http://loucosporpraia.com.br/wp-content/uploads/2013/01/Praia-do-Cedro-Ubatuba-por-valterarag%C3%A3o-21.jpg"
    },
    {
        titulo: "Titulo",
        texto: "Titulo Enim id qui eiusmod consequat dolore ad aliqua magna sint. Ipsum incididunt irure excepteur excepteur adipisicing in amet fugiat. Culpa eiusmod consectetur est in ad. ",
        imagem: "http://loucosporpraia.com.br/wp-content/uploads/2013/01/Praia-do-Cedro-Ubatuba-por-valterarag%C3%A3o-21.jpg"
    },
    {
        titulo: "Titulo",
        texto: "Titulo Cupidatat excepteur ullamco esse nisi velit ex anim qui voluptate. Pariatur eu irure aliquip sunt. Nisi duis incididunt eu voluptate duis sit. Ad elit incididunt adipisicing fugiat id. Eu sit exercitation fugiat ea cillum veniam aliquip. Magna adipisicing cupidatat reprehenderit minim commodo do reprehenderit proident occaecat reprehenderit nulla est non. ",
        imagem: "http://loucosporpraia.com.br/wp-content/uploads/2013/01/Praia-do-Cedro-Ubatuba-por-valterarag%C3%A3o-21.jpg"
    },
    {
        titulo: "Titulo",
        texto: "Titulo Sunt nisi mollit cupidatat officia esse dolore quis deserunt aute. Velit cupidatat dolore nostrud excepteur. Ut do amet laborum deserunt minim non ad sint. ",
        imagem: "http://loucosporpraia.com.br/wp-content/uploads/2013/01/Praia-do-Cedro-Ubatuba-por-valterarag%C3%A3o-21.jpg"
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

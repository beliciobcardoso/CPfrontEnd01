let tituloPostReferencia = document.querySelector('#tituloPost')
let textoPostReferencia = document.querySelector('#textoPost')
let imgPostReferencia = document.querySelector('#imgPost')

botaoPostarReferencia.addEventListener('click', function(event){
    event.preventDefault()

    let post = {
        titulo: tituloPostReferencia.value,
        texto: textoPostReferencia.value,
        imagem: imgPostReferencia.value
    }
})
formulario = document.querySelector("form")

formulario.addEventListener('click', (e) =>{
    e.preventDefault();
    criar.style.display = 'none'
    logar.style.display = 'block'
})
const cadastro = document.querySelector('#form')
const novaConta = cadastro.querySelector('#criar')
const logaConta = cadastro.querySelector("#logar");
const nomeUsuario = cadastro.querySelector("#nome")
const btnEntrar = cadastro.querySelector("#entrar")
const btnCadastro = cadastro.querySelector("#cadastrar")
const tituloLogin = cadastro.querySelector('h2')
const linkSenha = cadastro.querySelector('a')

novaConta.addEventListener("click", () =>{
    tituloLogin.innerHTML = "Cadastro";
    nomeUsuario.style.display = "block";
    btnCadastro.style.display = "block";
    btnEntrar.style.display = "none";
    linkSenha.style.display = "none";
    novaConta.style.display = "none";
    logaConta.style.display = "block";

    const valoreInput1 = document.getElementsByTagName('input')[0]
    const valoreInput2 = document.getElementsByTagName("input")[1];
    const valoreInput3 = document.getElementsByTagName('input')[2];

    valoreInput1.value = "";
    valoreInput2.value = "";
    valoreInput3.value = "";
})

logaConta.addEventListener("click", () =>{
    tituloLogin.innerHTML = 'Login'
    nomeUsuario.style.display = "none";
    btnCadastro.style.display = "none";
    btnEntrar.style.display = "block";
    linkSenha.style.display = "block";
    novaConta.style.display = 'block'
    logaConta.style.display = 'none'
})

btnEntrar.addEventListener('click', () => {
    
})
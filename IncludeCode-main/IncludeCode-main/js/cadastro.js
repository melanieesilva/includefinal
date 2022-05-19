const containerValidar = document.querySelector(".containerValidar");
const mensagem = document.querySelector(".mensagem");
const nomeusuario = document.getElementById("nomeusuario");
const emailusuario = document.getElementById("emailusuario");
const senhausuario = document.getElementById("senhausuario");
const form = document.getElementById("form");

// Configurando blur para o modal

function desfoque(){
  var blur = document.querySelector('.container');
  blur.classList.add('blurAtivo');
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    validarCadastro();
});

function validarCadastro(){
  const nomeusuarioValor = nomeusuario.value;
  const emailusuarioValor = emailusuario.value;
  const senhausuarioValor = senhausuario.value;

  if(nomeusuarioValor === '' || emailusuarioValor  === '' || senhausuarioValor === ''){
    alert("Um ou mais campos vazios!");
  }else{
    abrirMensagem();
  }
}

function abrirMensagem(){
    desfoque();
    mensagem.classList.add('ativo');
}

function checarEmail(emailusuario) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailusuario
  );
}
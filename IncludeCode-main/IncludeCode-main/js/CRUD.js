
const inscrever = () => {
    const Registro = {
        nome:  document.getElementById("nomeusuario").value,
        email: document.getElementById("emailusuario").value,
        senha: document.getElementById("senhausuario").value,  
        
      }
       Cadastrar(Registro)   
}


function getLocalStorage() {
    return JSON.parse(localStorage.getItem('cadastro')) ?? []
}
function setLocalStorage(Cadastro) {
    return localStorage.setItem('cadastro', JSON.stringify(Cadastro))
}

//const getlocalstorage = () => JSON.parse(localStorage.getItem('cadastro')) || [];
//const setlocalstorage = (Cadastro) => localStorage.setItem("cadastro",JSON.stringify(Cadastro))

// ===  Criar cadastros ===

const Cadastrar = (usuario) =>{
    const Cadastro = getLocalStorage()
    Cadastro.push(usuario)
    setLocalStorage(Cadastro)

}

// === Listar cadastros ===

const ListarCadastro = () => getLocalStorage()

// === CRUD - Alterar cadastros ===

const AlterarCadastro =(id,usuario) =>{
    const Cadastro = ListarCadastro()
    Cadastro[id] =  usuario
    setLocalStorage(Cadastro)
}

// === Remover cadastros ===

const ExcluirCadastro = (id) =>{
    const Cadastro = ListarCadastro()
    Cadastro.splice(id,1)
    setLocalStorage(Cadastro)
}


// ==== Atualizar Área do Usuário ==== 

const PerfilUsuario = (Registro) =>{

   const nome = document.querySelector('span#nomedoperfil')
    
  
}

 const AtualizarPerfil = () =>{
    const Cadastro = ListarCadastro()
    Cadastro.forEach(PerfilUsuario)
 }

 AtualizarPerfil()




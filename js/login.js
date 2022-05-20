const firebaseConfig = {
    apiKey: "AIzaSyCbwwpnxY2Kcq_u7H4JdxPoYiDN4WsmPbw",
    authDomain: "projeto-web-565b9.firebaseapp.com",
    databaseURL: "https://projeto-web-565b9-default-rtdb.firebaseio.com",
    projectId: "projeto-web-565b9",
    storageBucket: "projeto-web-565b9.appspot.com",
    messagingSenderId: "282160427627",
    appId: "1:282160427627:web:423d41ae681c9ce2ad372e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();


// inscrever.addEventListener('click', (e) =>{
//     var nome  = document.getElementById('nomeusuario').value;
//     var email = document.getElementById('emailusuario').value;
//     var senha = document.getElementById('senhausuario').value;

//     auth.createUsersWithEmailAndPassword(email,senha)
//     .then(function(){
//         var user = auth.currentUser

//         var database_ref = database.ref()

//         var user_data = {
//             nome: nome,
//             email: email,
//             senha: senha,
//             last_login: Date.now()
//         }

//         database_ref.child('usuarios' + user.uid).set(user_data)

//         alert("criado");
//     })

// });




function logar(){

    email = document.getElementById('emailusuario').value;
    senha = document.getElementByID('senhausuario').value;
    
    auth.signInWithEmailAndPassword()
    .then(function(){

    })
    .catch(function(){
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('errorMessage');
    })


}




























/* <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
         // TODO: Add SDKs for Firebase products that you want to use
         // https://firebase.google.com/docs/web/setup#available-libraries
     
         // Your web app's Firebase configuration
             const firebaseConfig = {
             apiKey: "AIzaSyCbwwpnxY2Kcq_u7H4JdxPoYiDN4WsmPbw",
             authDomain: "projeto-web-565b9.firebaseapp.com",
             databaseURL: "https://projeto-web-565b9-default-rtdb.firebaseio.com",
             projectId: "projeto-web-565b9",
             storageBucket: "projeto-web-565b9.appspot.com",
             messagingSenderId: "282160427627",
             appId: "1:282160427627:web:964dc87dfbd0d6f1ad372e"
         };
                 // Initialize Firebase
            import{getDatabase,set,get,ref,child,update,remove}
            from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
            import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} 
            from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
    
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        const auth = getAuth();

    botao_logar.addEventListener('click',(e)=>{
    
    var email = document.getElementById('emailusuario').value;
    var senha = document.getElementById('senhausuario').value;
    
     signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
        
            const user = userCredential.user;
            const dt = new Date();
            update(ref(db, "Usuarios/" + user.uid),{
                last_login: dt,
            });
            alert("Logado!")
         })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('errorMessage');
      });
        })













































// const containerValidar = document.querySelector(".containerValidar");
// const mensagem = document.querySelector(".mensagem");
// //const nomeusuario = document.getElementById("nomeusuario");
// const emailusuario = document.getElementById("emailusuario");
// const senhausuario = document.getElementById("senhausuario");
const form = document.getElementById("form");

// // Configurando blur para o modal

// function desfoque(){
//   var blur = document.getElementById('blur');
//   blur.classList.toggle('active');
// }

form.addEventListener("submit", function(event){
    event.preventDefault();
});

// function validarLogin(){
//     //const nomeusuarioValor = nomeusuario.value;
//     const emailusuarioValor = emailusuario.value;
//     const senhausuarioValor = senhausuario.value;

//     /*if(nomeusuarioValor !== "" && emailusuarioValor !== "" && senhausuarioValor !== ""){
//       abrirMensagem();
//     }
//     else if(nomeusuarioValor === ""){
//       alert("O campo nome está vazio! Preencha-o para concluir o cadastro.");
//     }*/
//     if (emailusuarioValor === ""){
//       alert("O campo e-mail está vazio! Preencha-o para concluir o cadastro.");
//     }else if (!checarEmail(emailusuarioValor)){
//       alert("O e-mail digitado não é válido!");
//     }
//     if (senhausuarioValor === ""){
//       alert("O campo senha está vazio! Preencha-o para concluir o cadastro.");
//     }else if (senhausuarioValor.length < 5){
//       alert("A senha não pode ter menos de 5 caracteres.");
//     }
// }

// function abrirMensagem(){
//     desfoque();
//     mensagem.classList.add('ativo');
// }

// function checarEmail(emailusuario) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     emailusuario
//   );
// } */
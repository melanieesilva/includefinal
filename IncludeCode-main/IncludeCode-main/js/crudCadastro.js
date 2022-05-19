

// // ============== Referências =====================

// var inscrever =  document.getElementById('botao_inscrever');
// // var ler =  document.getElementById('botao_inscrever');

// // ================ CRUD  ========================


// //CADASTRO

// inscrever.addEventListener('click', (e) =>{
// var nome  = document.getElementById('nomeusuario').value;
// var email = document.getElementById('emailusuario').value;
// var senha = document.getElementById('senhausuario').value;


// set(ref(db, "Usuarios/" + nome),{

//   Nome:  nome,
//   Email: email,
//   Senha: senha

//  });

//  if(nome){
//     console.log("DEU CERTO")
//  }

// });

// //LER

// ler.addEventListener('click', (e) =>{

// var nome  = document.getElementById('nomeusuario').value;
// var email = document.getElementById('emailusuario').value;
// var senha = document.getElementById('senhausuario').value;

// const dbRef =  ref(db);

// set(ref(db, "Usuarios/" + nome),{

// Nome:  nome,
// Email: email,
// Senha: senha

// });

// get(child(dbRef, "Usuarios/")).then((snapshot) => {
// if (snapshot.exists()) {
//     console.log(snapshot.val());
// } else {
//     console.log("Dados indefinidos");
// }
// }).catch((error) => {
// console.error(error);
// });

// });


// //APRESENTAR NA TELA





// //ATUALIZAR

// document.getElementById('salvar').addEventListener('click',(e) =>{

// var nome  = document.getElementById('nomeusuario').value;
// var email = document.getElementById('emailusuario').value;
// var senha = document.getElementById('senhausuario').value;

//   update(ref(db, "Usuarios/" + nome),{

//       Nome:  nome,
//       Email: email,
//       Senha: senha

//   }).then(() => {
//      window.alert("Os dados foram alterados com sucesso!");
//   })
//   .catch((error) => {
//     window.alert("Falha ao alterar os dados, preencha os campos!");
//   });

// });

// //DELETAR

// document.getElementById('deletar').addEventListener('click',(e) =>{
// var nome  = document.getElementById('nomeusuario').value;
// var email = document.getElementById('emailusuario').value;
// var senha = document.getElementById('senhausuario').value;


//     remove(ref(db, "Usuarios/" + nome),{
    
//         Nome:  nome,
//         Email: email,
//         Senha: senha
  
//     }).then(() => {
//        window.alert("Os dados foram removidos com sucesso!");
//     })
//     .catch((error) => {
//       window.alert("Falha ao remover os dados, preencha os campos!");
//     });

// });
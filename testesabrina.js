var nome = document.getElementById("nome");
var email = document.getElementById("email");
var pet = document.getElementById("pet");
var senha = document.getElementById("senha");

document.getElementById("botao-enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(nome.value != "" && email.value != "" && pet.value != "" && senha.value != ""){
    alert("Prontinho, você receberá as novidades e promoções no seu e-mail")
    }else{
    alert("Por favor, preencha os campos para receber nossas promoções :)")    
    }
}
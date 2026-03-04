const botao = document.getElementById('enviar');
const inputNome = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');
const inputDate = document.getElementById('input-date');
const inputSenha = document.getElementById('input-password');
const selectState = document.getElementById('select-state');
const maleOption = document.getElementById('male');
const femaleOption = document.getElementById('female');
const otherOption = document.getElementById('other');
const htmlCheck = document.getElementById('check-html');
const cssCheck = document.getElementById('check-css');
const jsCheck = document.getElementById('check-js');
const designCheck = document.getElementById('check-design')
const feedback = document.getElementById('feedback');
const title = document.getElementById('titulo');

botao.addEventListener('click', function() {

    const nomeUsuario = inputNome.value;
    const emailUsuario = inputEmail.value;
    const dataUsuario = inputDate.value;
    const senhaUsuario = inputSenha.value;
    const estado = selectState.value;
    const man = maleOption.value;
    const woman = femaleOption.value;
    const binary = otherOption.value;
    const html = htmlCheck.value;
    const css = cssCheck.value;
    const js = jsCheck.value;
    const design = designCheck.value;

    if (nomeUsuario && emailUsuario && dataUsuario && senhaUsuario && estado && man && woman && binary && html && css && js && design !=="") {

        feedback.textContent = "Seja bem-vindo(a), " + nomeUsuario + "!";

        title.textContent = "Cadastro Concluído!";

        title.style.color = "green";

         document.body.style.backgroundColor = "#2ed628ff";
        
    } else{
        alert("Por favor, preencha este campo!")
    }
    
})
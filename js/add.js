import calculaImc from './calculaImc.js';
let button = document.querySelector("#adicionar-paciente");
let form = document.getElementById("form-adiciona");
button.addEventListener('click', (event) => {
    form = {
        nome: form.querySelector('#nome').value,
        peso: form.querySelector('#peso').value,
        altura: form.querySelector('#altura').value,
        gordura: form.querySelector('#gordura').value
    }
    event.preventDefault();
    adicionaForm(form)
    form.reset();
})

function adicionaForm(form) {
    let paciente = criaPaciente();
    paciente = pegaValoresPaciente(form, paciente);
    let pacienteTb = criaTbPaciente(paciente);
    let erros = verificaErros(paciente);
    exibeMensagensDeErro(erros);
    if (erros.length > 0) {
        return
    } else {
        insereTabela(pacienteTb);
    }
}

function criaPaciente() {
    let paciente = {
        nome: document.createElement("td"),
        peso: document.createElement("td"),
        altura: document.createElement("td"),
        gordura: document.createElement("td"),
        imc: document.createElement("td"),
    }
    paciente.nome.classList.add('info-nome');
    paciente.peso.classList.add("info-peso");
    paciente.altura.classList.add("info-altura");
    paciente.gordura.classList.add("info-gordura");
    paciente.imc.classList.add("info-imc");
    return paciente;
};

function pegaValoresPaciente(form, paciente) {
    paciente.peso.textContent = form.peso;
    paciente.nome.textContent = form.nome;
    paciente.altura.textContent = form.altura;
    paciente.gordura.textContent = form.gordura;
    return paciente;
}

function criaTbPaciente(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(paciente.nome);
    pacienteTr.appendChild(paciente.peso);
    pacienteTr.appendChild(paciente.altura);
    pacienteTr.appendChild(paciente.gordura);
    pacienteTr.appendChild(paciente.imc);
    return pacienteTr;
}

function insereTabela(pacienteTb) {
    var tabela = document.getElementById("tabela-pacientes");
    tabela.appendChild(pacienteTb);
}
function exibeMensagensDeErro(erros) {
    var ul = document.getElementById("mensagens-erro");
    ul.innerHTML = "";
    erros.forEach((erro) => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
function verificaErros({ nome, peso, altura, gordura, imc }) {
    let erros = [];
    if (nome.textContent.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (gordura.textContent.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (peso.textContent.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (altura.textContent.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (peso.textContent <= 0 || peso.textContent >= 1000) {
        erros.push("Peso inválido")
    }

    if (altura.textContent <= 0 || altura.textContent >= 3.0) {
        erros.push("Altura inválida")
    }

    imc.textContent = calculaImc(peso.textContent, altura.textContent);

    return erros;
}

export default adicionaForm
let pacientes = document.querySelectorAll('.paciente')
pacientes.forEach((laço) => {
    let paciente = {
        nome: laço.querySelector(".info-nome"),
        peso: laço.querySelector(".info-peso"),
        altura: laço.querySelector(".info-altura"),
        gordura: laço.querySelector(".info-gordura"),
        imc: laço.querySelector(".info-imc"),
    }
    verificaValidade(paciente, laço)

})
function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2)
}
function verificaValidade({peso, altura, imc}, laço) {
    imc.textContent = calculaImc(peso.textContent, altura.textContent);

    if (peso.textContent <= 0 || peso.textContent >= 1000) {
        imc.textContent = "Peso inválido";
        laço.classList.add("paciente-invalido");
    }

    if (altura.textContent <= 0 || altura.textContent >= 3.0) {
        imc.textContent = "Altura inválida";
        laço.classList.add("paciente-invalido");
    }

    if ((altura.textContent <= 0 || altura.textContent >= 3.0) && (peso.textContent <= 0 || peso.textContent >= 1000)) {
        imc.textContent = "Peso e Altura inválidos";
        laço.classList.add("paciente-invalido");
    }
}

export default calculaImc
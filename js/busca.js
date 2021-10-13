import adicionaForm from './add.js'
let botão = document.querySelector('#buscar-paciente')
botão.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            let form = JSON.parse(xhr.responseText);
            form.forEach((paciente) => {
                adicionaForm(paciente);
            })
        }else {
                erroAjax.classList.remove("invisível");
        }
    });

    xhr.send();
})
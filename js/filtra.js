var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function () {
	var pacientes = document.querySelectorAll(".paciente");
	pacientes.forEach(function (paciente) {
		let nome = paciente.querySelector(".info-nome").textContent
		var expressão = new RegExp(this, 'i');
		if (expressão.test(nome) || this == "") {
			paciente.classList.remove("invisível");
		} else {
			paciente.classList.add("invisível");
		}
	}, this.value)
});

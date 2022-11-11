var nome;
var cognome;
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var elenco = [];
var modified;

window.addEventListener('DOMContentLoaded', init);

function init() {
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	addBtn = document.getElementById('scrivi');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		if (modified) {
			aggiungiModifica(modified);
		} else {
			controlla();
		}
	});
}

function printData() {
	fetch('http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element) {
					elencoHTML.innerHTML += `<li><button type="button" class="btn text-danger border border-dark fw-bold me-1" onClick="elimina(${element.id})">x</button>
					<button type="button" onClick="modifica(${element.id})" class="btn btn-warning me-1 border border-dark"><i class="bi bi-pen"></i></button>
					${element.nome} ${element.cognome}</li>`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		addData(data);
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {
	let response = await fetch('http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}

function clearForm() {
	nome.value = '';
	cognome.value = '';
}

async function elimina(i) {
	if (confirm('Sei sicuro di voler eliminare questo utente? non potrai più cambiare idea!!!') == true) {
		let response = await fetch(`http://localhost:3000/elenco/${i}`, {
			method: "DELETE",
		})
	}
}

function modifica(i) {
	fetch(`http://localhost:3000/elenco/${i}`)

		.then((response) => {
			return response.json();
		})
		.then((data) => {
			nome.value = data.nome;
			cognome.value = data.cognome;
		})
	return modified = i;
}

function aggiungiModifica(modified) {
	if (nome.value && cognome.value) {
		fetch(`http://localhost:3000/elenco/${modified}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				'nome': nome.value,
				'cognome': cognome.value
			}),
		})
	} else {
		erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
	}

}
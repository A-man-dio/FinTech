const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})



const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if (searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if (window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if (this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})


const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if (this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

//Navegar entre as páginas
//-------------------------------------------------------------------

paginaVendas = document.getElementById("vendas");
paginaDashboard = document.getElementById("dashboard");
paginaGraficosAnalise = document.getElementById("graficos-analise")

function mudarPagina(pagina) {

	if (pagina == "vendas") {
		paginaDashboard.classList.add("ocultar");
		paginaGraficosAnalise.classList.add("ocultar");
		paginaVendas.classList.remove("ocultar");
	} else if (pagina == "dashboard") {
		paginaDashboard.classList.remove("ocultar");
		paginaGraficosAnalise.classList.add("ocultar");
		paginaVendas.classList.add("ocultar");
	} else if (pagina == "graficos-analise") {
		paginaDashboard.classList.add("ocultar");
		paginaVendas.classList.add("ocultar");
		paginaGraficosAnalise.classList.remove("ocultar");
	}

}

//Efeito para a paginação
//------------------------------------------------------------------
let link = document.getElementsByClassName("link");

let currentValue = 1;

function activeLink() {
	for (let l of link) {
		l.classList.remove("active");
	}
	event.target.classList.add("active");
	currentValue = event.target.value;

}

//filto dropdown
//---------------------------------------------------------------------

const filterBtn = document.getElementById("filterBtn");
const filterDropdown = document.getElementById("filterDropdown");
const filterBtn2 = document.getElementById("filterBtn2");
const filterDropdown2 = document.getElementById("filterDropdown2");

filterBtn.addEventListener("click", () => {
	filterDropdown.style.display =
		filterDropdown.style.display === "block" ? "none" : "block";
});

// Fechar quando clicar fora
document.addEventListener("click", function (e) {
	if (!filterDropdown.contains(e.target) && !filterBtn.contains(e.target)) {
		filterDropdown.style.display = "none";
	}
});

filterBtn2.addEventListener("click", () => {
	filterDropdown2.style.display =
		filterDropdown2.style.display === "block" ? "none" : "block";
});

// Fechar quando clicar fora
document.addEventListener("click", function (e) {
	if (!filterDropdown2.contains(e.target) && !filterBtn2.contains(e.target)) {
		filterDropdown2.style.display = "none";
	}
});


//Btn de Acções Vendas
//_--------------------------------------------------------------

// Event delegation para ações de editar / eliminar
document.addEventListener('click', function (e) {
	const btn = e.target.closest('.action-btn');
	if (!btn) return;

	const tr = btn.closest('tr');
	if (!tr) return;

	// EDITAR
	if (btn.classList.contains('edit')) {
		// Exemplo: editar quantidade
		const qtdCell = tr.querySelector('.qtd');
		const precoCell = tr.querySelector('.preco');
		const totalCell = tr.querySelector('.total');

		const currentQtd = qtdCell ? qtdCell.textContent.trim() : '';
		const newQtd = prompt('Editar quantidade:', currentQtd);

		if (newQtd === null) return; // cancelado

		const parsedQ = parseInt(newQtd);
		if (isNaN(parsedQ) || parsedQ < 0) {
			alert('Quantidade inválida.');
			return;
		}

		// Atualiza quantidade
		qtdCell.textContent = parsedQ;

		// Recalcula total (assume formato "1234 Kz")
		const precoText = precoCell.textContent.trim().replace(/\s*Kz$/i, '').replace(/\./g, '');
		const precoNum = parseFloat(precoText.replace(/,/g, '.')) || 0;
		const newTotal = precoNum * parsedQ;

		// Formata de volta com Kz (sem milhares fancy para simplicidade)
		totalCell.textContent = Math.round(newTotal) + ' Kz';
	}

	// ELIMINAR
	if (btn.classList.contains('delete')) {
		const prodNameEl = tr.querySelector('td p');
		const prodName = prodNameEl ? prodNameEl.textContent.trim() : 'este item';
		const ok = confirm(`Eliminar "${prodName}"? Esta ação não pode ser desfeita.`);
		if (ok) {
			tr.remove();
		}
	}
});



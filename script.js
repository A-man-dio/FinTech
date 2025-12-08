const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})

		li.classList.add('active');

		//
		const mainItems = document.querySelectorAll("#content main");
		// Adiciona o evento de clique em cada item
		mainItems.forEach(item => {
			item.classList.add("ocultar");
		});
		//

		if (li.id == "dashboard-ref") {
			document.getElementById("dashboard").classList.remove("ocultar");
		} else if (li.id == "vendas-ref") {
			document.getElementById("vendas").classList.remove("ocultar");
		} else if (li.id == "graficos-analise-ref") {
			document.getElementById("graficos-analise").classList.remove("ocultar");
		}

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



//Mudar entre submenus da página "Gráficos e Análise"
//---------------------------------------------------------------------

const allSubMenus = document.querySelectorAll('.graficos-analise-submenu');

allSubMenus.forEach(item => {

	item.addEventListener('click', function () {

		// Remove active de todos OS <a>
		allSubMenus.forEach(i => {
			i.classList.remove('active');
		});

		// Adiciona active no clicado
		item.classList.add('active');

		//-----------------------------------------------------------
		const graficosPrincipaisPaginas = document.querySelectorAll(".graficos-principais-pagina");

		graficosPrincipaisPaginas.forEach(item => {
			item.classList.add("ocultar");
		});

		const btnGraficos = document.querySelectorAll(".btn-graficos");

		btnGraficos.forEach(item => {
			item.classList.add("ocultar");
		});

		//---------------------------------------------------------

		if (item.id == "resumo-rapido-ref") {
			document.getElementById("resumo-rapido-submenu").classList.remove("ocultar");
		} else if (item.id == "graficos-principais-ref") {
			document.getElementById("graficos-principais-submenu").classList.remove("ocultar");
			document.getElementById("btn-grafico-personalizado").classList.remove("ocultar");
		} else if (item.id == "comparacoes-ref") {
			document.getElementById("comparacoes-submenu").classList.remove("ocultar");
			document.getElementById("btn-grafico-comparativo").classList.remove("ocultar");
		} else if (item.id == "predicoes-ref") {
			document.getElementById("predicoes-submenu").classList.remove("ocultar");
			document.getElementById("btn-grafico-preditivo").classList.remove("ocultar");
		}


	});
});


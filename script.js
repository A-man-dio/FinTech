
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

// ATIVAR MENU DA SIDEBAR BASEADO NA PÁGINA ATUAL
// ---------------------------------------------
const sideMenuLinks = document.querySelectorAll('#sidebar .side-menu.top li a');
const currentPage = window.location.pathname.split('/').pop();

sideMenuLinks.forEach(link => {
	const li = link.parentElement;
	const href = link.getAttribute('href');

	
	if (href === currentPage) {
		li.classList.add('active');
		return;
	}

	
	if (
		href === 'graficos.html' &&
		currentPage.startsWith('graficos-')
	) {
		li.classList.add('active');
	}
});


// -------------------------


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




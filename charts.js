const ctx = document.getElementById('doughnut-chart');
const ctx1 = document.getElementById('line-chart');
const ctx2 = document.getElementById('vendas-periodo-estipulado');
const ctx3 = document.getElementById('5-produtos-mais-vendidos');
const ctx4 = document.getElementById('5-produtos-mais-lucrativos');
const ctx5 = document.getElementById('5-categorias-mais-lucrativas');
const ctx6 = document.getElementById('comparacao-semanas');
const ctx7 = document.getElementById('comparacao-meses');


new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'White'],
        datasets: [{
            label: 'Produtos',
            data: [42, 12, 8, 6, 67],
            backgroundColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'
            ],
            borderColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'Ganhos em Kz',
            data: [42093, 1200, 8002, 6011, 5030, 3456, 9872],
            backgroundColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)'
            ],
            borderColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['21/02', '22/02', '23/02', '24/02', '25/02', '26/02', '27/02'],
        datasets: [{
            label: 'Ganhos em Kz',
            data: [42093, 1200, 8002, 6011, 5030, 3456, 9872],
            backgroundColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)'
            ],
            borderColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'White'],
        datasets: [{
            label: 'Produtos',
            data: [42, 12, 8, 6, 67],
            backgroundColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'
            ],
            borderColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'White'],
        datasets: [{
            label: 'Produtos',
            data: [42, 12, 8, 6, 67],
            backgroundColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'
            ],
            borderColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


new Chart(ctx5, {
    type: 'polarArea',
    data: {
        labels: ['Bebidas', 'Comidas', 'Electrónicos', 'Lazer', 'Bebê'],
        datasets: [{
            label: 'Produtos',
            data: [42, 12, 8, 6, 67],
            backgroundColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'
            ],
            borderColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


new Chart(ctx6, {
    type: 'line',
    data: {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [{
            label: 'Ganhos na Semana Actual (Kz)',
            data: [42093, 1200, 8002, 6011, 5030, 3456, 9872],
            backgroundColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)'
            ],
            borderColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)'
            ],
            borderWidth: 1
        },

        {
            label: 'Ganhos na Semana Passada (Kz)',
            data: [35000, 900, 7000, 5000, 4000, 3000, 8000],
            backgroundColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)'
            ],
            borderColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)'
            ],
            borderWidth: 1
        }
        ]
    },
    options: {
        responsive: true
    }
});


//_________________________________________________________________________


const mesAtual = [
    42093, 38000, 40000, 41000, 39000, 37000, 35000,
    36000, 37000, 38000, 39000, 40000, 41000, 42000,
    43000, 44000, 45000, 46000, 47000, 48000,
    49000, 50000, 51000, 52000, 53000, 54000, 55000, 56000, 57000, 58000
];

const mesPassado = [
    35000, 36000, 37000, 35500, 34000, 34500, 35000,
    36000, 35500, 36500, 37000, 37500, 38000, 38500,
    39000, 39500, 40000, 40500, 41000, 41500,
    42000, 42500, 43000, 43500, 44000, 44500, 45000, 45500, 46000, 46500
];

// função para calcular média de cada semana
function mediaSemanal(dados) {
    const medias = [];
    for (let i = 0; i < 30; i += 7) {
        const semana = dados.slice(i, i + 7);
        const soma = semana.reduce((a, b) => a + b, 0);
        medias.push(Math.round(soma / semana.length));
    }
    return medias;
}

const mediasAtual = mediaSemanal(mesAtual);    // [media semana 1, 2, 3, 4, 5]
const mediasPassado = mediaSemanal(mesPassado);


new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
        datasets: [{
            label: 'Média da Semana - Mês Actual (Kz)',
            data: mediasAtual,
            backgroundColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'
            ],
            borderColor: [
                'rgba(41,155,99,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
                'rgba(244, 155, 0, 1)'
            ],
            borderWidth: 1
        },

        {
            label: 'Média da Semana - Mês Passado (Kz)',
            data: mediasPassado,
            backgroundColor: [
                'rgba(37, 107, 73, 1)',
                'rgba(45, 109, 152, 1)',
                'rgba(186, 151, 61, 1)',
                'rgba(87, 43, 98, 1)',
                'rgba(129, 87, 15, 1)'
            ],
            borderColor: [
                'rgba(37, 107, 73, 1)',
                'rgba(45, 109, 152, 1)',
                'rgba(186, 151, 61, 1)',
                'rgba(87, 43, 98, 1)',
                'rgba(129, 87, 15, 1)'
            ],
            borderWidth: 1
        }
        ]
    },
    options: {
        responsive: true
    }
});


//_____________________________________________________________________________





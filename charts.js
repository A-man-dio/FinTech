const ctx = document.getElementById('doughnut-chart');
const ctx1 = document.getElementById('line-chart');
const ctx2 = document.getElementById('vendas-periodo-estipulado');
const ctx3 = document.getElementById('5-produtos-mais-vendidos');
const ctx4 = document.getElementById('5-produtos-mais-lucrativos');
const ctx5 = document.getElementById('5-categorias-mais-lucrativas');
const ctx6 = document.getElementById('comparacao-semanas');
const ctx7 = document.getElementById('comparacao-meses');
const ctx8 = document.getElementById('crescimento-categoria-comparacao-meses');
const ctx9 = document.getElementById('proximos-7-dias');
const ctx10 = document.getElementById('produtos-variacao-prevista');
const ctx11 = document.getElementById('produtos-3-mais-potencial');



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

const categorias = ['Bebidas', 'Snacks', 'Higiene', 'Limpeza', 'Alimentação', 'Outros'];

const mesAnteriorCategoria = [120000, 80000, 50000, 60000, 200000, 40000];
const mesAtualCategoria = [150000, 92000, 43000, 61000, 240000, 42000];

function calcularCrescimento(anterior, atual) {
    return anterior.map((valor, i) => {
        const crescimento = ((atual[i] - valor) / valor) * 100;
        return Number(crescimento.toFixed(2)); // 2 casas decimais
    });
}

const crescimento = calcularCrescimento(mesAnteriorCategoria, mesAtualCategoria);

const cores = crescimento.map(valor =>
    valor >= 0 ? 'rgba(41,155,99,0.9)' : 'rgba(255,99,132,0.9)'
);


new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: categorias,
        datasets: [{
            label: 'Crescimento (%) por Categoria',
            data: crescimento,
            backgroundColor: cores,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: { display: true, text: "Crescimento (%)" },
                ticks: {
                    callback: (value) => value + "%"
                },
                beginAtZero: true
            },
            x: {
                title: { display: true, text: "Categorias" }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => context.raw + "%"
                }
            }
        }
    }
});


//______________________________________________________________________________


// Próximos 7 dias
const labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

// Valores previstos (em Kz)
const vendasPrevistas = [120000, 135000, 128000, 140000, 150000, 145000, 155000];

// Faixa de confiança: margem superior e inferior
const margemSuperior = vendasPrevistas.map(v => v * 1.1); // +10%
const margemInferior = vendasPrevistas.map(v => v * 0.9); // -10%

new Chart(ctx9, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            // Linha de previsão
            {
                label: 'Previsão de Vendas (Kz)',
                data: vendasPrevistas,
                borderColor: 'rgba(41,155,99,1)',
                backgroundColor: 'rgba(41,155,99,0.2)',
                tension: 0.4, // linhas suavizadas
                fill: '+1',   // preencher até o próximo dataset (sombra da confiança)
                pointRadius: 5,
            },
            // Linha superior da faixa de confiança
            {
                label: 'Margem Superior',
                data: margemSuperior,
                borderColor: 'transparent',
                backgroundColor: 'rgba(54,162,235,0.2)',
                fill: '-1', // preenche até o dataset anterior
            },
            // Linha inferior da faixa de confiança
            {
                label: 'Margem Inferior',
                data: margemInferior,
                borderColor: 'transparent',
                backgroundColor: 'rgba(54,162,235,0.2)',
                fill: +1,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {

            tooltip: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                title: { display: true, text: 'Vendas (Kz)' },
                beginAtZero: false
            },
            x: {
                title: { display: true, text: 'Dias' }
            }
        }
    }
});


//______________________________________________________________________________


const categoriasP = ['Bebidas', 'Snacks', 'Higiene', 'Limpeza', 'Alimentação', 'Outros'];

// Valores históricos (último período)
const historico = [120, 80, 50, 60, 200, 40];

// Previsão do próximo período
const previsao = [150, 92, 43, 61, 240, 42];

// Calcula variação percentual e define cor da barra da previsão
const coresPrevisao = previsao.map((v, i) => v >= historico[i] ? 'rgba(41,155,99,0.7)' : 'rgba(255,99,132,0.7)');

// Calcula variação percentual
const variacaoPercentual = previsao.map((v, i) => {
    const diff = v - historico[i];
    return ((diff / historico[i]) * 100).toFixed(1); // 1 casa decimal
});

new Chart(ctx10, {
    type: 'bar',
    data: {
        labels: categoriasP,
        datasets: [
            {
                label: 'Histórico recente',
                data: historico,
                backgroundColor: 'rgba(54,162,235,0.7)',
                borderColor: 'rgba(54,162,235,1)',
                borderWidth: 1
            },
            {
                label: 'Previsão próxima',
                data: previsao,
                backgroundColor: coresPrevisao,
                borderColor: (ctx) => ctx.dataset.backgroundColor,
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const i = context.dataIndex;
                        const valor = context.raw;
                        if (context.dataset.label === 'Previsão próxima') {
                            const diff = valor - historico[i];
                            const sinal = diff >= 0 ? '+' : '';
                            return `${context.dataset.label}: ${valor} (${sinal}${variacaoPercentual[i]}%)`;
                        } else {
                            return `${context.dataset.label}: ${valor}`;
                        }
                    }
                }
            },
            legend: {
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Quantidade / Receita prevista' }
            },
            x: {
                title: { display: true, text: 'Produtos / Categorias' }
            }
        }
    }
});



//______________________________________________________________________________
// Top 3 produtos com maior potencial
const produtosTop3 = ['Bebidas', 'Alimentação', 'Snacks'];

// Potencial de crescimento previsto (%) para cada produto
const crescimentoPotencial = [85, 70, 60]; // valores fictícios

// Intervalo de confiança
const margemSuperiorP = crescimentoPotencial.map(v => v + 10); // +10%
const margemInferiorP = crescimentoPotencial.map(v => v - 10); // -10%

new Chart(ctx11, {
    type: 'radar',
    data: {
        labels: produtosTop3,
        datasets: [
            {
                label: 'Potencial de Crescimento (%)',
                data: crescimentoPotencial,
                fill: true,
                backgroundColor: 'rgba(41,155,99,0.25)',
                borderColor: 'rgba(41,155,99,1)',
                pointBackgroundColor: 'rgba(41,155,99,1)',
                pointRadius: 4,
                tension: 0.3
            },
            {
                label: 'Margem Superior (+10%)',
                data: margemSuperiorP,
                fill: true,
                backgroundColor: 'rgba(54,162,235,0.15)',   // azul claro
                borderColor: 'rgba(54,162,235,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54,162,235,1)',
                pointRadius: 3,
                tension: 0.3
            },
            {
                label: 'Margem Inferior (-10%)',
                data: margemInferiorP,
                fill: true,
                backgroundColor: 'rgba(255,99,132,0.15)',   // vermelho claro
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointRadius: 3,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            tooltip: {
                callbacks: {
                    label: context => context.dataset.label + ': ' + context.raw + '%'
                }
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20,
                    callback: value => value + '%'
                }
            }
        }
    }
});

//______________________________________________________________________________
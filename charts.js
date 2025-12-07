const ctx = document.getElementById('doughnut-chart');
const ctx1 = document.getElementById('line-chart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            label: 'Produtos',
            data: [42, 12, 8, 6],
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


new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Seg' ,'Ter' ,'Qua' , 'Qui','Sex' , 'Sab' , 'Dom'],
        datasets: [{
            label: 'Ganhos em Kz',
            data: [42093, 1200, 8002, 6011 , 5030 , 3456 , 9872],
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
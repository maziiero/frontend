var data = {
    labels: ['janeiro','fevereiro','março','abril','maio','junho'],

    datasets: [{
        label: 'vendas 2023',
        backgroundColor: 'rgba(76,193,192,0.6)',
        borderColor: 'rgba(0,192,150,1)',
        borderWidth: 1,
        data: [12,19,3,5,2,5]
        },
        {
            label: 'vendas 2022',
            borderWidth: 1,
            data: [3,6,20,5,14,8]
            },
    ]
};

var options = {
    scales: {
        y:{
            beginAtZero: true
        }
        
    }
};

var ctx = document.querySelector('#grafico').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options:options
});


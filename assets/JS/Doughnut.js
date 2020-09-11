var totalDay = 100;
var value = 45;
var data = {
    datasets: [
        {
            data: [value, totalDay - value],
            labels:['Eğitim Sürecini Tamamlamış Personel',''],
            backgroundColor: [
                "#f6b900",
                "#e6e6e6"
            ],
            hoverBackgroundColor: [
                "#f6b900",
                "#e6e6e6"
            ]
        },
        {
            data: [60, 120],
            labels:['Eğitim Süreci Devam Eden Personel',''],
            backgroundColor: [
                "#f6b900",
                "#e6e6e6"
            ],
            hoverBackgroundColor: [
                "#f6b900",
                "#e6e6e6"
            ]
        },
        {
            data: [20, 40],
            labels:['Eğitim Sürecine Henüz Başlamamış Personel',''],
            backgroundColor: [
                "#f6b900",
                "#e6e6e6"
            ],
            hoverBackgroundColor: [
                "#f6b900",
                "#e6e6e6"
            ]
        }
    ]
};



var myChart = new Chart(document.getElementById('myChart2'), {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        legend: {
            display: false
        },
        labels: {
            render: 'label'
          },
        cutoutPercentage: 80,
        tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var index = tooltipItem.index;
                return dataset.labels[index] + ": " + dataset.data[index];
              }
            }
          }
    }
});
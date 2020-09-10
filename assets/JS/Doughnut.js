var totalDay = 100;
var value = 45;
var data = {
    labels: [
        `Tamamlanan Gün`,
        ""
    ],
    datasets: [
        {
            data: [value, totalDay - value],
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
            data: [0, totalDay],
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
            data: [0, totalDay],
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
        cutoutPercentage: 80,
        tooltips: {
            filter: function (item, data) {
                var label = data.labels[item.index];
                if (label) return item;
            }
        }
    }
});
var total = 100;
var value = 45;
var value2 = 24;
var value3=30;
var data = {
    labels: [
        "resource-group-1",
        "resource-group-2",
        "resource-group-3",
         
    ],
    datasets: [
        {
            data: [value, total - value],
            backgroundColor: [
                "#517AFB",
                "#e6e6e6"
            ],
            hoverBackgroundColor: [
                "#517AFB",
                "#e6e6e6"
            ]
        },
        {
            data: [value2, total - value],
            backgroundColor: [
                "#CBD7FD",
                "#e6e6e6"
            ],
            hoverBackgroundColor: [
                "#CBD7FD",
                "#e6e6e6"
            ]
        },
        {
            data: [value3, total - value],
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
          //  filter: function (item, data) {
               // var label = data.labels[item.index];
               // if (label) return item;
           // }
        }
    }
});
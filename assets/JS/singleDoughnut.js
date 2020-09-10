var totalDay = 100;
var value = 60;
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
        }]
};



var myChart = new Chart(document.getElementById('myChart1'), {
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
    },
    plugins: [{
        beforeDraw: function (chart) {
            textCenter(`Kalan Süre\n${totalDay - value} Gün`,chart);
        }   
    }]

});


function textCenter(val, chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";
    var lines = val.split('\n');

    var textheight = parseInt(ctx.font.match(/\d+/), 10);

    if (lines.length == 1) {
        writeText(lines[0], height / 2, ctx, width);
    }
    else if (lines.length == 2) {
        writeText(lines[0], height / 2 - textheight / 2, ctx, width);
        writeText(lines[1], height / 2 + textheight / 2, ctx, width);
    }
    else if (lines.length == 3) {
        writeText(lines[0], height / 2 - textheight * 1.5, ctx, width);
        writeText(lines[1], height / 2, ctx, width, height, textheight);
        writeText(lines[2], height / 2 + textheight * 1.5, ctx, width);
    }

    ctx.save();
}


function writeText(text, textY, ctx, width) {
    textX = Math.round((width - ctx.measureText(text).width) / 2);
    ctx.fillText(text, textX, textY);
}
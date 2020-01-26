var canvas = document.getElementById("canvas");

// Apply multiply blend when drawing datasets
var multiply = {
  beforeDatasetsDraw: function(chart, options, el) {
    chart.ctx.globalCompositeOperation = 'multiply';
  },
  afterDatasetsDraw: function(chart, options) {
    chart.ctx.globalCompositeOperation = 'source-over';
  },
};

// Gradient color - this week
var gradientThisWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientThisWeek.addColorStop(0, '#9eb9e3');
gradientThisWeek.addColorStop(1, '#ced9ec');

// Gradient color - previous week
var gradientPrevWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientPrevWeek.addColorStop(0, '#74a3ee');
gradientPrevWeek.addColorStop(1, '#ced9ec');


var config = {
    type: 'line',
    data: {
        labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
        datasets: [
          {
              label: 'This week',
              data: [220, 320, 230, 310, 230, 240, 350],
              backgroundColor: gradientThisWeek,
              borderColor: 'transparent',
              pointBackgroundColor: '#FFFFFF',
              pointBorderColor: '#FFFFFF',
              lineTension: 0.40,
          },
          {
              label: 'Previous week',
              data: [250, 330, 220, 280, 230, 250, 340],
              backgroundColor: gradientPrevWeek,
              borderColor: 'transparent',
              pointBackgroundColor: '#FFFFFF',
              pointBorderColor: '#FFFFFF',
              lineTension: 0.40,
          }
        ]
    },
    options: {
        elements: { 
          point: {
            radius: 0,
            hitRadius: 5, 
            hoverRadius: 5 
          } 
        },
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                  beginAtZero: true,
                },
            }]
        }
    },
    plugins: [multiply],
};

window.chart = new Chart(canvas, config);

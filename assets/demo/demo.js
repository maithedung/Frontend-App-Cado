type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
    initPickColor: function() {
        $('.pick-class-label').click(function() {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDocChart: function() {
        chartColor = "#FFFFFF";

        // General configuration for the charts with Line gradientStroke
        gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };

        ctx = document.getElementById('lineChartExample').getContext("2d");

        gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);

        gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

        /** 
        myChart = new Chart(ctx, {
            type: 'line',
            responsive: true,
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Active Users",
                    borderColor: "#f96332",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#f96332",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
                }]
            },
            options: gradientChartOptionsConfiguration
        });
        */
    },

    initDashboardPageCharts: function() {

        gradientChartOptionsConfigurationWithTooltipBlue = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#2380f7"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#2380f7"
                    }
                }]
            }
        };

        gradientChartOptionsConfigurationWithTooltipPurple = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 30,
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(225,78,202,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }]
            }
        };

        gradientChartOptionsConfigurationWithTooltipOrange = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 110,
                        padding: 20,
                        fontColor: "#ff8a76"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(220,53,69,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#ff8a76"
                    }
                }]
            }
        };

        gradientChartOptionsConfigurationWithTooltipGreen = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.0)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(0,242,195,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }]
            }
        };


        gradientBarChartConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 120,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }],

                xAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }]
            }
        };


        var ctx = document.getElementById("chartLinePurple").getContext("2d");

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
        gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

        var data = {
            labels: ['35', '40', '45', '50', '55', '60', '65'],
            datasets: [{
                label: "Data",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#d048b6',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#d048b6',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#d048b6',
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: [{
                x: 39,
                y: 200
            },
            {
                x: 39.5,
                y: 185
            },
            {
                x: 40,
                y: 165
            },
            {
                x: 40.5,
                y: 150
            },
            {
                x: 41,
                y: 135
            },
            {
                x: 41.5,
                y: 122
            },
            {
                x: 42,
                y: 111
            },
            {
                x: 42.5,
                y: 104
            },
            {
                x: 43,
                y: 95
            }, {
                x: 43.5,
                y: 86
            },
            {
                x: 44,
                y: 80
            },
            {
                x: 44.5,
                y: 78
            },
            {
                x: 45,
                y: 76.5
            },
            {
                x: 45.5,
                y: 76
            },
            {
                x: 46,
                y: 74
            },
            {
                x: 46.6,
                y: 73.4
            },
            {
                x: 46.5,
                y: 73.2
            },
            {
                x: 46.1,
                y: 73
            },
            {
                x: 47,
                y: 72
            },
            {
                x: 47.5,
                y: 72.4
            },
            {
                x: 47.8,
                y: 71.4
            },
            {
                x: 48,
                y: 71
            },
            {
                x: 48.5,
                y: 70.6
            },
            {
                x: 48.7,
                y: 70.2
            },
            {
                x: 49,
                y: 69
            },
            {
                x: 49.2,
                y: 68.7
            },
            {
                x: 49.5,
                y: 68.5
            },
            {
                x: 50,
                y: 68.3
            },
            {
                x: 50.5,
                y: 67
            },
            {
                x: 50.8,
                y: 66.6
            },
            {
                x: 50.9,
                y: 66.1
            },
            {
                x: 51,
                y: 65
            },
            {
                x: 51.1,
                y: 64.6
            },
            {
                x: 51.4,
                y: 64.1
            },
            {
                x: 51.5,
                y: 63
            },
            {
                x: 51.3,
                y: 62.9
            },
            {
                x: 52.6,
                y: 62.4
            },
            {
                x: 52.8,
                y: 62.1
            },
            {
                x: 52.4,
                y: 62
            },
            {
                x: 52.5,
                y: 61
            },
            {
                x: 53,
                y: 60
            },
            {
                x: 53.5,
                y: 59
            },
            {
                x: 54,
                y: 58
            },
            {
                x: 54.5,
                y: 57
            },
            {
                x: 55,
                y: 56
            },
            {
                x: 55.5,
                y: 55
            },
            {
                x: 56,
                y: 54
            },
            {
                x: 56.5,
                y: 53
            },
            {
                x: 57,
                y: 52
            },
            {
                x: 57.5,
                y: 51
            },
            {
                x: 58,
                y: 50
            },
            {
                x: 58.5,
                y: 49
            },
            {
                x: 59,
                y: 48
            }, {
                x: 59.5,
                y: 47
            },
            {
                x: 60,
                y: 46
            },
            {
                x: 60.5,
                y: 45
            },
            {
                x: 61,
                y: 44
            },
            {
                x: 61.5,
                y: 43
            },
            {
                x: 62,
                y: 42
            },
            {
                x: 62.5,
                y: 41
            },
            {
                x: 61.5,
                y: 40
            }],
            }]
        };

        var myChart = new Chart(ctx, {
            type: 'scatter',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipPurple
        });


        var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

        var data = {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
            datasets: [{
                label: "My First dataset",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#00d6b4',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#00d6b4',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#00d6b4',
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: [90, 27, 60, 12, 80],
            }]
        };

        var myChart = new Chart(ctxGreen, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipGreen

        });

        /** Scatter Chart */

        var chart_labels = ['20', '25', '30', '35',
            '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100', '105', '110', '115',
            '120', '125', '130', '135', '140'
        ];
        // var chart_data = [180, 160, 140, 120, 100, 80, 60, 50, 40, 37, 34, 31, 28, 26, 24, 22, 20, 18, 16, 15, 14, 13, 12, 11, 10];
        var chart_data = [{
                x: 39,
                y: 200
            },
            {
                x: 39.5,
                y: 185
            },
            {
                x: 40,
                y: 165
            },
            {
                x: 40.5,
                y: 150
            },
            {
                x: 41,
                y: 135
            },
            {
                x: 41.5,
                y: 122
            },
            {
                x: 42,
                y: 111
            },
            {
                x: 42.5,
                y: 104
            },
            {
                x: 43,
                y: 95
            }, {
                x: 43.5,
                y: 86
            },
            {
                x: 44,
                y: 80
            },
            {
                x: 44.5,
                y: 78
            },
            {
                x: 45,
                y: 76.5
            },
            {
                x: 45.5,
                y: 76
            },
            {
                x: 46,
                y: 74
            },
            {
                x: 46.6,
                y: 73.4
            },
            {
                x: 46.5,
                y: 73.2
            },
            {
                x: 46.1,
                y: 73
            },
            {
                x: 47,
                y: 72
            },

            {
                x: 47.5,
                y: 72.4
            },
            {
                x: 47.8,
                y: 71.4
            },
            {
                x: 48,
                y: 71
            },
            {
                x: 48.5,
                y: 70.6
            },
            {
                x: 48.7,
                y: 70.2
            },
            {
                x: 49,
                y: 69
            },
            {
                x: 49.2,
                y: 68.7
            },
            {
                x: 49.5,
                y: 68.5
            },
            {
                x: 50,
                y: 68.3
            },
            {
                x: 50.5,
                y: 67
            },
            {
                x: 50.8,
                y: 66.6
            },
            {
                x: 50.9,
                y: 66.1
            },
            {
                x: 51,
                y: 65
            },
            {
                x: 51.1,
                y: 64.6
            },
            {
                x: 51.4,
                y: 64.1
            },
            {
                x: 51.5,
                y: 63
            },
            {
                x: 51.3,
                y: 62.9
            },
            {
                x: 52.6,
                y: 62.4
            },
            {
                x: 52.8,
                y: 62.1
            },
            {
                x: 52.4,
                y: 62
            },
            {
                x: 52.5,
                y: 61
            },
            {
                x: 53,
                y: 60
            },
            {
                x: 53.5,
                y: 59
            },
            {
                x: 54,
                y: 58
            },
            {
                x: 54.5,
                y: 57
            },
            {
                x: 55,
                y: 56
            },
            {
                x: 55.5,
                y: 55
            },
            {
                x: 56,
                y: 54
            },
            {
                x: 56.5,
                y: 53
            },
            {
                x: 57,
                y: 52
            },
            {
                x: 57.5,
                y: 51
            },
            {
                x: 58,
                y: 50
            },
            {
                x: 58.5,
                y: 49
            },
            {
                x: 59,
                y: 48
            }, {
                x: 59.5,
                y: 47
            },
            {
                x: 60,
                y: 46
            },
            {
                x: 60.5,
                y: 45
            },
            {
                x: 61,
                y: 44
            },
            {
                x: 61.5,
                y: 43
            },
            {
                x: 62,
                y: 42
            },
            {
                x: 62.5,
                y: 41
            },
            {
                x: 61.5,
                y: 40
            }
        ];

        var ctx = document.getElementById("chartBig1").getContext('2d');

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
        gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
        // var config = {
        //     type: 'line',
        //     data: {
        //         labels: chart_labels,
        //         datasets: [{
        //             label: "My First dataset",
        //             fill: true,
        //             backgroundColor: gradientStroke,
        //             borderColor: '#d346b1',
        //             borderWidth: 2,
        //             borderDash: [],
        //             borderDashOffset: 0.0,
        //             pointBackgroundColor: '#d346b1',
        //             pointBorderColor: 'rgba(255,255,255,0)',
        //             pointHoverBackgroundColor: '#d346b1',
        //             pointBorderWidth: 20,
        //             pointHoverRadius: 4,
        //             pointHoverBorderWidth: 15,
        //             pointRadius: 4,
        //             data: chart_data,
        //         }]
        //     },
        //     options: gradientChartOptionsConfigurationWithTooltipPurple
        // };


        var config = {
            type: 'scatter',
            data: {
                labels: chart_labels,
                datasets: [{
                    label: "My First dataset",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#d346b1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#d346b1',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#d346b1',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: chart_data,
                }]
            },
            options: gradientChartOptionsConfigurationWithTooltipPurple,
        };
        var myChartData = new Chart(ctx, config);
        $("#0").click(function() {
            var data = myChartData.config.data;
            data.datasets[0].data = chart_data;
            data.labels = chart_labels;
            myChartData.update();
        });
        $("#1").click(function() {
            var chart_data = [{
                    x: 41,
                    y: 6.5
                }, {
                    x: 42,
                    y: 6.7
                },
                {
                    x: 43,
                    y: 7
                },
                {
                    x: 44,
                    y: 7.4
                },
                {
                    x: 45,
                    y: 7.6
                },
                {
                    x: 46,
                    y: 7.9
                },
                {
                    x: 47,
                    y: 8.2
                },
                {
                    x: 48,
                    y: 8.5
                },
                {
                    x: 49,
                    y: 8.8
                },
                {
                    x: 50,
                    y: 9
                },
                {
                    x: 51,
                    y: 9.1
                },
                {
                    x: 52,
                    y: 9.3
                },
                {
                    x: 53,
                    y: 9.6
                },
                {
                    x: 54,
                    y: 9.9
                },
                {
                    x: 55,
                    y: 10.2
                },
                {
                    x: 56,
                    y: 10.3
                },
                {
                    x: 57,
                    y: 10.5
                },
                {
                    x: 58,
                    y: 10.9
                },
                {
                    x: 59,
                    y: 11
                },

                {
                    x: 60,
                    y: 11.3
                },
                {
                    x: 61,
                    y: 12
                },
                {
                    x: 62,
                    y: 12.4
                },
                {
                    x: 63,
                    y: 12.7
                },
                {
                    x: 64,
                    y: 13.1
                },
                {
                    x: 65,
                    y: 14
                },
                {
                    x: 66,
                    y: 14.2
                },
                {
                    x: 67,
                    y: 14.5
                },
                {
                    x: 68,
                    y: 14.6
                },
                {
                    x: 69,
                    y: 15.2
                },
                {
                    x: 70,
                    y: 16
                },
                {
                    x: 71,
                    y: 16.5
                },
                {
                    x: 72,
                    y: 16.7
                },
                {
                    x: 73,
                    y: 16.6
                },
                {
                    x: 74,
                    y: 16.8
                },
                {
                    x: 75,
                    y: 16.9
                },
                {
                    x: 76,
                    y: 17
                },
                {
                    x: 77,
                    y: 17.2
                },
                {
                    x: 78,
                    y: 17.3
                },
                {
                    x: 79,
                    y: 17.5
                },
                {
                    x: 80,
                    y: 17.1
                },
                {
                    x: 81,
                    y: 18
                },
                {
                    x: 82,
                    y: 18.4
                },
                {
                    x: 83,
                    y: 18.5
                },
                {
                    x: 84,
                    y: 18.7
                },
                {
                    x: 85,
                    y: 18.8
                },
                {
                    x: 86,
                    y: 19
                },
                {
                    x: 87,
                    y: 19.5
                },
                {
                    x: 88,
                    y: 19.7
                },
                {
                    x: 89,
                    y: 19.9
                },
                {
                    x: 90,
                    y: 19.8
                },
                {
                    x: 91,
                    y: 20.1
                },
                {
                    x: 92,
                    y: 20.2
                },
                {
                    x: 93,
                    y: 20.4
                }, {
                    x: 94,
                    y: 20.5
                },
                {
                    x: 95,
                    y: 20.7
                },
                {
                    x: 96,
                    y: 20.8
                },
                {
                    x: 97,
                    y: 21.2
                },
                {
                    x: 98,
                    y: 21.7
                },
                {
                    x: 99,
                    y: 21.8
                },
                {
                    x: 100,
                    y: 22
                },
                {
                    x: 101,
                    y: 23.4
                }
            ];
            var data = myChartData.config.data;
            data.datasets[0].data = chart_data;
            data.labels = chart_labels;
            myChartData.update();
        });

        $("#2").click(function() {
            var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
            var data = myChartData.config.data;
            data.datasets[0].data = chart_data;
            data.labels = chart_labels;
            myChartData.update();
        });


        var ctx = document.getElementById("CountryChart").getContext("2d");

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
        gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


        var myChart = new Chart(ctx, {
            type: 'bar',
            responsive: true,
            legend: {
                display: false
            },
            data: {
                labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
                datasets: [{
                    label: "Countries",
                    fill: true,
                    backgroundColor: gradientStroke,
                    hoverBackgroundColor: gradientStroke,
                    borderColor: '#1f8ef1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data: [53, 20, 10, 80, 100, 45],
                }]
            },
            options: gradientBarChartConfiguration
        });

    },

    initGoogleMaps: function() {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#1d2c4d"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#8ec3b9"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1a3646"
                    }]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#4b6878"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#64779e"
                    }]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#4b6878"
                    }]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#334e87"
                    }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#023e58"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#283d6a"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#6f9ba5"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1d2c4d"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#023e58"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#3C7680"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#304a7d"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#98a5be"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1d2c4d"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#2c6675"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#9d2a80"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#9d2a80"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#b0d5ce"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#023e58"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#98a5be"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#1d2c4d"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#283d6a"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#3a4762"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#0e1626"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#4e6d70"
                    }]
                }
            ]
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    showNotification: function(from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "tim-icons icon-bell-55",
            message: "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 8000,
            placement: {
                from: from,
                align: align
            }
        });
    }

};
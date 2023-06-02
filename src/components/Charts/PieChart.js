import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [8, 6, 27, 4, 10, 47, 16, 7, 10, 17],
        options: {
          chart: {
            width: 480,
            type: 'donut',
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270
            }
          },
          labels: ['Milady Maker', 'Doddle', 'DEyes', 'Cyber Kong', 'Atem Card', 'Cat', 'WWND', 'DNA', 'Curious Cabins', 'Mutant monkey'],
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            formatter: function(val, opts) {
              console.log("val..", val);
              console.log(opts);
              return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
          },
          
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }
    render() {
      return (
                    
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
        </div>
      );
  }
}

export default PieChart;
import React from "react";
import ReactApexChart from "react-apexcharts";
import { tablesProjectData } from "variables/general";
class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: tablesProjectData.map((tablesProjectData) => tablesProjectData.owner),
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
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            formatter: function(val, opts) {
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
import React from "react";
import ReactApexChart from "react-apexcharts";
import { tablesProjectData } from "variables/general";
class PolarChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: tablesProjectData.map((tablesProjectData) => tablesProjectData.owner),
        options: {
          chart: {
            width: 380,
            type: 'polarArea'
          },
          labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
          fill: {
            opacity: 1
          },
          stroke: {
            width: 1,
            colors: undefined
          },
          yaxis: {
            show: false
          },
          legend: {
            position: 'bottom'
          },
          plotOptions: {
            polarArea: {
              rings: {
                strokeWidth: 0
              },
              spokes: {
                strokeWidth: 0
              },
            }
          },
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: 'light',
              shadeIntensity: 0.6
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        


  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" width={380} />
</div>



      );
    }
  }
  export default PolarChart;
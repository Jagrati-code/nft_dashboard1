import React from "react";
//simport advancedFormat from 'dayjs/plugin/advancedFormat';
//import dayjs from "dayjs";
import ReactApexChart from "react-apexcharts";
import { tablesProjectData } from "variables/general";
class RadialChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: tablesProjectData.map((tablesProjectData) => tablesProjectData.owner),
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249
                      }
                    }
                  }
                }
              },
              labels: tablesProjectData.map((tablesProjectData) => tablesProjectData.name),
            },
          
          
          };
        }

      

        render() {
          return (
            


      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
</div>
    );
        }
      }
export default RadialChart;
import { tablesProjectData } from "variables/general";
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';

import { Flex , Text, Box } from "@chakra-ui/react";

import BarChart from "components/Charts/BarChart";

const DashboardData = ({nfts}) => {

    const getRarityData = () => {

        const sorted = nfts.slice().sort( (n1,n2) => n1.Rarity - n2.Rarity );
        
        const names = sorted.map(nft => nft.Name).slice(0,20);
        const rarities = sorted.map(nft => nft.Rarity).slice(0,20);
        return {names,rarities};
    } 

    const rarityData = getRarityData();


    const rarityChartOptionsDashboard = {

        chart: {
          toolbar: {
            show: false,
          },
        },
      
        tooltip: {
          style: {
            fontSize: "12px",
            fontFamily: "Plus Jakarta Display",
          },
          onDatasetHover: {
            style: {
              fontSize: "12px",
              fontFamily: "Plus Jakarta Display",
            },
          },
          theme: "dark",
        },
      
        xaxis: {
          categories: ['Mutant monkey 699', 'AtemCard1', 'Mutant monkey 271', 'Mutant monkey 284', 'Mutant monkey 7842', 'Mutant monkey 4931', 
            'AtemCard4', 'Dna 3629', 'Mutant monkey 90834', "Doodle 232", "Dna 529" , "Melady 898", "Mutant monkey 625",   "Melady 111",    "Mutant monkey 9032",   "Doodle 121",     
            "Curious_Cabins 2581",  "DEyes 412",  "Curious_Cabins 73509", "Curious_Cabins 1818"          ],
          show: true,
          labels: {
            show: true,
            style: {
              colors: "#fff",
              fontSize: "8px",
            },
          },
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: true,
          },
        },
      
        yaxis: {
          show: true,
          color: "#fff",
          labels: {
            show: true,
            style: {
              colors: "#fff",
              fontSize: "12px",
              fontFamily: "Plus Jakarta Display",
            },
          },
        },
      
        grid: {
          show: false,
        },
      
        fill: {
          colors: "#c31f32",
        },
      
        dataLabels: {
          enabled: false,
        },
      
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "12px",
          },
        },
      
        responsive: [
          {
            breakpoint: 768,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 0,
                },
              },
            },
          },
        ],
      
      };
      
    const rarityChartDataDashboard = [
        {
          name: "Rarity",
          data: [4.33, 5, 5, 5, 5.67, 6.25, 8, 8, 8.25, 8.5, 9, 9.4, 11.25, 11.67, 12.66, 13, 14.5, 15, 16.66, 17.66],

        }
    ]

    return (

        <Card p='16px'>
            <CardBody>
            
                <Flex direction='column' w='100%'>
                <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
                            Rairity Graph
                        </Text>
                    <Box
                        bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
                        borderRadius='20px'
                        display={{ sm: 'flex', md: 'block' }}
                        justify={{ sm: 'center', md: 'flex-start' }}
                        align={{ sm: 'center', md: 'flex-start' }}
                        minH={{ sm: '280px', md: '370px' }}
                        p={{ sm: '0px', md: '22px' }}>
                        <BarChart
                            barChartOptions={rarityChartOptionsDashboard}
                            barChartData={rarityChartDataDashboard}
                        />
                    </Box>

                </Flex>
            </CardBody>
        </Card>
        
    )

}

export default DashboardData;
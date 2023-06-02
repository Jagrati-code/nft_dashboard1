import { useEffect } from "react";
import { tablesProjectData } from "variables/general";

export const transactionsTypeDataDashboard = [
  {
    name: "Transactions",
    data: [34, 72, 6, 12, 16, 2, 8],
  },
];

export const transactionsTypeOptionsDashboard = {

  chart: {
    toolbar: {
      show: false,
    },
  },

  tooltip: {
    style: {
      fontSize: "16px",
      fontFamily: "Plus Jakarta Display",
    },
    onDatasetHover: {
      style: {
        fontSize: "16px",
        fontFamily: "Plus Jakarta Display",
      },
    },
    theme: "dark",
  },

  xaxis: {
    categories: ['polygon', 'Ethereum', 'Bitcoin', 'Solana', 'BNB Chain', 'Klaytn', 'Optimism'],
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#fff",
        fontSize: "12px",
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
    colors: "#fff",
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

export const rarityChartOptionsDashboard = {

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
    categories: ["Azuki", "Mutant Ape", "DeGods", "Pudgy Penguins", "Remillo", "BENZ Official", "R/NFT", "Audius", "CryptoRaptors"],
    show: false,
    labels: {
      show: false,
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
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
    colors: "#fff",
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

export const rarityChartDataDashboard = [
  {
    name: "NO. of owners",
    data: tablesProjectData.map((tablesProjectData) => tablesProjectData.owner),
  }
]

export const barChartDataDashboard = [
  {
    name: "Current Value",
    data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
  },
];

export const barChartOptionsDashboard = {

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
    categories: ["Azuki", "Mutant Ape", "DeGods", "Pudgy Penguins", "Remillo", "BENZ Official", "R/NFT", "Audius", "CryptoRaptors"],
    show: false,
    labels: {
      show: false,
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
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
    colors: "#fff",
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

export const lineChartDataDashboard = [
  {
    name: "Purchased NFTs",
    data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  },
  {
    name: "Sold NFTs",
    data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
  },
];

export const lineChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A"
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#2CD9FF", "#582CFF"],
  },
  colors: ["#2CD9FF", "#582CFF"],
};

export const barChartDataDashboard2 = [
  {
    name: "NO. of owners",
    data: tablesProjectData.map((tablesProjectData) => tablesProjectData.owner),
  }
]

export const lineChartDataDashboard2 = [
  {
    name: "% Price Rise",
    data: [3.5,4.2,4.7,6,6,2],
  }
];


export const lineChartOptionsDashboard2 = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "straight",
  },
  xaxis: {
    type: "datetime",
    
    categories:['Mutant monkey 699', 'AtemCard1', 'Dna 3629', "Doodle 232", "Melady 898" ],
     
    
    
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A"
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#2CD9FF", "#582CFF"],
  },
  colors: ["#2CD9FF", "#582CFF"],
};



export const pieChartDashboard = {
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
  
    data: ['Mutant monkey 699', 'AtemCard1', 'Mutant monkey 271', 'Mutant monkey 284', 'Mutant monkey 7842', 'Mutant monkey 4931', 
            'AtemCard4', 'Dna 3629', 'Mutant monkey 90834', "Doodle 232", "Dna 529" , "Melady 898", "Mutant monkey 625",   "Melady 111",    "Mutant monkey 9032",   "Doodle 121",     
            "Curious_Cabins 2581",  "DEyes 412",  "Curious_Cabins 73509", "Curious_Cabins 1818"          ],
  
  fill: {
    colors: "#fff",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      Radius: "40px",
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





export const lineChartDataProfile1 = [
  {
    name: "Mobile apps",
    data: [100, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  },
];

export const lineChartOptionsProfile1 = {
  chart: {
    height: "50px",
    toolbar: {
      show: false,
    },
    redrawOnParentResize: true,

  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: false,
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: "#56577A"
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#01B574"],
  },
  colors: ["#01B574"],
};

export const lineChartDataProfile2 = [
  {
    name: "Mobile apps",
    data: [100, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  },
];

export const lineChartOptionsProfile2 = {
  chart: {
    height: "50px",
    toolbar: {
      show: false,
    },
    redrawOnParentResize: true
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: false,
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: "#56577A"
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#582CFF"],
  },
  colors: ["#582CFF"],
};
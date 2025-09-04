import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartState {
  series: number[];
}

const PieChart: React.FC = ({ title }) => {
  const [state] = useState<ChartState>({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Entry', 'Exit', 'Authorized', 'Unauthorized', 'Total Sticked'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div
        id='chart'
        className=''
      >
        <ReactApexChart
          options={state.options}
          series={state.series}
          type='pie'
          width={380}
        />
      </div>
      <h1 className='font-bold text-sm text-center'>{title}</h1>
    </div>
  );
};

export default PieChart;

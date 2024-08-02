'use client'
import { useEffect, useRef } from 'react';
// components/DonutChart.js
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DonutChartComponent = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['After-Tax Income', 'Total Income-Tax'],
    datasets: [
      {
        label: 'Group A',
        data: [57.14, 42.86],
        backgroundColor: ['#6A5ACD', '#00BFFF'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: '50%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const chartInstance = chartRef.current;
    if (chartInstance) {
      const ctx = chartInstance.ctx;
      ctx.save();
      ctx.font = '16px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText('PV 400', chartInstance.width / 2 - 20, chartInstance.height / 2 - 20);
      ctx.fillText('Rate 57.14%', chartInstance.width / 2 - 40, chartInstance.height / 2);
      ctx.restore();
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '400px', height: '400px', margin: 'auto' }}>
      <Doughnut ref={chartRef} data={data} options={options} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color:'#000000' }}>
        <div style={{color:'#a6a3c6', fontSize:30, fontWeight:600,}}>Group A</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div style={{ borderRadius:20,padding:'5px 20px' ,backgroundColor: '#006ac1', marginRight: '5px', color:'#000000' }}><span style={{color:'#000000'}}>After-Tax Income</span></div>
          <div style={{ borderRadius:20,padding:'5px 10px' ,backgroundColor: '#019778', marginRight: '5px', color:'#000000' }}>  <span style={{color:'#000000'}}>Total Income-Tax</span></div>
        </div>
      </div>
    </div>
  );
};

export default DonutChartComponent;

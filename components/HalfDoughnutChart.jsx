// components/HalfDoughnutChart.js
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const HalfDoughnutChart = () => {
  const data = {
    labels: [
      'Expenses at death $53,600.00',
      'Charitable contributions $150,000.00',
      'To spouse $80,000.00',
      'Estate taxes $0.00',
      'Remaining for heirs $1,226,400.00',
    ],
    datasets: [
      {
        data: [53600, 150000, 80000, 0, 1226400],
        backgroundColor: ['#3498db', '#1abc9c', '#f1c40f', '#e67e22', '#e91e63'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    circumference: 180,
    rotation: 270,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
      <div style={{ position: 'relative', width: '50%', height: '400px' }}>
        <Doughnut data={data} options={options} />
      </div>
      <div style={{ width: '50%', paddingLeft: '20px', display:'grid', gridTemplateColumns:'auto' }}>
        {data.labels.map((label, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              width:'100%'
            }}
          >
            <div
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
                marginRight: '10px',
                padding:'5px 20px',
                borderRadius:20,
                fontSize:12,
                fontWeight:600,
                   width:'100%',
                   textAlign:'center'
              }}
            >
                 {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HalfDoughnutChart;

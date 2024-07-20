import React from 'react'; 
import { Pie } from 'react-chartjs-2'; // Ensure that Pie is correctly imported
import { useSelector } from 'react-redux'; // Ensure that useSelector is imported
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'; // Import only needed chart.js components

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const transactions = useSelector(state => state.transactions.transactions);

  const incomeData = transactions.filter(t => t.type === 'Income').reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + parseFloat(curr.amount);
    return acc;
  }, {});

  const expenseData = transactions.filter(t => t.type === 'Expense').reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + parseFloat(curr.amount);
    return acc;
  }, {});

  const incomeChartData = {
    labels: Object.keys(incomeData),
    datasets: [{
      data: Object.values(incomeData),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
    }],
  };

  const expenseChartData = {
    labels: Object.keys(expenseData),
    datasets: [{
      data: Object.values(expenseData),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
    }],
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Income Distribution</h3>
        <Pie data={incomeChartData} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Expense Distribution</h3>
        <Pie data={expenseChartData} />
      </div>
    </div>
  );
};

export default PieChart;

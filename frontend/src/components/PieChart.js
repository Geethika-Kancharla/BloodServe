import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['A+', 'B+', 'C+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
        datasets: [
            {
                label: 'My Dataset',
                data: [20, 10, 10, 10, 15, 15, 10, 5, 5],
                backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'],
                hoverOffset: 9,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-2/3 md:w-1/3">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default PieChart;
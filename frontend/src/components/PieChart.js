import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/countAll')
            .then((response) => {
                const data = response.data;

                const bloodGroups = Object.keys(data);
                const counts = Object.values(data);

                setChartData({
                    labels: bloodGroups,
                    datasets: [
                        {
                            label: 'Blood Group Distribution',
                            data: counts,
                            backgroundColor: [
                                '#ff9999', '#66b3ff', '#99ff99', '#ffcc99',
                                '#c2c2f0', '#ffb3e6', '#c2f0c2', '#ffb3b3',
                            ],
                            hoverOffset: 8,
                        },
                    ],
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
        <div className="flex justify-center items-center mt-10 bg-white">
            <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl h-80 sm:h-96 md:h-[400px] lg:h-[500px] md:ml-48">
                {chartData ? <Pie data={chartData} options={options} /> : <p>Loading...</p>}
            </div>
        </div>
    );
};

export default PieChart;

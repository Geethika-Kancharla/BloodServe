import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import axios from 'axios';
import { API_URL } from '../api/config';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    
    const [chartData, setChartData] = useState({
        labels: ['No Data'],
        datasets: [{
            data: [0],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40'
            ]
        }]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/countAll`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                
                const data = response.data;
                
                if (data && Object.keys(data).length > 0) {
                    const labels = Object.keys(data);
                    const values = Object.values(data);
                    
                    setChartData({
                        labels: labels,
                        datasets: [{
                            data: values,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#4BC0C0',
                                '#9966FF',
                                '#FF9F40'
                            ]
                        }]
                    });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                
                setChartData({
                    labels: ['No Data'],
                    datasets: [{
                        data: [0],
                        backgroundColor: ['#FF6384']
                    }]
                });
            }
        };

        fetchData();
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Blood Group Distribution'
            }
        }
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Pie 
                data={chartData}
                options={options}
            />
        </div>
    );
};

export default PieChart;
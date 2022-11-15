/* eslint-disable no-dupe-keys */
import { useEffect, useState } from 'react'
import { Chart as Chartjs } from 'chart.js/auto' // KEEP
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import './Chart.css'

export default function ShowChart({ dateValue, setDateValue, coin = 'bitcoin' }) {
    const [apiData, setApiData] = useState([])
    const url = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${dateValue}`
    console.log(url)

    async function GetData() {
        await axios.get(url).then(res => setApiData(res.data)).catch(err => console.log(err))
    }

    useEffect(() => {
        GetData()
    }, [dateValue])

    const priceData = apiData?.prices?.map(el => el[1])
    const volumeLabels = apiData?.total_volumes?.map(el => new Date(el[0]).getDate().toString()).map(el => el.length === 1 ? `0${el}` : el)

    const data = {
        labels: volumeLabels?.slice(0, dateValue),
        datasets: [
            {
                label: '',
                data: priceData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 255, , 0.2)'
                ],
                lineTension: .4,
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                ],
                borderWidth: 3,
                fontStyle: "bold",
                fill: false,
                data: priceData?.slice(0, dateValue),
            }]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            layout: {
                padding: 1,
            },
            responsive: true,
            maintainAspectRatio: false,
        },
        elements: {
            point: {
                radius: .1,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                    drawTicks: false,
                },
                ticks: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    };

    return (
        <>
            <div className="Chart">
                <Line
                    data={data}
                    options={options}
                />
            </div>
        </>
    )
}
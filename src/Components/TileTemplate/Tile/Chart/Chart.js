/* eslint-disable no-dupe-keys */
import { useEffect, useState } from 'react'
import { Chart as Chartjs } from 'chart.js/auto' // KEEP
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import './Chart.css'

export default function ShowChart({ dateValue, setDateValue }) {
    const [apiData, setApiData] = useState([])

    // EIA
    const urlEiaEndingStocksExcSpr =
        "https://api.eia.gov/v2/petroleum/stoc/wstk/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=WCESTUS1&start=2000-01-01";

    async function GetData() {
        await axios
            .get(urlEiaEndingStocksExcSpr)
            .then(res => setApiData(res.data.response.data))
            .catch(err => console.log(err))
    }

    // Data Points
    const oilDate = apiData.map(oil => (oil.period))
    const oilValue = apiData.map(oil => (oil.value))

    // On Load
    useEffect(() => {
        GetData()
    }, [])

    const data = {
        labels: oilDate?.slice(0, dateValue),
        datasets: [
            {
                label: '',
                data: oilValue,
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
                data: oilValue?.slice(0, dateValue),
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
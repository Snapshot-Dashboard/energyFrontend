/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
import { useEffect, useState } from 'react'
import { Chart as Chartjs } from 'chart.js/auto' // ! KEEP
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import './Chart.css'
import { selectTitle, selectValue } from '../../../../Redux/Slices/TileSlice'
import { useSelector } from 'react-redux';

export default function ShowChart({ dateValue, setDateValue }) {
    const [apiData, setApiData] = useState([])
    const chartTitle = useSelector(selectTitle)
    const tileActive = useSelector(selectValue)

    // Regional Natural Gas
    const urlRegionalNaturalGas =
        "https://api.eia.gov/v2/petroleum/pnp/wiup/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=WPULEUS3"

    // EIA
    const urlOilNoSPR =
        "https://api.eia.gov/v2/petroleum/stoc/wstk/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=WCESTUS1"

    // Oil
    const urlOilSPR =
        "https://api.eia.gov/v2/petroleum/stoc/wstk/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=WCSSTUS1"

    // Natural Gas
    const urlNaturalGas =
        "hhttps://api.eia.gov/v2/natural-gas/stor/wkly/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=NW2_EPG0_SWO_R48_BCF"

    // ? Refactor If Possible, a lot of DRY
    async function GetChartData() {
        if (tileActive === 3) {
            await axios
                .get(urlRegionalNaturalGas)
                .then(res => setApiData(res.data.response.data))
                .catch(err => console.log(err))
            return
        }
        if (tileActive === 2) {
            await axios
                .get(urlOilNoSPR)
                .then(res => setApiData(res.data.response.data))
                .catch(err => console.log(err))
            return
        }
        if (tileActive === 1) {
            await axios
                .get(urlRegionalNaturalGas)
                .then(res => setApiData(res.data.response.data)) // ! Api is empty
                .catch(err => console.log(err))
            return
        }
        if (tileActive === 0) {
            await axios
                .get(urlOilSPR)
                .then(res => setApiData(res.data.response.data))
                .catch(err => console.log(err))
            return
        }
    }


    // * Data Points
    const oilDate = apiData.map(oil => (oil.period))
    const oilValue = apiData.map(oil => (oil.value))

    // * Adjustable
    let radius
    let lineWidth
    // let color = 'rgba(25, 30, 24, 0.2)'
    if (dateValue <= 1) {
        radius = 12
        lineWidth = 5
        // color = 'rgba(25, 30, 24, 0.05)'
    } else if (dateValue <= 5) {
        radius = 9
        lineWidth = 4
        // color = 'rgba(25, 30, 24, 0.075)'
    } else if (dateValue <= 30) {
        radius = 4
        lineWidth = 3
        // color = 'rgba(25, 30, 24, 0.1)'
    } else if (dateValue <= 90) {
        radius = 2
        lineWidth = 2
        // color = 'rgba(25, 30, 24, 0.125)'
    } else if (dateValue <= 180) {
        radius = 1
        lineWidth = 1.5
        // color = 'rgba(25, 30, 24, 0.15)'
    } else if (dateValue <= 365) {
        radius = .75
        lineWidth = 1
        // color = 'rgba(25, 30, 24, 0.175)'
    } else if (dateValue <= 1500) {
        radius = .5
        lineWidth = .75
        // color = 'rgba(25, 30, 24, 0.2)'
    }

    // * On Load
    useEffect(() => {
        GetChartData()
    }, [tileActive])

    const data = {
        labels: oilDate?.slice(0, dateValue),
        datasets: [
            {
                label: 'Barrels',
                data: oilValue,
                backgroundColor: [
                    // color,
                    'rgba(255, 255, 255, .0)',
                    // 'rgba(255, 99, 132, 0.5)',
                    // 'rgba(54, 162, 235, 0.5)',
                    // 'rgba(255, 206, 86, 0.5)',
                    // 'rgba(75, 192, 192, 0.5)',
                    // 'rgba(153, 102, 255, 0.5)',
                    // 'rgba(255, 255, , 0.2)'
                ],
                lineTension: .25,
                borderColor: [
                    'rgba(197, 158, 62, .7)',
                    'rgba(217, 186, 102, 0.66)',
                ],
                borderWidth: lineWidth,
                fontStyle: "bold",
                fill: true,
                data: oilValue?.slice(0, dateValue),
            }]
    }

    const options = {
        plugins: {
            legend: {
                display: true,
            },
            layout: {
                padding: 1,
            },
            responsive: true,
            maintainAspectRatio: true,
        },
        elements: {
            point: {
                radius: radius,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                    drawTicks: false,
                },
                ticks: {
                    display: true,
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: true,
                },
            },
        },
    };

    return (
        <div className="Chart">
            <div className="TitleDiv">
                {chartTitle}
            </div>
            <Line
                className="ChartDiv"
                data={data}
                options={options} />
        </div>
    )
}
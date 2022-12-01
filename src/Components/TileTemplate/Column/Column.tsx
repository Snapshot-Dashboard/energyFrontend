/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { useEffect, useState } from 'react'
import Tile from '../Tile/Tile'
import './Column.css'
interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    content: string
    numberOfTiles: number
    hasChart: string
    hasWideRow: string
    hasFileTree: boolean
}

const Column: React.FC<Props> = ({ dateValue, setDateValue, content, numberOfTiles, hasChart, hasWideRow, hasFileTree }) => {
    const [RegionalNaturalGasData, setRegionalNaturalGasData] = useState<string>('')
    const [NaturalGasData, setNaturalGasData] = useState<string>('')
    const [OilNoSPR, setOilNoSPR] = useState<string>('')
    const [OilSPR, setOilSPR] = useState<string>('')

    // TODO Refactor a lot of this code and streamline for useability

    // Regional Natural Gas
    const urlRegionalNaturalGas =
        "https://api.eia.gov/v2/petroleum/pnp/wiup/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=WPULEUS3"

    // EIA
    const urlOilNoSPR =
        "https://api.eia.gov/v2/petroleum/stoc/wstk/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=WCESTUS1&start=2000-01-01"

    // Oil
    const urlOilSPR =
        "https://api.eia.gov/v2/petroleum/stoc/wstk/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=WCSSTUS1"

    const urlNaturalGas =
        "https://api.eia.gov/v2/natural-gas/stor/wkly/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=NW2_EPG0_SWO_R48_BCF"

    // ? Can I create a API component that is highly reuseable?
    // ? I should use that for the New Component as well

    useEffect(() => {

        async function RegionalNaturalGasData() {
            await axios
                .get(urlRegionalNaturalGas)
                .then(res => setRegionalNaturalGasData(res.data.response.total))
                .catch(err => console.log(err))
        }
        RegionalNaturalGasData()

        async function getNaturalGasData() {
            await axios
                .get(urlNaturalGas)
                .then(res => setNaturalGasData(res.data.response.total))
                .catch(err => console.log(err))
        }
        getNaturalGasData()

        async function getOilNoSPRData() {
            await axios
                .get(urlOilNoSPR)
                .then(res => setOilNoSPR(res.data.response.total))
                .catch(err => console.log(err))
        }
        getOilNoSPRData()

        async function getOilData() {
            await axios
                .get(urlOilSPR)
                .then(res => setOilSPR(res.data.response.total))
                .catch(err => console.log(err))
        }
        getOilData()

    }, [])

    return (
        <div className={hasWideRow === 'Yes' ? "WideColumn" : "Column"}>

            {numberOfTiles === 1 ?
                <Tile
                    tileId={4}
                    content={content}
                    data={''}
                    hasChart={hasChart}
                    hasToggle={'No'}
                    hasImage={'No'}
                    hasLink={'No'}
                    dateValue={dateValue}
                    setDateValue={setDateValue} />
                : numberOfTiles === 2 ?
                    <>
                        <Tile
                            tileId={3}
                            content={'Regional Natural Gas'}
                            data={RegionalNaturalGasData}
                            hasChart={hasChart}
                            hasToggle={'Yes'}
                            hasImage={'No'}
                            hasLink={'No'}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                        <Tile
                            tileId={4}
                            content={''}
                            data={''}
                            hasChart={hasChart}
                            hasToggle={'No'}
                            hasImage={'No'}
                            hasLink={'No'}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                    </> : numberOfTiles === 5 ?
                        <>
                            <Tile
                                tileId={2}
                                content={'U.S. Crude Oil Storage excluding SPR'}
                                data={OilNoSPR}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                hasImage={'No'}
                                hasLink={'No'}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                tileId={0}
                                content={'U.S. Crude Oil SPR Storage'}
                                data={OilSPR}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                hasImage={'No'}
                                hasLink={'No'}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />

                            <Tile
                                tileId={1}
                                content={'Natural Gas Storage'}
                                data={RegionalNaturalGasData}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                hasImage={'No'}
                                hasLink={'No'}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                tileId={2}
                                content={''}
                                data={''}
                                hasChart={hasChart}
                                hasToggle={'No'}
                                hasImage={'Yes'}
                                hasLink={'No'}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                tileId={2}
                                content={''}
                                data={''}
                                hasChart={hasChart}
                                hasToggle={'No'}
                                hasImage={'No'}
                                hasLink={'Yes'}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                        </> : null}
        </div >
    )
}

export default Column

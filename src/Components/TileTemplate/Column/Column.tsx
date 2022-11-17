import { useState } from 'react'
import Tile from '../Tile/Tile'
import './Column.css'
import styled from 'styled-components'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    content: string
    numberOfTiles: number
    hasChart: string
    hasWideRow: string
    hasFileTree: boolean
}

const TileComponent = styled.div`
    background-color: white;
`

const Column: React.FC<Props> = ({ dateValue, setDateValue, content, numberOfTiles, hasChart, hasWideRow, hasFileTree }) => {
    const [toggled, setToggled] = useState<boolean>(true)
    const [tiles] = useState<any[]>([
        {
            content,
            hasChart
        },
    ])

    const TileToggle = styled(TileComponent)`
        color: red;
        ${({ title }): any => title && `color: white`}
    `

    return (
        <div className={hasWideRow === 'Yes' ? "WideColumn" : "Column"}>

            {/* {tiles.map(tile => {
                return (
                    <TileToggle
                        title={tile}>
                        {tile.content}
                    </TileToggle>
                )
            })} */}

            {numberOfTiles === 1 ?
                <Tile
                    content={content}
                    hasChart={hasChart}
                    hasToggle={'No'}
                    hasImage={'No'}
                    hasFileTree={hasFileTree}
                    dateValue={dateValue}
                    setDateValue={setDateValue} />
                : numberOfTiles === 2 ?
                    <>
                        <Tile
                            content={'Regional Natural Gas'}
                            hasChart={hasChart}
                            hasToggle={'Yes'}
                            hasImage={'No'}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                        <Tile
                            content={''}
                            hasChart={hasChart}
                            hasToggle={'No'}
                            hasImage={'Yes'}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                    </> : numberOfTiles === 3 ?
                        <>
                            <Tile
                                content={'SPR Storage'}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                hasImage={'No'}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                content={'Natural Gas Investments'}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                hasImage={'No'}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                content={'Crude Oil Reported'}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                hasImage={'No'}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                        </> : null}
        </div>
    )
}

export default Column
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
    return (
        <div className={hasWideRow === 'Yes' ? "WideColumn" : "Column"}>
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
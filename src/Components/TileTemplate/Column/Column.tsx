import Tile from '../Tile/Tile'
import './Column.css'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    element: any
    content: string
    numberOfTiles: number
    hasChart: string
    hasWideRow: string
    toggle: any
    setToggle: any
    hasFileTree: boolean
}

const Column: React.FC<Props> = ({ dateValue, setDateValue, element, content, numberOfTiles, hasChart, toggle, setToggle, hasWideRow, hasFileTree }) => {
    return (
        <div className={hasWideRow === 'Yes' ? "WideColumn" : "Column"}>

            {numberOfTiles === 1 ?
                <Tile
                    element={element}
                    content={content}
                    hasChart={hasChart}
                    hasToggle={'No'}
                    toggle={toggle}
                    hasWideRow={hasWideRow}
                    hasFileTree={hasFileTree}
                    hasImage={'No'}
                    dateValue={dateValue}
                    setDateValue={setDateValue} />
                : numberOfTiles === 2 ?
                    <>
                        <Tile
                            element={element}
                            content={'Regional Natural Gas'}
                            hasChart={hasChart}
                            hasToggle={'Yes'}
                            toggle={toggle}
                            hasWideRow={hasWideRow}
                            hasImage={'No'}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                        <Tile
                            element={element}
                            content={''}
                            hasChart={hasChart}
                            hasToggle={'No'}
                            toggle={toggle}
                            hasWideRow={hasWideRow}
                            hasImage={'Yes'}
                            hasFileTree={hasFileTree}
                            dateValue={dateValue}
                            setDateValue={setDateValue} />
                    </> : numberOfTiles === 3 ?
                        <>
                            <Tile
                                element={element}
                                content={'SPR Storage'}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                toggle={toggle}
                                hasWideRow={hasWideRow}
                                hasImage={'No'}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                element={element}
                                content={'Natural Gas Investments'}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                toggle={toggle}
                                hasWideRow={hasWideRow}
                                hasImage={'No'}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                            <Tile
                                element={element}
                                content={'Crude Oil Reported'}
                                hasChart={hasChart}
                                hasToggle={'Yes'}
                                toggle={toggle}
                                hasWideRow={hasWideRow}
                                hasImage={'No'}
                                hasFileTree={hasFileTree}
                                dateValue={dateValue}
                                setDateValue={setDateValue} />
                        </> :
                        numberOfTiles === 4 ?
                            <>
                                <Tile
                                    element={element}
                                    content={content}
                                    hasChart={hasChart}
                                    hasToggle={'Yes'}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasImage={'No'}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    content={content}
                                    hasChart={hasChart}
                                    hasToggle={'Yes'}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasImage={'No'}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    content={content}
                                    hasChart={hasChart}
                                    hasToggle={'Yes'}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasImage={'No'}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                                <Tile
                                    element={element}
                                    content={content}
                                    hasChart={hasChart}
                                    hasToggle={'Yes'}
                                    toggle={toggle}
                                    hasWideRow={hasWideRow}
                                    hasImage={'No'}
                                    hasFileTree={hasFileTree}
                                    dateValue={dateValue}
                                    setDateValue={setDateValue} />
                            </> : null}
        </div>
    )
}

export default Column
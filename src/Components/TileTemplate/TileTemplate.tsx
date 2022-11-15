import Column from './Column/Column'
import './TileTemplate.css'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    sliderActive: boolean
    setSliderActive: React.Dispatch<React.SetStateAction<boolean>>
    dataName: string
    setDataName: React.Dispatch<React.SetStateAction<string>>
    toggle: any
    setToggle: any
}

const TileTemplate: React.FC<Props> = ({ dateValue, setDateValue, sliderActive, setSliderActive, dataName, setDataName, toggle, setToggle }) => {
    return (
        <div className='Tiles'>

            <Column
                element={'Rates'}
                content={'Information2'}
                numberOfTiles={3}
                hasChart={'No'}
                hasWideRow={'No'}
                toggle={toggle}
                setToggle={setToggle}
                hasFileTree={false}
                dateValue={dateValue}
                setDateValue={setDateValue}
            />
            <Column
                element={'Chart'}
                content={'Oil Data'}
                numberOfTiles={1}
                hasChart={'Yes'}
                hasWideRow={'Yes'}
                toggle={toggle}
                setToggle={setToggle}
                hasFileTree={false}
                dateValue={dateValue}
                setDateValue={setDateValue}
            />
            <Column
                element={'Demographics'}
                content={'Information3'}
                numberOfTiles={2}
                hasChart={'No'}
                hasWideRow={'No'}
                toggle={toggle}
                setToggle={setToggle}
                hasFileTree={false}
                dateValue={dateValue}
                setDateValue={setDateValue}
            />

        </div>
    )
}

export default TileTemplate
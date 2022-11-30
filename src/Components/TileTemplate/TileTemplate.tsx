import Column from './Column/Column'
import './TileTemplate.css'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
}

const TileTemplate: React.FC<Props> = ({ dateValue, setDateValue }) => {
    return (
        <div className='Tiles'>

            <Column
                content={''}
                numberOfTiles={3}
                hasChart={'No'}
                hasWideRow={'No'}
                hasFileTree={false}
                dateValue={dateValue}
                setDateValue={setDateValue} />

            <Column
                content={''}
                numberOfTiles={1}
                hasChart={'Yes'}
                hasWideRow={'Yes'}
                hasFileTree={false}
                dateValue={dateValue}
                setDateValue={setDateValue} />

            {/* <Column
                content={''}
                numberOfTiles={2}
                hasChart={'No'}
                hasWideRow={'No'}
                hasFileTree={false}
                dateValue={dateValue}
                setDateValue={setDateValue} /> */}

        </div>
    )
}

export default TileTemplate
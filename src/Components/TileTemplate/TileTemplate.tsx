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
                content={'Information2'}
                numberOfTiles={3}
                hasChart={'No'}
                hasWideRow={'No'}
                hasFileTree={false}
                dateValue={dateValue}
                setDateValue={setDateValue} />
            <Column
                content={'Oil Data'}
                numberOfTiles={1}
                hasChart={'Yes'}
                hasWideRow={'Yes'}
                hasFileTree={false}
                dateValue={dateValue}
                setDateValue={setDateValue} />
            <Column
                content={'Information3'}
                numberOfTiles={2}
                hasChart={'No'}
                hasWideRow={'No'}
                hasFileTree={false}
                dateValue={dateValue}
                setDateValue={setDateValue} />

        </div>
    )
}

export default TileTemplate
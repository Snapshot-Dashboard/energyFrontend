import './ComponentBar.css'
import Buttons from '../TileTemplate/Tile/Buttons/Buttons'
import LinkComponent from '../TileTemplate/Tile/Link/LinkComponent'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
}

const ComponentBar: React.FC<Props> = ({ dateValue, setDateValue }) => {
    return (
        <div className='ComponentBar'>
            <LinkComponent
                link={'https://energynewsbeat.co'}
                textContent={'News & Analysis provided by Energy News Beat™'} />
            <Buttons
                dateValue={dateValue}
                setDateValue={setDateValue} />
            <LinkComponent
                link={''}
                textContent={'Want a personalized dashboard?'} />
        </div>
    )
}

export default ComponentBar
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import ShowChart from './Chart/Chart.js'
import FileTree from './FileTree/FileTree';
import EnverusImage from '../../../Assets/images/Enverus_Logo.jpg'
import Toggle from './Toggle'
import './Tile.css'

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    content: string
    hasChart: string
    hasToggle: string
    hasImage: string
    hasFileTree: boolean
}

const Tile: React.FC<Props> = ({ dateValue, setDateValue, content, hasToggle, hasChart, hasImage, hasFileTree }) => {
    const [toggled, setToggled] = useState<boolean>(false)

    return (
        <div className={hasToggle === 'Yes' && toggled ? 'Tile2' : 'Tile'} onClick={() => setToggled(!toggled)} >
            {content}
            <>
                {hasToggle === 'Yes' ? <Toggle toggled={toggled} setToggled={setToggled} /> : null}
                {hasChart === 'Yes' ? <ShowChart dateValue={dateValue} setDateValue={setDateValue} /> : null}
                {hasFileTree ? <FileTree /> : null}
                {hasImage === 'Yes' ?
                    <a
                        target='_'
                        href='https://www.google.com/search?gs_ssp=eJzj4tLP1TcwTYovMolXYDRgdGDwYk_NK0stKi0GAFOzBvY&q=enverus&rlz=1C5CHFA_enUS932IN981&oq=enverus&aqs=chrome.1.0i131i355i433i512j46i131i199i433i465i512j0i131i433i512j0i512l4j46i175i199i512j0i512l2.3722j0j7&sourceid=chrome&ie=UTF-8'>
                        <img className='EnverusImage' src={EnverusImage} />
                    </a> : ''}
            </>
        </div>

    )
}

export default Tile
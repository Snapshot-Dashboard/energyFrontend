/* eslint-disable jsx-a11y/alt-text */
import ShowChart from './Chart/Chart.js'
import './Tile.css'
import Toggle from './Toggle'
import { useState } from 'react'
import FileTree from './FileTree/FileTree';
import EnverusImage from '../../../Assets/images/Enverus_Logo.jpg'

const Tile = ({ dateValue, setDateValue, element, content, hasToggle, hasChart, hasImage, toggle, hasWideRow, hasFileTree }) => {
    const [toggled, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggled);
    };

    return (
        <div className={hasToggle === 'Yes' && toggled ? 'Tile2' : 'Tile'} onClick={handleToggle} >
            {hasImage === 'Yes' ? <img className='EnverusImage' src={EnverusImage} /> : ''}
            {hasToggle === 'Yes' ? <Toggle toggled={toggled} handleToggle={handleToggle} /> : null}
            <div className="TileHeader">
                {content}
            </div>
            {hasChart === 'Yes' ? <ShowChart dateValue={dateValue} setDateValue={setDateValue} /> : null}
            {hasFileTree ? <FileTree /> : null}
        </div>

    )
}

export default Tile
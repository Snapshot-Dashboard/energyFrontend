/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import ShowChart from './Chart/Chart.js'
import FileTree from './FileTree/FileTree';
import EnverusImage from '../../../Assets/images/Enverus_Logo.jpg'
import Toggle from '../Column/Toggle'
import './Tile.css'
import { setValue, setChartTitle, selectValue } from '../../../Redux/Slices/TileSlice'
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    dateValue: number
    setDateValue: React.Dispatch<React.SetStateAction<number>>
    content: string
    hasChart: string
    hasToggle: string
    hasImage: string
    hasFileTree: boolean
    tileId: number
}

const Tile: React.FC<Props> = ({ dateValue, setDateValue, content, hasToggle, hasChart, hasImage, hasFileTree, tileId }) => {
    const [toggled, setToggled] = useState<boolean>(true)
    const count = useSelector(selectValue)
    const dispatch = useDispatch()

    const handleTile = (tileId: number) => {
        if (tileId === 4) {
            return
        }

        dispatch(setChartTitle(content))
        dispatch(setValue(tileId))
        setToggled(true)

    }

    return (
        // className={hasToggle === 'Yes' && toggled ? 'Tile2' : 'Tile'}
        <div className={hasToggle === 'Yes' && count !== tileId ? 'Tile2' : 'Tile'} onClick={() => handleTile(tileId)} >
            {content}
            <>
                {hasToggle === 'Yes' ? <Toggle tileId={tileId} count={count} toggled={toggled} outerWidth={0} size={25} /> : null}
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
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import ShowChart from './Chart/Chart.js'
import FileTree from './FileTree/FileTree';
// import EnverusImage from '../../../Assets/images/Enverus.png'
import Image from '../../../Assets/images/Enverus.png';
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
    data: string
}

const Tile: React.FC<Props> = ({ dateValue, setDateValue, content, hasToggle, hasChart, hasImage, hasFileTree, tileId, data }) => {
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
        <div className={hasToggle === 'No' ? 'Tile' : hasToggle === 'Yes' && count !== tileId ? 'Tile2' : 'HasToggleTile'} onClick={() => handleTile(tileId)} >
            <div className='TileCard'>
                {hasToggle === 'Yes' ? <Toggle tileId={tileId} count={count} toggled={toggled} outerWidth={0} size={25} /> : null}

                <div className="DataDiv">
                    {data === '' ? '' : `Units: ${data}`}
                </div>

                <div className={content === '' ? '' : "TitleDiv"}>
                    {content}
                </div>

                {hasChart === 'Yes' ? <ShowChart dateValue={dateValue} setDateValue={setDateValue} /> : null}
                {hasFileTree ? <FileTree /> : null}
                {hasImage === 'Yes' ? <a target='_' href='https://www.enverus.com/'><img className='EnverusImage' src={Image} /></a> : ''}

            </div>
        </div >

    )
}

export default Tile
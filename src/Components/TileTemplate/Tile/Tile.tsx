/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import ShowChart from './Chart/Chart.js'
import ShowTopNews from './TopNews/TopNews'
import Image from '../../../Assets/images/image.jpg';
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
    hasTopNews: string
    tileId: number
    data: string
    hasLink: any
}

const Tile: React.FC<Props> = ({ dateValue, setDateValue, content, hasToggle, hasChart, hasImage, hasTopNews, hasLink, tileId, data }) => {
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

    const TechWebSite = 'https://www.enverus.com/'

    return (
        <div className={hasChart === 'No' && hasTopNews === 'Yes' ? 'TopNewsTile' : hasToggle === 'No' ? 'Tile' : hasToggle === 'Yes' && count !== tileId ? 'Tile2' : 'HasToggleTile'} onClick={() => handleTile(tileId)} >
            <div className='TileCard'>

                <div className={content === '' ? '' : "TitleDiv"}>
                    {content} {hasToggle === 'Yes' ? <Toggle tileId={tileId} count={count} toggled={toggled} outerWidth={0} size={15} /> : null}
                </div>

                <div className="DataDiv">
                    {data === '' ? '' : `${parseInt(data)}`} {content === '' ? '' : content === 'Natural Gas Storage' ? 'billion cubic feet' : 'million barrels'}
                </div>

                {hasChart === 'No' && hasTopNews === 'Yes' ? <ShowTopNews /> : null}
                {hasChart === 'Yes' ? <ShowChart dateValue={dateValue} setDateValue={setDateValue} /> : null}
                {hasImage === 'Yes' ? <a target='_' href={TechWebSite}><img className='EnverusImage' width={'100%'} height={'100%'} src={Image} alt='Enverus Logo' /></a> : ''}
                {hasLink === 'Yes' ? <a href={''} className='Link' target={'_'}>Want a personalized dashboard?</a> : ''}

            </div>
        </div >

    )
}

export default Tile
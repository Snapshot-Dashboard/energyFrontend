/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './News.css'
import Axios from 'axios'
import { useLayoutEffect, useState } from 'react'
import NewsList from './NewsList'
interface Props {
    newsTitle: string
    apiURL: string
    columnID: number
    activeColumn: number
    handleActiveColumn: (columnID: number) => void
    newsLink: string
}

const News: React.FC<Props> = ({ newsTitle, apiURL, columnID, activeColumn, handleActiveColumn, newsLink }) => {
    const [news, setNews] = useState([])
    const [showMoreActive, setShowMoreActive] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(0)

    // ! Currently Inactive until further notice
    const handleShowMore = () => {
        if (!showMoreActive) {
            setShowMoreActive(true)
            setIndex(news.length)
            return
        }
        setShowMoreActive(false)
        setIndex(3)
    }

    useLayoutEffect(() => {
        GetNews()
    }, [activeColumn])

    return (
        <div className={columnID === activeColumn ? 'NewsColActive' : 'NewsCol'}>
            {renderNewsTitle()}
            <div className='NewsColumn'>
                <NewsList news={news} index={index} handleActiveColumn={handleActiveColumn} columnID={columnID} activeColumn={activeColumn} />
                {renderShowMore()}
            </div>
        </div>
    )

    function renderNewsTitle() {
        return (
            <>
                <div className="NewsHead">
                    {columnID === activeColumn ? <a className="NewsLinkHead" target='_' href={newsLink}>{newsTitle} <strong>(Click for more info)</strong></a> : <a className="NewsLinkHead" target='_' href={newsLink}>{newsTitle}</a>}
                </div>
            </>
        )
    }

    function renderShowMore() {
        return (
            // ! Can Re-Add button back just change NewsList Component .slice() to index instead of news.length
            <>
                {/* <button className='ShowButton' onClick={handleShowMore}>{showMoreActive ? 'Show Less' : 'More Stories...'}</button> */}
            </>
        )
    }

    async function GetNews() {
        Axios
            .get(apiURL)
            .then(res => setNews(res.data.items))
            .catch(err => console.log(err))
    }
}

export default News
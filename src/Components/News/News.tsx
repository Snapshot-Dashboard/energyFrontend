import './News.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import NewsList from './NewsList'

interface Props {
    news: any[]
    setNews: React.Dispatch<React.SetStateAction<any[]>>
    newsTitle: string
    apiURL: string
}

const News: React.FC<Props> = ({ news, setNews, newsTitle, apiURL }) => {
    const [showMoreActive, setShowMoreActive] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(1)

    const handleShowMore = () => {
        if (!showMoreActive) {
            setShowMoreActive(true)
            setIndex(news.length)
            return
        }
        setShowMoreActive(false)
        setIndex(1)
    }

    useEffect(() => {
        GetNews()
    }, [])

    return (
        <div className='NewsColumn'>
            {renderNewsTitle()}
            <NewsList news={news} index={index} />
            {renderShowMore()}
        </div>
    )

    function renderNewsTitle() {
        return (
            <>
                <div className="NewsTitle">
                    {newsTitle}
                </div>
            </>
        )
    }

    function renderShowMore() {
        return (
            <>
                <button className='ShowButton' onClick={handleShowMore}>{showMoreActive ? 'Show Less' : 'More Stories...'}</button>
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
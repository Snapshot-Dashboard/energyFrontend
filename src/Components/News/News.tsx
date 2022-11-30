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
    const [index, setIndex] = useState<number>(3)

    const handleShowMore = () => {
        if (!showMoreActive) {
            setShowMoreActive(true)
            setIndex(news.length)
            return
        }
        setShowMoreActive(false)
        setIndex(3)
    }

    useEffect(() => {
        GetNews()
    }, [])

    return (
        <div>
            {renderNewsTitle()}
            <div className='NewsColumn'>
                <NewsList news={news} index={index} />
                {renderShowMore()}
            </div>
        </div>
    )

    function renderNewsTitle() {
        return (
            <>
                <div className="NewsHead">
                    {newsTitle}
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
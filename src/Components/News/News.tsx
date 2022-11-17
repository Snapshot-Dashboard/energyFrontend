import './News.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'

interface Props {
    news: any[]
    setNews: React.Dispatch<React.SetStateAction<any[]>>
    news2: any[]
    setNews2: React.Dispatch<React.SetStateAction<any[]>>
    newsCategory: any
    setNewsCategory: React.Dispatch<React.SetStateAction<any>>
    apiURL: string
    apiHeader: string
}

const News: React.FC<Props> = ({ news, setNews, newsCategory, setNewsCategory, apiURL, apiHeader }) => {
    const [showMoreActive, setShowMoreActive] = useState<boolean>(false)
    const [index, setIndex] = useState(1)

    const options = {
        method: 'GET',
        url: apiURL,
        headers: {
            'X-RapidAPI-Key': `2a5ae053bdmsh289fd6e9e075512p1bb69djsn1890178e4707`,
            'X-RapidAPI-Host': apiHeader
        }
    };

    async function GetNews() {
        Axios.request(options).then((response) => {
            setNews(response.data.main);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const handleNewsCategory = (e: any) => {
        const { value } = e.target
        setNewsCategory(value.toLowerCase())
    }

    const handleShowMore = () => {
        if (!showMoreActive) {
            setShowMoreActive(true)
            setIndex(news.length)
        } else if (showMoreActive) {
            setShowMoreActive(false)
            setIndex(1)
        }
    }

    useEffect(() => {
        GetNews()
    }, [])

    return (
        <div className='NewsColumn'>
            <div className="NewsHeading">
                <div className="NewsTitle">
                    US Energy
                    {/* <select name="" id="" onChange={handleNewsCategory}>
                        <option value="real-estate">Main</option>
                        <option value="business">Business</option>
                        <option value="technology">Technology</option>
                    </select> */}
                </div>
            </div>

            <div className='News'>
                <div className="NewsList">
                    {news.slice(0, index).map((newsItem, idx) => {
                        return (
                            <div className="NewsCard" key={idx}>
                                <div className='NewsTitle'>
                                    {newsItem.title}
                                </div>
                                <p>
                                    {newsItem.url}
                                </p>
                            </div>
                        )
                    })}
                    <button className='ShowButton' onClick={handleShowMore}>{showMoreActive ? 'Show Less' : 'More Stores...'}</button>
                </div>
            </div>
        </div>
    )
}

export default News
import { useState, useLayoutEffect } from 'react'
import Axios from 'axios'
import './TopNews.css'

function TopNews() {
    const [News, setNews] = useState<any[]>([])
    const [Index, setIndex] = useState<number>(-1)

    useLayoutEffect(() => {
        GetData()
    }, [])

    return (
        <>
            <a href='https://energynewsbeat.co/top-news/' target='_' className='TopNewsHead'>Top News</a>
            <div className="TopNews">
                {News.map((item, idx) => {

                    const regex = /(<([^>]+)>)/ig;
                    const title = item.title.replace(regex, '')
                    const titleLink = title.toLowerCase().replaceAll("[^a-zA-Z0-9]", " ")

                    return (
                        <>
                            <a href={`https://energynewsbeat.co/${titleLink.replace(/[\W_]+/g, "-")}/`} target='_' className={Index === idx ? 'TopNewsCardSelected' : 'TopNewsCard'} onClick={() => setIndex(idx)}>
                                {title}
                            </a>
                        </>
                    )
                })}

            </div>
        </>
    )

    function GetData() {
        const apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat2/feed/atom&count=10'
        Axios.get(apiUrl).then(res => setNews(res.data.items)).catch(err => console.log(err))
    }

}

export default TopNews
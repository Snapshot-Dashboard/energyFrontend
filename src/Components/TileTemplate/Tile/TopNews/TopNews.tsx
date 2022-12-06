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
            <h3>Top News</h3>
            <div className="TopNews">
                {News.map((item, idx) => {
                    const regex = /(<([^>]+)>)/ig;
                    const title = item.title.replace(regex, '');
                    const description = item.description.replace(regex, '');
                    return (
                        <>
                            <div className={Index === idx ? 'TopNewsCardSelected' : 'TopNewsCard'} onClick={() => setIndex(idx)}>
                                <div>{title}</div>
                                <div className={idx + 1 === News.length ? 'None' : 'TickerDash'}>-</div>
                            </div>
                            {Index === idx ? (
                                <div className='TopNewsModal' onClick={() => setIndex(-1)}>
                                    <div className='ModalExit'>
                                        X
                                    </div>
                                    <div className='ModalInfo'>
                                        <h1>{title}</h1>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            ) : null}
                        </>
                    )
                })}
            </div>
        </>
    )

    function GetData() {
        const apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat2/feed/atom&count=10'
        Axios.get(apiUrl).then(res => setNews(res.data.items))
    }

}

export default TopNews
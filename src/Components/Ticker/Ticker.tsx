import './Ticker.css'
import { useState, useLayoutEffect } from 'react'
import Axios from 'axios'
interface Props {

}

const Ticker: React.FC<Props> = () => {
    const [News, setNews] = useState<any[]>([])

    useLayoutEffect(() => {
        GetData()
    }, [])

    return (
        <>
            <a href='https://energynewsbeat.co/top-news/' target='_' className="TickerWrapper">
                <div className="Ticker">
                    <div className="TickerInfo">
                        {News.map((item, idx) => {
                            const regex = /(<([^>]+)>)/ig;
                            const title = item.title.replace(regex, '');
                            return (
                                <>
                                    <div className='TickerItem'>{title}</div>
                                    <div className={idx + 1 === News.length ? 'None' : 'TickerDash'}>-</div>
                                </>
                            )
                        }
                        )}
                    </div>
                </div>
                <div className="LearnMore">Learn More</div>
            </a>
        </>
    )

    function GetData() {
        const apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat2/feed/atom&count=10'
        Axios.get(apiUrl).then(res => setNews(res.data.items))
    }

}

export default Ticker
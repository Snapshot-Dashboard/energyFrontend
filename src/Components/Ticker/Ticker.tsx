import './Ticker.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'

interface Props {

}

const Ticker: React.FC<Props> = () => {
    const [tickerNews, setTickerNews] = useState([])

    const handleShow = () => {
        console.log(tickerNews[0])
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <>
            <a href='https://energynewsbeat.co/top-news/' target='_' className="TickerWrapper">
                <div className="Ticker">
                    <div className="TickerInfo">
                    </div>
                </div>
                <div className="LearnMore">Learn More</div>
            </a>
        </>
    )

    function GetData() {
        const apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fenergynewsbeat.co/feed/atom&count=10'
        Axios.get(apiUrl).then(res => setTickerNews(res.data.items))
    }

}

export default Ticker
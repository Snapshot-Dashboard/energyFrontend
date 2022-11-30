import './Ticker.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'
interface Props {

}

const Ticker: React.FC<Props> = () => {
    const [News, setNews] = useState<any[]>([])

    // const mod = (n: number, m: number) => {
    //     let result = n % m

    //     return result >= 0 ? result : result + m
    // }

    // const scrollLeft = () => {
    //     if (index === 0) {
    //         setIndex(2)
    //         return
    //     }
    //     setIndex(index => index - 1)
    // }

    // const scrollRight = () => {
    //     if (index === 2) {
    //         setIndex(0)
    //         return
    //     }
    //     setIndex(index => index + 1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (index === 2) {
    //             setIndex(0)
    //             return
    //         }
    //         setIndex(index => index + 1)
    //     }, 5000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [index])

    // const leftIndex = mod(index - 1, cards.length)
    // const rightIndex = mod(index + 1, cards.length)

    // let className = ""
    // if (i === index) {
    //     className = styles.Carousel
    // } else if (i === leftIndex) {
    //     className = styles.CarouselLeft
    // } else if (i === rightIndex) {
    //     className = styles.CarouselRight
    // }


    useEffect(() => {
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
        const apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat8/feed/atom&count=10'
        Axios.get(apiUrl).then(res => setNews(res.data.items))
    }

}

export default Ticker
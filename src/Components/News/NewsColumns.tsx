/* eslint-disable react/jsx-no-comment-textnodes */
import './News.css'
import News from "./News"
import { useState } from 'react'

// TODO Build News Component That is reuseable
// ! Render news from one Redux store source
// ! There's too many re renders of apis slowing performance

const NewsColumns: React.FC = () => {
    const [activeColumn, setActiveColumn] = useState<number>(4)

    const handleActiveColumn = (columnID: number) => {
        setActiveColumn(columnID)
    }

    return (
        <div className="NewsColumns">
            <News
                newsTitle={'US Energy'}
                apiURL='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat8/feed/atom&count=10'
                columnID={1}
                activeColumn={activeColumn}
                handleActiveColumn={handleActiveColumn}
                newsLink='https://energynewsbeat.co/us-energy-news-2/'
            />
            <News
                newsTitle={'E & P News'}
                apiURL='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat9/feed/atom&count=10'
                columnID={2}
                activeColumn={activeColumn}
                handleActiveColumn={handleActiveColumn}
                newsLink='https://energynewsbeat.co/ep/'
            />
            <News
                newsTitle={'Finance News'}
                apiURL='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat10/feed/atom&count=10'
                columnID={3}
                activeColumn={activeColumn}
                handleActiveColumn={handleActiveColumn}
                newsLink='https://energynewsbeat.co/finance/'
            />

        </div>
    )
}

export default NewsColumns
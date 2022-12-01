/* eslint-disable react/jsx-no-comment-textnodes */
import './News.css'
import News from "./News"

interface Props {
    news: any[]
    setNews: React.Dispatch<React.SetStateAction<any[]>>
}

// TODO Build News Component That is reuseable
// ! Render news from one Redux store source
// ! There's too many re renders of apis slowing performance

const NewsColumns: React.FC<Props> = ({ news, setNews }) => {
    return (
        <div className="NewsColumns">
            <News
                news={news}
                setNews={setNews}
                newsTitle={'US Energy'}
                apiURL={'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat8/feed/atom&count=10'}
            />
            <News
                news={news}
                setNews={setNews}
                newsTitle={'E&P News'}
                apiURL={'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat8/feed/atom&count=10'}
            />
            <News
                news={news}
                setNews={setNews}
                newsTitle={'Finance News'}
                apiURL={'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffollow.it%2Fhome-energy-news-beat8/feed/atom&count=10'}
            />

        </div>
    )
}

export default NewsColumns
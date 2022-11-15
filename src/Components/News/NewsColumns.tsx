import './News.css'
import News from "./News"
import News2 from "./News2"

interface Props {
    news: any[]
    setNews: React.Dispatch<React.SetStateAction<any[]>>
    news2: any[]
    setNews2: React.Dispatch<React.SetStateAction<any[]>>
    newsCategory: any
    setNewsCategory: React.Dispatch<React.SetStateAction<any>>
}

const NewsColumns: React.FC<Props> = ({ news, setNews, news2, setNews2, newsCategory, setNewsCategory }) => {
    return (
        <div className="NewsColumns">

            <News
                news={news}
                setNews={setNews}
                news2={news2}
                setNews2={setNews2}
                newsCategory={newsCategory}
                setNewsCategory={setNewsCategory}
                apiURL={'https://ny-times-news-titles-and-urls.p.rapidapi.com/news'}
                apiHeader={'ny-times-news-titles-and-urls.p.rapidapi.com'}
            />
            <News2
                news={news}
                setNews={setNews}
                news2={news2}
                setNews2={setNews2}
                newsCategory={newsCategory}
                setNewsCategory={setNewsCategory}
                apiURL={'https://ny-times-news-titles-and-urls.p.rapidapi.com/news'}
                apiHeader={'ny-times-news-titles-and-urls.p.rapidapi.com'}
            />
            <News2
                news={news}
                setNews={setNews}
                news2={news2}
                setNews2={setNews2}
                newsCategory={newsCategory}
                setNewsCategory={setNewsCategory}
                apiURL={'https://ny-times-news-titles-and-urls.p.rapidapi.com/news'}
                apiHeader={'ny-times-news-titles-and-urls.p.rapidapi.com'}
            />

        </div>
    )
}

export default NewsColumns
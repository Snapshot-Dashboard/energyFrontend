import { useState } from 'react'

interface Props {
    index: number
    news: any[]
}

const NewsList: React.FC<Props> = ({ news, index }) => {
    const [showStories, setShowStories] = useState<boolean>(false)

    console.log(news, index)

    return (
        // ! Right here in .slice(), change news.length to index if you want button back
        <>
            {news.slice(0, news.length).map((newsItem, idx) => {
                const regex = /(<([^>]+)>)/ig;
                const title = newsItem.description.replace(regex, '');
                const description = newsItem.description.replace(regex, '');

                // TODO Finish News Card & Make News Cards Independent
                return (
                    <div key={idx}>
                        {renderStories(title, description)}
                    </div>
                )
            })}
        </>
    )

    function renderStories(title: string, description: string) {
        return (
            <>
                <div className="NewsCard" onClick={() => setShowStories(!showStories)}>
                    <div className='NewsTitle'>
                        {title.length >= 100 ? title.slice(0, 100) + '...' : title}
                    </div>
                    <p className='NewsDesc'>
                        {showStories ? description.slice(0, 1000) : description.slice(0, 100)}<button className='SeeMoreButton'>{showStories ? '... See Less' : '...See More'}</button>
                    </p>
                </div>
            </>
        )
    }
}

export default NewsList
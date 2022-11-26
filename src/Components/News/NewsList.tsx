import { useState } from 'react'

interface Props {
    index: number
    news: any[]
}

const NewsList: React.FC<Props> = ({ news, index }) => {
    const [showStories, setShowStories] = useState<boolean>(false)

    return (
        <>
            {news.slice(0, index).map((newsItem, idx) => {
                const regex = /(<([^>]+)>)/ig;
                const result = newsItem.description.replace(regex, '');
                return (
                    <div className="NewsCard" key={idx}>
                        <div className='NewsTitle'>
                            {newsItem.title}
                        </div>
                        {renderStories(result)}
                    </div>
                )
            })}
        </>
    )

    function renderStories(result: string) {
        return (
            <>
                <p>
                    {showStories ? result.slice(0, 500) : result.slice(0, 100)}<button className='SeeMoreButton' onClick={() => setShowStories(!showStories)}>{showStories ? '... See Less' : '...See More'}</button>
                </p>
            </>
        )
    }
}

export default NewsList
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
                <div className="NewsCard">

                    <div className='NewsTitle'>
                        {title.length >= 100 ? title.slice(0, 100) + '...' : title}
                    </div>
                    <p>
                        {showStories ? description.slice(0, 500) : description.slice(0, 100)}<button className='SeeMoreButton' onClick={() => setShowStories(!showStories)}>{showStories ? '... See Less' : '...See More'}</button>
                    </p>
                </div>
            </>
        )
    }
}

export default NewsList
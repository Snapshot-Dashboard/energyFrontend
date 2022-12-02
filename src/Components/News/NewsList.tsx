interface Props {
    index: number
    news: any[]
    columnID: number
    activeColumn: number
    handleActiveColumn: (columnID: number) => void
}

const NewsList: React.FC<Props> = ({ news, index, columnID, activeColumn, handleActiveColumn }) => {

    const handlerForColumn = (columnID: number) => {
        handleActiveColumn(columnID)
    }

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
                        {renderStories(title, description, columnID)}
                    </div>
                )
            })}
        </>
    )

    function renderStories(title: string, description: string, columnID: number) {
        return (
            <>
                <div className="NewsCard">
                    <div className='NewsTitle' onClick={() => handlerForColumn(columnID)}>
                        {title.length >= 100 ? title.slice(0, 100) + '...' : title}
                    </div>
                    <p className='NewsDesc'>
                        {columnID === activeColumn ? description.slice(0, 1000) : <div onClick={() => handlerForColumn(columnID)}>{description.slice(0, 100)}</div>}<button className='SeeMoreButton'>{columnID === activeColumn ? <div onClick={() => handlerForColumn(4)}>...See Less</div> : <div onClick={() => handlerForColumn(columnID)}>...See More</div>}</button>
                    </p>
                </div>
            </>
        )
    }
}

export default NewsList
import './Ticker.css'

interface Props {

}

const Ticker: React.FC<Props> = () => {
    return (
        <>
            <div className="TickerWrapper">
                <div className="Ticker">
                    <div className="TickerInfo">
                        This article is from Full Stack Economics, a newsletter about the economy, technology, and public policy.
                        In March 2021, a woman in the D.C. area put her house on the market and got 88 bids—including 76 all-cash offers and 15 from people who hadn’t bothered to visit the property in person.
                        “The offers just kept coming,” she told CNN at the time. “I’m thinking, ‘This is just out of control.’ ”
                        That frothy, oozing-over-the-top market has been over for a few months now, and new data suggest that we might be entering a very different type of housing market.
                        Home prices in the United States fell by 1.1 percent between July and August, according to new data from the Case-Shiller index. That’s by far the biggest monthly decline since the last housing crash hit bottom in 2012.
                        ADVERTISEMENT
                        Another widely used index of housing prices, the Zillow Home Value Index, doesn’t yet show an outright decline. But it shows that home prices have been flat in recent months after two years of strong price appreciation.
                    </div>
                </div>
                <div className="LearnMore">Learn More</div>
            </div>
        </>
    )
}

export default Ticker
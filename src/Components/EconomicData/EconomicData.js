import React, { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'

function EconomicData() {
    const [data, setData] = useState([])

    // api v2 U.S. Ending Stocks excluding SPR of Crude Oil (Thousand Barrels)
    const urlEiaEndingStocksExcSpr =
        "https://api.eia.gov/v2/petroleum/stoc/wstk/data?api_key=f8127de985a95b35a603961cfd50cdbd&data[]=value&facets[duoarea][]=NUS&sort[0][column]=period&sort[0][direction]=desc&facets[series][]=WCESTUS1";

    async function getEiaData() {
        await Axios.get(urlEiaEndingStocksExcSpr).then(res => setData(res.data.response.data));
    }

    const handleLog = () => {
        getEiaData()
    }

    return (
        <>
            {data.map(barrels => {
                return (
                    <div>
                        <p>
                            Date: {barrels.period}
                        </p>
                        <p>
                            Value: {barrels.value}
                        </p>
                    </div>
                )
            })}
        </>
    )
}

export default EconomicData
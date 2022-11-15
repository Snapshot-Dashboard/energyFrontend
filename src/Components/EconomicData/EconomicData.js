import React, { useState, useEffect } from 'react'
import axios from "axios";

function EconomicData() {
    const [apiData, setApiData] = useState('')

    // const options = {
    //     method: 'GET',
    //     url: 'https://u-s-economic-indicators.p.rapidapi.com/api/v1/resources/mortgage-rate-30Y-fixed-monthly',
    //     headers: {
    //         'X-RapidAPI-Key': '2a5ae053bdmsh289fd6e9e075512p1bb69djsn1890178e4707',
    //         'X-RapidAPI-Host': 'u-s-economic-indicators.p.rapidapi.com'
    //     }
    // };

    // function GetData() {
    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }

    const url = `https://fred.stlouisfed.org/series/WPUSI012011`

    function GetData() {
        axios.get(url).then(res => console.log(res.data, 'TJOSOSAKSUDKS')).catch(err => console.log(err))
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <>

        </>
    )
}

export default EconomicData
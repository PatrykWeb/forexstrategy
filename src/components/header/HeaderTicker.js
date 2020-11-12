import React, {useState, useEffect} from 'react';
import Axios from "axios";


const HeaderTicker = () => {
    const [dataGraph, setGraph] = useState("0");
    useEffect( () => {
        const result = setInterval(() => {
            Axios.get("http://numbersapi.com/random/year?json", {
                params: {
                    number: `${dataGraph}`
                }
            }).then(response => setGraph(response.data.number))
        }, 5000);
        return() => {
            clearInterval(result);
        }
    });
    const checkProfit = () => {
        return {
            color: (dataGraph > 0) ? "#2ecc71" : "red"
        }
    }

    return(
        <div className={"tickerContainer"}>
            <header className={"headerTicker"}>
                <div className={"logoText"}><p>your<span>investing</span>strategy</p></div>
                <div className={"logoHeader"}><img src={"https://cdn.discordapp.com/attachments/616606511745204246/776428431184494592/bull.png"}/></div>
                <div className={"tickerIndexHeader"}>
                    <p><span style={checkProfit()} className={"sp500"}>S&P {dataGraph}%</span></p>
                    <p><span>DE30 4.21%</span></p>
                    <p><span>USTEC -2%</span></p>
                    <p><span>DJ30 3%</span></p>
                </div>
            </header>
            <section className={"backgroundMiddle"}>

            </section>
        </div>
    )
}


export default HeaderTicker;

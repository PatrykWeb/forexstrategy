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
            }).then(response => console.log(setGraph(response.data.number)))
        }, 5000);
    });
    return(
        <div className={"tickerContainer"}>
            <header className={"headerTicker"}>
                <div className={"logoText"}><p>your<b>investing</b>strategy</p></div>
                <div className={"tickerIndexHeader"}>
                    <p>S&P <span>${dataGraph}</span><img src={"https://media.discordapp.net/attachments/616606511745204246/776159152148971590/down-arrow_green.png"}/></p>
                    <p>DE30 <span>4.21%</span></p>
                    <p>USTEC <span>-2%</span><img src={"https://cdn.discordapp.com/attachments/616606511745204246/776159432849621042/down-arrow.png"}/></p>
                    <p>DJ30 <span>3%</span></p>
                </div>
            </header>
            <section className={"backgroundMiddle"}>

            </section>
        </div>
    )
}


export default HeaderTicker;

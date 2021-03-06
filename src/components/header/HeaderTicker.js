import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {BrowserRouter as Router, Link} from "react-router-dom"


const HeaderTicker = () => {
    const [dataGraph, setGraph] = useState("0");
    useEffect(() => {
        const result = setInterval(() => {
            Axios.get("http://numbersapi.com/random/year?json", {
                params: {
                    number: `${dataGraph}`
                }
            }).then(response => setGraph(response.data.number))
        }, 5000);
        return () => {
            clearInterval(result);
        }
    });

    const checkProfit = () => {
        return {
            color: (dataGraph > 0) ? "#2ecc71" : "#e74c3c",
            backgroundColor: (dataGraph > 0) ? "#d6ffef" : "#ffdede"
        }
    }

    return (
        <div className={"tickerContainer"}>
            <header className={"headerTicker"}>
                <div className={"logoText"}><p>your<span>investing</span>strategy</p></div>
                <div className={"logoHeader"}><img
                    src={"https://cdn.discordapp.com/attachments/616606511745204246/776428431184494592/bull.png"}/>
                </div>
                <div className={"tickerIndexHeader"}>
                    <p><span style={checkProfit()} className={"sp500"}>S&P {dataGraph}%</span></p>
                    <p><span style={checkProfit()}>DE30 {dataGraph}%</span></p>
                    <p><span style={checkProfit()}>USTEC {dataGraph}%</span></p>
                    <p><span style={checkProfit()}>DJ30 {dataGraph}%</span></p>
                    <Router>
                        <nav>
                            <ul>
                                <li>
                                    <Link to={"/aboutus"} style={{textDecoration: "none", color: "black"}}>About us</Link>
                                </li>
                                <li>
                                    <Link to={"/login"} style={{textDecoration: "none", color: "black"}}>What is
                                        your<span className={"whatsInvestingNav"}>investing</span>strategy?</Link>
                                </li>
                                <li>
                                    <Link to={"/login"} style={{textDecoration: "none", color: "black"}}>Login</Link>
                                </li>
                                <li>
                                    <Link to={"/login"} style={{textDecoration: "none", color: "black"}}>Register</Link>
                                </li>
                            </ul>
                        </nav>
                    </Router>
                </div>

            </header>
        </div>
    )
}


export default HeaderTicker;

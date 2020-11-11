import React from 'react';


const HeaderTicker = () => {
    return(
        <div className={"tickerContainer"}>
            <header className={"headerTicker"}>
                <div className={"logoText"}><p>your<b>investing</b>strategy</p></div>
                <div className={"tickerIndexHeader"}>
                    <p>S&P <span>12%</span></p>
                    <p>DE30 <span>4.21%</span></p>
                    <p>USTEC <span>-2%</span></p>
                    <p>DJ30 <span>3%</span></p>
                </div>
            </header>
            <section className={"backgroundMiddle"}>

            </section>
        </div>
    )
}


export default HeaderTicker;

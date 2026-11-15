import React from 'react';
function Hero() {
    return ( 
        <div class="container   ">
            <div class="row p-5 text-center mt-5 border-bottom  ">
             <h1 class="fs-3 mb-3">Charges</h1>
             <h3 class="text-muted fs-5">List of all charges and taxes</h3>
            </div>
            <div class="row mt-5 p-5 align-items-center">
                <div class="col-4 p-4 text-center">
                <img src='media/pricingEquity.svg' style={{width:"80%"}}></img>
                <h2 class="fs-3">Free equity delivery</h2>
                <p class="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div class="col-4 p-4 text-center">
                   <img src='media/intradayTrades.svg' style={{width:"80%"}}></img>
                <h2 class="fs-3">Intraday and F&O trades</h2>
                <p class="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p> 
                </div>
                <div class="col-4 p-4 text-center">
                    <img src='media/pricingEquity.svg' style={{width:"80%"}}></img>
                <h2 class="fs-3">Free direct MF</h2>
                <p class="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
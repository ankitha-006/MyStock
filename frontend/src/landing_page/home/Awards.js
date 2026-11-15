import React from 'react';
function Awards() {
    return (<div class='container mt-5'>
        <div class='row'>
            <div class='col-6 p-5'>
        <img src='media/largestBroker.svg' alt='awards img' />
            </div>
                 <div class='col-6 p-5 mt-5'>
           
               <h1 class='fs-2'>Largest stock broker in India</h1>
               <p class='mb-5'>2+ million MyStock clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
               <div class='row'>
                <div class='col-6'>
               <ul>
                <li><p>Futures and Options</p></li>
                 <li><p>Commodity derivatives</p></li>
                   <li><p>Currency derivatives</p></li>
               </ul>
               </div>
               <div class='col-6'>
               <ul>
                <li><p>Stocks& IPOs</p></li>
                 <li><p>Direct mutual funds</p></li>
            <li><p class='text-nowrap'>Bonds and GovernmentSecurty</p></li>
               </ul>
               </div>
               </div>
               <img src='media/pressLogos.png' alt='press img'style={{width:'90%'}}></img>
               </div >
        </div>

    </div> );
}

export default Awards;
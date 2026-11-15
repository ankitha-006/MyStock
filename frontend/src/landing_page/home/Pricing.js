import React from 'react';
function Pricing() {
    return ( 
        <div class='container'>
            <div class='row'>
                <div class='col-4'>
                    <h1 class='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div>
                        <a href='' style={{textDecoration:'none'}}>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                 <div class='col-2'></div> 
                 {/* this col2 is just empty div to create space between two col used insted of padding */}
                <div class='col-6 mb-5'>
                   <div class='row text-center'>
                    <div class='col-6 border p-3'>
                      <h1 class='mb-3'>₹0</h1>
                      <p>Free equity delivery and <br></br> direct mutual funds</p>
                    </div>
                       <div class='col-6 border p-3'>
                        <h1 class='mb-3'>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
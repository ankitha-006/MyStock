import React from 'react';
function Hero() {
    return ( 
        <section class="container-fluid " id="supportHero">
            <div class=" mt-5 p-3 " id="supportWrapper">
                <h4 style={{color:"white"}}>Support Portal</h4>
                <a href="" style={{color:"white"}}>Track Tickets</a>
            </div>
            <div class="row p-5 mt-5 mb-5" >
                <div class="col-5 p-3">
                <h3>Search for an answer or browse help topics to create a ticket</h3>
                <input  placeholder='Eg:How do i open my account'></input><br></br>
                <a href="" style={{color:"white",marginRight:"5px"}}>Track account opening</a>
                <a href="" style={{color:"white",marginRight:"5px"}}>Tracksegment activation</a>
                <a href="" style={{color:"white",marginRight:"5px"}}>Intraday margins</a>
                <a href="" style={{color:"white",marginRight:"5px"}}>Kite use manual</a>
                </div>
                <div class="col-2 p-3 ">
            
                </div>
                <div class="col-5 p-3 ">
<h3>Featured</h3>
<ol style={{lineHeight:"2.5"}}>

 <li><a href="" style={{color:"white"}}>Current Takeovers and Delisting-January 2026</a></li>
                <li><a href="" style={{color:"white"}}>Latest Intraday leverages-MIS & CO</a></li>
                </ol>
                </div>

            </div>
        </section>
     );
}

export default Hero;
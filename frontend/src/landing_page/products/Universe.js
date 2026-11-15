import React from 'react';
import {Link}from 'react-router-dom';
function Universe() {
    return ( 
        <div class="container">
            <div class="row text-center">
                <h1 class="mb-4 fs-3">The MyStock Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

            </div>
            <div class="row p-5 mt-3 align-items-center ">
                <div class="col-4 p-5 text-center">
                <img src="media/zerodhaFundhouse.png" alt="fund img" style={{width:"60%"}}></img>
                <p class="text-small text-muted">Asset management</p>
                </div>
                 <div class="col-4 p-5 text-center">
<img src="media/sensibullLogo.svg" alt="fund img" style={{width:"60%"}}></img>
      <p class="text-small text-muted">Options trading platform</p>
                </div>
                 <div class="col-4 p-5 text-center">
<img src="media/goldenpiLogo.png" alt="fund img" style={{width:"60%"}}></img>
      <p class="text-small text-muted">Bonds trading platform</p>
                </div>

            </div>
              <div class="row p-5  align-items-center">
                <div class="col-4 p-5 text-center">
                <img src="media/streakLogo.png" alt="fund img" style={{width:"60%"}}></img>
                      <p class="text-small text-muted">Algo & Stratergy platforms</p>
                </div>
                 <div class="col-4 p-5 text-center">
<img src="media/smallcaseLogo.png" alt="fund img" style={{width:"60%"}}></img>
      <p class="text-small text-muted">Thematic investment platform</p>
                </div>
                 <div class="col-4 p-5 text-center">
<img src="media/dittoLogo.png" alt="fund img" style={{width:"60%"}}></img>
      <p class="text-small text-muted">Insurance</p>
                </div>
  <button class='p-2 btn btn-primary fs-5 mt-3' style={{width:"20%",margin:"0 auto"}}>SignUp Now</button>
            </div>
           
        </div>
     );
}

export default Universe;
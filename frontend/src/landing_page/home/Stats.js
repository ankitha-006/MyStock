import React from 'react';
function Stats() {
    return (
        <div class='container p-3'>
            <div class='row p-5'>
                <div class='col-6 p-5'>
      <h1 class='fs-2 mb-5'> Trust with confidence</h1>
      <h2 class='fs-4'>Customer-First alwaya</h2>
      <p class='text-muted'>That's why 1.6+ crore customers trust MyStock with ~ ₹6 lakh crores of equity investments.</p>
       <h2 class='fs-4'>No spam or gimmicks</h2>     
       <p class='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
       <h2 class='fs-4'>The Zerodha universe</h2>
       <p class='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
       <h2 class='fs-4'>Do better with money</h2>
       <p class='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div class='col-6 p-5 '>
              <img src='media/ecosystem.png'alt='ecosystem img' style={{width:'90%'}}></img>
              <div class='text-center'><a href='' class='mx-5' style={{textDecoration:'none'}}>Explore our products<i class="fa-solid fa-arrow-right-long"></i></a>
                <a href='' style={{textDecoration:'none'}}>Try kite demo<i class="fa-solid fa-arrow-right-long"></i></a></div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
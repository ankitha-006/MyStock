import React from 'react';
function Hero() {
    return ( <div class="container p-5">
       <div class="row text-center">
       <img src='media/homeHero.png' alt='hero image' class='mb-5'/>
       <h1 class='mt-5'>
        Invest in everything
       </h1>
    <p>
   Online platform to invest in stocks ,derivatives,mutual funds, and more
    </p>
    <button class='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>SignUp Now</button>
       </div>
    </div> );
}

export default Hero;
import React from 'react';
function Education() {
    return (
         <div class='container mt-5'>
            <div class='row p-5'>
                <div class='col-6 '>
                   <img src='media/education.svg' alt='education img' style={{width:"90%"}}></img>
                </div>
              
                <div class='col-6 '>
                   <h1 class='fs-2 mb-3'>Free and open market education</h1>
                   <p>Versity,the largest online stock market education book in world covering everything from the basics to advanced trading</p>
                   <div>
                    <a href=''style={{textDecoration:'none'}}>Verify<i class="fa-solid fa-arrow-right-long"></i></a>
                   </div>
                   <p class='mt-5'>TradingQ&A, the most active trading and investing community in India for all your market related queries</p>
                     <div>
                    <a href=''style={{textDecoration:'none'}}>TradingQ&A<i class="fa-solid fa-arrow-right-long"></i></a>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Education;
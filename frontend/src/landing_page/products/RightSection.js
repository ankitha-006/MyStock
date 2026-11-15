import React from 'react';
function RightSection({imageURL,productName,productDescription,learnMore}) {
    return (   <div class="container">
            <div class="row p-5 align-items-center">
                <div class="col-6 p-5 ">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={learnMore} style={{textDecoration:'none'}}>learnMore<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    
                </div>
                <div class="col-6 p-5 ">
                <img src={imageURL}></img>
                </div>
                     
            </div>
        </div> );
}

export default RightSection;
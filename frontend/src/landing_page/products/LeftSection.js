import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div class="container">
            <div class="row p-5  align-items-center">
                <div class="col-4 p-5 ">
                <img src={imageURL}></img>
                </div>
                 <div class="col-3 "></div>
                <div class="col-5 p-5 ">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:'none'}}>Try Demo<i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore} style={{textDecoration:'none',marginLeft:'95px'}} >Learn More<i class="fa-solid fa-arrow-right-long"></i></a> </div>
                    <div class="mt-3">
                     <a href={googlePlay} ><img src="media/googlePlayBadge.svg"></img></a>
                      <a href={appStore} style={{marginLeft:'50px'}} ><img src="media/appstoreBadge.svg"></img></a></div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
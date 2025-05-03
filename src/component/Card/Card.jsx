

import React from 'react';
import '../Card/card.css';
export const Card = ({data}) => {
    console.log(data)



    const readMore   = (url) => {
        window.open(url)
    }

  return (
    <div className='card-container'>

{data &&
   
    data.map((curr) => {
        if(!curr.urlToImage)return
        return(
            <div className='card'>
                <div className="card-img">
                    <img src={curr.
urlToImage
} alt="" />
                </div>
                <div className="card-content">
                    <a href={curr.url}>{curr.title}</a>
                    <p>{curr.description}</p>
                    <button onClick={() => readMore(curr.url)}>Read More</button>
                </div>
            </div>

        )
    })
}

       
       
        
    </div>
  )
}

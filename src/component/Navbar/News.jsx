
import React from 'react'
import '../Navbar/news.css'

import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from '../Card/Card';

export const News = () => {

    const [inputV, setInputV] = useState('india');
    const [newsData, setNewsData] = useState(null);
    const apiKey = `558c5b65a6c145a4ae4131070a2539a3`;

    const getData = async() => {
     try{
      const res = await fetch(`https://newsapi.org/v2/everything?q=${inputV}&apiKey=${apiKey}`);
      const data = await res.json()
      setNewsData(data.articles)

     }catch(error){
      console.log(error)
     }
    };


    const userInput = (e) => {
setInputV(e.target.value)
getData()
    }

   useEffect(() => {
    getData()
   },[])
  return (
    <div className="container">
        <div className="header">
      <div className="logo">News</div>
      <ul>
        <li>
          <a href="#">All News</a>
        </li>
        <li>
          <a href="#">Top Headlines</a>
        </li>
      </ul>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
       value={inputV}
          onChange={(e) => setInputV(e.target.value)}
        />
        <button onClick={getData}>Search</button>
      </div>
     
     
    </div>
    <div className="news-container">
        <h3>Stay Update with News!</h3>
        <div className="news-button">
            <button onClick={userInput} value='sports  '>Sports</button>
            <button onClick={userInput} value='politics'>Politics</button>
         
            <button onClick={userInput} value='health'>Health</button>
            <button onClick={userInput} value='entertainment'>Entertainment</button>
            <button onClick={userInput} value='technology'>Technology</button>
        </div>
    </div>
    <Card data={newsData}/>
    </div>
  )
}

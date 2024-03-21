import React, { useEffect, useState } from 'react'
import './News.css'

function News() {


  const [text, setText] = useState([]);
  const news = async () => {

    //  let apikey =  "634f6dd6870766bc222571a73d56ad6d"
    let url =`http://www.omdbapi.com/?apikey=720508f7&s=titanic`
    let data = await fetch(url);
    let persedata = await data.json();
    setText(persedata.articles)


  }
  useEffect(() => {
    news();
  }, [])


  return (
    <div>
      <div className="container" >
      {
        text.map((element) => {
          const { source, author, title, publishedAt } = element;
          return (
            <>

              <div className="subcontain">
                <h3> Hello News {author}</h3>
                <p id="manas">{publishedAt}</p>
                <p>  {title}</p>
                <p>{source.name}</p>
              </div>


            </>
          )
        })
      }
      </div>



    </div>
  )









}

export default News

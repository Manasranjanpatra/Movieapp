import React, { useState, useEffect, useContext } from 'react'
import Hoome from './Hoome';
import { AppContext } from './Context';

// import PropTypes from 'prop-types'


function Movies() {

  const { vlue, setVlue } = useContext(AppContext);

  const [text, setText] = useState([]);
  // const [data, setData] = useState([]);
  const [value, setValue] = useState("titanic")
  const news = async () => {
    let url = `http://www.omdbapi.com/?apikey=720508f7&s=${vlue}`;
    let data = await fetch(url);
    let persedata = await data.json();
    setText(persedata.Search);
  }
  useEffect(() => {
    news();
  }, [vlue])
  if (vlue === "") {
    return 0;

  }

  return (
    <div>
      <div className="search">
        <input type="text" id="value" placeholder="Enter lare"
          value={value}
          onChange={(e) => { setValue(e.target.value) }} />

      </div>
      <div className="container  mx-6 my-4" >
        <div className="row">
          {
            text.map((element) => {
              // const { source, author, title, publishedAt } = element;
              return <div class=" col md-4 ">
                <Hoome movie={element.Title} id={element.imdbID} year={element.Year}
                  Poster={element.Poster} />
              </div>


            })
          }
        </div>
      </div>
    </div>
  )
}

// export {AppContext,AppProvider};

export default Movies

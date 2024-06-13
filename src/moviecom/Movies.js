import React, { useState, useEffect } from "react";
import Hoome from "./Hoome";
import { Link } from "react-router-dom";
import "./Movie.css"



function Movies() {
 

  const [message, setMessage] = useState([]);
  const [text, setText] = useState([]);
  const [dataa, setDataa] = useState("");
  const [value, setValue] = useState("titanic");
  let copy = true
  const news = async () => {
    let url = `https://www.omdbapi.com/?apikey=720508f7&s=${value}`;
    let data = await fetch(url);

    let persedata = await data.json();
    console.log(persedata);
    if (persedata.Response === "True") {
      setText(persedata.Search);
      setMessage("");
      
      copy = true;
    }


    if (persedata.Response === "False") {
      setMessage(persedata.Error);
      copy = false;
    }
  };
  useEffect(() => {
    let outfit = setTimeout(() => {
      news();
    }, 0.1);
    return ()=>clearTimeout(outfit);
  }, [value]);

  const inchange = () => {
    setValue(dataa);
    // alert("success");
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={dataa}
          id="value"
          placeholder="Enter movie name"
          onChange={(e) => {
            setDataa(e.target.value);
          }}
        />
        <i  className="fa-solid fa-magnifying-glass" onClick={inchange}></i>
      </div>
     <p className="middle">{message}</p>
      <div className="container  my-3 justify-content-center">
        <div className="row">
          {text.map((element,index) => {
            return (
              <div className=" col md-4   " id={index}  key={index} >
              
                <Link to={`/movie/${element.imdbID}`}>
                  <Hoome
                    movie={element.Title}
                    id={element.imdbID}
                    year={element.Year}
                    Poster={element.Poster}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// export {AppContext,AppProvider};

export default Movies;

import React, { useState, useEffect, createElement } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Movie.css";

const Singlemovie = () => {
  const { id } = useParams();
  const [text, setText] = useState([]);
  let copy = true;
  let navigate = useNavigate();

  const news = async () => {
    let url = `http://www.omdbapi.com/?apikey=720508f7&i=${id}`;
    let data = await fetch(url);
    let persedata = await data.json();
    console.log(persedata);
    setText(persedata);
  };
  const tohome = () => {
    navigate("/");
  };

  useEffect(() => {
    let onetime = setTimeout(() => {
      news();
    }, 100);
    return () => clearTimeout(onetime);
  }, [id]);
  return (
    <div>
      <div className="card  single ">
        <img src={text.Poster} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{text.Title}</h5>
          <h6>{text.BoxOffice}</h6>
          <h3>{text.Writer}</h3>
         

          <p className="card-text">
            {text.Year}
            <small className="text-muted">By {text.DVD}</small>
          </p>
        </div>
        <button onClick={tohome}>GO BACK</button>
      </div>
    </div>
  );
};

export default Singlemovie;

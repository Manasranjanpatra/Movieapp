import React, { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import "./Movie.css";

const Singlemovie = () => {
  const { id } = useParams();
  const [text, setText] = useState([]);

  let navigate = useNavigate();

  const news = async () => {
    let url = `https://www.omdbapi.com/?apikey=720508f7&i=${id}`;
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
    }, 0.1);
    return () => clearTimeout(onetime);
  }, [id]);
  return (
    <div className="single">
      <div className="card   ">
        <img src={text.Poster} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{text.Title}</h5>
          <h6>{text.BoxOffice}</h6>
          <h3>{text.Writer}</h3>
         

          <p className="card-text">
            {text.Released}
            <small className="text-muted">By {text.DVD}</small>
          </p>
        </div>
        <button onClick={tohome}>GO BACK</button>
      </div>
    </div>
  );
};

export default Singlemovie;

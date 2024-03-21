import React  from 'react'
// import { AppContext } from './Context'
import "./Movie.css"


const Hoome = (props) => {

  // let [moviename,id,year]=this.props;
  // const name =useContext(AppContext);

  return (

   
            <div className="card " >
              <img src={props.Poster} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{props.movie}</h5>
                <p className="card-text">{props.id}</p>
                <p className="card-text">{props.year}<small className="text-muted">By {props.hour}</small></p>
              </div>
            </div>

       
  )
}


export default Hoome

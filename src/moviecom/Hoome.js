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
                <h2 className="card-title"> Movie Name:{props.movie}</h2>
                <h4 className="card-text">Movie Year: {props.year}</h4>
                <h4 className="card-text">Movie Id: {props.id}</h4>
               
              </div>
            </div>

       
  )
}


export default Hoome

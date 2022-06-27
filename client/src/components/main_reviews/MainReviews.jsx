import React from "react";
import { Link } from "react-router-dom";

const MainReviews = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  
  return (
    <div className="reviews_form">
      <span className="avatar">
        <img src={props.photo} alt="" />
      </span>
      <span>
        <b>Meistras: </b>
        <span>{props.name} </span>
        <span>{props.surname} </span>
      </span>
      <br />
      <span>
        <b>Specializacija: </b>
        <span>{props.specialization}</span>
      </span>
      <br />
      <span>
        <b>Servisas: </b>
        <span>{props.service}</span>
      </span>
      <br />
      <span>
        <b>Miestas: </b>
        <span>{props.city}</span>
      </span>
      <br />
      <span>
        <b>Likes: </b>
        <span>{props.likes}</span>
        <button className="add_like_btn">+</button>
      </span>
      <div className="delete_btn">
        <form onSubmit={e=>handleSubmit(e)}>

          <button type="submit">
          <Link to="/" state={props.likes}>
          DELETE
          </Link>
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default MainReviews;

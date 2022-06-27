import React from "react";
import { Link } from "react-router-dom";

const MainReviews = (props) => {

    // deletes review from json file
    const deleteEntry = () => {
      fetch("http://localhost:3001/reviews/" + props.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault()
    deleteEntry()
    console.log(deleteEntry())
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
          <Link to="/" state={props.id}>
          DELETE
          </Link>
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default MainReviews;

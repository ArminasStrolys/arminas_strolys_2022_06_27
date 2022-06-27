import React from "react";

const MainReviews = (props) => {
  
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
        <form>
          <button>DELETE</button>
        </form>
      </div>
    </div>
  );
};

export default MainReviews;

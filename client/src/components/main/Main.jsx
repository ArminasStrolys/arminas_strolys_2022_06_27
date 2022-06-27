import React, { useState, useEffect } from "react";
import MainReviews from "../main_reviews/MainReviews";
import { useLocation } from "react-router-dom";
import Data from "../../data/data.json";

const Main = () => {

  const [data, setData] = useState([]);
  const location = useLocation();
  const ids = location.state;
console.log(ids)
  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="main_headline">Car service reviews</h1>
      {data.map((review, index) => (
        <MainReviews
          key={index}
          photo={review.photo}
          name={review.name}
          surname={review.surname}
          specialization={review.specialization}
          service={review.service}
          city={review.city}
          likes={review.likes}
          id={review.id}
        />
      ))}
      
    </div>
  );
};

export default Main;

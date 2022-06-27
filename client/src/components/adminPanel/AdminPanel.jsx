import React, { useState } from "react";
import MainReviews from "../main_reviews/MainReviews";
import Data from "../../data/data.json";

const AdminPanel = () => {
  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [addReview, setAddReview] = useState({
    specialization: "",
    surname: "",
    service: "",
    name: "",
    city: "",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVT4Rr5cR5W8qciEsozIXL9RPO86UX07wc_g&usqp=CAU",
    id: "",
    likes: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createEntry();
    console.log(addReview);
  };

  // creates a review and writes it into json file
  const createEntry = () => {
    fetch("http://localhost:3001/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addReview),
    }).then(
      setAddReview({
        specialization: addReview.specialization,
        surname: addReview.surname,
        service: addReview.service,
        name: addReview.name,
        city: addReview.city,
        photo: addReview.photo,
        likes: 0,
        id: addReview.id,
      })
    );
  };

    // deletes review from json file
  const deleteEntry = (data) => {
    fetch("http://localhost:3001/tasks/" + data, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <div className="info_title">
        <h1>Admin panel</h1>
        <h3>Add a service worker</h3>
      </div>

      <div className="add_worker_class">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Workers name: </label>
          <input
            type="text"
            onChange={(e) =>
              setAddReview({
                ...addReview,
                name: e.target.value,
              })
            }
            required
          />
          <br />
          <label>Workers surname: </label>
          <input
            type="text"
            onChange={(e) =>
              setAddReview({
                ...addReview,
                surname: e.target.value,
              })
            }
            required
          />
          <br />
          <label>Workers specialization: </label>
          <input
            type="text"
            onChange={(e) =>
              setAddReview({
                ...addReview,
                specialization: e.target.value,
              })
            }
            required
          />
          <br />
          <label>Workers service: </label>
          <input
            type="text"
            onChange={(e) =>
              setAddReview({
                ...addReview,
                service: e.target.value,
              })
            }
            required
          />
          <br />
          <label>Workers city: </label>
          <input
            type="text"
            onChange={(e) =>
              setAddReview({
                ...addReview,
                city: e.target.value,
                id: randomId(0, 999999999),
              })
            }
            required
          />
          <br />
          <label>Workers photo: </label>
          <input type="file" />
          <button className="submit_worker_button" type="Submit">
            Submit worker details
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminPanel;

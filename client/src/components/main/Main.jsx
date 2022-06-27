import React from 'react';
import MainReviews from '../main_reviews/MainReviews';
import Data from '../../data/data.json'

const Main = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("Data")
    //       .then((res) => res.json())
    //       .then((Data) => setData(Data.reviews))
    //       .catch((error) => console.log(error));
    //   }, []);

    return (
        <div>
            <h1>Main page</h1>
            {Data.reviews.map((review, index)=> <MainReviews
            key={index}
            photo={review.photo}
            name={review.name}
            surname={review.surname}
            specialization={review.specialization}
            service={review.service}
            city={review.city}
            likes={review.likes}
            />)}
            {console.log(Data)}
        </div>
    );
}

export default Main;

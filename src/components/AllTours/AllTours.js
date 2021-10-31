import React from 'react';

const AllTours = () => {
    return (
        <div>
            <h2 className="p-5">Will Update Soon!</h2>
        </div>
    );
};

export default AllTours;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./AllTours.css";

// const AllTours = () => {
//     const [tours, setTours] = useState([]);
//     const [isDelete, setIsDelete] = useState(null);
//     useEffect(() => {
//         fetch("http://localhost:5000/tours")//
//             .then((response) => response.json())
//             .then((data) => setTours(data));
//     }, [isDelete]);

//     const handleDeleteTours = (id) => {
//         console.log(id);

//         fetch(`http://localhost:5000/deleteTours/${id}`, {
//             method: "DELETE",
//             headers: { "Content-type": "application/json" },
//         })
//             .then((res) => res.json())
//             .then((result) => {
//                 if (result.deletedCount) {
//                     setIsDelete(true);
//                 } else {
//                     setIsDelete(false);
//                 }
//             });
//     };

//     const handleAddToCart = (index) => {
//         const data = tours[index];
//         data.email = "ami@gmail.com";
//         fetch(`http://localhost:5000/tours`, {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(data),
//         })
//             .then((res) => res.json())
//             .then((result) => {
//                 console.log(result);
//                 if (result.insertedId) {
//                     alert("add hoise broooo ");
//                 } else {
//                     alert("add korte pari nai");
//                 }
//             });
//     };

//     return (
//         <div>
//             <h1>All Avaiable Tours: {tours.length}</h1>
//             <div className="all-products">
//                 <div className="row container text-center">
//                     {tours.map((pd, index) => (
//                         <div className="col-md-4">
//                             <div className="product border border p-2 m-2">
//                                 <h5>{pd?.name}</h5>
//                                 <h5>{pd?.price}</h5>
//                                 <h6>{pd?.description}</h6>
//                                 <button
//                                     onClick={() => handleDeleteTours(pd._id)}
//                                     className="review-btn mb-2"
//                                 >
//                                     Delete
//                                 </button>
//                                 <Link to={`/update/${pd._id}`}>
//                                     <button className="btn btn-success m-2">update</button>
//                                 </Link>
//                                 <button
//                                     onClick={() => handleAddToCart(index)}
//                                     className="btn btn-info m-2"
//                                 >
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllTours;
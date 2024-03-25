import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

function LOListings({ listings, favorites }: { listings: any[], favorites: any[] }) {
  const [favorited, setFavorited] = useState(new Array(listings.length).fill(false));
  const [cart, setCart] = useState(new Array(listings.length).fill(false));

  const updateLiked = (index: any) => {
    const updateLikedListings = [...favorited];
    updateLikedListings[index] = !updateLikedListings[index];
    setFavorited(updateLikedListings);
  };

  const updateCart = (index: any) => {
    const updateCartListings = [...cart];
    updateCartListings[index] = !updateCartListings[index];
    setCart(updateCartListings);
  };

  return (
    <div className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {listings.map((l: any, index) => (
          <div key={l.title + l.shop_id} 
          className="col" style={{ width: 300 }}>
            <div className="card">
              <img
                src="/images/Etsy_logo.png"
                className="card-img-top"
                style={{ height: 150 }}
                alt="img"
              />
              <div className="card-body">
                <Link
                  className="card-title"
                  to={"#"}
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  {l.title}
                </Link>
                <br />
                <button onClick={() => updateLiked(index)}>{favorited[index] ? <FaHeart /> :  <AiOutlineHeart /> }</button>
                <button onClick={() => updateCart(index)}>{cart[index] ? <FaShoppingCart /> :  <BsCart2/> }</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  //   <h2>Published Courses ({mycourses.length})</h2> <hr />
  //   <div className="row">
  //     <div className="row row-cols-1 row-cols-md-5 g-4">
  //       {mycourses.map((course: any) => (
  //         <div key={course._id} className="col" style={{ width: 300 }}>
  //           <div className="card">
  //             <img src={`/images/${course.image}`} className="card-img-top"
  //               style={{ height: 150 }} />
  //             <div className="card-body">
  //               <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
  //                 style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
  //                 {course.name} </Link>
  //               <br />
  //               <p className="card-text">{course._id}</p>
  //               <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
  //                 Go </Link>

  //               <button className="btn btn-danger ms-1" style={{ borderRadius: "4px", float: "right" }} onClick={(event) => {
  //                 event.preventDefault();
  //                 console.log(course._id)
  //                 deleteCourse(course._id);

  //               }}>
  //                 Delete
  //               </button>

  //               <button className="btn btn-basic ms-1" style={{ borderRadius: "4px", float: "right", backgroundColor: "lightgray" }} onClick={(event) => {
  //                 event.preventDefault();
  //                 setCourse(course);
  //               }}>
  //                 Edit
  //               </button>

  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
}

export default LOListings;

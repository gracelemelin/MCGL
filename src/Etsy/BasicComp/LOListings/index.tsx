import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

function LOListings({ listings, favorites }: { listings: any[], favorites: any[] }) {
  // const [favorited, setFavorited] = useState(false)
  // const addToFavorites = () => {
  //     setFavorited(true)
  // }

  const findingFavorites = () => {
    listings.filter((listing) => listing.title === favorites.title)
  }

  return (
    <div className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {listings.map((l: any) => (
          <div className="col" style={{ width: 300 }}>
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
                {/* <button icon={<img  alt="some img" src={favorited ? <AiOutlineHeart /> : <FaHeart />}/>}><AiOutlineHeart /></button> */}
                <button>{}</button>
                <AiOutlineHeart />
                <BsCart2 />
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

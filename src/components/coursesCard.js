import React, { Component } from "react";
import { Link } from "react-router-dom";
import pic1 from "../img/mern.jpg";
import pic2 from "../img/mean.PNG";
import pic3 from "../img/Mad.jpg";
import pic4 from "../img/uiux.jpg";
import pic5 from "../img/wordpress.jpg";
import pic6 from "../img/gfx.jpg";
import pic7 from "../img/vid.jpg";
import "./coursesCard.css";

const CoursesCard = ({ courses }) => {

  console.log(courses);
  const imgData = [
    { pic: pic1 },
    { pic: pic2 },
    { pic: pic3 },
    { pic: pic4 },
    { pic: pic5 },
    { pic: pic6 },
    { pic: pic7 },
  ];
  
  const courseData = courses;

  console.log(courseData);
  return (
    <>
      <div className="row">
        {courseData.map((course) => {
          return (
            <div className="col-4 mb-4 ">
              <div class="card" >
             
                <div class="card-body heading text-light ">
                  <h5 class="card-title">
                    <strong>{course.title}</strong>
                  </h5>
                </div>
                <ul class="list-group list-group-flush ">
                  <li class="list-group-item">
                    Number of Lectures: {course.lectures}
                  </li>
                  <li class="list-group-item">
                    Students Enrolled: {course.students}
                  </li>
                </ul>
                <div class="card-body">
                  <Link to="/registration">
                    <button type="button" className="btn btn-primary ">
                      Register
                    </button>
                  </Link>
                </div>
                
               
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CoursesCard;

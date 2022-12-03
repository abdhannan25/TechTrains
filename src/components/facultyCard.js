import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import pic2 from '../img/teacher.jpeg'
import pic1 from '../img/MAli.jpg'
import pic3 from '../img/akhzar.jpg'
import pic4 from '../img/hisham.jpg'
import pic5 from '../img/imran.jpg'
import './facultyCard.css';


const FacultyCard = ({ faculty }) => {
  console.log(faculty);
  const facultyData = faculty;
  console.log(facultyData);    

    return (
      <div>
        <div className="row">
        {facultyData.map((faculty) => {      
        return (
          <>
                <div className="col-md-4">                  
                    <div class="card mb-5">
                      
                      <div class="card-body heading text-light">
                        <h5 class="card-title "><strong>{faculty.name}</strong></h5>
                        
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item fw-bold">Course: {faculty.course}</li>
                      </ul>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item text-align-left ">{faculty.desc}</li>
                      </ul>
                      <div class="card-body">
                        <button type="button" className="btn btn-primary ms-2">View Details</button>
                      </div>
                    </div>
                    </div>
            </>
        )
      })
      }
      </div>
      </div>
        )
    }



export default FacultyCard; 
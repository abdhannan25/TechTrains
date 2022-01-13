import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import pic2 from '../teacher.jpeg'
import pic1 from '../MAli.jpg'
import pic3 from '../akhzar.jpg'
import pic4 from '../hisham.jpg'
import pic5 from '../imran.jpg'


const FacultyCard = ({props}) => {
  console.log(props);
  const facultyData = props;
  // console.log(facultyData);
  // state = {
  //   data: [
  //       {
  //         t_id: 1,
  //         name:"Muhammad Ali Khan",
  //         img: pic1,
  //         course:"MERN Stack",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 1,
  //       },
  //       {
  //         t_id: 2,
  //         name:"Muhammad Ahmad",
  //         img: pic2,
  //         course:"MEAN Stack",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 2,
  //       },
  //       {
  //         t_id: 3,
  //         name:"Akhzar Nazir",
  //         img: pic3,
  //         course:"Mobile App Development",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 3,
  //       },
  //       {
  //         t_id: 4,
  //         name:"Muhammad Qasim",
  //         img: pic1,
  //         course:"UI/UX Designing",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 4,
  //       },
  //       {
  //         t_id: 5,
  //         name:"Abdul Ahad",
  //         img: pic1,
  //         course:"WordPress Website Development",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 5,
  //       },
  //       {
  //         t_id: 6,
  //         name:"Hisham Sarwar",
  //         img: pic4,
  //         course:"Graphics Designing",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 6,
  //       },
  //       {
  //         t_id: 7,
  //         name:"Imran Ali",
  //         img: pic5,
  //         course:"Video Editing",
  //         desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //         c_id: 7,
  //       },          
  //     ],
   
  // };

  
    

    return (
      <div>
        <div className="row">
        {facultyData.map((faculty) => {      
        return (
          <>
                <div className="col-md-4">                  
                    <div class="card mb-5">
                      {/* <img src={data.img} class="card-img-top " style={{height:'500px'}} alt="..."/> */}
                      <div class="card-body">
                        <h5 class="card-title"><strong>{faculty.name}</strong></h5>
                        
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
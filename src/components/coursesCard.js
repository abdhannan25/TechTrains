import React, { Component } from "react";
import { Link } from "react-router-dom";
import pic1 from "../mern.jpg";
import pic2 from "../mean.PNG";
import pic3 from "../Mad.jpg";
import pic4 from "../uiux.jpg";
import pic5 from "../wordpress.jpg";
import pic6 from "../gfx.jpg";
import pic7 from "../vid.jpg";
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
  // courseData.map((c) =>{
  //   {
  //     course:[
  //       {
  //         title: c.title,
  //         std: c.students,
  //         lec: c.lectures,
  //       },
      
  //   ]}
  // })

  // const cardData =  [{course}, { images: imgData }]
  //
  console.log(courseData);
  return (
    <>
      <div className="row">
        {courseData.map((course) => {
          return (
            <div className="col-4 mb-4 ">
              <div class="card" style={{ height: "500px" }}>
              {/* <img
                      src={course.images.pic}
                      class="card-img-top"
                      style={{ height: "250px" }}
                      alt="..."
                    /> */}
                {/* {course.images.map((imgg) => {
                  return (
                   
                  );
                })} */}
                <div class="card-body  ">
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
//   state = {
//     // title: props.title,
//     // students: props.students,
//     // lectures: props.lectures,
//     // img:[pic1,pic2,pic3,pic4,pic5,pic6,pic7],
// };

// {
//   id: "1",
//   title: "",
//   lectures: "",
//   students: "",
//   img: pic1,
// },
// {
//   id: "2",
//   title: "",
//   lectures: "",
//   students: "",
//   img: pic2,
// },
// {
//   id: "3",
//   title: "",
//   lectures: "",
//   students: "",
//   img: pic3,
// },
// {
//   id: "4",
//   title: "",
//   lectures: "",
//   students: "",
//   img: pic4,
// },
// {
//   id: "5",
//   title: "",
//   lectures: "",
//   students: "",
//   img: pic5,
// },
// {
//   id: "6",
//   title: "",
//   lectures: "",
//   students: "",
//   img: pic6,
// },
// {
//   id: "7",
//   title: "",
//   lectures: "",
//   students: "",
//   img: pic7,
// },

// componentDidMount(){
//   axios.get('http://localhost:5000/course/')
//   .then(res =>{
//     if(res.data.length>0){
//       this.setState({
//         title: res.data.map(course => course.title),
//         lectures: res.data.map(course => course.lectures),
//         students: res.data.map(course => course.students)
//       })
//     }
//   })
// }
// const [ courseData, setCourseData ] = useState([]);

// useEffect(() => {
//   getApplicatsDetails();
// },[]);

// const getApplicatsDetails = async () => {
//   const result = await axios.get('http://localhost:5000/course/');;
//   setCourseData(result.data);
// }

//   render(){
//     return (
//         <div>
//           <div className='row'>
//           {this.state.map((data) => {
//           return (
//             <>
//             {/* {applicantData.map(details => ( */}
//               <div className="col-4 mb-4 " >
//                 <div class="card" style={{height: '500px'}}>
//                   <img src={data.img} class="card-img-top" style={{height:'250px'}} alt="..."/>
//                    <div class="card-body  ">
//                       <h5 class="card-title"><strong>{data.title}</strong></h5>

//                     </div>
//                     <ul class="list-group list-group-flush ">
//                       <li class="list-group-item">Number of Lectures: {data.lectures}</li>
//                       <li class="list-group-item">Students Enrolled: {data.students}</li>
//                     </ul>
//                     <div class="card-body">
//                       <Link to='/registration'>
//                          <button type="button" className="btn btn-primary ">Register</button>
//                       </Link>

//                       </div>
//                  </div>
//                </div>
//                {/* ))} */}
//            </>
//           )
//        })
//       }
//         </div>
//         </div>
//     )
// }}
export default CoursesCard;

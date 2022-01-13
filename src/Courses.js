import React, { Component } from 'react'
import CoursesCard from './components/coursesCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import img from './coursesimg.jpg'
import './courses.css'
import axios from "axios";

export default class Courses extends Component {
    state={
        courses:[]
    };
    componentDidMount(){
        axios.get('http://localhost:5000/course/')
        .then(res =>{
            this.setState({courses: res.data})
            console.log(res.data)
          })
          .catch((error) => {
              console.log(error)
          })
      }

    courseList(){
            return <CoursesCard courses = {this.state.courses}/>;
        }
    
    render() {
        return(
            <div>
                <Navbar/>
                <div className="container main">                
                <div className="card mb-5" >
                    <img className="card-img-top" style={{height: "70vh"}} src={img} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title mb-4"><strong>Courses we Offer</strong></h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                    </div>
                    </div>
                    {/* <CoursesCard mydata={{ ...this.state.carddata }} /> */}
                    {this.courseList()}
                    </div>    
                
                <Footer/>
            </div>
        
        );
    }
}

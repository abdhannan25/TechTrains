import React, { Component } from 'react'
import FacultyCard from './components/facultyCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import img from './facultyimg1.jpg'
import axios from "axios";

export default class Faculty extends Component {
    state={
        faculty: []
    };

    async componentDidMount(){
        await fetch('http://localhost:5000/faculty/')
         .then(res =>{
                        
            return res.json()
            //  this.setState({faculty: res.data})
        })          
          .then(res =>{
            console.log(res)
            // this.setState({faculty: res})
            this.state.faculty = res;
          })
          .catch((error) => {
              console.log(error)
          })
        console.log(this.state.faculty)
      }
      
        facultyList(){
            console.log(this.state.faculty) 
            return <FacultyCard faculty = {this.state.faculty}/>;
    }


    render() {
        return(
            <div>
                <Navbar/>
                <div className="container main">
                <div className="card mb-5">
                    <img className="card-img-top" style={{height: "80vh"}} src={img} alt="Card image cap"/>
                    <div className="card-body" >
                        <h5 className="card-title"><strong>Our Faculty is the BEST!</strong></h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>                        
                    </div>
                    </div>
                    {this.facultyList()}
                    {/* <FacultyCard faculty = {this.state.faculty}/> */}
                    
                </div>
                
                <Footer/>
            </div>
        
        );
    }
}

import React, { Component } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FaEnvelope,FaMobileAlt } from 'react-icons/fa'


class Navbar extends Component {
    render() {
        return (
            <div>
            <div className="mini-header">
                <div className="container">
                    <div className="row ml-0 mr-0">
                        <div className="email-span col-sm-6">
                           <span><FaEnvelope/>  info@techtrains.com</span>
                        </div>    
                        <div className="contact-span col-sm-6">
                                <span><FaMobileAlt/> +00 (123) 456 78 90</span>
                        </div>                    
                                    
                    </div>    
                </div>    
            </div>

            <div className="main-header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light  ">
                        <div className="container-fluid">
                            <div className="logo">
                                <h1>TechTrains</h1>
                            </div>
                            <div className="collapse navbar-collapse Menu" id="navbarSupportedContent">
                                <ul className="navbar-nav Menu-items">
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/courses">Courses</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/faculty">Faculty</Link>                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/registration">Registration</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/aboutUs">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="/contactUs">Contact Us</Link>
                                    </li>
                                </ul>
                            
                        </div>
                    </div>
                  </nav>
            </div>
        </div>
            </div>
        )
    }
}

export default Navbar;
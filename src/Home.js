import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import front from './fis-background.jpg'
import './home.css';
import Footer from './components/Footer'
import { BiSupport } from 'react-icons/bi'
import { FaLaptop } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'


class Home extends Component {
    render() {
        return (
            <div className="body">
                <Navbar/>
                <div >
                   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={front} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>No.1 IT Training Hub</h5>
                                <p>Get quality skills from quality people!</p>
                                <div className="slider-btn">
                                    <Link to='/registration'>
                                        <button className="btn btn-1">Register</button>
                                    </Link>
                                </div>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={front} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Excellence in Training</h5>
                                <p>Achieve Improvements in People, Performance & Profits!</p>
                                <div className="slider-btn">
                                    <button className="btn btn-1">Register</button>
                                </div>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={front} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Let's Grow Together</h5>
                                <p>Join our programmes and help in building the best community!</p>
                                <div className="slider-btn">
                                    <button className="btn btn-1">Register</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
                <div className="fp">
                    <div className="container">
                        <hr></hr>
                    </div>                   
                    <h2>What do you get?</h2>
                </div>
                <div class="support">
                    <div class="f1">
                        <div className="support-icons">
                            <BiSupport/>
                        </div>
                        <br></br>
                        Online & Physical support
                    </div>
                    <div class="f2">
                        <div className="support-icons">
                            <FaLaptop/>
                        </div>
                        <br></br>
                        100% Guaranteed Skills
                    </div>
                    <div class="f3">
                        <div className="support-icons">
                            <MdAttachMoney/>
                        </div>
                        <br></br>
                        100% Money Back guarantee
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;
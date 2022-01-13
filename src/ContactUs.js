import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import {FaBusinessTime } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import './ContactUs.css';

export default class ContactUs extends Component {
    render() {
        return (
            <div>
               <Navbar/>
               <div className="AU-main">
                    <div className='main-text'>
                        <h5>Contact Us</h5>
                        <p></p>   
                    </div>                    
                </div>
                <div className='container'>
                    <div className="row mt-5">
                        <div className="col-md-3 fs-2" style={{color:'#0d1f38'}}><FaPhoneAlt /><br /> PHONE <br /><span className='fs-6'> +00 (123) 456 78 90</span></div>
                        <div className="col-md-3 fs-2" style={{color:'#0d1f38'}}><FaLocationArrow /><br /> ADDRESS <br /><span className='fs-6'>123 Ferozpur Road, Arfa Karim Tower, Lahore</span></div>
                        <div className="col-md-3 fs-2" style={{color:'#0d1f38'}}><FaMailBulk /><br /> EMAIL <br /><span className='fs-6'>info@techtrains.com</span></div>
                        <div className="col-md-3 fs-2" style={{color:'#0d1f38'}}><FaBusinessTime /><br /> OPEN TIME <br /><span  className='fs-6'>09:00 am to 05:00 pm</span></div>                            
                    </div>
                </div>

               <Footer/> 
            </div>
        )
    }
}

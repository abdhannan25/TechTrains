import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './register.css'  
    
class Register extends Component {    
    constructor(props) {    
        super(props);  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.state = {    
            studName: '',    
            emailId: '',    
            dob: '',    
            gender: 'select',        
            city: 'select', 
            course: 'select',   
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studName, emailId, dob, gender, city, course } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "*Name is required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "*Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "*Invalid email id.";    
        }    
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "*Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "*Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "*Select gender.";    
        }    
    
           
    
        //City    
        if (city === '' || city === "select") {    
            formIsValid = false;    
            formErrors["cityErr"] = "*Select city.";    
        }    
        
        //Course   
        if (course === '' || course === "select") {    
            formIsValid = false;    
            formErrors["courseErr"] = "*Select Course.";    
        }

        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.state)    
        }  
        console.log(this.state)
        axios.post('http://localhost:5000/student/add', this.state)  
        .then(res=> console.log(res.data));
    }    
    
    render() {    
    
        const { studNameErr, emailIdErr, dobErr, genderErr, cityErr, courseErr } = this.state.formErrors;    
    
        return ( 
            <div>
            <Navbar/>   
            <div className="container formDiv" >    
                <h3 style={{ textAlign: "center" }} ><strong>Student Registration Form</strong></ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}> 
                    <div className="row">   
                        <div className='col-md-6'>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}   
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>    
                        <div className='col-md-6'>    
                            <label htmlFor="emailId">Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}   
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
                        
                        </div>    
                        <div className='col-md-6'>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                           
                        <div className='col-md-6'>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                        <div className='col-md-6'>    
                            <label htmlFor="city">City</label>    
                            <select name="city"    
                                value={this.state.city}    
                                onChange={this.handleChange}    
                                className={cityErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Lahore">Lahore</option>    
                                <option value="Islamabad">Islamabad</option>    
                                <option value="Karachi">Karachi</option>    
                            </select>    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
                            }    
                        </div>
                        <div className='col-md-6'>    
                            <label htmlFor="course">Course</label>    
                            <select name="course"    
                                value={this.state.course}    
                                onChange={this.handleChange}    
                                className={courseErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="MERN Stack">MERN Stack</option>    
                                <option value="MEAN Stack">MEAN Stack</option>    
                                <option value="Mobile App Development">Mobile App Development</option> 
                                <option value="UI/UX Designing">UI/UX Designing</option> 
                                <option value="WordPress Website Development">WordPress Website Development</option> 
                                <option value="Graphics Designing">Graphics Designing</option> 
                                <option value="Video Editing">Video Editing</option>    
                            </select>    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{courseErr}</div>    
                            }    
                        </div> 
                           
                        <input className='mt-5' type="submit" value="Submit" /> 
                        </div>   
                    </form>    
                </div>    
            </div >
            <Footer/> 
            </div>   
        )    
    }    
}    
    
export default Register;
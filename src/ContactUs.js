import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import "./ContactUs.css";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name_: "",
      emailId: "",
      comment: "",
      formErrors: {},
      comments: [],
    };

    this.initialState = this.state;
  }

  handleFormValidation() {
    const { name_, emailId, comment } = this.state;
    let formErrors = {};
    let formIsValid = true;

    // name
    if (!name_) {
      formIsValid = false;
      formErrors["nameErr"] = "*Name is required.";
    }

    //Email
    if (!emailId) {
      formIsValid = false;
      formErrors["emailIdErr"] = "*Email id is required.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
      formIsValid = false;
      formErrors["emailIdErr"] = "*Invalid email id.";
    }

    //Comment
    if (!comment) {
      formIsValid = false;
      formErrors["commentErr"] = "*Comment is required.";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("Your comment has been added successfully.");
      this.setState(this.state);
    }
    console.log(this.state);
    axios
      .post("http://localhost:5000/comments/add", this.state)
      .then((res) => console.log(res.data));

      window.location = '/contactUs';  
    };

  componentDidMount(){
    axios.get('http://localhost:5000/comments/')
    .then(res =>{
        this.setState({comments: res.data})
        console.log(res.data)
      })
      .catch((error) => {
          console.log(error)
      })
  }
  handleDelete = (id) =>{
         console.log(id);
         axios.delete('http://localhost:5000/comments/'+id)
        .then(res => { console.log(res.data)});

     this.setState({
         comments : this.state.comments.filter(el => el._id !== id)
     })
    
    }

  render() {
    const { nameErr, emailIdErr, commentErr } = this.state.formErrors;

    return (
      <div>
        <Navbar />
        <div className="AU-main">
          <div className="main-text">
            <h5>Contact Us</h5>
            <p></p>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-md-3 fs-2" style={{ color: "#0d1f38" }}>
              <FaPhoneAlt />
              <br /> PHONE <br />
              <span className="fs-6"> +00 (123) 456 78 90</span>
            </div>
            <div className="col-md-3 fs-2" style={{ color: "#0d1f38" }}>
              <FaLocationArrow />
              <br /> ADDRESS <br />
              <span className="fs-6">
                123 Ferozpur Road, Arfa Karim Tower, Lahore
              </span>
            </div>
            <div className="col-md-3 fs-2" style={{ color: "#0d1f38" }}>
              <FaMailBulk />
              <br /> EMAIL <br />
              <span className="fs-6">info@techtrains.com</span>
            </div>
            <div className="col-md-3 fs-2" style={{ color: "#0d1f38" }}>
              <FaBusinessTime />
              <br /> OPEN TIME <br />
              <span className="fs-6">09:00 am to 05:00 pm</span>
            </div>
          </div>
        </div>

        <div className="container formDiv">
          <h3 style={{ textAlign: "center" }}>
            <strong>Leave Us a Comment!</strong>
          </h3>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="name_">Name</label>
                  <input
                    type="text"
                    name="name_"
                    value={this.state.name_}
                    onChange={this.handleChange}
                    placeholder="Your name.."
                    className={nameErr ? " showError" : ""}
                  />
                  {nameErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {nameErr}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="emailId">Email Id</label>
                  <input
                    type="text"
                    name="emailId"
                    value={this.state.emailId}
                    onChange={this.handleChange}
                    placeholder="Your email id.."
                    className={emailIdErr ? " showError" : ""}
                  />
                  {emailIdErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {emailIdErr}
                    </div>
                  )}
                </div>

                <div className="col-md-12">
                  <label htmlFor="comment">Comment</label>
                  <input
                    type="text"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleChange}
                    placeholder="Leave a comment..."
                    className={commentErr ? " showError" : ""}
                  />
                  {commentErr && (
                    <div style={{ color: "red", paddingBottom: 10 }}>
                      {commentErr}
                    </div>
                  )}
                </div>
                <input className="mt-5" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-5">
            <h3>Comments</h3>
        {this.state.comments.map((c) =>{
            return(

            <div className="container">
                <div className="form-floating">
                    <div className="row">
                        <div className="col-md-9">
                            <label className="fw-bold" for="floatingTextarea text-align-left ">{c.name_}</label>
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea">{c.comment}</textarea>
                            
                        </div>
                        <div className="col-md-3 mt-4 pt-3">
                        <button class="btn btn-danger" onClick={()=>this.handleDelete(c._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
        </div>

        <Footer />
      </div>
    );
 }}

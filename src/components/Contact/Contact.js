import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="row row_style container div">
          <div className="col-md-6 ">
            <div className="div1">
              <h1 className="h1">Contact</h1>
              <p>Looking forward to hearing from you</p>
              <h3 className="h3">Phone</h3>
              <p>123-456-7890</p>
              <h3 className="h3">Email</h3>
              <p>info@mysite.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="div2">
              <form action="" method="POST">
                <div className="row row_style">
                  <div className="form-group">
                    <label>First Name </label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                    ></input>
                  </div>
                  <div className="form-group gap">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                    ></input>
                  </div>
                </div>
                <div className="row row_style">
                  <div className="form-group">
                    <label>Email*</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      required="true"
                    ></input>
                  </div>
                  <div className="form-group gap">
                    <label>Subject</label>
                    <input
                      className="form-control"
                      type="text"
                      name="subject"
                    ></input>
                  </div>
                </div>
                <div className="row row_style">
                  <div className="form-group ">
                    <label>Message</label>
                    <input
                      className="form-control form-controls"
                      type="text"
                      name="message"
                    ></input>
                  </div>
                  <div className="btn-div">
                    <input
                      className="btn btn-warning contact-btn rounded-circle gap"
                      type="submit"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

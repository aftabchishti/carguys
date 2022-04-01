import React, { useState, useEffect } from 'react'
import {Container,Tabs,Box, Tab, AppBar, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    textFields: {
        width: '100%'
    },
    heading: {
        textAlign: 'center'
    }
})

export default function CustomerLogin() {
    const [person, setPerson] = useState({ email: '', password: '' })
    const [compareLogin, setCompareLogin] = useState([]);
    const history = useHistory();

    
    return (
        <Container>
            <section className="login-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <h3 style={{ textAlign: 'center' }}>Login</h3>
                            <div className="theme-card">
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            required="true"
                                            name='email'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="review">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="review"
                                            placeholder="Enter your password"
                                            required="true"
                                            name='password'
                                        />
                                    </div>
                                    <button style={{backgroundColor:'darkslateblue',color: 'whitesmoke',marginTop:'20px'}}>Login</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <h3 style={{ textAlign: 'center' }}>Sign Up</h3>
                            <div className="theme-card">
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label htmlFor="email">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter Your Full Name"
                                            required="true"
                                            name='name'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="review">Phone No</label>
                                        <input
                                        type="text"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Enter your Phone No"
                                            required="true"
                                            name='phone'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="review">Email</label>
                                        <input
                                        type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your email"
                                            required="true"
                                            name='email'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="review">Address</label>
                                        <input
                                        type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="Enter your permanent Address"
                                            required="true"
                                            name='address'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="review">Set Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="review"
                                            placeholder="Set Password"
                                            required="true"
                                            name='password'
                                        />
                                    </div>
                                    <button style={{backgroundColor:'darkslateblue',color: 'whitesmoke',marginTop:'20px'}}>SignUp</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}
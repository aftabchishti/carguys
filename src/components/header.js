import React, { useState, useContext } from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IconButton, Grid, Badge, Button, MenuList, MenuItem } from "@material-ui/core";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory, Link } from "react-router-dom";

// bootstrap imports
import {
    Navbar,
    Nav,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
    mainSection: {
        display: 'flex',
    },
    logo: {
        width: '180px'
    },
    root: {
        backgroundColor: 'DarkGray'
    },
    btns: {
        color: 'white',
        margin: '0px 0px 0px 10px',
        '&:hover': {
            // backgroundColor: '#2F4F4F',
            backgroundColor: 'crimson',
            opacity: '1',
            right: '0',
            color: 'whitesmoke'
        }
    },
    textfield: {
        margin: '10px 0px 0px 5px'
    },
    usernameTextfield: {
        marginTop: '10px'
    },
    Heading: {
        color: 'darkslateblue'
    }
})

function Header() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <div>
                <Navbar expand="lg" className={classes.root}>
                    <div className='container'>
                        <Navbar.Brand>
                            <Link to='/'>
                                <h1 >CarGuys</h1>
                               
                                {/* <img
                                    width='100px'
                                    height='100px'
                                    src="/images/logo/logo.png"
                                    alt=""
                                /> */}
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Grid container justify='center' alignItems='center' direction='column'>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Nav className="mr-auto">
                                        <Nav.Link style={{ color: 'whitesmoke' }}>
                                            <Button
                                                size='small'
                                                className={classes.btns}
                                                color='inherit'
                                                onClick={() => history.push('/')}
                                            >Home</Button>
                                        </Nav.Link>
                                        <Nav.Link style={{ color: 'whitesmoke' }}>
                                            <Button
                                                size='small'
                                                className={classes.btns}
                                                onClick={() => history.push('/mechanics')}
                                            >Mechanics</Button>
                                        </Nav.Link>
                                        <Nav.Link style={{ color: 'whitesmoke' }}>
                                            <Button
                                                size='small'
                                                className={classes.btns}
                                                color='inherit'
                                                onClick={() => history.push('/contact')}
                                            >Contact Us</Button>
                                        </Nav.Link>
                                    </Nav>
                                </Grid>
                            </Grid>
                        </Navbar.Collapse>
                        <IconButton
                            style={{ color: 'whitesmoke' }}
                            className={classes.btns}
                            onClick={() => history.push('/Customer-Login')}
                        >
                            <Badge color='secondary'>
                                <AccountCircleIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Navbar>
            </div>
        </>
    )
}

export default Header;
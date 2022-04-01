import React from 'react'
import {
    Grid,
    Container,
    Typography,
    Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";
import { useHistory, Link } from "react-router-dom";




function Admin() {

    return (
        <>
        <Helmet>
        <title>Noon Boats|Birthday Packages</title>
    </Helmet>
        <Container >
            <Grid container >
                <Grid item lg={12} md={12} sm={12} xs={12} >
                
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Admin;
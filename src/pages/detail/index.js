import React from 'react'
import {
    Grid,
    Container,
    Card,
    CardContent,
    Typography
} from "@material-ui/core";
import Slider from "react-slick";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useParams } from "react-router-dom";
import { getDataById, carouselImages } from "../../data";
import { Helmet } from "react-helmet";
import IconButton from "@material-ui/core/IconButton";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import MyMapComponent from "../../components/map";

const useStyles = makeStyles({
    detailSection: {
        color: 'white',
        marginTop: '50px'
    },
    image: {
        width: '100%'
    },
    detailHeading: {
        color: 'white',
    },
    carouselImage: {
        height: '400px'
    },
    icons: {
        color: 'white',
        '&:hover': {
            backgroundColor: 'crimson',
            color: 'whitesmoke'
        }
    }
})

function Detail() {
    const classes = useStyles();
    const { id } = useParams();
    const data = getDataById(id);
    const images = getDataById(id);
    

    return (
        <>
            <Helmet>
                <title>Car Guys | Mechanic</title>
                
            </Helmet>
            <Grid item xs={12} sm={12} md={12} lg={12} >
                        <img src={data.image} style={{width:'100%',height:'500px'}} alt="" />
            </Grid>
            <Container className={classes.detailSection} >
            
                <Grid container spacing={4} >
                    
                    <Grid item xs={4} sm={4} md={4} lg={2} >
                    <card class="avatar">
                    <img src={data.images} class="avatar__image" style={{height:'200px',width:'200px'}} />
                    </card>
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10} >
                        <Card style={{ backgroundColor: '#1B0A4C' }}>
                            <CardContent >
                                <Typography
                                    gutterBottom
                                    className={classes.detailHeading}
                                    variant='h4'
                                > {data.title} </Typography>
                                <Typography
                                    gutterBottom
                                    className={classes.detailHeading}
                                    variant='h5'
                                > Services </Typography>
                                {
                                data.Services.map(service=>
                                    <li>
                                    <Typography gutterBottom variant='p' className={classes.detailHeading} >{service} </Typography> <br/>
                                    </li>
                                    
                                )
                                }
                                
                                <Typography
                                    gutterBottom
                                    className={classes.detailSection}
                                    variant='h5' > For Booking: </Typography>
                                
                                    <ul>
                                    <li>
                                    <a>
                                    <IconButton
                                        target="_blank"
                                        href='https://wa.me/`{data.conatct}`'
                                        className={classes.icons}
                                    >
                                        <WhatsAppIcon />
                                        {data.conatct}
                                    </IconButton>
                                    </a>
                                    </li>
                                    
                                    <li>
                                    <a>
                                    <IconButton
                                    className={classes.icons}
                                    href="tel:`{data.conatct}`" >
                                     <CallIcon />
                                     {data.conatct}
                                    </IconButton>
                                     </a>
                                    </li>

                                </ul>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
            <MyMapComponent/>
            </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Detail
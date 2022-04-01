import React from 'react'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    heading: {
        color: 'black',
    },
    CardHeading: {
        color:'#1B0A4C',
    },
    cardMedia: {
        width: '100%',
        height: '220px',
        
    },
    card: {
        marginTop: '20px',
    },
    para: {
        marginTop: '150px'
    }
})

function YachtsCard({data}) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
                </Grid>
                    <Grid container spacing={2}>
                        {
                            data.map(ourYachtsData =>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Card className={classes.card} >
                                        <CardContent>
                                            <CardActionArea onClick={() => history.push(`/detail/${ourYachtsData.id}`)}>
                                                <CardMedia>
                                                    <img className={classes.cardMedia} src={ourYachtsData.image} alt="" />
                                                </CardMedia>
                                                <Typography
                                                    variant='h6'
                                                    className={classes.CardHeading}
                                                >{ourYachtsData.title}</Typography>
                                            </CardActionArea>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        }
                    
                </Grid>
          
        </Container>
    )
}

export default YachtsCard;

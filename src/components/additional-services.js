import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { additionalServicesData } from "../data";

const useStyles = makeStyles({
  heading: {
    marginTop: '60px',
    fontFamily: "Helvetica Neue",
  },
  card: {
    width: '100%',
    marginTop: '20px',
    backgroundColor: '#fada5e'
  },
  image: {
    width: '100%',
    height: '300px',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '1s',
    }
  }
})

function AdditionalServices() {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.heading} variant='h4'>Additional Services</Typography>
      <Grid container spacing={2}>
        {
          additionalServicesData.map(data =>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Card className={classes.card}>
                <CardContent>
                  <CardMedia>
                    <img className={classes.image} src={data.image} alt="" />
                  </CardMedia>
                  <Typography variant='h6'>{data.title}</Typography>
                  <br />

                </CardContent>
              </Card>
            </Grid>
          )
        }
      </Grid>
    </Container>
  )
}

export default AdditionalServices;
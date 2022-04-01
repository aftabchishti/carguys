import {Grid, Container, Typography } from "@material-ui/core";
import {Helmet} from "react-helmet";
import ExploreYachts from "./explore-yachts";
import HomeExplore from "./home-data";
import { ourYachtsData, homeCarouselImages } from "../../data";
import AdditionalServices from "../../components/additional-services";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SlickCarousel from "../../components/slick-carousel";

const useStyles = makeStyles({
    image: {
        width: '100%',
        marginTop: '50px',
    },
    data: {
        position: 'absolute',
        marginTop: '30%',
        color: 'whitesmoke',
        fontFamily: 'bodoni',
        margin: '0px auto 0px 70px',
        fontWeight: 'bolder'
    }
})

function Home() {
    const classes = useStyles();

    return (
        <>
        <Helmet>
        <title>Car Guys</title>
    </Helmet>
            <Grid container>
                <Grid item md={12} lg={12} sm={12} xs={12}>
                    <SlickCarousel />

                 <ExploreYachts data={ourYachtsData}/>


                    <HomeExplore />
                    
                                
                                <img className={classes.image} src="/images/new-images/homebase.jpg" alt=" " />
                            </Grid>
                        </Grid>
                    
        </>
    )
}

export default Home;

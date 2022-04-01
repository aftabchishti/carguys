import {
    Grid,
    Container,
    IconButton,
    Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import {Helmet} from "react-helmet";

const useStyles = makeStyles({
    contactSection: {
        marginTop: '50px'
    },
    image: {
        width: '100%'
    },
    icons: {
        color: 'black',
        '&:hover': {
            backgroundColor: 'crimson',
            color: 'whitesmoke'
        }
    }
})

function ContactUs() {
    const classes = useStyles();

    return (
        <>
        <Helmet>
        <title>Car Guys | Contact Us</title>

    </Helmet>
        <Container className={classes.contactSection}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img className={classes.image} src="/images/new-images/contact-us.jpg" alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant='h2'>For Further Inquiries</Typography>
                    <ul>
                    <li>
                    <a>
                    <IconButton className={classes.icons}
                    target="_blank"
                    href='https://www.facebook.com/'
                    >
                        <FacebookIcon />
                        https://www.facebook.com/
                        
                    </IconButton>
                    </a>
                    </li>
                    
                    <li>
                    <a>
                    <IconButton className={classes.icons}
                    target="_blank"
                    href='https://www.instagram.com/'
                    >
                        <InstagramIcon />
                        https://www.instagram.com/
                    </IconButton>
                    </a>
                    </li>
                    

                    <li>
                    <a>
                    <IconButton
                        target="_blank"
                        href='https://wa.me/971502704154'
                        className={classes.icons}
                    >
                        <WhatsAppIcon />
                        https://wa.me/+92030000000
                    </IconButton>
                    </a>
                    </li>
                    
                    <li>
                    <a>
                    <IconButton
                    className={classes.icons}
                    href="tel:+92300000000" >
                     <CallIcon />
                     +923000000000
                    </IconButton>
                     </a>
                    </li>
                    </ul>
                    <Typography variant='p'>To make an appointment, Please Contact us. We would love to pamper you</Typography>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default ContactUs;

import React from 'react'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#1B0A4C',
        height: '100%',
        marginTop: '40px',
        width: '100%'
    },
    heading: {
        color: 'white',
        marginTop: '40px'
    },
    icons: {
        marginTop: '30px',
        color: 'white',
        '&:hover': {
            backgroundColor: 'crimson'
        }
    }
})

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Container>
                <Grid container alignItems='center' justify='center' direction='column'>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Typography
                            variant='h5'
                            className={classes.heading}
                        >Car Guys -- All rights Reserved</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                    <IconButton className={classes.icons}
                    target="_blank"
                    href='https://www.facebook.com/noonyachts/'
                    >
                        <FacebookIcon />
                    </IconButton>
                    
                    <IconButton className={classes.icons}
                    target="_blank"
                    href='https://www.instagram.com/noonyachts?r=nametag'
                    >
                        <InstagramIcon />
                    </IconButton>
                    
                    <IconButton
                        target="_blank"
                        href='https://wa.me/971502704154'
                        className={classes.icons}
                    >
                        <WhatsAppIcon />
                    </IconButton>

                    <IconButton
                    className={classes.icons}
                    href="tel:+971502704154" >
                                <CallIcon />
                    </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer;
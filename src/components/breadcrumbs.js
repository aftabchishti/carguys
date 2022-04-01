import { Breadcrumbs, Container, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        margin: '40px 20px 20px 20px'
    }
})

function BreadCrumbs() {
    const classes = useStyles();
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(item => item)

    return (
        <Container className={classes.root}>
            <Breadcrumbs>
                <Typography variant='textPrimary'>Home - {pathnames}</Typography>
            </Breadcrumbs>
        </Container>
    )
}

export default BreadCrumbs;

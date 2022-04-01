import { useContext } from "react";
import { Grid } from "@material-ui/core";
import YachtsCard from "./yachts-card";
// import { ourYachtsData } from "../../data";
import {Helmet} from "react-helmet";
import MyMapComponent from "../../components/map";
import {useEffect , useState} from 'react'


function Mechanics() {
    const [ourYachtsData, SetourYachtsData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/ourYachtsData")
        .then((response) => response.json())
        .then((data) => SetourYachtsData(data));
    }, []);

    return (
        <>
        <Helmet>
        <title>Car Guys| Mechanics</title>
    </Helmet>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <YachtsCard
                    data={ourYachtsData}
                />
            
            </Grid>
        </Grid>
        </>
    )
}

export default Mechanics;

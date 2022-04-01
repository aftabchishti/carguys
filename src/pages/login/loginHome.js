import React, { useState, useEffect } from 'react'
import {Container,Tabs,Box, Tab, AppBar, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from "@material-ui/core/styles";

import CustomerLogin from "./customerLogin";
import MechanicLogin from "./mechanicLogin";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <h4>{children}</h4>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  export default function LoginHome() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
        <Container>
        <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Customer Login/SignUp" {...a11yProps(0)} />
          <Tab label="Mechanic Login/SignUp" {...a11yProps(1)} />
          <Tab label="Admin Login/SignUp" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
         <CustomerLogin/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
         <MechanicLogin/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Admin Login
        </TabPanel>
      </SwipeableViews>
    
        
        </Container>
       
    );
  }
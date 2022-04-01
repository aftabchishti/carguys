import React from 'react';
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import { Switch, Route } from "react-router-dom";
import Mechanics from "./pages/Mechanics";
import Admin from "./pages/admin";
import LoginHome from "./pages/login/loginHome";
import Detail from "./pages/detail";
import FilterProvider from "./utils/filter-provider";
import ContactUs from "./pages/contact-us";
import BreadCrumbs from "./components/breadcrumbs";

import "./App.css"

function App() {

    return (
        <FilterProvider >
            <div style={{ overflow: 'hidden' }}>
                <Header />
                <BreadCrumbs />
                <Switch >
                    <Route exact path='/' component={Home} />
                    <Route exact path='/mechanics' component={Mechanics} />
                    <Route exact path='/Customer-Login' component={LoginHome} />
                    <Route exact path='/admin' component={Admin} />
                    <Route exact path='/detail/:id' component={Detail} />
                    <Route exact path='/contact' component={ContactUs} />
                </Switch>
                <Footer />
            </div>
        </FilterProvider>
    )
}

export default App;
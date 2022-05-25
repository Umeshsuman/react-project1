import React from "react";
import Navbar from "./components/navbar";
import './app.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

  export default function App(){
    return (
    <div>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/services"component={Services}/>
                <Route path="/products"component={Products}/>
                <Route path="/sign-up"component={Signup}/>
            </Switch>
        </Router>
    </div>
    );
}
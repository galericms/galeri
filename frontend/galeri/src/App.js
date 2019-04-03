import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "./App.scss";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";

function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Galeri"
        };
    }

    render() {
        return (
            <Router>
                <Header title={this.state.title} />
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/signup' component={SignUp} />
                <Route path='/login' component={Login} />
                <Footer />
            </Router>
        );
    }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "antd/dist/antd.css";
import "./App.scss";
import Home from "./components/Home.js";
import HeaderComp from "./components/HeaderComp.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";

import { Layout } from "antd";
const { Content, Footer } = Layout;

const About = () => (
    <div>
        <h1>About</h1>
    </div>
);

const FooterComp = () => (
    <Footer>
        <div style={{ textAlign: "center" }}>Footer, etc</div>
    </Footer>
);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Galeri",
            sampleData: [
                {
                    id: 1,
                    title: "Project 1",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    author: "Tom Smith"
                },
                {
                    id: 2,
                    title: "Project 2",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    author: "Barb Johnson"
                },
                {
                    id: 3,
                    title: "Project 3",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    author: "Barb Johnson"
                },
                {
                    id: 4,
                    title: "Project 4",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    author: "Barb Johnson"
                },
                {
                    id: 5,
                    title: "Project 5",
                    summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    author: "Barb Johnson"
                }
            ]
        };
    }

    doSearch = query => {
        window.alert("You searched: " + query);
    };

    render() {
        return (
            <Router>
                <Layout>
                    <HeaderComp
                        title={this.state.title}
                        searchFunc={q => this.doSearch(q)}
                    />
                    <Content style={{ padding: "0px 50px" }}>
                        <div
                            style={{
                                background: "#fff",
                                padding: 24,
                                minHeight: 300
                            }}
                        >
                            <Route
                                path='/'
                                exact
                                // component={Home}
                                render={props => (
                                    <Home cardData={this.state.sampleData} />
                                )}
                            />
                            <Route path='/about' component={About} />
                            <Route path='/signup' component={SignUp} />
                            <Route path='/login' component={Login} />
                        </div>
                    </Content>
                    <FooterComp />
                </Layout>
            </Router>
        );
    }
}

export default App;

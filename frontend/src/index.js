import ReactDOM from "react-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.scss";
import Home from "./components/home";
import About from "./components/static/About";
import Contact from "./components/static/Contact";
import Header from "./components/common/HeaderBar";
import Footer from "./components/common/FooterBar";
import SignUp from "./components/user/SignUp";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";

import { Layout } from "antd";
const { Content } = Layout;

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
                    <Header
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
                                render={props => (
                                    <Home projects={this.state.sampleData} />
                                )}
                            />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/signup' component={SignUp} />
                            <Route path='/login' component={Login} />
                            <Route path='/profile/:id' component={Profile} />
                        </div>
                    </Content>
                    <Footer />
                </Layout>
            </Router>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));

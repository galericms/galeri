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
import ProjectView from "./components/project/View";
import ProjectModify from "./components/project/Modify";

import { getSampleProjects } from "./ProjectService";

import { Layout } from "antd";
const { Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Galeri",
            projects: []
        };
    }

    componentDidMount() {
        getSampleProjects().then(
            response => {
                this.setState({ projects: response });
            },
            err => console.error(err.message)
        );
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
                            {/* Home */}
                            <Route
                                path='/'
                                exact
                                render={props => (
                                    <Home projects={this.state.projects} />
                                )}
                            />
                            {/* Misc */}
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                            {/* User */}
                            <Route path='/signup' component={SignUp} />
                            <Route path='/login' component={Login} />
                            <Route path='/profile/:id' component={Profile} />
                            {/* Project */}
                            <Route
                                path='/project-edit/:id?'
                                component={ProjectModify}
                            />
                            <Route
                                exact
                                path='/projects/:id'
                                component={ProjectView}
                            />
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

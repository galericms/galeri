import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "normalize.css";
import "antd/dist/antd.css";
import "./App.scss";
import Home from "./components/Home.js";
// import Header from "./components/Header.js";
// import Footer from "./components/Footer.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";

import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

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
                <Layout>
                    <Header>
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            // defaultSelectedKeys={["2"]}
                            selectable={false}
                            style={{ lineHeight: "64px" }}
                        >
                            <Menu.Item key='0'>
                                <Link to='/'>
                                    <img
                                        height='64'
                                        width='64'
                                        src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png'
                                    />
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='1'>
                                <Link to='/about'>About</Link>
                            </Menu.Item>
                            <Menu.Item key='2'>
                                <Link to='/signup'>Signup</Link>
                            </Menu.Item>
                            <Menu.Item key='3'>
                                <Link to='/login'>Login</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: "0px 50px" }}>
                        <div
                            style={{
                                background: "#fff",
                                padding: 24,
                                minHeight: 400
                            }}
                        >
                            <Route path='/' exact component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/signup' component={SignUp} />
                            <Route path='/login' component={Login} />
                        </div>
                    </Content>
                    <Footer>Test foo bar etc</Footer>
                </Layout>
                {/* <Header title={this.state.title} />
                <div className='container'>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' component={Login} />
                    <Footer />
                </div> */}
            </Router>
        );
    }
}

export default App;

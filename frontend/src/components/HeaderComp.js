import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input } from "antd";
const { Header } = Layout;

const HeaderComp = props => (
    <Header>
        <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={["signup"]}
            selectable={false}
            style={{ lineHeight: "64px" }}
        >
            <Menu.Item key='home'>
                <Link to='/'>
                    <img
                        height='64'
                        width='64'
                        alt='logo'
                        src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png'
                    />
                </Link>
            </Menu.Item>
            <Menu.Item key='about'>
                <Link to='/about'>About</Link>
            </Menu.Item>

            <Menu.Item key='search'>
                <Input.Search
                    placeholder='Search for projects'
                    onSearch={query => props.searchFunc(query)}
                />
            </Menu.Item>

            <Menu.Item key='login' style={{ float: "right" }}>
                <Link to='/login'>Login</Link>
            </Menu.Item>
            <Menu.Item key='signup' style={{ float: "right" }}>
                <Link to='/signup'>SignUp</Link>
            </Menu.Item>
        </Menu>
    </Header>
);

export default HeaderComp;

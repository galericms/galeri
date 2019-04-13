import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input } from "antd";
const { Header: AntHdr } = Layout;

const Header = props => (
    <AntHdr>
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
                        height='48'
                        width='48'
                        alt='logo'
                        src={require("../../assets/GaleriLogo.png")}
                        style={{ backgroundColor: "#ffffff", borderRadius: "10px", margin: "5px" }}
                    />
                    <span style={{ fontWeight: "bold", fontSize: "1.25em" }}>
                        {props.title}
                    </span>
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
    </AntHdr>
);

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input } from "antd";
const { Header: AntHeader } = Layout;

const Header = props => {
    // eslint-disable-next-line
    const [userName, setUserName] = useState("Profile");
    // eslint-disable-next-line
    const [userID, setUserID] = useState(-1);

    // TODO: check cookie for who's logged in, replace "Profile" with the
    //   username, userID with the ID, and hide the SignUp/Login buttons
    // Also, hide the Profile link when not logged in.

    const profileURL = `/profile/${userID}`;

    return (
        <AntHeader>
            <Menu
                theme='dark'
                mode='horizontal'
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
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "10px",
                                margin: "5px"
                            }}
                        />
                        <span
                            style={{ fontWeight: "bold", fontSize: "1.25em" }}
                        >
                            {props.title}
                        </span>
                    </Link>
                </Menu.Item>

                <Menu.Item key='search'>
                    <Input.Search
                        placeholder='Search for projects'
                        onSearch={query => props.searchFunc(query)}
                    />
                </Menu.Item>

                <Menu.Item key='profile' style={{ float: "right" }}>
                    <Link to={profileURL}>{userName}</Link>
                </Menu.Item>

                <Menu.Item key='login' style={{ float: "right" }}>
                    <Link to='/login'>Login</Link>
                </Menu.Item>

                <Menu.Item key='signup' style={{ float: "right" }}>
                    <Link to='/signup'>SignUp</Link>
                </Menu.Item>

                <Menu.Item key='create-project' style={{ float: "right" }}>
                    <Link to='/projects/create'>Create a new Project</Link>
                </Menu.Item>

            </Menu>
        </AntHeader>
    );
};
export default Header;

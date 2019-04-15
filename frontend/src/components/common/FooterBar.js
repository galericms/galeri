import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
const { Footer: AntFooter } = Layout;

const Footer = () => (
    <AntFooter>
        <div style={{ textAlign: "center" }}>
            <Link to='/about'>About</Link>&nbsp;
            <Link to='/contact'>Contact</Link>&nbsp;
            <br/>
            Footer, etc
        </div>
    </AntFooter>
);
export default Footer;

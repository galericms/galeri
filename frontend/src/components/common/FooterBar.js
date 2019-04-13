import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
const { Footer: AntFtr } = Layout;

const Footer = () => (
    <AntFtr>
        <div style={{ textAlign: "center" }}>
            <Link to='/about'>About</Link>&nbsp;
            <Link to='/contact'>Contact</Link>&nbsp;
            <br/>
            Footer, etc
        </div>
    </AntFtr>
);
export default Footer;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.scss";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qry: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.qry);
        window.alert(`You searched: ${this.state.qry}`);
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <nav>
                <ul>
                    <li style={{ borderRight: "1px solid white" }}>
                        <Link to='/'>{this.props.title}</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type='text'
                                name='qry'
                                placeholder='Search Projects'
                                onChange={this.handleChange}
                            />
                            <button type='submit'>Submit</button>
                        </form>
                    </li>
                    <li className='headerRight'>
                        <Link to='/login' className='secondaryBtn'>
                            Login
                        </Link>
                    </li>
                    <li className='headerRight'>
                        <Link to='/signup' className='primaryBtn'>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }

    static propTypes = {
        title: PropTypes.string
    };
}

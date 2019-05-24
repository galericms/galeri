import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = props => {
    const [userName, setUserName] = useState("Profile");
    const [userID, setUserID] = useState(-1);

    // TODO: check cookie for who's logged in, replace "Profile" with the
    //   username, userID with the ID, and hide the SignUp/Login buttons
    // Also, hide the Profile link when not logged in.

    const profileURL = `/profile/${userID}`;

    return (
        <Navbar
            collapseOnSelect
            expand="sm"
            bg="primary"
            variant="dark"
            sticky="top"
        >
            <LinkContainer to="/">
                <Navbar.Brand>{props.title}</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" activeKey={props.location.pathname}>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search Tags"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <LinkContainer to="/project-create">
                        <Nav.Link>Create a new Project</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default withRouter(Header);

import React, { useState } from "react";

import {
    Form,
    FormControl,
    FormLabel,
    FormGroup,
    Button
} from "react-bootstrap";

const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        password2: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (window.confirm("Are you sure?")) {
            if (user.password === user.password2) {
                const { password2, ...ret } = user;
                console.log(ret);
            } else {
                window.alert("Passwords don't match");
            }
        }
    };

    const handleChange = e => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    };

    return (
        <div style={{ maxWidth: "550px", margin: "auto" }}>
            <h1 className="text-center">Register Below</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Name:</FormLabel>
                    <FormControl
                        type="text"
                        name="name"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Username:</FormLabel>
                    <FormControl
                        type="text"
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Email: </FormLabel>
                    <FormControl
                        type="text"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Password:</FormLabel>
                    <FormControl
                        type="password"
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Confirm Password:</FormLabel>
                    <FormControl
                        type="password"
                        name="password2"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <div className="text-center">
                    <Button type="submit" variant="primary">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

const SignUpForm = SignUp;
export default SignUpForm;

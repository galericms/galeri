import React from "react";

import { Form, Input, Icon, Button } from "antd";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first: "",
            last: "",
            email: "",
            user: "",
            password: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                //do signup
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{ margin: "auto", maxWidth: "400px" }}>
                <h1>Sign up below:</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label='First Name'>
                        {getFieldDecorator("first", {
                            rules: [{ required: true, message: "First name!" }]
                        })(
                            <Input
                                prefix={<Icon type='user' />}
                                placeholder='First'
                            />
                        )}
                    </Form.Item>

                    <Form.Item label='Last Name'>
                        {getFieldDecorator("last", {
                            rules: [{ required: true, message: "Last name!" }]
                        })(
                            <Input
                                prefix={<Icon type='user' />}
                                placeholder='First'
                            />
                        )}
                    </Form.Item>

                    <Form.Item label='User Name'>
                        {getFieldDecorator("user", {
                            rules: [{ required: true, message: "UserName!" }]
                        })(
                            <Input
                                prefix={<Icon type='user' />}
                                placeholder='Username'
                            />
                        )}
                    </Form.Item>

                    <Form.Item label='Email'>
                        {getFieldDecorator("email", {
                            rules: [{ required: true, message: "Email!" }]
                        })(
                            <Input
                                prefix={<Icon type='mail' />}
                                placeholder='email'
                            />
                        )}
                    </Form.Item>

                    <Form.Item label='Password'>
                        {getFieldDecorator("password", {
                            rules: [{ required: true, message: "password!!!" }]
                        })(
                            <Input.Password
                                visibilityToggle={true}
                                prefix={<Icon type='safety' />}
                                placeholder='Password'
                            />
                        )}
                    </Form.Item>

                    <Button
                        type='primary'
                        htmlType='submit'
                        style={{
                            display: "block",
                            margin: "auto",
                            marginTop: "24px"
                        }}
                    >
                        Sign Up
                    </Button>
                </Form>
            </div>
        );
    }
}

const SignUpForm = Form.create()(SignUp);
export default SignUpForm;

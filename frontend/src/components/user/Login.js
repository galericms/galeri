import React from "react";

import { Form, Input, Icon, Button } from "antd";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                //do login
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{ margin: "auto", maxWidth: "400px" }}>
                <h1>Login below:</h1>
                <Form onSubmit={this.handleSubmit}>
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

const LoginForm = Form.create()(Login);
export default LoginForm;

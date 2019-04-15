import React from "react";

const SignUp = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [passwd, setPasswd] = useState("");

    // validate the password... See https://github.com/mmw/react-password-strength
    // Hashing the password should happen backend, to prevent pass the hash attack


    return (
        // onChange={e => setFirstName(e.target.value)}

        <div>
            <h1>Sign up below:</h1>
        </div>
    );
};

export default SignUp;

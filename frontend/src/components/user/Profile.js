import React, { useState, useEffect } from "react";

import { getUser } from "../../APIService";

const Profile = ({ match }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        getUser(match.params.id).then(
            response => {
                setCurrentUser(response);
            },
            err => console.error(err.message)
        );
    });

    return (
        <div>
            <h1>Profile: {match.params.id} </h1>
            <div>
                <p>
                    {currentUser.name}
                </p>
                <p>{currentUser.email}</p>
                <p>{currentUser.username}</p>
            </div>
        </div>
    );
};

export default Profile;

import React from "react";

const Profile = ({match}) => {
    return (
        <div>
            <h1>Profile: {match.params.id} </h1>
        </div>
    );
};

export default Profile;

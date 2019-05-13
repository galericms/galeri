import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { markdown } from "markdown";
import { getSampleProject } from "../../ProjectService";
import { Button } from "antd";

// TODO: If one of the collaborators is logged in user,
//   add "Edit" button
const ProjectView = props => {
    const [currentProject, setCurrentProject] = useState({});
    const [errMsg, setErrMsg] = useState();
    const [loggedInUser, setLoggedInUser] = useState("bobby123");

    useEffect(() => {
        getSampleProject(props.match.params.id).then(
            response => {
                setCurrentProject(response);
            },
            err => {
                console.error(err.message);
                setErrMsg(err.message);
            }
        );
    });

    return (
        <div>
            <div style={{ color: "red" }}>{errMsg}</div>

            <div style={{ float: "left", textDecoration: "underline" }}>
                <h1>{currentProject.title}</h1>
            </div>
            <div style={{ float: "right" }}>
                <p>{currentProject.creator}</p>
                {currentProject.creator === loggedInUser ? (
                    <Button
                        onClick={() =>
                            props.history.push(
                                `/project-edit/${currentProject.id}`
                            )
                        }
                    >
                        Edit
                    </Button>
                ) : null}
            </div>

            <div style={{ clear: "both" }} />

            <h4>{currentProject.summary}</h4>
            <hr />
            {currentProject.content ? (
                <div
                    dangerouslySetInnerHTML={{
                        __html: markdown.toHTML(currentProject.content)
                    }}
                />
            ) : (
                <div />
            )}
        </div>
    );
};

export default withRouter(ProjectView);

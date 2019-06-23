import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { markdown } from "markdown";

import { getProject } from "../../APIService";

import { Button } from "react-bootstrap";

// TODO: If one of the collaborators is logged in user,
//   add "Edit" button
const ProjectView = props => {
    const [currentProject, setCurrentProject] = useState(null);
    const [errMsg, setErrMsg] = useState();
    // eslint-disable-next-line
    const [loggedInUser, setLoggedInUser] = useState("ssebs");

    useEffect(() => {
        getProject(props.match.params.id).then(
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
        <>
            {currentProject ? (
                <>
                    <div className="clearfix mb-3" />

                    <div style={{ color: "red" }}>{errMsg}</div>

                    <div style={{ float: "right" }}>
                        {currentProject.creator.username === loggedInUser ? (
                            <Button
                                onClick={() =>
                                    props.history.push(
                                        `/projects/${currentProject.id}/edit`
                                    )
                                }
                            >
                                {currentProject.creator.username} - Edit
                            </Button>
                        ) : (
                            <Button disabled>
                                {currentProject.creator.username}
                            </Button>
                        )}
                    </div>
                    <div
                        className="text-center"
                        style={{ textDecoration: "underline" }}
                    >
                        <h1>{currentProject.title}</h1>
                    </div>
                    <div className="clearfix" />

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
                </>
            ) : (
                <div />
            )}
        </>
    );
};

export default withRouter(ProjectView);

import React, { useState, useEffect } from "react";
import { markdown } from "markdown";
import { getSampleProject } from "../../ProjectService";

const ProjectView = ({ match }) => {
    const [currentProject, setCurrentProject] = useState({});
    const [errMsg, setErrMsg] = useState();

    useEffect(() => {
        getSampleProject(match.params.id).then(
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
                <p>{currentProject.author}</p>
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

export default ProjectView;

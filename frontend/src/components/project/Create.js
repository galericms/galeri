import React, { useState } from "react";

import {
    Form,
    FormControl,
    FormGroup,
    Button,
    FormLabel
} from "react-bootstrap";

import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.min.css";
import "tui-editor/dist/tui-editor-contents.min.css";
import { Editor } from "@toast-ui/react-editor";

const CreateProject = () => {
    const [formContent, setFormContent] = useState({
        title: "",
        summary: "",
        tags: [],
        collaborators: [],
        content: ""
    });

    // TODO: Use react-select for autofill / dropdown

    const uploadImage = (blob, callback) => {
        // Imgur client ID: 41f5c8b3bfcd69e

        // console.log(blob);
        fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                Authorization: "Client-ID 41f5c8b3bfcd69e"
            },
            body: blob
        })
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                // console.log(response.data.link);
                callback(response.data.link);
            });
    };

    const editorRef = React.createRef();

    // TODO: Use Project Service, and send an obj
    const handleSubmit = e => {
        e.preventDefault();
        // MD editor content
        const MDContent = editorRef.current.getInstance().getValue();
        setFormContent({ ...formContent, content: MDContent });
        console.log(formContent);
        // console.log(content);
    };

    const handleChange = e => {
        // TODO: Fix this so input works again
        const MDContent = editorRef.current.getInstance().getValue();
        const value = e.target.value;
        setFormContent({
            ...formContent,
            [e.target.name]: value,
            content: MDContent
        });
    };

    return (
        <div>
            <h1 className="text-center">Create a project</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup controlId="title">
                    <FormLabel>Project Title</FormLabel>
                    <FormControl
                        type="text"
                        name="title"
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="summary">
                    <FormLabel>Project Summary</FormLabel>
                    <FormControl
                        type="text"
                        name="summary"
                        onChange={handleChange}
                    />
                </FormGroup>

                <hr />
                <Editor
                    usageStatistics={false}
                    initialValue="> I'm a sample project!"
                    previewStyle="vertical"
                    height="auto"
                    minHeight="400px"
                    initialEditType="wysiwyg"
                    ref={editorRef}
                    useCommandShortcut={true}
                    exts={[
                        {
                            name: "chart",
                            minWidth: 100,
                            maxWidth: 600,
                            minHeight: 100,
                            maxHeight: 300
                        },
                        "scrollSync",
                        "colorSyntax",
                        "uml",
                        "mark",
                        "table"
                    ]}
                    hooks={{
                        addImageBlobHook: (blob, callback) => {
                            uploadImage(blob, url => {
                                callback(url, "alt text");
                                return false;
                            });
                        }
                    }}
                />
                <br />
                <div className="text-center">
                    <Button type="submit" variant="primary">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

// const ProjectCreate = Form.create()(CreateProject);
const ProjectCreate = CreateProject;

export default ProjectCreate;

import React, { useState, useEffect } from "react";
import { Form, Input, Button, Mention } from "antd";

import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.min.css";
import "tui-editor/dist/tui-editor-contents.min.css";
import { Editor } from "@toast-ui/react-editor";

import { getSampleProject } from "../../ProjectService";

const ModifyProject = props => {
    const [project, setProject] = useState({
        id: null,
        title: "loading...",
        summary: "loading...",
        content: "loading...",
        tags: "software",
        collaborators: ""
    });
    const allTags = ["software", "hardware", "math", "science", "laser"];
    const allCollaborators = [
        "bsmith@example.com",
        "tom@example.com",
        "johhny@rockets.net"
    ];
    const editorRef = React.createRef();
    const { getFieldDecorator, setFieldsValue } = props.form;
    const { toContentState } = Mention;

    useEffect(() => {
        let isSubscribed = true;
        getSampleProject(props.match.params.id).then(
            response => {
                if (isSubscribed) {
                    // console.log(response)
                    setProject(response);
                    setFieldsValue({
                        title: response.title,
                        summary: response.summary
                    });
                }
            },
            err => console.error(err.message)
        );
        if (editorRef.current) {
            console.log(project.content)
            editorRef.current.getInstance().setValue(project.content);
        }
        return () => (isSubscribed = false);
    }, [project.content]);

    const handleAddTag = contentState => {
        setProject({ tags: Mention.toString(contentState) });
    };

    const handleAddCollaborator = contentState => {
        setProject({ collaborators: Mention.toString(contentState) });
    };

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

    const handleSubmit = e => {
        e.preventDefault();

        // MD editor content
        const content = editorRef.current.getInstance().getValue();
        console.log(content);

        // Other form inputs
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                //do create projct
            }
        });
    };

    return (
        <div>
            <h1>Modify project, {project.title} </h1>
            <Form onSubmit={handleSubmit} layout='inline'>
                <Form.Item label='Project Title'>
                    {getFieldDecorator("title", {
                        rules: [{ required: true, message: "Enter a title!" }]
                    })(<Input placeholder='Title' />)}
                </Form.Item>

                <Form.Item label='Summary'>
                    {getFieldDecorator("summary", {
                        rules: [
                            {
                                required: true,
                                message: "Enter a project sumary!"
                            }
                        ]
                    })(
                        <Input.TextArea
                            placeholder='Enter a one or two sentence summary for your project'
                            style={{ width: "100%", minWidth: "256px" }}
                        />
                    )}
                </Form.Item>

                <Form.Item label='Tags'>
                    {
                        (getFieldDecorator("tags", {
                            defaultValue: toContentState(project.tags)
                        }),
                        (
                            <Mention
                                placeholder='@tag'
                                // defaultValue={toContentState(project.tags)}
                                suggestions={allTags}
                                onChange={handleAddTag}
                                style={{ width: "100%", minWidth: "128px" }}
                            />
                        ))
                    }
                </Form.Item>
                <Form.Item label='Collaborators'>
                    <Mention
                        placeholder='@collaborator'
                        suggestions={allCollaborators}
                        onChange={handleAddCollaborator}
                        style={{ width: "100%", minWidth: "512px" }}
                    />
                </Form.Item>

                <br />
                <hr />
                <br />
                <Editor
                    usageStatistics={false}
                    initialValue={project.content}
                    previewStyle='vertical'
                    height='auto'
                    minHeight='400px'
                    initialEditType='wysiwyg'
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
                <Button type='primary' htmlType='submit'>
                    Create
                </Button>
            </Form>
        </div>
    );
};

const ProjectModify = Form.create()(ModifyProject);

export default ProjectModify;

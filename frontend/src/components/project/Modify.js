import React, { useState } from "react";
import { Form, Input, Button, Mention } from "antd";
import { getSampleProject } from "../../ProjectService";

import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.min.css";
import "tui-editor/dist/tui-editor-contents.min.css";
import { Editor } from "@toast-ui/react-editor";

const CreateProject = props => {
    const allTags = ["software", "hardware", "math", "science", "laser"];
    const allCollaborators = [
        "bsmith@example.com",
        "tom@example.com",
        "johhny@rockets.net"
    ];

    const [projectTags, setProjectTags] = useState("");
    const [collaborators, setCollaborators] = useState("");

    const editorRef = React.createRef();
    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();

        // MD editor content
        const content = editorRef.current.getInstance().getValue();
        console.log(content);

        // Tags
        console.log(projectTags);

        // Collaborators
        console.log(collaborators);

        // Other form inputs
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                //do create projct
            }
        });
    };

    const handleAddTag = contentState => {
        setProjectTags(Mention.toString(contentState));
    };

    const handleAddCollaborator = contentState => {
        setCollaborators(Mention.toString(contentState));
    };

    return (
        <div>
            <h1>Create a project</h1>
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
                    <Mention
                        placeholder='@tag'
                        suggestions={allTags}
                        onChange={handleAddTag}
                        style={{ width: "100%", minWidth: "128px" }}
                    />
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
                    initialValue="> I'm a sample project!"
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
                />
                <br />
                <Button type='primary' htmlType='submit'>
                    Create
                </Button>
            </Form>
        </div>
    );
};

const ModifyProject = props => {};
const ProjectModify = Form.create()(CreateProject);

export default ProjectModify;

import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { getSampleProject } from "../../ProjectService";

import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.min.css";
import "tui-editor/dist/tui-editor-contents.min.css";
import { Editor } from "@toast-ui/react-editor";

const ProjectModify = ({ match }) => {
    const [currentProject, setCurrentProject] = useState({});

    const editorRef = React.createRef();

    useEffect(() => {
        getSampleProject(match.params.id).then(
            response => {
                setCurrentProject(response);
            },
            err => console.error(err.message)
        );
    }, []);

    const uploadImage = blob => {
        const apiKey = "aa96c09a0250bdd61aee2b59ba7d5278";
        const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
        console.log(blob);
        fetch(url, { method: "post", body: blob })
            .then(res => res.json())
            .then(res => console.log(res));
    };

    const submitNew = () => {
        const content = editorRef.current.getInstance().getValue();
        console.log(content)
        console.log(currentProject);
    };

    const ifNew = (
        <div>
            <h1>Create a project</h1>
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
                // hooks={
                //     (addImageBlobHook = (blob, callback) => {
                //         const uploadedImageURL = uploadImage(blob);
                //         callback(uploadedImageURL, "alt text");
                //         return false;
                //     })
                // }
            />
            <br />
            <Button type='primary' onClick={() => submitNew()}>
                Create
            </Button>
        </div>
    );
    const ifModify = <h1>Modify project</h1>;

    return <div>{match.params.id ? ifModify : ifNew}</div>;
};

export default ProjectModify;

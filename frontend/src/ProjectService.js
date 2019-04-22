// ProjectService.js
// service functions, to do REST calls

// sample data
const sampleProjects = [
    {
        id: 1,
        title: "My Project1",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Tom Smith"
    },
    {
        id: 2,
        title: "My Project2",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Barb Johnson"
    },
    {
        id: 3,
        title: "My Project3",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Barb Johnson"
    },
    {
        id: 4,
        title: "My Project4",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Barb Johnson"
    },
    {
        id: 5,
        title: "My Project5",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Barb Johnson"
    }
];

const sampleProject = {
    id: 1,
    title: "My Project",
    summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "BarbJohnson@example.com",
    content: "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*"
};

// functions
export const getSampleProjects = () => {
    return new Promise((resolve, reject) => {
        sampleProjects
            ? resolve(sampleProjects)
            : reject(new Error("Could not load projects"));
    });
};

export const getSampleProject = id => {
    return new Promise((resolve, reject) => {
        if (sampleProject) {
            if (+id === sampleProject.id) {
                resolve(sampleProject);
            } else {
                reject(new Error("No project matching that ID"));
            }
        } else {
            reject(new Error("Could not load projects"));
        }
    });
};

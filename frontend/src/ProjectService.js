// ProjectService.js
// service functions, to do REST calls

// sample data
const sampleProjects = [
    {
        id: 1,
        title: "My Project1",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "Tom Smith",
        content: "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*"
    },
    {
        id: 2,
        title: "My Project2",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "Barb Johnson",
        content: "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*"
    },
    {
        id: 3,
        title: "My Project3",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "Barb Johnson",
        content: "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*"
    },
    {
        id: 4,
        title: "My Project4",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "Barb Johnson",
        content: "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*"
    },
    {
        id: 5,
        title: "My Project5",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "Barb Johnson",
        content: "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*"
    }
];


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
        if (sampleProjects) {
            sampleProjects.forEach(project => {
                if (+id === project.id) {
                    resolve(project);
                } 
            });
        } else {
            reject(new Error("Could not load projects"));
        }
    });
};

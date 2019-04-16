// ProjectService.js
// service functions, to do REST calls

// sample data
const sampleData = [
    {
        id: 1,
        title: "Project 1",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Tom Smith"
    },
    {
        id: 2,
        title: "Project 2",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Barb Johnson"
    },
    {
        id: 3,
        title: "Project 3",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Barb Johnson"
    },
    {
        id: 4,
        title: "Project 4",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Barb Johnson"
    },
    {
        id: 5,
        title: "Project 5",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Barb Johnson"
    }
];

// functions
export const getSampleProjects = () => {
    return new Promise((resolve, reject) => {
        sampleData
            ? resolve(sampleData)
            : reject(new Error("Could not load project"));
    });
};

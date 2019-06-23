/* 
* APIService.js
*   service functions, to do REST calls
Structure:
- SampleData
- User
- Project
- Tags
*/

const sampleUsers = [
    {
        id: 1,
        username: "ssebs",
        email: "ssebs@ssebs.com",
        name: "Sebastian Safari"
    },
    {
        id: 2,
        username: "aang",
        email: "aaron@ssebs.com",
        name: "Aaron Ang"
    },
    {
        id: 3,
        username: "tuser",
        email: "tuser@ssebs.com",
        name: "Test User"
    }
];

const sampleProjects = [
    {
        id: 1,
        title: "First Project",
        summary: "foo bar blah blah",
        creator: {
            id: 1,
            username: "ssebs",
            email: "ssebs@ssebs.com",
            name: "Sebastian Safari"
        },
        collaborators: [
            {
                id: 2,
                username: "aang",
                email: "aaron@ssebs.com",
                name: "Aaron Ang"
            },
            {
                id: 3,
                username: "tuser",
                email: "tuser@ssebs.com",
                name: "Test User"
            }
        ],
        content:
            "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*\n\nEst adipisicing commodo id sit esse in ea consequat consequat qui consectetur amet qui.\n\nPariatur cillum et fugiat do sit exercitation incididunt adipisicing amet ex Lorem qui consectetur amet."
    },
    {
        id: 2,
        title: "Second project",
        summary: "blah blah bar foo sfsdfsdf sfdssfds",
        creator: {
            id: 2,
            username: "aang",
            email: "aaron@ssebs.com",
            name: "Aaron Ang"
        },
        collaborators: [],
        content:
            "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*\n\nEst adipisicing commodo id sit esse in ea consequat consequat qui consectetur amet qui.\n\nPariatur cillum et fugiat do sit exercitation incididunt adipisicing amet ex Lorem qui consectetur amet."
    },
    {
        id: 3,
        title: "Third project",
        summary: "bldfsf fdsf sfsdfsd dssfsf  bar foo sfsdfsdf sfdssfds",
        creator: {
            id: 2,
            username: "aang",
            email: "aaron@ssebs.com",
            name: "Aaron Ang"
        },
        collaborators: [
            {
                id: 1,
                username: "ssebs",
                email: "ssebs@ssebs.com",
                name: "Sebastian Safari"
            }
        ],
        content:
            "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*\n\nEst adipisicing commodo id sit esse in ea consequat consequat qui consectetur amet qui.\n\nPariatur cillum et fugiat do sit exercitation incididunt adipisicing amet ex Lorem qui consectetur amet."
    }
];

const sampleTags = [
    {
        id: 1,
        text: "IT"
    },
    {
        id: 2,
        text: "ML"
    },
    {
        id: 3,
        text: "AI"
    },
    {
        id: 4,
        text: "Game"
    },
    {
        id: 5,
        text: "Script"
    },
    {
        id: 6,
        text: "User Facing"
    }
];

// users
export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        sampleUsers
            ? resolve(sampleUsers)
            : reject(new Error("Could not load users"));
    });
};

export const getUsers = query => {
    return new Promise((resolve, reject) => {
        if (sampleUsers) {
            const ret = [];
            sampleUsers.forEach(usr => {
                if (usr.username.match(query)) {
                    ret.push(usr);
                }
            });
            resolve(ret);
        } else {
            reject(new Error("Could not load users"));
        }
    });
};

export const getUser = id => {
    return new Promise((resolve, reject) => {
        if (sampleUsers) {
            sampleUsers.forEach(usr => {
                if (+usr.id === +id) {
                    resolve(usr);
                }
            });
            reject(new Error("Could not load users"));
        } else {
            reject(new Error("Could not load users"));
        }
    });
};

export const newUser = usrObj => {
    return new Promise((resolve, reject) => {
        let nextID = -1;
        sampleUsers.forEach(usr => {
            // check if username is a duplicate
            if (usr.username === usrObj.username) {
                reject(new Error("Username is the same as another!"));
            }
            // get next id
            if (usr.id >= nextID) {
                nextID = usr.id + 1;
            }
        });
        sampleUsers.push({ ...usrObj, id: nextID });
        resolve({ Status: "User created", Data: sampleUsers[nextID] });
    });
};

// Projects
export const getAllProjects = () => {
    return new Promise((resolve, reject) => {
        sampleProjects
            ? resolve(sampleProjects)
            : reject(new Error("Could not load users"));
    });
};

export const getProjects = query => {
    return new Promise((resolve, reject) => {
        if (sampleProjects) {
            const ret = [];
            sampleProjects.forEach(proj => {
                if (proj.title.match(query)) {
                    ret.push(proj);
                }
            });
            resolve(ret);
        } else {
            reject(new Error("Could not load users"));
        }
    });
};

export const getProject = id => {
    return new Promise((resolve, reject) => {
        if (getProject) {
            sampleProjects.forEach(proj => {
                if (+proj.id === +id) {
                    resolve(proj);
                }
            });
            reject(new Error("Could not load users"));
        } else {
            reject(new Error("Could not load users"));
        }
    });
};

export const newProject = projObj => {
    return new Promise((resolve, reject) => {
        let nextID = -1;
        sampleProjects.forEach(proj => {
            // get next id
            if (proj.id >= nextID) {
                nextID = proj.id + 1;
            }
        });
        sampleProjects.push({ ...projObj, id: nextID });
        resolve({ Status: "Project created", Data: sampleProjects[nextID] });
    });
};

// Tags
export const getAllTags = () => {
    return new Promise((resolve, reject) => {
        sampleTags
            ? resolve(sampleTags)
            : reject(new Error("Could not load users"));
    });
};

export const getTags = query => {
    return new Promise((resolve, reject) => {
        if (sampleTags) {
            const ret = [];
            sampleTags.forEach(tag => {
                if (tag.text.match(query)) {
                    ret.push(tag);
                }
            });
            resolve(ret);
        } else {
            reject(new Error("Could not load users"));
        }
    });
};

export const getTag = id => {
    return new Promise((resolve, reject) => {
        if (sampleTags) {
            sampleTags.forEach(tag => {
                if (+tag.id === +id) {
                    resolve(tag);
                }
            });
            reject(new Error("Could not load users"));
        } else {
            reject(new Error("Could not load users"));
        }
    });
};

# architecture for frontend

> This will be the top level architecture for the frontend of the galericms repo.

## TODO:
- [x] Create technical architecture
- [x] Create wireframes
- [ ] Create / Compare API spec
- [ ] Do the codes

## Technical Architecture
- React frontend
- Live search in header
- Filter project attributes on home page
- Login/Signup
  - JWT for auth
  - Possible SSO auth
- Tag list will grow, each project can have multiple tags
- Each project can have 1 owner, multiple people that can modify
- Project attributes
  - Can be archived
  - Created Date
  - Last Updated Date
  - "Is New" \(Created < 1 month ago\)
  - Title (project name)
  - List of tags 
  - Is B2C
  - Is B2B
  - Owner name
  - Who can modify list
  - Markdown contents of the page
    - Images will be hosted in site page directory
      - e.g. `/proj-1/img/foo.jpg`

## Wireframes:
> See [mockflow](https://wireframepro.mockflow.com/view/Mb225d76423dcc4835f48a8200db7993e1554322465834)

## Create / Compare API spec
- REST api
- GET's:
  - `/projects/<query>`
    - ret: list of project objects
        ```json
        [
            {
                "id": 1,
                "project_name": "Proj1",
                "owner": {
                "id": "42",
                "first": "Bob",
                "last": "Smith",
                "username": "bsmith",
                "email": "bsmith@example.com"
                },
                "editors": [
                {
                    "id": "42",
                    "first": "Bob",
                    "last": "Smith",
                    "username": "bsmith",
                    "email": "bsmith@example.com"
                },
                {
                    "id": "1",
                    "first": "Jane",
                    "last": "D'oh",
                    "username": "jdoe",
                    "email": "jdoe@example.com"
                }
                ],
                "archived": false,
                "created": "2018-03-16",
                "last_updated": "2019-01-01",
                "tags": [
                "tag1",
                "tag2",
                "tag3"
                ],
                "b2b": true,
                "b2c": false,
                "is_new": false,
                "page_contents": "# header1\n\n> Quote1\n\nmisc markdown1"
            },
            {
                "id": 3,
                "project_name": "Proj3",
                "owner": {
                "id": "1",
                "first": "Jane",
                "last": "D'oh",
                "username": "jdoe",
                "email": "jdoe@example.com"
                },
                "editors": [
                {
                    "id": "1",
                    "first": "Jane",
                    "last": "D'oh",
                    "username": "jdoe",
                    "email": "jdoe@example.com"
                }
                ],
                "archived": false,
                "created": "2019-03-16",
                "last_updated": "2019-04-01",
                "tags": [
                "tag1"
                ],
                "b2b": true,
                "b2c": true,
                "is_new": true,
                "page_contents": "# header3\n\n> Quote3\n\nmisc markdown3"
            }
        ]
           ```
  - `/project/<id>`
    - ret: project object
        ```json
            {
                "id": 1,
                "project_name": "Proj1",
                "owner": {
                "id": "42",
                "first": "Bob",
                "last": "Smith",
                "username": "bsmith",
                "email": "bsmith@example.com"
                },
                "editors": [
                {
                    "id": "42",
                    "first": "Bob",
                    "last": "Smith",
                    "username": "bsmith",
                    "email": "bsmith@example.com"
                },
                {
                    "id": "1",
                    "first": "Jane",
                    "last": "D'oh",
                    "username": "jdoe",
                    "email": "jdoe@example.com"
                }
                ],
                "archived": false,
                "created": "2018-03-16",
                "last_updated": "2019-01-01",
                "tags": [
                "tag1",
                "tag2",
                "tag3"
                ],
                "b2b": true,
                "b2c": false,
                "is_new": false,
                "page_contents": "# header1\n\n> Quote1\n\nmisc markdown1"
            }
        ```
  - `/user/id`
    - ret: user object
        ```json
         {
            "id": "42",
            "first": "Bob",
            "last": "Smith",
            "username": "bsmith",
            "email": "bsmith@example.com",
            "passwd_hash": "dfsfdsf4h23jk4h2j4h23kjh4",
            "projects": 
            [
                "project_id": 1,
                "project_id": 3
            ]
        }
        ```
- POSTS's:
  - `/project/new`
    - req: new project object
        ```json
        {
            "project_name": "Proj1",
            "owner_id": 42,
            "created": "2018-03-16",
            "last_updated": "2019-01-01",
            "tags": [
            "tag1",
            "tag2",
            "tag3"
            ],
            "b2b": true,
            "b2c": false,
            "page_contents": "# header1\n\n> Quote1\n\nmisc markdown1"
        }
        ```
    - ret: project object
        ```json
            {
                "id": 1,
                "project_name": "Proj1",
                "owner": {
                "id": "42",
                "first": "Bob",
                "last": "Smith",
                "username": "bsmith",
                "email": "bsmith@example.com"
                },
                "editors": [
                {
                    "id": "42",
                    "first": "Bob",
                    "last": "Smith",
                    "username": "bsmith",
                    "email": "bsmith@example.com"
                },
                {
                    "id": "1",
                    "first": "Jane",
                    "last": "D'oh",
                    "username": "jdoe",
                    "email": "jdoe@example.com"
                }
                ],
                "archived": false,
                "created": "2018-03-16",
                "last_updated": "2019-01-01",
                "tags": [
                "tag1",
                "tag2",
                "tag3"
                ],
                "b2b": true,
                "b2c": false,
                "is_new": false,
                "page_contents": "# header1\n\n> Quote1\n\nmisc markdown1"
            }
        ```
  - `/user/new`
    - req: new user info
        ```json
        {
            "first": "Bob",
            "last": "Smith",
            "username": "bsmith",
            "email": "bsmith@example.com",
            "passwd_hash": "dfsfdsf4h23jk4h2j4h23kjh4"
        }
        ```
    - ret: user object
        ```json
         {
            "id": "42",
            "first": "Bob",
            "last": "Smith",
            "username": "bsmith",
            "email": "bsmith@example.com",
            "passwd_hash": "dfsfdsf4h23jk4h2j4h23kjh4",
            "projects": 
            [
                "project_id": 1,
                "project_id": 3
            ]
        }
        ```
- PATCH's:
  - `/project/update`
    - req: updated project object
        ```json
            {
                "id": 1,
                "project_name": "Proj1",
                "owner": {
                "id": "42",
                "first": "Bob",
                "last": "Smith",
                "username": "bsmith",
                "email": "bsmith@example.com"
                },
                "editors": [
                {
                    "id": "42",
                    "first": "Bob",
                    "last": "Smith",
                    "username": "bsmith",
                    "email": "bsmith@example.com"
                },
                {
                    "id": "1",
                    "first": "Jane",
                    "last": "D'oh",
                    "username": "jdoe",
                    "email": "jdoe@example.com"
                }
                ],
                "archived": false,
                "created": "2018-03-16",
                "last_updated": "2019-01-01",
                "tags": [
                "tag1",
                "tag2",
                "tag3"
                ],
                "b2b": true,
                "b2c": false,
                "is_new": false,
                "page_contents": "# header1\n\n> Quote1\n\nmisc markdown1"
            }
        ```
    - ret: project object
        ```json
            {
                "id": 1,
                "project_name": "Proj1",
                "owner": {
                "id": "42",
                "first": "Bob",
                "last": "Smith",
                "username": "bsmith",
                "email": "bsmith@example.com"
                },
                "editors": [
                {
                    "id": "42",
                    "first": "Bob",
                    "last": "Smith",
                    "username": "bsmith",
                    "email": "bsmith@example.com"
                },
                {
                    "id": "1",
                    "first": "Jane",
                    "last": "D'oh",
                    "username": "jdoe",
                    "email": "jdoe@example.com"
                }
                ],
                "archived": false,
                "created": "2018-03-16",
                "last_updated": "2019-01-01",
                "tags": [
                "tag1",
                "tag2",
                "tag3"
                ],
                "b2b": true,
                "b2c": false,
                "is_new": false,
                "page_contents": "# header1\n\n> Quote1\n\nmisc markdown1"
            }
        ```
  - `/user/update`
    - req: updated user info
        ```json
        {
            "first": "Bob",
            "last": "Smith",
            "username": "bsmith",
            "email": "bsmith@example.com",
            "passwd_hash": "dfsfdsf4h23jk4h2j4h23kjh4",
            "projects": 
            [
                "project_id": 1,
                "project_id": 3
            ]
        }
        ```
    - ret: user object
        ```json
         {
            "id": "42",
            "first": "Bob",
            "last": "Smith",
            "username": "bsmith",
            "email": "bsmith@example.com",
            "passwd_hash": "dfsfdsf4h23jk4h2j4h23kjh4",
            "projects": 
            [
                "project_id": 1,
                "project_id": 3
            ]
        }
        ```
- DELETE's:
  - None

## Code Notes
- Should be in JS/HTML/etc


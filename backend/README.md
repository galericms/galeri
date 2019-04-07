# Server

## API

- [List projects](#list-projects)
- [Get a single project](#get-a-single-project)
- [Create a project](#create-a-project)

### List projects 

```
GET https://api.galeri.com/projects
```

#### Response

```json
[
    {
        "url": "https://api.galeri.com/projects/1",
        "title": "Galeri",
        "creator": {
            "url": "https://api.galeri.com/users/1",
            "name": "Sebastian Safari",
            "bio": "System administrator at PARC.",
            "email": "ssafari@parc.com"
        },
        "summary": "Raising awareness of existing projects within an organization.",
        "collaborators": [
            {
                "url": "https://api.galeri.com/users/2",
                "name": "Aaron Ang",
                "bio": "Software engineer at PARC.",
                "email": "awz.ang@gmail.com"
            }
        ]
    }
]
```

### Get a single project

```
GET https://api.galeri.com/projects/:id
```

#### Response

```json
{
    "url": "https://api.galeri.com/projects/1",
    "title": "Galeri",
    "creator": {
        "url": "https://api.galeri.com/users/1",
        "name": "Sebastian Safari",
        "bio": "System administrator at PARC.",
        "email": "ssafari@parc.com"
    },
    "summary": "Raising awareness of existing projects within an organization.",
    "collaborators": [
        {
            "url": "https://api.galeri.com/users/2",
            "name": "Aaron Ang",
            "bio": "Software engineer at PARC.",
            "email": "awz.ang@gmail.com"
        }
    ],
    "body": "# Galeri\n\nRaising awareness of existing projects within an organization."
}
```

### Create a project

```
POST https://api.galeri.com/projects
```

#### Input

| Name            | Type                |
|-----------------|---------------------|
| `title`         | `string`            | 
| `summary`       | `string`            |
| `body`          | `string`            |
| `collaborators` | `array` of `string` |

##### Example

```json
{
    "title": "Galeri",
    "summary": "Raising awareness of existing projects within an organization.",
    "body": "# Galeri\n\nRaising awareness of existing projects within an organization.",
    "collaborators": [
        "awz.ang@gmail.com"
    ]
}
```

#### Response

```json
{
    "url": "https://api.galeri.com/projects/1",
    "title": "Galeri",
    "creator": {
        "url": "https://api.galeri.com/users/1",
        "name": "Sebastian Safari",
        "bio": "System administrator at PARC.",
        "email": "ssafari@parc.com"
    },
    "summary": "Raising awareness of existing projects within an organization.",
    "collaborators": [
        {
            "url": "https://api.galeri.com/users/2",
            "name": "Aaron Ang",
            "bio": "Software engineer at PARC.",
            "email": "awz.ang@gmail.com"
        }
    ],
    "body": "# Galeri\n\nRaising awareness of existing projects within an organization."
}
```

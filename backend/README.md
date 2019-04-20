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
        "id": 1,
        "title": "Galeri",
        "creator": {
            "url": "https://api.galeri.com/users/1",
            "id": 1,
            "name": "Sebastian Safari",
            "bio": "System administrator at PARC.",
            "email": "ssafari@parc.com"
        },
        "summary": "Raising awareness of existing projects within an organization.",
        "collaborators": [
            {
                "url": "https://api.galeri.com/users/2",
                "id": 2,
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
    "id": 1,
    "title": "Galeri",
    "creator": {
        "url": "https://api.galeri.com/users/1",
        "id": 1,
        "name": "Sebastian Safari",
        "bio": "System administrator at PARC.",
        "email": "ssafari@parc.com"
    },
    "summary": "Raising awareness of existing projects within an organization.",
    "collaborators": [
        {
            "url": "https://api.galeri.com/users/2",
            "id": 2,
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
    "id": 1,
    "title": "Galeri",
    "creator": {
        "url": "https://api.galeri.com/users/1",
        "id": 1,
        "name": "Sebastian Safari",
        "bio": "System administrator at PARC.",
        "email": "ssafari@parc.com"
    },
    "summary": "Raising awareness of existing projects within an organization.",
    "collaborators": [
        {
            "url": "https://api.galeri.com/users/2",
            "id": 2,
            "name": "Aaron Ang",
            "bio": "Software engineer at PARC.",
            "email": "awz.ang@gmail.com"
        }
    ],
    "body": "# Galeri\n\nRaising awareness of existing projects within an organization."
}
```

## Haskell Setup

1. If you haven't already, [install Stack](https://haskell-lang.org/get-started)
	* On POSIX systems, this is usually `curl -sSL https://get.haskellstack.org/ | sh`
2. Install the `yesod` command line tool: `stack install yesod-bin --install-ghc`
3. Build libraries: `stack build`

If you have trouble, refer to the [Yesod Quickstart guide](https://www.yesodweb.com/page/quickstart) for additional detail.

## Development

Start a development server with:

```
stack exec -- yesod devel
```

As your code changes, your site will be automatically recompiled and redeployed to localhost.

## Tests

```
stack test --flag galeri:library-only --flag galeri:dev
```

(Because `yesod devel` passes the `library-only` and `dev` flags, matching those flags means you don't need to recompile between tests and development, and it disables optimization to speed up your test compile times).

## Documentation

* Read the [Yesod Book](https://www.yesodweb.com/book) online for free
* Check [Stackage](http://stackage.org/) for documentation on the packages in your LTS Haskell version, or [search it using Hoogle](https://www.stackage.org/lts/hoogle?q=). Tip: Your LTS version is in your `stack.yaml` file.
* For local documentation, use:
	* `stack haddock --open` to generate Haddock documentation for your dependencies, and open that documentation in a browser
	* `stack hoogle <function, module or type signature>` to generate a Hoogle database and search for your query
* The [Yesod cookbook](https://github.com/yesodweb/yesod-cookbook) has sample code for various needs

## Getting Help

* Ask questions on [Stack Overflow, using the Yesod or Haskell tags](https://stackoverflow.com/questions/tagged/yesod+haskell)
* Ask the [Yesod Google Group](https://groups.google.com/forum/#!forum/yesodweb)
* There are several chatrooms you can ask for help:
	* For IRC, try Freenode#yesod and Freenode#haskell
	* [Functional Programming Slack](https://fpchat-invite.herokuapp.com/), in the #haskell, #haskell-beginners, or #yesod channels.

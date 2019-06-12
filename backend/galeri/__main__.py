from flask import Flask
from flask_restful import Api
from galeri.resources.projects import Project, Projects

app = Flask(__name__)
api = Api(app)

api.add_resource(Project, "/projects/<int:project_id>", endpoint="project")
api.add_resource(Projects, "/projects", endpoint="projects")

if __name__ == "__main__":
    app.run(debug=True)

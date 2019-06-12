from flask_restful import Resource, reqparse, fields, marshal_with
from galeri.common.auth import auth

parser = reqparse.RequestParser()
parser.add_argument("title", type=str)
parser.add_argument("summary", type=str)
parser.add_argument("body", type=str)

resource_fields = {
    "title": fields.String,
    "summary": fields.String,
    "body": fields.String,
    "url": fields.Url("project", absolute=True),
}


class ProjectDAO:
    def __init__(self, project_id, title, summary, body):
        self.project_id = project_id
        self.title = title
        self.summary = summary
        self.body = body


class Project(Resource):
    @marshal_with(resource_fields)
    def get(self, **kwargs):
        return ProjectDAO(42, "Galeri", "Whut", "Nothing")


class Projects(Resource):
    @marshal_with(resource_fields)
    def get(self):
        return ProjectDAO(42, "Galeri", "Whut", "Nothing")

    @auth.login_required
    @marshal_with(resource_fields)
    def post(self):
        args = parser.parse_args()
        return ProjectDAO(42, args["title"], args["summary"], args["body"])

"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/create-user', methods=['POST'])
def create_user():
    
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        firstName = request.json.get("firstName", None)
        lastName = request.json.get("lastName", None)
        phone = request.json.get("phone", None)

        if not email:
            return "Email requerido", 401
        if not password:
            return "Password requerido", 401
        if not firstName:
            return "Nombre requerido", 401
        if not lastName:
            return "Apellido requerido", 401
        if not phone:
            return "Telefono requerido", 401    

        email_query = User.query.filter_by(email=email).first()
        if email_query:
            return "This email has been already taken", 401              


        user = User()
        user.email = email
        user.firstName = firstName
        user.lastName = lastName
        user.phone = phone
        # hashed_password = generate_password_hash(password)
        user.password = password
        print(user)
        db.session.add(user)
        db.session.commit()

        response = {
            "msg": "Usuario Creado Satisfactoriamente",
            "name": firstName
        }
        return jsonify(response), 200
    

"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import datetime

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
    
@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return jsonify({"msg":"Email Requerido"}), 400
    if not password:
            return jsonify({"msg":"Password is required"}), 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"msg": "The email is not correct"
        }), 401

    expiration = datetime.timedelta(days=5)
    access_token = create_access_token(identity=user.email, expires_delta=expiration)

    response={
        "user": user.serialize(),
        "token": access_token
    }

    return jsonify(response), 200            
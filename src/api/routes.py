"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/create-user', methods=['GET','POST'])
def create_user():
    if request.method == 'POST':
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        name = request.json.get("name", None)
        lastname = request.json.get("lastname", None)
        phone = request.json.get("phone", None)

        if not email:
            return "Email requerido", 401
        if not password:
            return "Password requerido", 401
        if not name:
            return "Nombre requerido", 401
        if not lastname:
            return "Apellido requerido", 401
        if not phone:
            return "Telefono requerido", 401    

        email_query = User.query.filter_by(email=email).first()
        if email_query:
            return "This email has been already taken", 401              


        user = User()
        user.email = email
        user.name = name
        user.lastname = lastname
        user.phone = phone
        # hashed_password = generate_password_hash(password)
        user.password = password
        print(user)
        db.session.add(user)
        db.session.commit()

        response = {
            "msg": "Usuario Creado Satisfactoriamente",
            "name": name
        }
        return jsonify(response), 200
    if request.method == 'GET':
        response_body = {"message": "Mensaje linea 49"}    

        return jsonify(response_body), 200

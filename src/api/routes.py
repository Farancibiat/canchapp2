"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Recinto, Reservas
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash
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
        user.numberToken = 0
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

    if(user.numberToken != 0):
        return jsonify({"msg": "Forgot your password proccess is incomplete"
        }), 401

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

#Aqui parten las funciones de recinto

@api.route('/recinto/', methods=['POST'])
def create_recinto():
    
        nameRecinto = request.json.get("nameRecinto", None)
        openHour= request.json.get("openHour", None)
        closeHour = request.json.get("closeHour", None)
    
        recinto = Recinto()
        recinto.nameRecinto = nameRecinto
        # hashed_password = generate_password_hash(password)
        recinto.openHour = openHour
        recinto.closeHour = closeHour
        print(recinto)
        db.session.add(recinto)
        db.session.commit()

        response = {
            "msg": "Recinto Creado Satisfactoriamente",
            "name": nameRecinto
        }
        return jsonify(response), 200

@api.route('/recinto/<int:id>', methods=['GET'])
def get_recinto(id):
    
    recinto = Recinto.query.all()
    recinto = list(map(lambda x: x.serialize(),recinto))
    response_body={
        "recintos": recinto[id]
    }
    
    return jsonify(response_body), 200
  
  

@api.route('/validate', methods=['GET','POST'])
def validate():
    email = request.json.get("email", None)
    

    if not email:
        return jsonify({"msg":"Error al validar informacion"}), 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"msg": "Error al validar informacion"
        }), 400

    response={
        "name": user.firstName + " " + user.lastName
    }

    return jsonify(response), 200

@api.route('/modifypass', methods=['POST'])
def modify_pass():
    
        token = request.json.get("numberToken", None)
        password = request.json.get("password", None)
        
        if not token:
            return "Error try again", 401
        if not password:
            return "Error try again", 401

        selectedUser = User.query.filter_by(tokenNumber=token).first()
                 
        selectedUser.numberToken = 0
        selectedUser.password = password
        print(user)
        db.session.commit()

        response = {
            "msg": "Usuario Modificado Successfully",
            "name": firstName
        }
        return jsonify(response), 200

@api.route('/settoken', methods=['POST'])
def set_token():
    
        token = request.json.get("numberToken", None)
        email = request.json.get("email", None)
        
        if not token:
            return "Error try again", 401
        if not email:
            return "Error try again", 401

        selectedUser = User.query.filter_by(email = email).first()
        selectedUser.password = generate_password_hash(token)  
        selectedUser.numberToken = token
        db.session.commit()
        response = {
            "msg": "Token Modificado Successfully"
        }
        return jsonify(response), 200              


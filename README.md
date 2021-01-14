![](img/logo.jpg)
![](https://visitor-badge.glitch.me/badge?page_id=javigarcias.the-perfect-day-front)

# The Perfect Day Database
_Este proyecto consiste en la creación de una base de datos para la gestión de un portal web donde valorar los servicios de proveedores del sector nupcial. Se ha realizado con una base de datos realicional en MySQL con encriptación de password en el caso de registro de usuarios._

- Frontend: 🌌 [Link al repo](https://github.com/javigarcias/the-perfect-day-front)
- Backend: 🔸 NodeJS + Express + Sequelize + Json Web Token + Bcrypt
- DB: 🍃 MySQL 

## Comenzando 🚀

_Para poder poner en funcionamiento el proyecto en tu maquina local para propositos de desarrollo y pruebas necesitaras instalar las siguiente dependencias:_

```
npm init -y
npm i express mysql2 sequelize bcryptjs jsonwebtoken
```
### Endpoints 📌
- /commerces:
    - POST / (Registro de un nuevo proveedor)
    - GET / (Ver todos los proveedores)
    - GET /restaurant (Ver todos los proveedores de tipo Restaurante)
    - GET /photographers (Ver todos los proveedores de tipo Fotografia)
    - GET /beauty (Ver todos los proveedores de tipo Belleza)
    - GET /florist (Ver todos los proveedores de tipo Floristeria)
    - POST /typeAndCity (Ver los proveedores filtrados por tipo y ciudad)
    - GET /name/:name (Ver todos los proveedores detectando coincidencias por nombre)
- /users:
    - POST /register (Registro de un nuevo usuario)
    - POST /login (Login de usuario)
    - PUT /logout/:id (Logout de usuario borrando su token)
- /opinions:
    - POST /create (Creación de una opinión introduciendo por body: CommerceId, UserId, vote y opinion)
    - GET /getByCommerce/:id (Ver todas las opiniones de un comercio pasando por parametro el id del comercio)
    - GET /getByUser/:id (Ver todas las opiniones de un usuario pasando por parametro el id del usuario)

## Ejecutando las pruebas ⚙️

* [HEROKU TEST](https://the-perfect-day-back.herokuapp.com/)

## Construido con 🛠️

_Tecnologías utilizadas en el proyecto_

- Javascript
- NodeJS
- Express
- Sequelize
- MySQL
- Postman
- Heroku
- Git
- GitHub

## Autor ✒️

* **Javier García**  - [javigarcias](https://github.com/javigarcias)

---
⌨️ con ❤️ por [JaviGarcia](https://www.linkedin.com/in/javigarciasanchez/) 😊
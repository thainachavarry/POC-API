# POC-API

## Metodos Http

- GET: Pegar dados
- POST: Criar dados
- PUT: Atualizar dados
- DELETE: Deletar dados

## Requisitions definitions

- Header
- Body
- Verbs (GET/POST/PUT/DELET)
- Most common http codes:
  - 200 OK
  - 201 CREATED
  - 400 BAD REQUEST
  - 401 NOT AUTHORIZED
  - 404 NOT FOUND
  - 500 SERVER ERROR
  - <https://http.cat/>

## Used Tecs

- Express
  - `listen` Server init
  - request: What we will send to the server
  - response: What the server will send to us
  - `app.use(express.json())` Now the app know how handle json request
- Node
- Banco não relacional: MongoDb (mongoose)
- Ecmascript

### API REST CRUD TASKS 👀

- [ ] CREATE (POST)
- [ ] READ   (GET)
- [ ] UPDATE (PUT)
- [ ] DELETE (DELETE)

## Firsts steps

- `npm init -y`  Start a project using npm
- `npm install express`  install express on project
- Create a server.js file
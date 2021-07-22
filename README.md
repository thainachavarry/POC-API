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

- Express: Server behavior
  - `listen` Server init
  - request: What we will send to the server
  - response: What the server will send to us
  - `app.use(express.json())` Now the app know how handle json request
- Node
- Banco não relacional: MongoDb (mongoose)
  - `new mongoose.Schema({})` Create mongo schema
  - `mongoose.model('Task', TaskSchema)` Create mongo model
- Ecmascript

### API REST CRUD TASKS 👀

- [x] CREATE        (POST)
- [x] READ/getAll   (GET)
- [x] READ/getOne   (GET)
- [x] UPDATE        (PUT)
- [x] DELETE        (DELETE)

## Firsts steps

- `npm init -y` Start a project using npm
- `npm install express` install express on project
- Create a server.js file
- `npm install mongoose` install mongoose on project

Order API

API REST desenvolvida em Node.js para gerenciamento de pedidos.
O projeto permite criar, consultar, atualizar e remover pedidos, além de possuir autenticação via JWT e documentação da API com Swagger.

⸻

Tecnologias utilizadas
	•	Node.js
	•	Express
	•	MongoDB
	•	Mongoose
	•	JSON Web Token (JWT)
	•	Swagger (Documentação da API)
	•	Postman (Testes de endpoints)

⸻

Arquitetura do projeto

O projeto segue uma estrutura organizada baseada no padrão MVC:

src
 ├── controllers
 ├── routes
 ├── models
 ├── middleware
 ├── database
 └── app.js


⸻

Funcionalidades
	•	Criar pedidos
	•	Buscar pedido por ID
	•	Listar todos os pedidos
	•	Atualizar pedido
	•	Deletar pedido
	•	Autenticação com JWT
	•	Documentação da API com Swagger

⸻

Endpoints da API

Autenticação

Login

POST /auth/login

Exemplo de requisição:

{
  "username": "admin",
  "password": "123456"
}

Retorna um token JWT para acesso às rotas protegidas.

⸻

Pedidos

Criar pedido

POST /order

Listar pedidos

GET /order/list

Buscar pedido por ID

GET /order/:id

Atualizar pedido

PUT /order/:id

Deletar pedido

DELETE /order/:id


⸻

Exemplo de requisição

{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}


⸻

Documentação da API

Após iniciar o servidor, a documentação interativa estará disponível em:

http://localhost:3000/api-docs

Através do Swagger é possível visualizar e testar todos os endpoints da API.

⸻

Como executar o projeto

1. Clonar o repositório

git clone https://github.com/7Genesis/order-api.git

2. Acessar a pasta do projeto

cd order-api

3. Instalar as dependências

npm install

4. Executar o servidor

npm start

O servidor será iniciado em:

http://localhost:3000


⸻

Autor

Genesis Melo
Desenvolvedor Backend
:::

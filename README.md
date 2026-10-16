# Order API

API REST em Node.js para gerenciamento de pedidos, desenvolvida como teste técnico.
Permite criar, consultar, listar, atualizar e remover pedidos, com persistência em MongoDB.

## Tecnologias

- Node.js
- Express
- MongoDB e Mongoose
- Postman (testes manuais dos endpoints)

## Estrutura

Organização em camadas, no padrão MVC (sem views):

```
src
 ├── controllers   regras de cada endpoint e respostas HTTP
 ├── routes        definição das rotas
 ├── models        schemas Mongoose (Order e itens)
 ├── database      conexão com o MongoDB
 └── app.js        configuração do Express
server.js          inicialização do servidor
```

## Funcionalidades

- Criar pedido, com validação dos campos e resposta `409` para pedido duplicado
- Buscar pedido por ID
- Listar todos os pedidos
- Atualizar pedido
- Remover pedido

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| POST | `/order` | Cria um pedido |
| GET | `/order/list` | Lista os pedidos |
| GET | `/order/:id` | Busca um pedido pelo ID |
| PUT | `/order/:id` | Atualiza um pedido |
| DELETE | `/order/:id` | Remove um pedido |

### Exemplo de requisição (POST `/order`)

```json
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
```

## Como executar

Pré-requisitos: Node.js e um MongoDB rodando em `mongodb://127.0.0.1:27017` (o banco usado é `orderdb`).

```bash
git clone https://github.com/7Genesis/order-api.git
cd order-api
npm install
npm start
```

O servidor sobe em `http://localhost:3000`.

## Limitações conhecidas

- Não há autenticação: todas as rotas são abertas.
- Não há documentação Swagger/OpenAPI; os endpoints estão descritos acima.
- A porta e a URL do MongoDB estão fixas no código (`server.js` e `src/database/connection.js`), sem variáveis de ambiente.
- Não há testes automatizados.

## Autor

Genesis Melo

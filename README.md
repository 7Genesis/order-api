# Order API

API desenvolvida em Node.js para gerenciamento de pedidos.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Funcionalidades

- Criar pedido
- Buscar pedido por ID
- Listar pedidos
- Atualizar pedido
- Deletar pedido

## Endpoints

### Criar pedido
POST /order

### Buscar pedido
GET /order/:id

### Listar pedidos
GET /order/list

### Atualizar pedido
PUT /order/:id

### Deletar pedido
DELETE /order/:id

## Exemplo de requisição

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
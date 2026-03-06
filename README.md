# Order API

API desenvolvida em Node.js com JavaScript para gerenciamento de pedidos, conforme desafio técnico.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Funcionalidades

- Criar pedido
- Buscar pedido por número
- Listar pedidos
- Atualizar pedido
- Remover pedido

## Estrutura dos dados

### JSON recebido

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
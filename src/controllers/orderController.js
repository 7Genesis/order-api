const Order = require("../models/Order");

function mapRequestToOrder(body) {
  return {
    orderId: body.numeroPedido,
    value: body.valorTotal,
    creationDate: new Date(body.dataCriacao),
    items: body.items.map((item) => ({
      productId: Number(item.idItem),
      quantity: Number(item.quantidadeItem),
      price: Number(item.valorItem)
    }))
  };
}

function validateCreatePayload(body) {
  if (!body || typeof body !== "object") {
    return "Body da requisição inválido.";
  }

  if (!body.numeroPedido) {
    return "O campo 'numeroPedido' é obrigatório.";
  }

  if (body.valorTotal === undefined || body.valorTotal === null) {
    return "O campo 'valorTotal' é obrigatório.";
  }

  if (!body.dataCriacao) {
    return "O campo 'dataCriacao' é obrigatório.";
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return "O campo 'items' deve ser um array com pelo menos um item.";
  }

  for (const item of body.items) {
    if (!item.idItem || item.quantidadeItem === undefined || item.valorItem === undefined) {
      return "Cada item deve conter 'idItem', 'quantidadeItem' e 'valorItem'.";
    }
  }

  return null;
}

exports.createOrder = async (req, res) => {
  try {
    const validationError = validateCreatePayload(req.body);

    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const mappedOrder = mapRequestToOrder(req.body);

    const existingOrder = await Order.findOne({ orderId: mappedOrder.orderId });

    if (existingOrder) {
      return res.status(409).json({
        error: "Já existe um pedido com esse orderId."
      });
    }

    const createdOrder = await Order.create(mappedOrder);

    return res.status(201).json(createdOrder);
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno ao criar pedido."
    });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findOne({ orderId: id });

    if (!order) {
      return res.status(404).json({
        error: "Pedido não encontrado."
      });
    }

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno ao buscar pedido."
    });
  }
};

exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno ao listar pedidos."
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const existingOrder = await Order.findOne({ orderId: id });

    if (!existingOrder) {
      return res.status(404).json({
        error: "Pedido não encontrado."
      });
    }

    const validationError = validateCreatePayload(req.body);

    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const mappedOrder = mapRequestToOrder(req.body);

    if (mappedOrder.orderId !== id) {
      return res.status(400).json({
        error: "O 'numeroPedido' do body deve ser igual ao identificador enviado na URL."
      });
    }

    const updatedOrder = await Order.findOneAndUpdate(
      { orderId: id },
      mappedOrder,
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedOrder);
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno ao atualizar pedido."
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await Order.findOneAndDelete({ orderId: id });

    if (!deletedOrder) {
      return res.status(404).json({
        error: "Pedido não encontrado."
      });
    }

    return res.status(200).json({
      message: "Pedido removido com sucesso."
    });
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno ao remover pedido."
    });
  }
};
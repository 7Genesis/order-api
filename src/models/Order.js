const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    value: {
      type: Number,
      required: true
    },
    creationDate: {
      type: Date,
      required: true
    },
    items: {
      type: [itemSchema],
      required: true,
      validate: {
        validator: function (items) {
          return Array.isArray(items) && items.length > 0;
        },
        message: "O pedido deve conter ao menos um item."
      }
    }
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
      }
    }
  }
);

module.exports = mongoose.model("Order", orderSchema);
import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
<<<<<<< HEAD
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
=======
        image: { type: String, require: true },
        price: { type: Number, required: true },
        products: {
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
<<<<<<< HEAD
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
=======
    itemPrice: {
      type: Number,
      required: true,
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
<<<<<<< HEAD
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
=======
  { timestamps: true }
);

const order = mongoose.model("order", orderSchema);

export default order;
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4

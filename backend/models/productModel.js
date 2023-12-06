import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
<<<<<<< HEAD

=======
  {
    timestamps: true,
  }
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4
);
// import { string } from "prop-types";

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
    price: {
      type: Number,
      required: true,
    },
    reviews: [reviewSchema],
    description: {
      type: String,
=======
    reviews: [reviewSchema],
    rating: {
      type: Number,
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
<<<<<<< HEAD
const Product = mongoose.model("Product", productSchema);
=======
const Product = mongoose.model("product", productSchema);
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4

export default Product;

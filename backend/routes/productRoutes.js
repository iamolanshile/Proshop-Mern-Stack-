import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
<<<<<<< HEAD
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
} from "../contollers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.get("/top", getTopProducts);
router.route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route("/:id/reviews").post(protect, createProductReview);
=======
} from "../contollers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4

export default router;

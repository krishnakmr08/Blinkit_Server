import Product from "../../models/product.js";

export const getProductsByCategoryId = async (req, reply) => {
  const { categoryId } = req.params;

   if (!categoryId) {
    return reply.status(400).send({ message: "Category Id is required" });
  }
 
  try {
    const products = await Product.find({ category: categoryId })
      .select("-category")
      .exec();

    return reply.send(products);
  } catch (error) {
    return reply.status(500).send({ message: "An error occurred", error });
  }
};

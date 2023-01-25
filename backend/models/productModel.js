import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String},
    slug: { type: String},
    image: { type: String},
    brand: { type: String},
    category: { type: String },
    description: { type: String},
    price: { type: Number},
    countInStock: { type: Number},
    rating: { type: Number},
    numReviews: { type: Number},
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
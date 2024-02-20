import mongoose, {  Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  category: string;
  variants: { color: string; size: string; quantity: number }[];
  price: number;
  image: Buffer;
}

const productSchema: mongoose.Schema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  variants: [
    {
      color: { type: String, required: false },
      size: { type: String, required: false },
      quantity: { type: Number, required: false, default: 0 },
    },
  ],
  price: { type: Number, required: true },
  image: { data: Buffer, contentType: String } 
});

export default mongoose.model<IProduct>('Product', productSchema);

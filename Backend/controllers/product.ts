import {Request,Response} from 'express';
import Product,{IProduct} from '../models/Product';
import { deleteOnCloudinary,uploadCloudinary } from '../utils/cloudinary';
import { customRequest, customResponse } from '../core/types';

export const createProduct=async(req:customRequest,res:customResponse)=>{
    const {name,category,price,variants}=req.body;
    try {
      //file handling
        const imageLocalPath =(req as any).files?.image?.[0]?.path;
        console.log("image local payh ",imageLocalPath);

        if (!imageLocalPath) {
          res.status(500).json({ message: ' image path is required' });
          return;
        }
        //upload file on cloiudinary
        const image = await uploadCloudinary(imageLocalPath);
        if (!image) {
          res.status(500).json({ message: ' image is not uploaded to cloudinary' });
          return;
        }
        const product: IProduct = new Product({ name, category, variants, price ,image: image?.url,});
        await product.save();
        res.status(201).json(product).send("Product Created Sucessfully ");
      } catch (error) {
        res.status(500).json({ message: 'Failed to create product',error });
      }
};

export const getAllProducts = async (_req: Request, res: Response): Promise<void> => {
    try {
      const products: IProduct[] = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch products', error });
    }
  };
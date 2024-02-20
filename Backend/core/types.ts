import mongoose  from 'mongoose';
import { Request,Response } from 'express';
export interface IUser extends Document {
    _id:number;
    username: string;
    email:string;
    password:string;
    roles:string;
  }


export interface customRequest extends Request{
  user?:any
}
export interface customResponse extends Response{
  user?:any
}


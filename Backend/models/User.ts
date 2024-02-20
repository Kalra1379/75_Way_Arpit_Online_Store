import mongoose  from 'mongoose';
import { UserRolesEnum } from '../constants';

export interface IUser extends Document {
    _id:number;
    username: string;
    email:string;
    password:string;
    roles:string;
  }

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:String,
        default:UserRolesEnum.USER
    }

});

const User =mongoose.model<IUser>("User",userSchema);

export default User;
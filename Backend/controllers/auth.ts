import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User,{IUser} from "../models/User";
import dotenv from "dotenv";
import validator from "validator";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;


export const authRegister = async (req: Request, res: Response) => {
    try {
        const { username, email, password,role} = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({message : "Enter all the fields"});
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message : "Enter the Email id in valid format"});
        }
        const checkUser: IUser | null = await User.findOne({ email });

        if (checkUser) {
            res.status(400).json("User already exixts");
            return;
        }
        const hashPass = await bcrypt.hash(password, 8);

        const newUser = new User({
            username,
            email,
            password: hashPass,
            roles : role
        });

        await newUser.save();
        res.status(200).json({ message: "User Registered Successfuly" });

    } catch (error) {
        console.log(error);
        res.json({ error: error });
    }
}

export const authLogin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ message: "Enter all the required fields" });
            return;
        }
        const checkUser: IUser | null = await User.findOne({ username });

        if (!checkUser) {
            res.status(401).json({ message: "User does not Exists" });
            return;
        }

        const passCheck = await bcrypt.compare(password, checkUser.password);

        if (!passCheck) {
            res.status(401).json({ message: "Invalid Credentials" });
            return;
        }

        const token = jwt.sign({ userId: checkUser._id }, (jwtSecret) as string, { expiresIn: '20m' });

        res.cookie('jwt', token, {
            maxAge: 600000
        });
        res.status(200).json({ message: "LOGIN SUCCESS",token });

    } catch (e) {
        console.log(e);
        res.json({ error: e });
    }
}
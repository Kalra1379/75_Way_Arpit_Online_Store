import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import { IUser } from '../core/types';
import { customRequest,customResponse } from '../core/types';
export const checkAuthMiddleware = async(req: customRequest, res: customResponse, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

    const user = await User.findById(decodedToken?.userId);
    if (!user) {
      return res.status(401).json({ message: 'Invalid Acess Token' });
    }

    req.user = user as IUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const verifyPermission = (roles:string[]=[]) => {
  return async(req: customRequest, res: customResponse, next: NextFunction)=>{
    if (!req.user?._id) {
            return res.status(401).json({ message: 'Unauthorized Request' });
          }
          console.log(roles,req.user?.roles);
          if (roles.includes(req.user?.roles)) {
            next();
          } else {
            return res.status(401).json({ message: 'You are not allowed to perform this action' })
          }
  }
}
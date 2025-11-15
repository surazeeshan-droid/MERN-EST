import User from '../modules/user.module.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utls/error.js';

export const signup =async (req,res,next)=>{
const {username,email,password}=req.body;
const hashedpassword = bcryptjs.hashSync(password,10);
const newUser = new username({username,email,password:hashedpassword});
try{

await newUser.save()
res.status(201).json("User created successfully");
}catch (error){
    next(error);
}

};

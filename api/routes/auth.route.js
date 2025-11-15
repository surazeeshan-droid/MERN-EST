import express from 'express';
import router from './user.route';
import { signup } from '../controllers/auth.controller';

const route = express.Router();

router.post("/signup", signup);


export default route;
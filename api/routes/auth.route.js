import express from 'express';
import {  signin,signup } from '../controllers/auth.controller.js';

const route = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google");

export default route;
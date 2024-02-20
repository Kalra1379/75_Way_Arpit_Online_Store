import { Router } from "express";
import { authLogin, authRegister } from "../controllers/auth";


const router=Router();

router.post('/login', authLogin);
router.post('/register', authRegister);

export default router;
import express from 'express';
import { userLogin, userRegister } from '../controllers/userCont';
const router = express.Router();

router.post('/login', userLogin)
.post('/register', userRegister)

export default router
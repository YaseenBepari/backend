import { Router } from 'express';
import { regestieruser } from '../controllers/user.controllers.js';

const router = Router();

router.route("/register").post(regestieruser)


export default router // Named export

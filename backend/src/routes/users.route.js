import { Router } from "express";
import { login, register,getUserHistory,addHistory } from "../controllers/users.controllers.js";



const router=Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/addHis").post(addHistory)
router.route("/getUserHis").get(getUserHistory)


export default router;
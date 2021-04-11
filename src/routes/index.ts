import *as express from "express";
import UserRouter from "./user.route";

const router = express.Router();

//definig use routes
router.use("/users", UserRouter)

export default router;
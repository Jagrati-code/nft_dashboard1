import {Router} from "express";

const router = Router();

router.get("/", (req,res) => {
    res.send("Hey, its user route");
})

export default router;
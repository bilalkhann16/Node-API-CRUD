import express from "express";
const router = express.Router();

router.get('/users',(req,res)=>{
    res.send("Hello from users.js");
});


export default router;

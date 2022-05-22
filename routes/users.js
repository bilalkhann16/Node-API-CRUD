import express from "express";
const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 30,
    },
    {
        firstName: "Bilal",
        lastName: "K.",
        age:21
    }
]
// all routes in here are starting with /users
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
});

router.post('/',(req,res)=>{
    console.log("post request created");
    res.send("post request created")
});
 

export default router;

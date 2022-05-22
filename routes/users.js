import express from "express";
import {v4 as uuid} from 'uuid';
const router = express.Router();

// const users = [
//     {
//         firstName: "John",
//         lastName: "Doe",
//         age: 30,
//     },
//     {
//         firstName: "Bilal",
//         lastName: "K.",
//         age:21
//     }
// ]
const users = [];

// all routes in here are starting with /users
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
});

router.post('/',(req,res)=>{
    const user = req.body;
    // const userId = uuidv4();
    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
});

router.get('/:id', (req,res) => {
    res.send('the get id route.')
});
 

export default router;

import express from "express";
import User from "../models/user";
import jwt from 'jsonwebtoken'
import userAuth from "../middleware.ts/userAuth";
const userRouter = express.Router()


userRouter.post("/signup", async (req, res) => {
    const {
        username,
        password
    } = req.body;

        try{
        let user = await User.findOne({
            username: username
        })

        if(user){
            res.status(403).send("user already exists with the username");
            return;
        }

        user = new User({
            username,
            password
        })

        await user.save();

        res.json({
            user
        })
    }catch(err){
        res.status(500).send("ERROR: " + err)
    }
})


userRouter.post("/login", async (req,res) => {
    const {
        username,
        password
    } = req.body;

    try{
        const user = await User.findOne({
            username: username,
            password
        })

        if(!user){
            res.status(401).send("No user found");
            return;
        }else{
            const token = jwt.sign(username, "SecondBrain");
            res.cookie("token", token)
        }

        res.send("Login successfull")
    }catch(err){
        res.send("ERROR: "+ (err as Error).message)
    }
})


userRouter.get("/content", userAuth ,async(req, res)=> {
    res.send("inside content")
})



export default userRouter;
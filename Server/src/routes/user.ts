import express, {Request, Response} from "express";
import User from "../models/user";
import jwt from 'jsonwebtoken'
import userAuth from "../middleware.ts/userAuth";
import Content from "../models/content";
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
    }catch(err: any){
        res.status(500).send("ERROR: " + err.message)
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
            const token = jwt.sign({id: user._id}, "SecondBrain");
            res.cookie("token", token)
        }

        res.send("Login successfull")
    }catch(err){
        res.send("ERROR: "+ (err as Error).message)
    }
})


userRouter.post("/content", userAuth ,async(req: Request, res: Response)=> {
    const id = req.user;
    const {
        type,
        title,
        link,
        tag,
    } = req.body;
    try{ 
        const content = new Content({
            type,
            title,
            link,
            tag,
            userId: id
        })

        await content.save();
        res.send(content)

    }catch(err: any){
        res.status(411).send("ERROR: " + err.message)
    }
})



export default userRouter;
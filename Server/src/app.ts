import express from "express"
import connectDb from "./db"
import userRouter from "./routes/user"
import cookieParser from 'cookie-parser'
import dotenv from "dotenv";
dotenv.config();

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/user", userRouter)



async function main(){
    await connectDb();
    console.log("connected to DB")
    app.listen(3001, ()=>{
        console.log("Successfully listening to port 3001")
    })
}
main();
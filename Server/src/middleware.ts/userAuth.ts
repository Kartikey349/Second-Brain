import { NextFunction, Request, Response } from "express";
import jwt, {JwtPayload} from 'jsonwebtoken'


// interface TokenPayload extends JwtPayload {
//   username: string;
// }

declare module "express-serve-static-core" {
  interface Request {
    user?: string;
  }
}

const userAuth = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;

    try{
        if(!token){
            throw new Error("Token not found, Login again")
        }
        const decoded = jwt.verify(token, "SecondBrain");
        
        req.user = (decoded as JwtPayload).username;
        next();
    }catch(err){
        throw new Error("ERROR: " + err)
    }
}

export default userAuth
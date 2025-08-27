import { useRef, useState } from "react"
import Button from "./Button"
import { Input } from "./ModalComponent"
import axios from "axios";
import { BACKEND_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)


    const signup = async() => {
        const username = usernameRef?.current?.value
        const password = passwordRef?.current?.value

        try{
            const userSignup = await axios.post(BACKEND_URL + "/user/signup", {
            username,
            password
        }, {
            withCredentials: true
        })
        console.log(userSignup)
        if(userSignup){
            setIsLogin(true)
        }

    }catch(err: any){
        console.log(err.response.data)
    }
    }

    const login = async () => {
        const username = usernameRef?.current?.value
        const password = passwordRef?.current?.value

        const userLogin = await axios.post(BACKEND_URL + "/user/login", {
            username,
            password
        }, {
            withCredentials: true
        })
        console.log(userLogin)
        dispatch(addUser(userLogin.data))
        navigate("/")

    }

  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
        <div className="w-80 p-6 shadow-2xl rounded-lg bg-white flex flex-col items-center">
            <p className="font-semibold">{isLogin ? "Login" : "Signup"}</p>
            <div className="flex flex-col min-w-60">
                <Input ref={usernameRef} placeholder="Username" />
                <Input ref={passwordRef} placeholder="Password" />
            </div>
            <div className="mt-2 flex w-full justify-center"></div>

            <div onClick={isLogin ? login : signup}>   
                <Button variant="primary" size="md" text={isLogin ? "Login" : "Signup"}/>
            </div>

            <p className="text-gray-600 mt-2">{isLogin ? "New Here?" :"Already have account?"} <span className=" text-black cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
                {isLogin? "Signup now" :"Login Now"}</span></p>
        </div>
    </div>
  )
}

export default Login
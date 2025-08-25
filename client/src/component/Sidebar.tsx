import LogoIcon from "../icon/LogoIcon"
import TwitterIcon from "../icon/TwitterIcon"
import YoutubeIcon from "../icon/YoutubeIcon"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Sidebar = () => {

  const navigate = useNavigate()
  const user = useSelector((store: any) => store.user)

  const fetchContent = async () => {
    if(user) return;
    try{const content =  await axios.get(BACKEND_URL + "/user/content", {
      withCredentials: true
    })
  }catch(err: any){
    console.log(err.response.data)
    if(err.status == 401){ 
      navigate("/login")
    }
  }
  }

  useEffect(() => {
    fetchContent()
  }, [])

  return (
    <div className="w-80 p-2 pl-4 border-r-1 border-gray-400">
      <div className="flex items-center gap-2">
        <LogoIcon />
        <h1 className="font-bold text-xl">Second Brain</h1>
      </div>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex text-gray-600 items-center gap-1 hover:bg-gray-200 px-2 p-1 rounded-md transition duration-200">
            <TwitterIcon />
            <p>Tweets</p>
          </div>
          <div className="flex text-gray-600 items-center gap-1 hover:bg-gray-200 px-2 p-1 rounded-md transition duration-200">
            <YoutubeIcon />
            <p>Youtube</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
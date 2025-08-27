import LogoIcon from "../icon/LogoIcon"
import TwitterIcon from "../icon/TwitterIcon"
import YoutubeIcon from "../icon/YoutubeIcon"
import { BACKEND_URL } from "../utils/config"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addContent, filterContent } from "../utils/contentSlice"

const Sidebar = () => {

  const dispatch =  useDispatch()
  const navigate = useNavigate()


  const fetchContent = async () => {
    try{
      const content =  await axios.get(BACKEND_URL + "/user/content", {
      withCredentials: true
    })
    dispatch(addContent(content?.data))

  }catch(err: any){
    console.log(err.response?.data || err.message)
    if(err.response?.status == 401){ 
      navigate("/login")
    }
  }
  }

  useEffect(() => {
    fetchContent()
  }, [])



  return (
    <div className="w-15 sm:w-80 p-2 pl-2 sm:pl-4 border-r-1 border-gray-400">
      <div className="flex items-center gap-2">
        <LogoIcon />
        <h1 className="font-bold text-xl hidden sm:block">Second Brain</h1>
      </div>
        <div className="mt-4 flex flex-col gap-2">

          <div className="flex text-gray-600 items-center gap-1 hover:bg-gray-200 px-2 p-1 rounded-md transition duration-200" onClick={() => dispatch(filterContent("all"))}>
            <p>All</p>
          </div>

          <div className="flex text-gray-600 items-center gap-1 hover:bg-gray-200 px-2 p-1 rounded-md transition duration-200" onClick={() => dispatch(filterContent("tweet"))}>
            <TwitterIcon />
            <p className="hidden sm:block">Tweets</p>
          </div>
          <div className="flex text-gray-600 items-center gap-1 hover:bg-gray-200 px-2 p-1 rounded-md transition duration-200"
          onClick={() => dispatch(filterContent("youtube"))}
          >
            <YoutubeIcon />
            <p className="hidden sm:block">Youtube</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
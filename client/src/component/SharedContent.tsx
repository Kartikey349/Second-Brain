import axios from "axios"
import { BACKEND_URL } from "../utils/config"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Card from "./Card";

const SharedContent = () => {

    interface Content {
        _id: string;
        type: string;
        title: string;
        link: string;
        userId: UserId;
    }

    interface UserId{
        username: string
    }

    const [content, setContent] = useState<Content[]>([])
    const [showExpired, setShowExpired] = useState(false)

    const {shareLink} = useParams();


    const fetchSharedContent = async() => {
        const res = await axios.get(BACKEND_URL + "/user/link/" + shareLink, {
            withCredentials: true
        }  )

        if(res.data === "link is expired"){
            setShowExpired(true)
        }
        setContent(res?.data)
    }

    useEffect(() => {
        fetchSharedContent()
    }, [])

    if (showExpired) {
    return <div className="flex justify-center pt-10 text-gray-600">Link Expired!!</div>;
    }

    if(content.length === 0){
        return <div className="flex justify-center pt-20">
                <h1 className="text-2xl text-gray-600">No Content Exists!!!</h1>
            </div>
    }


  return (
    <div>
        <div className="flex justify-center pt-5 text-xl">
            <h1 className="">Shared Content by <span className="font-semibold text-gray-600
            ">{content[0]?.userId?.username}</span></h1>
        </div>

        <div className="flex flex-wrap gap-4 p-4">
            {content.map((item: any) => <div key={item._id}><Card type={item.type} title={item.title} link={item.link} id={item._id} /></div> )}
            
        </div>
    </div>
  )
}

export default SharedContent
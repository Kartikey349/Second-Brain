import axios from "axios";
import DeleteIcon from "../icon/DeleteIcon";
import AddIcons, { ShareIcon } from "../icon/icons";
import { BACKEND_URL } from "../config";
import { useDispatch } from "react-redux";
import { removeContent } from "../utils/contentSlice";

interface CardProps{
    type: "youtube" | "tweet",
    title: string,
    link: string,
    id: any
}


const Card = (props: CardProps) => {

    const dispatch = useDispatch();

    const deleteHandler = async(id: any) => {
        try{
            const confirmed = window.confirm("Do you want to delete this memory??")

            if(!confirmed) return;

            const res = await axios.delete(BACKEND_URL + "/user/content", {
            data: { id },
            withCredentials: true,
        })
            dispatch(removeContent(id))
        }catch(err: any){
             console.error(err.response?.data || err.message);
        }
    }


  return (
    <div className="bg-white rounded-md border-gray-200 border w-76 p-4 mt-4 min-h-45">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-500">
                <AddIcons size="sm"/>
                <p className="font-semibold text-black">{props.title}</p>
            </div>
            <div className="flex gap-2 text-gray-500 items-center">
                <ShareIcon size="sm" />
                <div className="cursor-pointer" onClick={() => deleteHandler(props.id)}>
                    <DeleteIcon />
                </div>
            </div>
        </div>

        <div className="w-full mt-4">
           {props.type === "youtube" && <iframe className="w-full rounded-md" src={props.link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}


            {props.type === "tweet" && <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com", "twitter.com")}></a> 
            </blockquote>}
        </div>
    </div>
  )
}

export default Card;
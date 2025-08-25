import AddIcons, { ShareIcon } from "../icon/icons";

interface CardProps{
    type: "youtube" | "tweet",
    title: string,
    link: string,
}

const Card = (props: CardProps) => {
  return (
    <div className="bg-white rounded-md border-gray-200 border w-76 p-4 mt-4 min-h-45">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-500">
                <AddIcons size="sm"/>
                <p className="font-semibold text-black">{props.title}</p>
            </div>
            <div className="flex gap-2 text-gray-500">
                <ShareIcon size="sm" />
                <ShareIcon size="sm" />
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
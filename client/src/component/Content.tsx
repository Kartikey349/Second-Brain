import { useSelector } from "react-redux"
import Card from "./Card";

const Content = () => {
    const content = useSelector((store: any) => store.content.filtered)

  if (content.length === 0) {
    return <div>No Content</div>
  }

  return (
    content.map((data: any) => <div key={data._id}>
        <Card type={data?.type} title={data.title} link={data.link} id={data._id}/>
    </div>)
  )
}

export default Content
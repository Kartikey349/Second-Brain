import { useRef } from "react"
import CrossIcon from "../icon/CrossIcon"
import Button from "./Button"
import axios from "axios";
import { BACKEND_URL } from "../config";

const ModalComponent = ({open, close}) => {

  const typeRef = useRef<any>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const addContent = async() => {
    const type = typeRef?.current?.value;
    const title = titleRef?.current?.value;
    const link = linkRef?.current?.value;

    try{
      const content = await axios.post(BACKEND_URL + "/user/content", {
        type,
        title,
        link: link || " "
      }, {
        withCredentials: true
      })
      alert("Succesfully saved")
    }catch(err: any){
      console.log(err.response.data)
    }
  }

if(open)
  return (
    <div className="w-screen h-screen fixed left-0 bottom-0 bg-black/60 flex justify-center items-center">
        <div className="w-5/12 bg-black/80 h-70 flex flex-col p-4 rounded-lg">
            <div className="w-full flex justify-end" onClick={() => close(false)}>
                <CrossIcon />
            </div>

            <select className="bg-white border border-gray-300 
            rounded-md px-1 py-2 
            text-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            w-full my-2" ref={typeRef}>
              <option className="">Choose Type</option>
              <option value={"youtube"}>Youtube</option>
              <option value={"tweet"}>Tweet</option>
            </select>

            <Input ref={titleRef}
             placeholder={"Title"} />
            <Input ref={linkRef} placeholder={"Link"} />
            <div className="mt-2 flex w-full justify-center"></div>

          <div onClick={addContent}>
            <Button variant="primary" size="md" text="Submit" />
          </div>
        </div>
    </div>
  )
}

interface InputProps {
    placeholder: string,
    ref: any
}


export const Input = (props: InputProps) => {
   return <input ref ={props.ref} type="text" className="p-2 bg-white my-2 rounded-sm border-1 border-gray-400" placeholder={props.placeholder} />
}

export default ModalComponent;
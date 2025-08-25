import CrossIcon from "../icon/CrossIcon"
import Button from "./Button"

const ModalComponent = ({open , close}) => {
if(open)
  return (
    <div className="w-screen h-screen absolute left-0 bottom-0 bg-black/60 flex justify-center items-center" onClick={() => close(false)}>
        <div className="w-5/12 bg-black/80 h-60 flex flex-col p-4 rounded-lg" onClick={(e) => e.stopPropagation()} >
            <div className="w-full flex justify-end" onClick={() => close(false)}>
                <CrossIcon />
            </div>
            <Input ref={null}
             placeholder={"Title"} />
            <Input ref={null} placeholder={"Link"} />
            <div className="mt-2 flex w-full justify-center"></div>

            <Button variant="primary" size="md" text="Submit" />
        </div>
    </div>
  )
}

interface InputProps {
    placeholder: string,
    ref: any
}


export const Input = (props: InputProps) => {
   return <input ref={props.ref} type="text" className="p-2 bg-white my-2 rounded-sm border-1 border-gray-400" placeholder={props.placeholder} />
}

export default ModalComponent;
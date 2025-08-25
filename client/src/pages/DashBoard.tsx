import { useState } from "react"
import Button from "../component/Button"
import Card from "../component/Card"
import ModalComponent from "../component/ModalComponent"
import Sidebar from "../component/Sidebar"
import AddIcons from "../icon/icons"
import { ShareIcon } from "../icon/icons"
import Content from "../component/Content"

function DashBoard() {

  const [showAdd, setShowAdd] = useState(false)

  return (
    <div className="flex" >
     <Sidebar />
     <ModalComponent open={showAdd} close={setShowAdd}  />

  <div className="w-full bg-gray-200 p-2 min-h-screen">
    <div className="flex justify-between items-center">
        <p className=" ml-5 font-semibold">All Notes</p>

        <div className="flex gap-3 items-center justify-end">

          <Button variant="secondary"
          startIcon={<ShareIcon size="sm"/>}
          size="md" onclick={() => {}} text="Share Brain" />

        <div onClick={() => setShowAdd(true)}>
          <Button variant="primary" size="md" onclick={() => {}} text="Add Content"
            startIcon={<AddIcons size= "sm" />}
            />
        </div>
      </div>
    </div>


      <div className="flex gap-2 flex-wrap">
        <Content />
      </div>
      </div>
    </div>
  )
}

export default DashBoard

import { useState } from "react"
import Button from "../component/Button"
import ModalComponent from "../component/ModalComponent"
import Sidebar from "../component/Sidebar"
import AddIcons from "../icon/icons"
import { ShareIcon } from "../icon/icons"
import Content from "../component/Content"
import axios from "axios"
import { BACKEND_URL } from "../utils/config"

function DashBoard() {

  const [showAdd, setShowAdd] = useState(false)

  const handleShare = async () => {
    const confirmation = window.confirm("Do you want on sharing??")

    const res = await axios.post(BACKEND_URL + "/user/link", {
      share: confirmation ? true : false
    }, {
      withCredentials: true
    })

    alert(res.data.hash ? `${BACKEND_URL}/user/link/${res.data.hash}` : res.data)
  }

  return (
    <div className="flex" >
     <Sidebar />
     <ModalComponent open={showAdd} close={setShowAdd}  />

  <div className="w-full bg-gray-200 p-2 min-h-screen">
    <div className="flex justify-between items-center">
        <p className="ml-2 sm:ml-5 font-semibold">All Notes</p>

      <div className="sm:hidden flex gap-3 items-center justify-end">

          <div onClick={handleShare}>
            <Button variant="secondary"
            startIcon={<ShareIcon size="sm"/>}
            size="sm" onclick={() => {}} text="Share Brain" />
          </div>

          <div onClick={() => setShowAdd(true)}>
            <Button variant="primary" size="sm" onclick={() => {}} text="Add Content"
              startIcon={<AddIcons size= "sm" />}
              />
          </div>
      </div>

        <div className="hidden sm:flex gap-3 items-center justify-end">
          <div onClick={handleShare}>
            <Button variant="secondary"
            startIcon={<ShareIcon size="md"/>}
            size="md" onclick={() => {}} text="Share Brain" />
          </div>

        <div onClick={() => setShowAdd(true)}>
          <Button variant="primary" size="md" onclick={() => {}} text="Add Content"
            startIcon={<AddIcons size= "md" />}
            />
        </div>
      </div>

    </div>


      <div className="flex justify-center gap-2 flex-wrap">
        <Content />
      </div>
      </div>
    </div>
  )
}

export default DashBoard

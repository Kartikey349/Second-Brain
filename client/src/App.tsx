import { useState } from "react"
import Button from "./component/Button"
import Card from "./component/Card"
import ModalComponent from "./component/ModalComponent"
import Sidebar from "./component/Sidebar"
import AddIcons from "./icon/icons"
import { ShareIcon } from "./icon/icons"

function App() {

  const [showAdd, setShowAdd] = useState(false)

  return (
    <div className="flex" >
     <Sidebar />
     <ModalComponent open={showAdd} close={setShowAdd}  />

  <div className="w-full bg-gray-200 p-2 min-h-screen">
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


      <div className="flex gap-2">

        <Card title="Random shit" link="https://www.youtube.com/embed?v=uE925hp9KDk" type="youtube"/>

        <Card title="tweet" link="https://twitter.com/Hartdrawss/status/1959577095236960282" type="tweet"/>
      </div>
      </div>
    </div>
  )
}

export default App

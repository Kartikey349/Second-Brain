import Button from "./component/Button"
import Card from "./component/Card"
import AddIcons from "./icon/icons"
import { ShareIcon } from "./icon/icons"

function App() {

  return (
    <div >

    <div className="flex gap-3 mt-4 items-center justify-end px-6">

      <Button variant="secondary"
      startIcon={<ShareIcon size="sm"/>}
      size="md" onclick={() => {}} text="Share Brain" />

      <Button variant="primary" size="md" onclick={() => {}} text="Add Content"
        startIcon={<AddIcons size= "sm" />}
        />
    </div>


      <div className="flex gap-2">

        <Card title="Random shit" link="https://www.youtube.com/embed?v=uE925hp9KDk" type="youtube"/>

        <Card title="tweet" link="https://twitter.com/Hartdrawss/status/1959577095236960282" type="tweet"/>
      </div>
    </div>
  )
}

export default App

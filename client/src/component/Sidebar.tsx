import TwitterIcon from "../icon/twitterIcon"

const Sidebar = () => {
  return (
    <div className="w-100 p-2 border-r-1 border-gray-400">
        <h1 className="text-purple-600 font-bold">Second Brain</h1>
        <div>
          <div className="flex text-gray-600">
            <TwitterIcon />
            <p>Tweets</p>
          </div>
          <div>
            <p>Youtube</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
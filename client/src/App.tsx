import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoard from "./pages/DashBoard"
import Login from "./component/Login"
import { Provider } from "react-redux"
import appStore from "./utils/store"
import SharedContent from "./component/SharedContent"

function App() {

  return (
  <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/link/:shareLink" element={<SharedContent />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App

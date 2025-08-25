import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import DashBoard from "./pages/DashBoard"
import Login from "./component/Login"
import { Provider } from "react-redux"
import appStore from "./utils/store"

function App() {

  return (
  <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App

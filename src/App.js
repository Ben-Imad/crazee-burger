import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/order/OrderPage"
import ErrorPage from "./components/pages/ErrorPage"
import Layout from "./components/pages/Layout"

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:name" element={<OrderPage />} />
        <Route path="/pageQuiNExistePas" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    {/* <LoginPage /> */}
  </>

}

export default App
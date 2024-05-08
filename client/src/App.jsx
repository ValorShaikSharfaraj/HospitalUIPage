import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Consulting from "./pages/Consulting"
import Apps from "./pages/Apps"
import Testimonials from "./pages/Testimonials"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./components/Header";


export default function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/consulting" element={<Consulting/>} />
      <Route path="/apps" element={<Apps/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>
  )
}


import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import FindADoctor from "./pages/FindADoctor"
import Apps from "./pages/Apps"
import Testimonials from "./pages/Testimonials"
import SignIn from "./pages/SignIn"

import SignUp from "./pages/SignUp"

export default function App() {
  return <BrowserRouter>
    <Route path="/" element={<Home/>}/>
    <Route path="/findadoctor" element={<FindADoctor/>} />
    <Route path="/apps" element={<Apps/>}/>
    <Route path="/testimonials" element={<Testimonials/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>


  </BrowserRouter>
}

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./Laylout";
import Home from "./pages/home";
import Insert from "./pages/insert";
import Display from "./pages/display";
import Update from "./pages/update";
import Contact from "./pages/contact";
import Search from "./pages/search";
const App=()=>{



  return(
    
      <>
  
       <BrowserRouter>
       <Routes>

        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>
        <Route path="update" element={<Update/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="search" element={<Search/>}/>





        </Route>
       </Routes>
       
       </BrowserRouter>
    </>
  )
}
export default App;

import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Layout from "./Laylout";
import Home from "./pages/home";
import Display from "./pages/display";
import Insert from "./pages/insert";


const App=()=>{



  return( 
    <>

<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="home" element={<Home/>} />
      <Route path="display" element={<Display/>} />
      <Route path="insert" element={<Insert/>} />

       
    </Route>
    </Routes>
    
    </BrowserRouter>
   
    </>
  )
}
export default App;

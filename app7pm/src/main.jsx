import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
{
    /* The following line can be included in your src/index.js or App.js file */
  }
  import 'bootstrap/dist/css/bootstrap.min.css';
  
import "./style.css";
createRoot(document.getElementById('root')).render(<App/>)

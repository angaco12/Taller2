import {  BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import { CartsProvider } from "./context/CartsContext"
import Play from "./pages/Play"


function App() {


  return (
    <CartsProvider>
    <BrowserRouter>
      <Routes>
      <Route path ='/' element={<Dashboard />}/>
      <Route path ='/play' element={<Play/>}></Route>
      </Routes>		
      </BrowserRouter>
    </CartsProvider>
  )
}

export default App

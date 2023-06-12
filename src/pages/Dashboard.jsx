import {  useContext } from "react";
import CartsContext from "../context/CartsContext";
import { Link } from 'react-router-dom';
export const Dashboard = () => {
     
    const {jugador1, handleInputChange} = useContext(CartsContext) 
    const {jugador2, handleInputChange2} = useContext(CartsContext) 
    const {setEstado} = useContext(CartsContext)
    
      
    return (
      <div>Pagina principal
        <div><p>Jugador 1</p>
        <input type="text" value={jugador1} onChange={handleInputChange} />
         </div>
        <div><p>Jugador 2</p>
        <input type="text" value={jugador2} onChange={handleInputChange2} />
        </div>
        <Link to= "/play">
        <button onClick={()=> setEstado(false) } to="/play">
            Login</button>
        </Link>
       </div>
    )
  }
  
  export default Dashboard;
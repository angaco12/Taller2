import { useContext } from "react";
import CartsContext from "../context/CartsContext";
   
const CardExtra = () => {
     let src = 0
    const {extra1} = useContext(CartsContext)
           console.log(extra1)
           if (extra1[0] != null){
               src = extra1[0].image
           }else
            src = "SIN CARTA EXTRA"
          return(
            <div>
            <div>CARTA EXTRA</div>
            <img src={src}></img>
            </div>
          )
}

export default CardExtra;
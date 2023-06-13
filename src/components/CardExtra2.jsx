import { useContext } from "react";
import CartsContext from "../context/CartsContext";
   
const CardExtra2 = () => {
     let src = 0
    const {extra2} = useContext(CartsContext)
           console.log(extra2)
           if (extra2[0] != null){
               src = extra2[0].image
           }else
            src = "SIN CARTA EXTRA"
          return(
            <div>
            <div>CARTA EXTRA</div>
            <img src={src}></img>
            </div>
          )
}

export default CardExtra2;
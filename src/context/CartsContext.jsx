import axios from "axios";
import { createContext, useEffect, useState } from"react";

const CartsContext = createContext();

const CartsProvider = ({children})=>{
    let data = '';
    const [jugador1, setjugador1] = useState('jugador1');
    const [jugador2, setjugador2] = useState('jugador2');
    const [cartas1, setCartas1] = useState([]);
    const [cartas2, setCartas2] = useState([]);
    const [estado, setEstado] = useState(true);
    const [deckid, setDeckid] = useState(null);
    
    useEffect(() => {
        const Login = async ()=> {
            console.log(estado);
            const url = `https://deckofcardsapi.com/api/deck/new/`
            const response = await axios(url);
            data = response.data.deck_id
            setDeckid(data);
            console.log(data);
            console.log(deckid);

            const url1 = `https://deckofcardsapi.com/api/deck/${data}/draw/?count=10`
            const response1 = await axios(url1);
            setCartas1  (response1.data.cards)
            console.log(response1);
            console.log(cartas1);

            const url2 = `https://deckofcardsapi.com/api/deck/${data}/draw/?count=10`
            const response2 = await axios(url2);
            setCartas2  (response2.data.cards)
            console.log(response2);
            console.log(cartas2);
            };  
            Login();     
        }, [estado])        
        
        const handleInputChange = (e) =>{
            setjugador1(e.target.value)
        };

        const handleInputChange2 = (e) =>{
            setjugador2(e.target.value)
        };
         
    return (
             <CartsContext.Provider 
              value = {{data, jugador1, jugador2, handleInputChange, handleInputChange2, estado, setEstado, cartas1, cartas2}}>
                {children}
    
             </CartsContext.Provider>
    );
}
export {CartsProvider}
export default CartsContext;


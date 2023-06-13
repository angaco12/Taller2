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
    const [cardExtra, setCardExtra] = useState(0);
    const [extra1, setExtra1]= useState([]);
    const [extra2, setExtra2]= useState([]);
    let id = deckid;
    
    useEffect(() => {
        const Login = async ()=> {
            console.log(estado);
            const url = `https://deckofcardsapi.com/api/deck/new/`
            const response = await axios(url);
            data = response.data.deck_id
            setDeckid(data);
            console.log(data);
            console.log(deckid);
             id= deckid;

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

        useEffect(()=>{
            console.log(id);
            const cardExtra = async() => {
                const e1 =  `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
                const respextra1 = await axios(e1);
                setExtra1(respextra1.data.cards)
                console.log(respextra1)
                console.log(extra1);

                const e2 =  `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
                const respextra2 = await axios(e2);
                setExtra2(respextra2.data.cards)
                console.log(respextra2)
                console.log(extra2)
            }
            cardExtra();
  

        }, [cardExtra])
         
    return (
             <CartsContext.Provider 
              value = {{cardExtra, data, jugador1, jugador2, handleInputChange, handleInputChange2, estado, setEstado, cartas1, cartas2, extra1, extra2, setCardExtra}}>
                {children}
    
             </CartsContext.Provider>
    );
}
export {CartsProvider}
export default CartsContext;


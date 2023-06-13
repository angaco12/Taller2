import { useContext } from "react";
import CartsContext from "../context/CartsContext";
import Grid from '@mui/material/Grid';
import Card from "../components/Card"
import CardExtra from "../components/CardExtra";
import CardExtra2 from "../components/CardExtra2";

export const Play = () => {

    const { jugador1, jugador2 } = useContext(CartsContext)
    const {cartas1} = useContext(CartsContext)
    const {cartas2} = useContext(CartsContext)
    const {setCardExtra} = useContext(CartsContext)
    const {cardExtra} = useContext(CartsContext)



    return (
        <div>Vamos a jugar
            <div><button onClick={(()=> setCardExtra(cardExtra + 1))}>CARD EXTRA</button>
            </div>
            <div>
                {jugador1}
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 10, md: 20 }}>
                    {cartas1.map((card, index) => (
                        <Grid item xs={1} sm={1} md={1} key={index}>
                            <Card card={card}></Card>
                        </Grid>
                    ))}
                </Grid>
                <CardExtra></CardExtra>
            </div>
            <div>
                {jugador2}
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 10, md: 20 }}>
                    {cartas2.map((card, index) => (
                        <Grid itemxs={1} sm={1} md={1} key={index}>
                            <Card card={card}></Card>
                        </Grid>
                    ))}
                </Grid>
                <CardExtra2></CardExtra2>
            </div>
        </div>
    )

}

export default Play;
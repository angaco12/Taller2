import { useContext } from "react";
import CartsContext from "../context/CartsContext";
import Grid from '@mui/material/Grid';
import Card from "../components/Card"

export const Play = () => {

    const { jugador1, jugador2 } = useContext(CartsContext)
    const {cartas1} = useContext(CartsContext)
    const {cartas2} = useContext(CartsContext)

    return (
        <div>Vamos a jugar
            <div>
                {jugador1}
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 10, md: 20 }}>
                    {cartas1.map((card, index) => (
                        <Grid item xs={1} sm={1} md={1} key={index}>
                            <Card card={card}></Card>
                        </Grid>
                    ))}
                </Grid>
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
            </div>
        </div>
    )

}

export default Play;
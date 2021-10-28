import { Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { getAllCards } from '../../features/counter/cardSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import CardCatalogue from '../../components/cardCatalogue/CardCatalogue'
const Home = () => {
    const dispatch = useAppDispatch()
    const status = useAppSelector((state)=>state.card.status)
    const cards = useAppSelector((state)=> state.card.cards)
    useEffect(()=>{
        if(cards.length ===0){
            dispatch(getAllCards())
        }
    },[])
    return (
        <div>
            <Grid container  direction='column' style={{backgroundImage:'url("https://wallpapercave.com/wp/wp2757956.gif")'}}>
                <Grid item xs={12}>
                
                </Grid>
                <Grid item xs={12}>
                    {status === 'succeded' ?     
                        <CardCatalogue/>
                    : <Typography> No hay cartas</Typography>
                }
                </Grid>
            </Grid>
        </div>
    )
}

export default Home

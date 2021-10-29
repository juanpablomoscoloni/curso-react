import { Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { getAllCards } from '../../features/counter/cardSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import CardCatalogue from '../../components/cardCatalogue/CardCatalogue'
import HeadHome from '../../components/headHome/HeadHome'
import { makeStyles } from '@mui/styles';
const Home = () => {
    const dispatch = useAppDispatch()
    const status = useAppSelector((state)=>state.card.status)
    const cards = useAppSelector((state)=> state.card.cards)
    useEffect(()=>{
        if(cards.length ===0){
            dispatch(getAllCards())
        }
    },[])
    const styles : any = makeStyles({
        General: {
            backgroundColor:'#C1794F'
        },
    })
    const classes = styles()
    return (
        <div className={classes.General}>
            <Grid container  direction='column' >
                <Grid item xs={12}>
                <HeadHome/>
                </Grid>
                <Grid item xs={12} marginTop={1}>
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

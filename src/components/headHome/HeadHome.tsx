import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { bgcolor, Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Selects from '../selects/Selects'
import {filters} from '../../utils/interfaces'
import { getCardsByType, getCardsByAttribute, getCardsByOrder,getCardsByRace, setFilters } from '../../features/counter/cardSlice';
const HeadHome = () => {
    const juegos = useAppSelector((state)=> state.card.cards)
    const dispatch= useAppDispatch()
    const [img,setImg]=  useState('https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg')
    const status = useAppSelector((state)=> state.card.status)
    const styles : any = makeStyles({
        containerPortada: {
            backgroundImage:`url("${img}")`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            marginBottom:5,
        },
    })

    const handleClick = (dataFilters:string, tipo:string)=>{
        if(tipo === 'Attribute'){
            dispatch(getCardsByAttribute(dataFilters))
            dispatch(setFilters({type:tipo, value:dataFilters}))
        }else
        if(tipo === 'Order'){
            dispatch(setFilters({type:tipo, value:dataFilters}))
            dispatch(getCardsByOrder(dataFilters))
        }else
        if(tipo === 'Race'){
            dispatch(getCardsByRace(dataFilters))
            dispatch(setFilters({type:tipo, value:dataFilters}))
        }else
        if(tipo === 'Type'){
            dispatch(getCardsByType(dataFilters))
            dispatch(setFilters({type:tipo, value:dataFilters}))
        }
    }
    const classes = styles()
    return (
        <div>
        <Paper elevation={2} className={classes.containerPortada}  square>
            <Grid container direction='column' spacing={5}>
                <Grid item sm/>
                <Grid item sm/>
                <Grid item sm/>
                <Grid item sm/>
            </Grid>
        </Paper>
        <Grid item xs={12}>
        <Box bgcolor='#7E89A5' height={40} display='flex' alignItems='center'>  
        <Grid container direction='row' alignContent='center'>
            <Grid item xs={3} >
                <Selects  handleClick={handleClick} optionsSelect={filters.attribute} title={'Attribute'} titleDialog={'Filter By Atribute'}/>
            </Grid>
            <Grid item xs={3}>
                <Selects handleClick={handleClick} optionsSelect={filters.race} title={'Race'} titleDialog={'Filter By Race'}/>
            </Grid>
            <Grid item xs={3} >
                <Selects handleClick={handleClick} optionsSelect={filters.type} title={'Type'} titleDialog={'Filter By Type'}/>
            </Grid>
            <Grid item xs={3}>
                <Selects handleClick={handleClick} optionsSelect={filters.order} title={'Order'} titleDialog={'Order By..'}/>
            </Grid>
        </Grid>
        </Box>     
        </Grid>
        </div>
    )
}

export default HeadHome
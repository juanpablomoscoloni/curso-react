import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { bgcolor, Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Selects from '../selects/Selects'
import {filters, Parameters} from '../../utils/interfaces'
import InfoProfile from '../user/UserProfile'
import { getCardsByType, getCardsByAttribute, getCardsByOrder,getCardsByRace, setFilters } from '../../slices/cardSlice';
const HeadHome = () => {
    const juegos = useAppSelector((state)=> state.card.cards)
    const dispatch= useAppDispatch()
    const [img,setImg]=  useState('https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg')
    const status = useAppSelector((state)=> state.card.status)
    const styles : any = makeStyles({
        containerPortada: {
            backgroundImage:`url("${img}")`,
            backgroundRepeat:'no-repeat',
            backgroundSize: 'contain',
            marginBottom:5,
        },
        colorFondo:{
  
            backgroundColor:'#E62420',
            paddingBottom:'5px'
        },   
        colorFondoUser:{
  
            backgroundColor:'White'
        } 
    })

    const handleClick = (dataFilters:string, tipo:string)=>{
        if(tipo === 'Attribute'){
            let param: Parameters = {
                query: dataFilters,
                offset: 0
            };
            dispatch(getCardsByAttribute(param))
            dispatch(setFilters({type:tipo, value:dataFilters}))
        }else
        if(tipo === 'Order'){
            let param: Parameters = {
                query: dataFilters,
                offset: 0
            };
            dispatch(setFilters({type:tipo, value:dataFilters}))
            dispatch(getCardsByOrder(param))
        }else
        if(tipo === 'Race'){
            let param: Parameters = {
                query: dataFilters,
                offset: 0
            };
            dispatch(getCardsByRace(param))
            dispatch(setFilters({type:tipo, value:dataFilters}))
        }else
        if(tipo === 'Type'){
            let param: Parameters = {
                query: dataFilters,
                offset: 0
            };
            dispatch(getCardsByType(param))
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
        <Grid className={classes.colorFondoUser}> 
        <Grid item xs={12}>
                    <InfoProfile/>
                </Grid>
        </Grid>
        <Grid item xs={12} className={classes.colorFondo}>
        <Box className={classes.colorFondo} height={40} display='flex' alignItems='center'>  
        <Grid container direction='row' alignContent='center' style={{ border: '3px solid black' }} className={classes.colorFondo}>
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
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import CardsCard from '../cardsCard/CardsCard'
import PaginationGame from '../paginationGame/PaginationGame'

interface Props {
    cantidadPages:number
}
const CardCatalogue = () => {
    const cards = useAppSelector((state)=> state.card.cards)
    return (
        <Grid container direction='column'>
            <Grid container direction='row' spacing={2} justifyContent='center'>
                {cards.length > 0 ?
                cards.map((item,index) => {
                     return <Grid item key={index}>
                                 <CardsCard 
                                 image={item.card_images[0].image_url} 
                                 title={item.name} 
                                 description={item.desc}
                                 id={item.id}
                                 />
                            </Grid>
                    }):

               'Cargando..'
            }
            </Grid>
            </Grid>
)
}

export default CardCatalogue

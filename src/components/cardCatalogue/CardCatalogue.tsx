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
    const page = useAppSelector((state) => state.card.page)
    return (
        <Grid container direction='column'>
            <Grid container direction='row' spacing={2} justifyContent='center'>
                {cards.length > 0 ?
                cards.map((item,index) => {
                     return <Grid item key={index}>
                                 <CardsCard 
                                 card={item} 
                                 />
                            </Grid>
                    }):

               'Cargando..'
            }
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent='center'>
                    <PaginationGame
                     previousPage={page.previosPageLink}
                     nextPage={page.nextPageLink}
                    countPages={page.pages}
                    />
                </Grid>
            </Grid>
            </Grid>
)
}

export default CardCatalogue

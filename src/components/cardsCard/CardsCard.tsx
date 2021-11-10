import * as React from 'react';
import Cards from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import IconButton from '@mui/material/IconButton';
import { removeFavorites, setFavorites } from '../../slices/favoritesSlice';
import {Card}  from '../../utils/interfaces';
import  Favorite  from './Favorite'

interface Props {
  card: Card
}
export default function CardsCard({card}: Props) {
  const history= useHistory()
  const dispatch = useAppDispatch()
  const favorite = useAppSelector((state)=> state.favorites.favorites).filter(item=> item.id === card.id)

  const handleClick = (active:boolean)=>{
    if(active){
      dispatch(setFavorites(card))
    }else{
      dispatch(removeFavorites(card.id))

    }
  }

  return (
    <Cards sx={{ maxWidth:300, backgroundColor:'#D8D8D8', border: '3px solid black' }} >
      <CardMedia
        component="img"
        image={card.card_images[0].image_url}
        onClick={()=> history.push(`/detail/${card.id}`)}
      />
       <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite active={favorite.length > 0} onChange={(active:boolean)=>handleClick(active)}/>
        </IconButton>
      </CardActions>
    </Cards>
  );
}

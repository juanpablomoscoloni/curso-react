import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';

interface Props {
  image: string,
  title:string,
  description:string,
  id:number
}
export default function CardsCard({image, title, description, id}: Props) {
  const history= useHistory()
  return (
    <Card sx={{ maxWidth: 345, minWidth:345, minHeight:650, maxHeight:650, backgroundColor:'#D8D8D8', border: '3px solid black' }} >
      <CardMedia
        component="img"
        height="300"
        image={image}
        onClick={()=> history.push(`/detail/${id}`)}
      />
      <CardContent style={{backgroundColor:'#D8D8D8'}}  >
        <Typography color='red' gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="caption" color='dark'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

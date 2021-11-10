import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router';
import { type } from 'os';
import { stringify } from 'querystring';
import { Parameters } from '../../utils/interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCardsByType, getCardsByAttribute, getCardsByOrder,getCardsByRace, getAllCards,setCards } from '../../slices/cardSlice';


interface Props {
  previousPage: string,
  nextPage: string,
  countPages: number
}

//! hasta: page x cantidad de juegos (30)
//! desde : page -1 x cantidad de juegos(30)

//page 1 = 0,30
//page 2 = 30,60
//page 3 = 60,90



export default function PaginationGame({previousPage,nextPage,countPages}:Props) {
  const dispatch= useAppDispatch()
  const filters = useAppSelector((state)=> state.card.filters);
  let cards = useAppSelector((state)=> state.card.cards);
  const page = useAppSelector((state)=> state.card.page.currentPage);
  const pages = useAppSelector((state)=> state.card.returnedPages);
  const styles = makeStyles(()=>({
      colorPagination:{
          "& li button":{
              color:'red',
              fontSize:20
          },
          "& li button svg":{
            fontSize:30
        }
      }
  }))
  const classes = styles()
  const handleChange = (event:object, value: number) => {
    if(filters.Order != ""){
      let parameter: Parameters = {
        query: filters.Order,
        offset: (value -1) * 20
    };
      dispatch(getCardsByOrder(parameter))
    } else if (filters.Attribute !== ""){
      let parameter: Parameters = {
        query: filters.Attribute,
        offset: (value -1) * 20
    };
    let bool: boolean = false;
    let indexA : number = 0;
    pages.map((item,index) => {
     if(item.page === value && item.attribute === filters.Attribute){
       bool = true;
       indexA = index
     }
     })
     bool ? dispatch(setCards(pages[indexA]))
     :
      dispatch(getCardsByAttribute(parameter))
    }else if (filters.Race !== ""){
      let parameter: Parameters = {
        query: filters.Race,
        offset: (value -1) * 20
    };
      dispatch(getCardsByRace(parameter))
    } else if( filters.Type !== ""){
      let parameter: Parameters = {
        query: filters.Type,
        offset: (value -1) * 20
    };
      dispatch(getCardsByType(parameter))
    } else {
       let offset: number = (value -1) * 20;
      dispatch(getAllCards(offset))
    }
    
  };

  return (
    <Stack spacing={2}>
        <Box color='green'  marginTop={3}  marginBottom={3}>
      <Pagination color='secondary' className={classes.colorPagination} count={countPages} page={page} onChange={handleChange} />
        </Box>
    </Stack>
  );
}

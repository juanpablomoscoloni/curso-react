import { Grid, Paper, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getCardDetail } from '../../slices/cardDetailSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import PaperImage from '../../components/paperImage/PaperImage'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useHistory } from 'react-router';
import { db } from '../../components/firebase/firebase'
import  CommentForm from '../../components/CommentForm/CommentForm'

const Details = () => {
    const params: { id: string } = useParams()
    const dispatch = useAppDispatch()
    const detail = useAppSelector((state) => state.cardDetail.detail)
    const status = useAppSelector((state) => state.cardDetail.status)
    const logueado = useAppSelector((state) => state.auth)
    useEffect(() => {
        dispatch(getCardDetail(params.id))
    }, [])

    type CommentData = {
        description: string,
        email: string,
        title : string
    }

    const customOnSubmit = (data:CommentData) => {
        console.log(data)
        let obj = {
            description: data.description,
            email: logueado.user.mail,
            title : data.title,
            cardId:params.id
        }
        db.collection("comments").doc().set(obj)
    }
    const history= useHistory()
    return (
        <Grid container direction='column' >
            <Grid item xs={4} alignItems='left' marginBottom="2%">
                <Button onClick={()=> history.push(`/`)}>Volver</Button>
            </Grid>
            <Grid item xs={12} marginBottom={10}>
                <Grid container direction='column'>
                    <Grid item xs={12} marginBottom="5%">
                        <Grid container direction='row' justifyContent='center'>

                            {detail &&
                                <Grid item xs={12} sm={8}>
                                    <Grid container direction='row' justifyContent='center'>
                                        {<Grid item>
                                            <PaperImage img={detail.card_images[0].image_url} />
                                        </Grid>}
                                    </Grid>

                                </Grid>

                            }
                        </Grid>
                    </Grid>

                    <Grid item xs={6} sm={4} alignItems='left' paddingLeft="15%" paddingRight="15%">
                        <TableContainer component={Paper} color="red" >
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">Type</TableCell>
                                        <TableCell align="right">Level</TableCell>
                                        <TableCell align="right">Race</TableCell>
                                        <TableCell align="right">Archetype</TableCell>
                                        <TableCell align="right">ATK</TableCell>
                                        <TableCell align="right">DEF</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="right">
                                            {detail?.type}
                                        </TableCell>
                                        <TableCell align="right">{detail?.level}</TableCell>
                                        <TableCell align="right">{detail?.race}</TableCell>
                                        <TableCell align="right">{detail?.archetype}</TableCell>
                                        <TableCell align="right">{detail?.atk}</TableCell>
                                        <TableCell align="right">{detail?.def}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </Grid>
                </Grid>
            </Grid>
                 {  logueado.logueado === true ?       
                <Grid item xs={12}>
                    <Grid container direction='row' justifyContent='center'>
                        <Grid item xs={12} sm={6}>
                            <CommentForm customOnSubmit={customOnSubmit}/>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid item xs={12}>
                 <Typography>Logueate para dejar un comentario</Typography>
                </Grid>
                }
        </Grid>
    )
}

export default Details

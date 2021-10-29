import { Grid, Paper, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getCardDetail } from '../../features/card/cardDetailSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import PaperImage from '../../components/paperImage/PaperImage'
import { Box, maxWidth } from '@mui/system'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useHistory } from 'react-router';


const Details = () => {
    const params: { id: string } = useParams()
    const dispatch = useAppDispatch()
    const detail = useAppSelector((state) => state.cardDetail.detail)
    const status = useAppSelector((state) => state.cardDetail.status)
    useEffect(() => {
        dispatch(getCardDetail(params.id))
    }, [])
    const history= useHistory()
    return (
        <Grid container direction='column' >
            <Grid item xs={12} alignItems='left'>
                <Button   onClick={()=> history.push(`/`)}>Volver</Button>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction='column'>
                    <Grid item xs={12} >
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

                    <Grid item xs={6} sm={4} alignItems='center'>
                        <TableContainer component={Paper}>
                            <Table  aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Type</TableCell>
                                        <TableCell align="right">Level</TableCell>
                                        <TableCell align="right">Race</TableCell>
                                        <TableCell align="right">Archetype</TableCell>
                                        <TableCell align="right">ATK</TableCell>
                                        <TableCell align="right">DEF</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
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
        </Grid>
    )
}

export default Details

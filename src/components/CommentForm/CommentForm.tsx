import React from 'react';
import { useForm, NestedValue } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import { Button, Grid, Paper, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { db } from '../firebase/firebase';

type CommentData = {
    description: string,
    email: string,
    title : string
}

interface Props {
    customOnSubmit: (arg:CommentData)=> void
}

 const  CommentForm =({customOnSubmit}:Props)=> {
    const styles = makeStyles({
        input:{
            '& input':{
                color:'blue', 
                border:'1px solid blue'
            }
        }
    })
    const classes = styles()
  const { register, handleSubmit, watch, setValue, setError, formState: { errors } } = useForm<{
    title:string,
    description:string
  }>({
  });
  console.log(errors)  
  const onSubmit = handleSubmit(customOnSubmit);
   React.useEffect(() => {
    register('title', {
        maxLength:{value:20,message:'too long'},
        minLength:{value:2, message:'too short'},
        required:'Required',         
   });
   register('description', {
    maxLength:{value:200,message:'too long'},
    minLength:{value:7, message: 'too short'},
    required:'Required',         
});
   }, [register]);

  return (   
      <Paper>
        <form onSubmit={onSubmit}>
            <Grid container direction='column'>
                <Grid item xs >
                    <Typography variant='h4' color='black'>
                       Put your comment!
                    </Typography>
                </Grid>
                <Grid item xs>
                    <TextField 
                    variant='outlined' 
                    type='text'
                    fullWidth
                    className={classes.input}
                    placeholder={'Title'}
                    onChange={(e:any) => {setValue('title', e.target.value)}}
                    error={errors && errors.title ? true : false}
                    helperText={errors && errors.title ? errors.title.message : null}
                    />
                </Grid>
                <Grid item xs>
                    <TextField 
                    fullWidth
                    variant='outlined' 
                    type='text'
                    className={classes.input}
                    placeholder={'Description'}
                    onChange={(e:any) => {setValue('description', e.target.value)}}
                    error={errors && errors.description ? true : false}
                    helperText={errors && errors.description ? errors.description.message : null}
                    />
                </Grid>
                <Grid item xs>
                    <Button sx={{margin:4}} color='secondary' variant='contained' type='submit'> Sent</Button>
                </Grid>
            </Grid>
        </form>
        </Paper>
  );
}
export default CommentForm
import React, { useEffect, useState } from 'react'
// import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
// import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
interface Props {
    active: boolean,
    onChange : (arg : boolean)=> void
}
const Favorite = ({active, onChange}:Props) => {
const [check,setCheck] = useState(active)


const handleChange = (active:boolean)=>{
    setCheck(active)
    onChange(active)
}


    useEffect(()=>{
        setCheck(active)
    },[active])

    if(check){
        return <FavoriteIcon color='error' fontSize='large' onClick={()=> handleChange(false)}/>
    }else{
        return <FavoriteBorderIcon color='secondary' fontSize='large' onClick={()=> handleChange(true)}/>
    }


}

export default Favorite

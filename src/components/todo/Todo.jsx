import React from 'react'
import { Grid, Card, IconButton } from '@mui/material'
import { Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


const Todo = ({val, id, handleDelete}) => {
    const handleDel = () => {
        handleDelete(id)
    }
    return (
        <>
            <Grid item container justifyContent='center'
                alignItems='center'>
                <Grid item xs={1} >
                    <IconButton onClick={handleDel} >
                        <DeleteIcon sx={{color:"red", fontSize:"medium"}}/>
                    </IconButton>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={9}>
                    {val}
                </Grid>
            </Grid>
        </>
    )
}

export default Todo

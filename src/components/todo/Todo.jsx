import React from 'react'
import { Grid, Card } from '@mui/material'
import { Checkbox } from '@mui/material'

const Todo = ({val}) => {
    return (
        <>
            <Grid item container justifyContent='center'
                alignItems='center'>
                <Grid item xs={1} >
                    <Checkbox />
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

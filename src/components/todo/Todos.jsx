import { Grid, Card, Chip, TextField, IconButton } from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import React, { useState } from 'react'
import { Todo } from '..'
const Todos = () => {
    const [text, setText] = useState('')
    const [toarr, setToArr] = useState([])
    const onClick = () => {
        console.log(`first -> text: ${text} arr:${toarr}`)
        setToArr([...toarr,text])
        setText(text => text = '')
        console.log(`second -> text: ${text} arr:${toarr}`)
    }
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>

                <Grid container alignItems='center' sx={{ minHeight: '100vh' }}>
                    <Grid item xs={2} />
                    <Grid item container xs={8}>
                        <Grid item xs={2} />

                        <Grid item container xs={8} justifyContent='center' name='maingrid' spacing={2}>
                            <Card sx={{ minWidth: '30vw', minHeight: '50vh' }}>
                                <Grid item container sx={{ marginTop: 2, marginBottom: 2 }} justifyContent='center'
                                    alignItems='center'>
                                    <Grid item container xs={3} justifyContent='center'>
                                        <h3 > Todo:</h3>
                                    </Grid>

                                    <Grid item container xs={9}>
                                        <Grid item xs={10}>

                                            <TextField value={text} id='standard-basic' variant='standard' label='Enter here'

                                                onChange={e => { setText(text => text = e.target.value) }} />
                                        </Grid>
                                        <Grid item xs={2}>

                                            <IconButton onClick={() => onClick()} type='submit'>
                                                <AddCircleRoundedIcon /></IconButton>
                                        </Grid>
                                    </Grid>

                                </Grid>
                                {toarr.map((arr,index) => 
                                    <Todo key={index} val = {arr}/>
                                    )}
                                {/* <Todo /> */}

                            </Card>

                        </Grid>
                        <Grid item xs={2} />

                    </Grid>
                    <Grid item xs={2} />
                </Grid >
            </form>




        </>
    )
}

export default Todos

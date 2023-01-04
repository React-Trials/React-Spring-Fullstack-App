import { useState } from 'react'
// import './App.css'
import ButtonAppBar from './components/navbar'
import Student from './components/Student'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CssBaseline />
      <ButtonAppBar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
        </Grid>
        <Grid item xs={12} sm={4} alignItems="center" justifyContent="center">
          <Student/>
        </Grid>
        <Grid item xs={12} sm={4}>
        </Grid>
      </Grid>
    </div>
  )
}

export default App

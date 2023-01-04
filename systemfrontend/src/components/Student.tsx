import React, { useState, useEffect } from 'react'
import { TextField, Container, Button, Paper } from '@mui/material'
import axios from 'axios'

type Student = {
    id?: number,
    name: string,
    email: string
}

const Student = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [students, setStudents] = useState([])

    const getStudents = async () => {
        await axios.get("http://localhost:8080/student/getAll")
            .then(res => {
                console.log(res)
                setStudents(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    useEffect(() => {
        getStudents()
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const student: Student = {
            name: name,
            email: email
        }
        console.log(student)
        axios.post("http://localhost:8080/student/add", student)
        .then(res => {
            console.log(res)
            getStudents()
        }).catch(err => {
            console.log(err)
        })
    }
    
    return (
        <div>
            <Container>
                <h1 style={{ color: "grey" }}><u>Student Details Form</u></h1>
                <TextField id="outlined-basic" label="Student Name" margin="dense" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} fullWidth/>
                <br />
                <TextField id="outlined-basic" label="Student Email Address" margin="dense" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
                <Button variant="contained" onClick={handleClick}>Submit</Button>

                <br />

                <Paper elevation={3}>
                    {
                        students.map((student: Student) => {
                            return (
                                <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign:"left" }} key={student.id}>
                                    Id: {student.id}<br/>
                                    Name: {student.name}<br/>
                                    Email: {student.email}
                                </Paper>
                            )
                        })
                    }
                </Paper>
            </Container>
        </div>
    )
}

export default Student
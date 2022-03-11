import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./Login.css"
import Log from '../hooks/Log';

export default function Login(props) {
    const { logged } = Log();
    const navigate = useNavigate();
    return (
        <Grid container style={{ height: "100vh" }}>
            <Grid xs={12} md={12} lg={12} item style={{ marginTop: '200px' }} >
                <h1>Iniciar Sesión</h1>
                <label style={{ display: "block", margin: "10px" }}>Correo electrónico</label>
                <TextField id="outlined-basic" label="example@example.com" style={{ textAlign: "center" }} />
                <label style={{ display: "block", margin: "10px" }}>Constraseña</label>
                <TextField id="outlined-basic" placeholder='**************' style={{ textAlign: "center" }} />
                <Button variant="contained" onClick={() => navigate("/home")} style={{ display: "block", marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>Ingresar</Button>
            </Grid>
        </Grid>
    )
}
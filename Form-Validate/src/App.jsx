import "./App.css";
import React from "react";
import { Paper, TextField, Typography } from "@mui/material";

function App() {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };

  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h4" align="center">
        Create Account
      </Typography>
      <TextField label="name" />
    </Paper>
  );
}

export default App;

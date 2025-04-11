import "./App.css";
import React from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

import { useForm } from "react-hook-form";

function App() {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };

  // useForm()
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let handleData = (data) => {
    console.log(data); // Call API
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      component={"form"}
      onSubmit={handleSubmit(handleData)}
    >
      <Typography variant="h4" align="center">
        Create Account
      </Typography>

      <TextField
        label="Name"
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField label="Email" {...register("email")} />
      <TextField label="Age" {...register("age")} />
      <TextField label="Password" {...register("password")} />
      <TextField label="Confirm Password" {...register("cPassword")} />

      <Button variant="contained" type="submit">
        Sign UP
      </Button>
    </Paper>
  );
}

export default App;

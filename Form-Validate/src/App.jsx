import "./App.css";
import React from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Create schema using Yup
// Yup is a JavaScript schema builder for value parsing and validation
let schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Z][a-z]+ [A-z][a-z]+$/, "Enter Full Name"),
});

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
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        {...register("name")}
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

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
  email: Yup.string()
    .email()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter valid email address"
    ),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be positive")
    .integer("Age must be an integer"),
  password: Yup.string()
    .required("Password is required")
    .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password is weak"),
  cPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
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
      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Age"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <TextField
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        {...register("cPassword")}
        error={!!errors.cPassword}
        helperText={errors.cPassword?.message}
      />

      <Button variant="contained" type="submit">
        Sign UP
      </Button>
    </Paper>
  );
}

export default App;

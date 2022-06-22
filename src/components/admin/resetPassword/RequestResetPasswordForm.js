import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { execute } from "../../../api/connection";
import { useForm } from "react-hook-form";
import { alpha, styled } from '@mui/material/styles';
export function RequestResetPasswordForm(_props) {
  const [error, setErrorApi] = useState({ exist: false, message: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = async (data) => {
    const result = await execute({
      path: "/admin/password/reset",
      requestMethod: "PATCH",
      setError: setErrorApi,
      data: data,
    });
    if (result) {
      navigate("/admin/password/email");
    } else {
      setError("email");
    }
  };
  let navigate = useNavigate();

  const isError = (eventError) => {
    if (eventError) return true;
    return error.exist ? true : false;
  };
  const handleChangeError = () => {
    if (error.exist) {
      setErrorApi({ ...error, exist: false, message: "" });
      clearErrors();
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Reset hasła</Typography>
          <Typography>
            Wprowadź adres e-mail na który zostanie wysłany link do zmiany hasła
          </Typography>
          <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              error={isError(errors.email)}
              helperText={errors.email ? errors.email.message : ""}
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: "Wymagane",
                minLength: { value: 3, message: "Minimalna długość to 3" },
                maxLength: { value: 30, message: "Maksymalna długość to 30" },
                onChange: () => handleChangeError(),
              })}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Wyślij link do zmiany hasła
            </Button>
          </FormControl>
        </Box>
      </Container>
    </>
  );
}

import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import { execute } from "../../../api/connection";
import { useForm } from "react-hook-form";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import store from "../../../store";
import actions from "../../../reducers/alerts/actions";
export function ResetPassword(_props) {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
  const [error, setErrorApi] = useState({ exist: false, message: "" });
  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch
  } = useForm();
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    const result = await execute({
      path: "/admin/password",
      requestMethod: "PATCH",
      setError: setErrorApi,
      data: {token:searchParams.get("token"), password:data.password },
    });
    if (result) {
        store.dispatch(
            actions.add({
              title: "Zmieniono hasło",
              message: "Poprawnie zmieniono hasło, spróbuj się zalogować!",
              type: "success",
            })
          );
      navigate("/admin");
    } else {
      setError("password");
      setError("password2");
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
          <Typography  sx={{my:2}}>
            Wprowadź nowe hasło
          </Typography>
          <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
          <InputLabel  error={isError(errors.password)} htmlFor="password">Podaj nowe hasło</InputLabel>
            <OutlinedInput
              error={isError(errors.password)}
              helperText={errors.password ? errors.password.message : ""}
              margin="normal"
              type={values.showPassword ? 'text' : 'password'}
              fullWidth
              id="password"
              label="Podaj nowe hasło"
              name="password"
              autoComplete="password"
              autoFocus
              {...register("password", {
                required: "Wymagane",
                minLength: { value: 8, message: "Minimalna długość to 8" },
                onChange: () => handleChangeError(),
              })}
              endAdornment={
             <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              }
              />
              <FormHelperText error={isError(errors.password)}>{errors.password ? errors.password.message : ""}</FormHelperText>
              
 <TextField
              error={isError(errors.password2)}
              helperText={errors.password2 ? errors.password2.message : ""}
              margin="normal"
              fullWidth
              id="password2"
              label="Powtórz nowe hasło"
              name="password2"
              autoComplete="password"
              type="password"
              {...register("password2", {
                required: "Wymagane",
                validate: value => value === password.current || "Hasła nie są tekie same",
                onChange: () => handleChangeError(),
              })}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zmień hasło
            </Button>
          </FormControl>
        </Box>
      </Container>
    </>
  );
}

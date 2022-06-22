import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { execute } from "../../api/connection";
import { useForm } from "react-hook-form";
import store from "../../store";
import actions from "../../reducers/alerts/actions";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
export function RegisterGraduate() {
  const [error, setErrorApi] = useState({ exist: false, message: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm();
  let actuallYear = new Date().getFullYear();

  const onSubmit = async (data) => {
    const result = await execute({
      path: "/admin/graduate",
      requestMethod: "POST",
      setError: setErrorApi,
      data: data,
    });
    if (result) {
      navigate("/admin");
      reset({ name: null, lastName: null, email: null });
      store.dispatch(
        actions.add({
          title: "Dodano",
          message: "Dodano " + data.email,
          type: "success",
        })
      );
    } else {
      setError("email");
      setError("name");
      setError("lastName");
      setError("gender");
      setError("graduationYear");
      setError("faculty");
      setError("field");
      setError("title");
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
      <Box sx={{ minWidth: 120 }}>
        <FormControl
          style={{ width: "100%", my: 3 }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            error={isError(errors.name)}
            helperText={errors.name ? errors.name.message : ""}
            margin="normal"
            fullWidth
            id="name"
            label="Imie"
            name="name"
            autoComplete="given-name"
            autoFocus
            {...register("name", {
              required: "Wymagane",
              minLength: { value: 3, message: "Minimalna długość to 3" },
              maxLength: { value: 30, message: "Maksymalna długość to 30" },
              onChange: () => handleChangeError(),
            })}
          />
          <TextField
            error={isError(errors.lastName)}
            helperText={errors.lastName ? errors.lastName.message : ""}
            margin="normal"
            fullWidth
            id="lastName"
            label="Nazwisko"
            name="lastName"
            autoComplete="family-name"
            {...register("lastName", {
              required: "Wymagane",
              minLength: { value: 3, message: "Minimalna długość to 3" },
              maxLength: { value: 30, message: "Maksymalna długość to 30" },
              onChange: () => handleChangeError(),
            })}
          />
          <TextField
            error={isError(errors.email)}
            helperText={errors.email ? errors.email.message : ""}
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            {...register("email", {
              required: "Wymagane",
              minLength: { value: 3, message: "Minimalna długość to 3" },
              maxLength: { value: 50, message: "Maksymalna długość to 50" },
              onChange: () => handleChangeError(),
            })}
          />
          <TextField
            error={isError(errors.gender)}
            helperText={errors.gender ? errors.gender.message : ""}
            fullWidth
            id="gender"
            label="Płeć"
            name="gender"
            autoComplete="gender"
            defaultValue={""}
            select
            {...register("gender", {
              required: "Wymagane",
              onChange: () => handleChangeError(),
            })}
          >
            <MenuItem value="Kobieta">Kobieta</MenuItem>
            <MenuItem value="Mężczyzna">Mężczyzna</MenuItem>
          </TextField>
          <TextField
            error={isError(errors.graduationYear)}
            helperText={
              errors.graduationYear ? errors.graduationYear.message : ""
            }
            margin="normal"
            fullWidth
            id="graduationYear"
            label="Rok ukończenia"
            name="graduationYear"
            autoComplete="graduationYear"
            type="number"
            defaultValue={actuallYear}
            {...register("graduationYear", {
              required: "Wymagane",
              min: { value: 2000, message: "Minimalny rok to 2000" },
              max: {
                value: actuallYear,
                message: "Maksymalny rok to " + actuallYear,
              },
              onChange: () => handleChangeError(),
            })}
          />
          <TextField
            error={isError(errors.faculty)}
            helperText={errors.faculty ? errors.faculty.message : ""}
            margin="normal"
            fullWidth
            id="faculty"
            label="Wydział"
            name="faculty"
            autoComplete="faculty"
            defaultValue={""}
            select
            {...register("faculty", {
              required: "Wymagane",
              minLength: { value: 3, message: "Minimalna długość to 3" },
              maxLength: { value: 30, message: "Maksymalna długość to 30" },
              onChange: () => handleChangeError(),
            })}
          >
            <MenuItem value="Elektryczny">Elektryczny</MenuItem>
            <MenuItem value="Zarządzania i nauk o jakości">
              Zarządzania i nauk o jakości
            </MenuItem>
            <MenuItem value="Mechaniczny">Mechaniczny</MenuItem>
            <MenuItem value="Nawigacyjny">Nawigacyjny</MenuItem>
          </TextField>
          <TextField
            error={isError(errors.field)}
            helperText={errors.field ? errors.field.message : ""}
            margin="normal"
            fullWidth
            id="field"
            label="Kierunek studiów"
            name="field"
            autoComplete="field"
            {...register("field", {
              required: "Wymagane",
              minLength: { value: 3, message: "Minimalna długość to 3" },
              maxLength: { value: 30, message: "Maksymalna długość to 30" },
              onChange: () => handleChangeError(),
            })}
          />
          <TextField
            error={isError(errors.title)}
            helperText={errors.title ? errors.title.message : ""}
            margin="normal"
            fullWidth
            id="title"
            label="Tytuł zawodowy"
            name="title"
            autoComplete="title"
            defaultValue={""}
            select
            {...register("title", {
              required: "Wymagane",
              minLength: { value: 3, message: "Minimalna długość to 3" },
              maxLength: { value: 30, message: "Maksymalna długość to 30" },
              onChange: () => handleChangeError(),
            })}
          >
            <MenuItem value="Inżynier">Inżynier</MenuItem>
            <MenuItem value="Licencjat">Licencjat</MenuItem>
            <MenuItem value="Magister">Magister</MenuItem>
            <MenuItem value="Doktor">Doktor</MenuItem>
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Dodaj
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

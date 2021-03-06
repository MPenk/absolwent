import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { execute } from "../../api/connection";
import { useForm, FormProvider } from "react-hook-form";
import store from "../../store";
import actions from "../../reducers/alerts/actions";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { CustomTextField } from "./CustomTextField";
export function RegisterGraduate() {
  const [error, setErrorApi] = useState({ exist: false, message: "" });
  const methodsForm = useForm();
  const errors = methodsForm.formState.errors;
  let navigate = useNavigate();
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
      methodsForm.reset({ name: null, lastName: null, email: null });
      store.dispatch(
        actions.add({
          title: "Dodano",
          message: "Dodano " + data.email,
          type: "success",
        })
      );
    } else {
      methodsForm.setError("email");
      methodsForm.setError("name");
      methodsForm.setError("lastName");
      methodsForm.setError("gender");
      methodsForm.setError("graduationYear");
      methodsForm.setError("faculty");
      methodsForm.setError("field");
      methodsForm.setError("title");
    }
  };

  const isError = (eventError) => {
    if (eventError) return true;
    return error.exist ? true : false;
  };

  const handleChangeError = () => {
    if (error.exist) {
      setErrorApi({ ...error, exist: false, message: "" });
      methodsForm.clearErrors();
    }
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormProvider {...methodsForm}>
          <FormControl
            style={{ width: "100%", my: 3 }}
            component="form"
            onSubmit={methodsForm.handleSubmit(onSubmit)}
          >
            <CustomTextField
              name="name"
              label="Imie"
              isError={isError}
              errors={errors}
              requirements={{
                minLength: { value: 3, message: "Minimalna d??ugo???? to 3" },
                maxLength: { value: 50, message: "Maksymalna d??ugo???? to 50" },
              }}
              handleChangeError={handleChangeError}
              autoComplete="given-name"
            />

            <CustomTextField
              name="lastName"
              label="Nazwisko"
              isError={isError}
              errors={errors}
              requirements={{
                minLength: { value: 3, message: "Minimalna d??ugo???? to 3" },
                maxLength: { value: 50, message: "Maksymalna d??ugo???? to 50" },
              }}
              handleChangeError={handleChangeError}
              autoComplete="family-name"
            />
            <CustomTextField
              name="email"
              label="Email studenta"
              isError={isError}
              errors={errors}
              requirements={{
                minLength: { value: 3, message: "Minimalna d??ugo???? to 3" },
                maxLength: { value: 50, message: "Maksymalna d??ugo???? to 50" },
              }}
              handleChangeError={handleChangeError}
            />
            <CustomTextField
              name="gender"
              label="P??e??"
              isError={isError}
              errors={errors}
              handleChangeError={handleChangeError}
              defaultValue={""}
              select
            >
              <MenuItem value="Kobieta">Kobieta</MenuItem>
              <MenuItem value="M????czyzna">M????czyzna</MenuItem>
            </CustomTextField>

            <CustomTextField
              name="graduationYear"
              label="Rok uko??czenia"
              isError={isError}
              errors={errors}
              requirements={{
                min: { value: 2000, message: "Minimalny rok to 2000" },
                max: {
                  value: actuallYear,
                  message: "Maksymalny rok to " + actuallYear,
                },
              }}
              handleChangeError={handleChangeError}
              type="number"
              defaultValue={actuallYear}
            />

            <CustomTextField
              name="faculty"
              label="Wydzia??"
              isError={isError}
              errors={errors}
              handleChangeError={handleChangeError}
              defaultValue={""}
              select
            >
              <MenuItem value="Elektryczny">Elektryczny</MenuItem>
              <MenuItem value="Zarz??dzania i nauk o jako??ci">
                Zarz??dzania i nauk o jako??ci
              </MenuItem>
              <MenuItem value="Mechaniczny">Mechaniczny</MenuItem>
              <MenuItem value="Nawigacyjny">Nawigacyjny</MenuItem>
            </CustomTextField>

            <CustomTextField
              name="field"
              label="Kierunek studi??w"
              isError={isError}
              errors={errors}
              requirements={{
                minLength: { value: 3, message: "Minimalna d??ugo???? to 3" },
                maxLength: { value: 30, message: "Maksymalna d??ugo???? to 30" },
              }}
              handleChangeError={handleChangeError}
            />
            <CustomTextField
              name="title"
              label="Tytu?? zawodowy"
              isError={isError}
              errors={errors}
              handleChangeError={handleChangeError}
              defaultValue={""}
              select
            >
              <MenuItem value="In??ynier">In??ynier</MenuItem>
              <MenuItem value="Licencjat">Licencjat</MenuItem>
              <MenuItem value="Magister">Magister</MenuItem>
              <MenuItem value="Doktor">Doktor</MenuItem>
            </CustomTextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Dodaj
            </Button>
          </FormControl>
        </FormProvider>
      </Box>
    </>
  );
}

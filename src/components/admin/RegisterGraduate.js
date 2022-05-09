import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { execute } from '../../api/connection';
import { useForm } from 'react-hook-form';

export function RegisterGraduate() {

    const [error, setErrorApi] = useState({ exist: false, message: "" });
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

    const onSubmit = async data => {
        const result = await execute({ path: "/admin/graduate", requestMethod: "POST", setError: setErrorApi, data: data });
        if (result) {
            navigate('/admin');
        }
        else {
            setError('email');
            setError('firstName');
            setError('lastName');
        }
    }
    let navigate = useNavigate();

    const isError = (eventError) => {
        if (eventError)
            return true;
        return error.exist ? true : false
    }

    const handleChangeError = () => {
        if (error.exist) {
            setErrorApi({ ...error, exist: false, message: "" });
            clearErrors();
        }
    }

    return (
        <>
            <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    error={isError(errors.firstName)}
                    helperText={errors.firstName ? errors.firstName.message : ""}
                    margin="normal"
                    fullWidth
                    id="firstName"
                    label="Imie"
                    name="firstName"
                    autoComplete="given-name"
                    autoFocus
                    {...register("firstName", {
                        required: "Wymagane",
                        minLength: { value: 3, message: "Minimalna długość to 3" },
                        maxLength: { value: 30, message: "Maksymalna długość to 30" },
                        onChange: () => handleChangeError()
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
                    autoFocus
                    {...register("lastName", {
                        required: "Wymagane",
                        minLength: { value: 3, message: "Minimalna długość to 3" },
                        maxLength: { value: 30, message: "Maksymalna długość to 30" },
                        onChange: () => handleChangeError()
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
                    autoFocus
                    {...register("email", {
                        required: "Wymagane",
                        minLength: { value: 3, message: "Minimalna długość to 3" },
                        maxLength: { value: 30, message: "Maksymalna długość to 30" },
                        onChange: () => handleChangeError()
                    })}
                />


                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>
                    Zaloguj
                </Button>
            </FormControl>
        </>
    )
}
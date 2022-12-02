import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import FormControl from '@mui/material/FormControl';
import actions from '../../reducers/user/actions';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { execute } from '../../api/connection';
import { useForm } from 'react-hook-form';

function LoginForm(props) {
    const [error, setErrorApi] = useState({ exist: false, message: "" });
    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

    const onSubmit = async data => {
        const result = await execute({ path: "/auth/admin", requestMethod: "POST", setError: setErrorApi, data: data });
        if (result) {
            props.setUser(result);
            navigate('/admin');
        }
        else {
            setError('login');
            setError('password');
        }
    }
    let navigate = useNavigate();

    const isError = (eventError) => {
        if(eventError)
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
            <FormControl component="form"
                    style={{minWidth: "20em"}}
                    onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    error={isError(errors.login)}
                    helperText={errors.login ? errors.login.message : ""}
                    margin="normal"
                    fullWidth
                    id="Login"
                    label="e-mail"
                    name="Login"
                    autoComplete="email"
                    autoFocus
                    {...register("login", {
                        required: "Wymagane",
                        minLength: { value: 3, message: "Minimalna długość to 3" },
                        maxLength: { value: 30, message: "Maksymalna długość to 30" },
                        onChange: () => handleChangeError()

                    })}
                />
                <TextField
                    error={isError(errors.password)}
                    helperText={errors.password ? errors.password.message : ""}
                    margin="normal"
                    fullWidth
                    name="password"
                    label="hasło"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    {...register("password", {
                        required: "Wymagane",
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

const mapDispatchToProps = dispatch => ({
    setUser: (user) => dispatch(actions.set(user))
})
const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

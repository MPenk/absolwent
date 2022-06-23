import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

export function CustomTextField({
  name,
  label,
  isError,
  errors,
  requirements,
  handleChangeError,
  type,
  children,
  ...props
}) {
  const { register } = useFormContext();
  return (
    <>
      <TextField
        error={isError(errors[name])}
        helperText={errors[name] ? errors[name].message : ""}
        margin="normal"
        fullWidth
        id={name}
        label={label}
        name={name}
        autoComplete={name}
        type={type}
        {...register(name, {
          required: "Wymagane",
          ...requirements,
          onChange: () => handleChangeError,
        })}
        {...props}
      >
        {children}
      </TextField>
    </>
  );
}

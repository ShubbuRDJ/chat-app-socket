import {
    Button,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    OutlinedInput,
    Stack,
    TextField,
} from "@mui/material";
import "./signup.scss";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../../../services/yup-validation-schemas";
import toaster from "../../../../utility/toaster/toaster";


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function SignUp() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                handleSignUp(values);
                action.resetForm();
            },
        });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleSignUp = (credentials) => {
        const { confirmPassword, ...data } = credentials;
        console.log(data);
        toaster('success','Signup successful.')
        setTimeout(() => {
            navigate("/login");
        }, 1500);
    }

    return (
        <>
            <Grid className="signup-main-container">
                <Grid className="signup-form-container">
                    <Grid className="signup-form-wrapper">
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={1}>
                                <Grid className="form-heading">
                                    <h2>Signup</h2>
                                </Grid>
                                <Grid className="form-field">
                                    <label className="form-label" htmlFor="email-form-control1">First Name:</label>
                                    <TextField
                                        required
                                        name="firstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        id="email-form-control1"
                                        placeholder="Enter First Name "
                                    />
                                {errors.firstName && touched.firstName ? (
                                    <p className="form-error">{errors.firstName}</p>
                                ) : null}
                                </Grid>
                                <Grid className="form-field">
                                    <label className="form-label" htmlFor="email-form-control2">Last Name:</label>
                                    <TextField
                                        required
                                        name="lastName"
                                        id="email-form-control2"
                                        placeholder="Enter Last Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                    />
                                {errors.lastName && touched.lastName ? (
                                    <p className="form-error">{errors.lastName}</p>
                                ) : null}
                                </Grid>
                                <Grid className="form-field">
                                    <label className="form-label" htmlFor="email-form-control3">Email:</label>
                                    <TextField
                                        required
                                        name="email"
                                        id="email-form-control3"
                                        placeholder="Enter email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                {errors.email && touched.email ? (
                                    <p className="form-error">{errors.email}</p>
                                ) : null}
                                </Grid>

                                <Grid className="form-field">
                                    <label className="form-label" htmlFor="password-form-control4">Password:</label>
                                    <FormControl
                                        id="password-form-control4"
                                        variant="outlined"
                                    >
                                        <OutlinedInput
                                            name="password"
                                            placeholder="Enter password"
                                            id="outlined-adornment-password1"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            type={showPassword ? "text" : "password"}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                {errors.password && touched.password ? (
                                    <p className="form-error">{errors.password}</p>
                                ) : null}
                                </Grid>

                                <Grid className="form-field">
                                    <label className="form-label" htmlFor="password-form-control6">Confirm Password:</label>
                                    <FormControl
                                        id="password-form-control6"
                                        variant="outlined"
                                    >
                                        <OutlinedInput
                                            name="confirmPassword"
                                            required
                                            placeholder="Enter password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}
                                            id="outlined-adornment-password2"
                                            type={showConfirmPassword ? "text" : "password"}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowConfirmPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <p className="form-error">{errors.confirmPassword}</p>
                                ) : null}
                                </Grid>

                                <Grid className="form-button">
                                    <Button type="submit" size="large" variant="contained">Create Account</Button>
                                    <p>Already have an account? <span onClick={() => navigate(-1)}>Sign in</span></p>

                                </Grid>
                            </Stack>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

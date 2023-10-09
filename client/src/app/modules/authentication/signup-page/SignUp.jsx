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
import { postRequest } from "../../../../services/axios-api-request/axios_api_Request";


const initialValues = {
    userName: "",
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


    const handleSignUp = async (credentials) => {
        const { confirmPassword, ...credentialData } = credentials;
        try {
            const { data } = await postRequest('api/auth/userRegister', credentialData)
            if (data.results.statusCode === 201) {
                toaster('success', data.results.message)
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            }
            else{
                toaster('error', data.results.message)
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            }

        } catch (error) {
            toaster('error', "Some error occured")
            setTimeout(() => {
                navigate("/login");
            }, 1500);
        }
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
                                    <TextField
                                        name="userName"
                                        id="email-form-control2"
                                        placeholder="Enter User Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userName}
                                    />
                                    {errors.userName && touched.userName ? (
                                        <p className="form-error">{errors.userName}</p>
                                    ) : null}
                                </Grid>
                                <Grid className="form-field">
                                    <TextField
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
                                    <FormControl
                                        id="password-form-control6"
                                        variant="outlined"
                                    >
                                        <OutlinedInput
                                            name="confirmPassword"
                                            placeholder="Enter Confirm password"
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
                                    <Button type="submit" size="large" variant="contained" disabled={
                                        !values.userName || !values.email ||
                                        !values.password || !values.confirmPassword
                                    }>Create Account</Button>
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

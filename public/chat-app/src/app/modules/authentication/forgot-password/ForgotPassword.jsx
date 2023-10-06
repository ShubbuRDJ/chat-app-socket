import {
    Button,
    Grid,
    Stack,
    TextField,
} from "@mui/material";
import "./forgot-password.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import toaster from "../../../../utility/toaster/toaster";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        toaster('success','Email sent successfully.')
        console.log(email);
        setTimeout(() => {
            navigate("/login");
        }, 1500);

    }

    return (
        <>
            <Grid className="forgotPassword-main-container">
                <Grid className="forgotPassword-form-container">
                    <Grid className="forgotPassword-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={1}>
                            <Grid className="form-heading">
                                <h2>Forgot Passowrd?</h2>
                            </Grid>
                            <Grid className="form-field">
                                <label className="form-label" htmlFor="email-form-control1">Email:</label>
                                <TextField
                                    required
                                    name="email"
                                    id="email-form-control121"
                                    placeholder="Enter Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>


                            <Grid className="form-button">
                                    <Button type="submit" variant="contained">Reset password</Button>
                                    <span className="arrowback-forgot-page" onClick={()=>navigate('/login')}> <ArrowBack/>Back to login</span>
                                
                            </Grid>
                        </Stack>
                    </form>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

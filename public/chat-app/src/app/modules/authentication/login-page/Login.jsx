import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import "./login.scss";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import toaster from "../../../../utility/toaster/toaster";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remeberMe, setRememberMe] = useState(false)
  const loginCredentials = { email: "xyz@123.com", password: "123456" }
  let credentials = { email, password };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginCredentials.email === credentials.email && loginCredentials.password === credentials.password) {
      if (remeberMe) {
        const json = JSON.stringify(credentials)
        const enCodedJson = encodeURIComponent(json)
        const date = new Date()
        date.setTime(date.getTime() + 30 * 24 * 24 * 60 * 1000);
        const expire = "expire=" + date.toUTCString();
        document.cookie = `rememberMe= ${enCodedJson}`
        document.cookie = expire;
      }

      localStorage.setItem('user', JSON.stringify(credentials));
      toaster('success','Login Successful.')
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } else {
      toaster('error','Invalid credentials!')
    }
  }

  useEffect(() => {
    const cookieDetail = document.cookie;
    const cookie = cookieDetail.split(';')
    const isUserData = cookie.find(c => c.startsWith('rememberMe'));
    if (isUserData) {
      const encodedJson = isUserData.split('rememberMe=')[1];
      const decodedJson = decodeURIComponent(encodedJson);
      const userDetail = JSON.parse(decodedJson);
      const { email, password } = userDetail;
      setEmail(email);
      setPassword(password);
    }
  }, [])

  return (
    <>
      <Grid className="login-main-container">
        <Grid className="login-form-container">
          <Grid className="login-form-wrapper">
            <form onSubmit={handleSubmit}>
              <Stack spacing={1}>
                <Grid className="form-heading">
                  <h2>Login</h2>
                </Grid>
                <Grid className="form-field">
                  <label className="form-label" htmlFor="email-form-control">Email:</label>
                  <TextField
                    required
                    name="email"
                    value={email ?? ""}
                    id="email-form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>

                <Grid className="form-field">
                  <label className="form-label" htmlFor="password-form-control">Password:</label>
                  <FormControl
                    id="password-form-control"
                    variant="outlined"
                  >

                    <OutlinedInput
                      name="password"
                      placeholder="Enter password"
                      id="outlined-adornment-password"
                      value={password ?? ""}
                      onChange={(e) => setPassword(e.target.value)}
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
                  <Grid className="forgot-rememberMe">
                    <FormControlLabel control={<Checkbox onChange={(e) => setRememberMe(!remeberMe)} />} label="Remember me" />
                    <span className="forgot-text" onClick={() => navigate('/forgotPassword')}>Forgot password?</span>
                  </Grid>
                </Grid>
                <Grid className="form-button">
                  <Button type="submit" variant="contained" size="large" disabled={
                    !email ||
                    !password
                  }>Login</Button>
                  <p>No account? <span onClick={() => navigate('/signup')}>Signup</span></p>

                </Grid>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

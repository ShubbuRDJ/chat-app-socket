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
import { postRequest } from "../../../../services/axios-api-request/axios_api_Request";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [remeberMe, setRememberMe] = useState(false)
  let credentials = { userName, password };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await postRequest('api/auth/userLogin', credentials)
      if (data.results.statusCode === 200) {
        if (remeberMe) {
          const json = JSON.stringify(credentials)
          const enCodedJson = encodeURIComponent(json)
          const date = new Date()
          date.setTime(date.getTime() + 30 * 24 * 24 * 60 * 1000);
          const expire = "expire=" + date.toUTCString();
          document.cookie = `rememberMe= ${enCodedJson}`
          document.cookie = expire;
        }

        localStorage.setItem('token', JSON.stringify(data?.results?.data?.token));
        localStorage.setItem('userId', JSON.stringify(data?.results?.data?.userId));
        localStorage.setItem('isProfileImage', JSON.stringify(data?.results?.data?.isProfileImage));
        localStorage.setItem('userDetails', JSON.stringify(data?.results?.data));
        toaster('success', data.results.message)
        setTimeout(() => {
          (data?.results?.data?.isProfileImage) ?
            navigate("/") :
            navigate("/setAvatar")
        }, 1500);

      } else {
        toaster('error', data.results.message)
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      toaster('error', 'Some error occured!')
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }

  useEffect(() => {
    const cookieDetail = document.cookie;
    const cookie = cookieDetail.split(';')
    const isUserData = cookie.find(c => c.includes('rememberMe'));
    if (isUserData) {
      const encodedJson = isUserData.split('rememberMe=')[1];
      const decodedJson = decodeURIComponent(encodedJson);
      const userDetail = JSON.parse(decodedJson);
      const { userName, password } = userDetail;
      setUserName(userName);
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
                  <TextField
                    required
                    name="userName"
                    value={userName ?? ""}
                    id="userName-form-control"
                    placeholder="Enter User Name"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Grid>

                <Grid className="form-field">
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
                    !userName ||
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

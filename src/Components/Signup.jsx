import React, { useContext, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import {Link } from "react-router-dom";
import {
  TextField,
  Box,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import Poster from "./Poster"

let Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [invalidEmailId, setInvalidEmailId] = useState(false);
  const handleSignUp = () => {
    console.log(emailId);
    console.log(password);
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (!username) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    validateEmail();
  };
  const validateEmail = () => {
    if (!emailId) {
      setInvalidEmailId(true);
    } else {
      setInvalidEmailId(false);
    }
  };
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        margin: "0",
        padding: "0",

        width: "100vw",
        height: "100vh",
      }}
    >
      <Poster/>
      <Box
        sx={{
          width: ["75vw", "62.5vw", "25vw", "25vw", "25vw"],
          height: "50vh",
          border: 1,
          borderRadius: "1vw",
          borderColor: "primary.main",
          padding: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          position: "fixed",
          top: "20vh",
          right: [0, "12vw", "12vw", "12vw", "12vw"],
        }}
      >
        <Typography variant="h3" color={"primary.main"}>
          Sign Up
        </Typography>

        <TextField
          required
          id="standard-required"
          label="User Name"
          variant="standard"
          value={username}
          error={usernameError}
          helperText={usernameError ? "Username required" : ""}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          id="standard-required"
          label="Email Id"
          variant="standard"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          error={invalidEmailId}
          helperText={
            invalidEmailId ? "Please enter a valid email address" : ""
          }
          he
        />
        <TextField
          id="standard-password-input"
          required
          label="Password"
          type={passwordVisibility ? "text" : "password"}
          autoComplete="current-password"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {passwordVisibility ? (
                  <Visibility
                    onClick={() => {
                      setPasswordVisibility(!passwordVisibility);
                    }}
                  />
                ) : (
                  <VisibilityOff
                    onClick={() => {
                      setPasswordVisibility(!passwordVisibility);
                    }}
                  />
                )}
              </InputAdornment>
            ),
          }}
          value={password}
          error={passwordError}
          helperText={passwordError ? "Please enter a password" : ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          size="large"
          variant="outlined"
          endIcon={<LoginIcon />}
          onClick={handleSignUp}
        >
          Signup
        </Button>
        <Box>
          <Typography variant="subtitle1">
            Already have an account ?{" "}
            <Link  style={{ textDecoration: "none" }} to="/login"> Login</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Signup;

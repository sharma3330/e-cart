"use client"
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Link, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const LoginPage = ({handleClose, handleOpen, isOpen} : any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });


  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Validate form inputs
    const newErrors = validateForm();
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return; // Prevent submission if errors exist
    }
    
    // Form is valid, proceed with login logic
    alert(`Logged in with Email: ${email}`);
    handleClose(); // Close the dialog after successful login
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors = { email: "", password: "" };

    // Email validation: check if it's a valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation: check if it's not empty
    if (!password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  return (
    <div>
      {/* Dialog (Popup) for Login */}
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              required
            />
            {/* Password Field */}
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
              required
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Login
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginPage;
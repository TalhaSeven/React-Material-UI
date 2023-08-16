import { Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const TextFieldComp = () => {
  const [error, setError] = useState(true);
  return (
    <Container>
      <Typography variant="h4" color={"secondary.dark"} align="center" m={4}>
        TEXT FIELD
      </Typography>

      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        placeholder="Enter Your Email"
        fullWidth
        margin="normal"
        required
        error={error}
        helperText={error && "Incorrect email format"}
      />

      <TextField id="standart-basic" label='Standard' variant="standard" />


    </Container>
  );
};

export default TextFieldComp;

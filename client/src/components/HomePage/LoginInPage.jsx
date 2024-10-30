import { useState } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";

export default function LogInPage({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#424242",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          width: "300px",
        }}
      >
        <Typography variant="h5" mb={2} color="white">
          Log In
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ bgcolor: "white" }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ bgcolor: "white" }}
        />
        <Button variant="contained" fullWidth onClick={onClose}>
          Log In
        </Button>
        <Button variant="text" onClick={onClose} sx={{ mt: 2 }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}
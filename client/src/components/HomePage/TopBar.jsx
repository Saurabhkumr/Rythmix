import { Box, Button } from "@mui/material";
import { SkipPrevious, SkipNext } from "@mui/icons-material";
import { useState } from "react";
import LogInPage from "./LoginInPage"; // Adjust the path as necessary
import SignUpPage from "./SignUpPage"; // Adjust the path as necessary

export default function TopBar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        bgcolor: "#212121",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="text" sx={{ color: "gray" }}>
          <SkipPrevious />
        </Button>
        <Button variant="text" sx={{ color: "gray" }}>
          <SkipNext />
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="text"
          sx={{ color: "gray" }}
          onClick={() => setOpenSignUp(true)} // Open sign-up overlay
        >
          Sign up
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "white", color: "#212121" }}
          onClick={() => setOpenLogin(true)} // Open login overlay
        >
          Log in
        </Button>
      </Box>

      {/* Overlay Components */}
      <LogInPage isOpen={openLogin} onClose={() => setOpenLogin(false)} />
      <SignUpPage isOpen={openSignUp} onClose={() => setOpenSignUp(false)} />
    </Box>
  );
}

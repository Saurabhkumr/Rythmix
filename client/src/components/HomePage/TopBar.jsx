import { Box, Button } from "@mui/material";
import { SkipPrevious, SkipNext } from "@mui/icons-material";

export default function TopBar() {
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
        <Button variant="text" sx={{ color: "gray" }}>
          Sign up
        </Button>
        <Button variant="contained" sx={{ bgcolor: "white", color: "#212121" }}>
          Log in
        </Button>
      </Box>
    </Box>
  );
}

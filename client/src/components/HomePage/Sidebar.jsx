import { Box, Button, Typography } from "@mui/material";
import {
  Home,
  Search,
  LibraryAdd,
  AddCircle,
  Favorite,
  ExitToApp,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <Box sx={{ width: 250, bgcolor: "#212121", color: "white" }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Rythmix
        </Typography>
        <nav>
          <Button
            sx={{ color: "gray", justifyContent: "start", width: "100%" }}
          >
            <Home sx={{ mr: 1 }} />
            Home
          </Button>
          <Button
            sx={{ color: "gray", justifyContent: "start", width: "100%" }}
          >
            <Search sx={{ mr: 1 }} />
            Search
          </Button>
          <Button
            sx={{ color: "gray", justifyContent: "start", width: "100%" }}
          >
            <LibraryAdd sx={{ mr: 1 }} />
            Your Library
          </Button>
        </nav>
      </Box>
      <Box sx={{ p: 2 }}>
        <Button
          variant="outlined"
          sx={{ justifyContent: "start", width: "100%", color: "gray" }}
        >
          <AddCircle sx={{ mr: 1 }} />
          Create Playlist
        </Button>
        <Button
          variant="outlined"
          sx={{ justifyContent: "start", width: "100%", color: "gray", mt: 1 }}
        >
          <Favorite sx={{ mr: 1 }} />
          Liked Songs
        </Button>
      </Box>
      <Box sx={{ p: 2, mt: "auto" }}>
        <Button sx={{ color: "gray", justifyContent: "start" }}>
          <ExitToApp sx={{ mr: 1 }} />
          Log out
        </Button>
      </Box>
    </Box>
  );
}

import { Button, Box, Typography, Slider } from "@mui/material";
import {
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  Favorite,
  RssFeed,
  VolumeUp,
  PlayCircle,
} from "@mui/icons-material";

export default function PlaybackControls() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "grey.900",
        borderTop: "1px solid",
        borderColor: "grey.800",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/placeholder.svg?height=56&width=56&text=Album"
            alt="Current track"
            style={{ width: 56, height: 56, borderRadius: "4px" }}
          />
          <Box sx={{ marginLeft: 2 }}>
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Track Name
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.400" }}>
              Artist Name
            </Typography>
          </Box>
          <Button
            variant="text"
            size="small"
            sx={{ color: "grey.400", "&:hover": { color: "white" } }}
          >
            <Favorite />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Button
              variant="text"
              size="small"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
            >
              <Shuffle />
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
            >
              <SkipPrevious />
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
            >
              <PlayCircle sx={{ fontSize: 40 }} /> {/* Adjusting icon size */}
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
            >
              <SkipNext />
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
            >
              <Repeat />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "md",
            }}
          >
            <Typography variant="caption" sx={{ color: "grey.400" }}>
              0:00
            </Typography>
            <Slider value={33} sx={{ flex: 1, mx: 1 }} />
            <Typography variant="caption" sx={{ color: "grey.400" }}>
              3:45
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="text"
            size="small"
            sx={{ color: "grey.400", "&:hover": { color: "white" } }}
          >
            <RssFeed />
          </Button>
          <Button
            variant="text"
            size="small"
            sx={{ color: "grey.400", "&:hover": { color: "white" } }}
          >
            <VolumeUp />
          </Button>
          <Slider value={50} sx={{ width: 100 }} />
        </Box>
      </Box>
    </Box>
  );
}

import { Box, Typography, Button } from "@mui/material";

export default function MainContent() {
  return (
    <Box sx={{ flex: 1, p: 3, bgcolor: "#1F1F1F" }}>
      <Typography variant="h4" sx={{ mb: 3, color: "white" }}>
        Good afternoon
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2, // gap between items
          mb: 3,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((playlist) => (
          <Box
            key={playlist}
            sx={{
              flex: "1 1 calc(33.33% - 16px)", // 3 items per row with gap
              maxWidth: "calc(33.33% - 16px)", // same width as flex
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "64px",
                bgcolor: "#333",
                "&:hover": { bgcolor: "#444" },
              }}
            >
              <img
                src={`/placeholder.svg?height=64&width=64&text=Cover+${playlist}`}
                alt={`Playlist ${playlist}`}
                style={{ width: "64px", height: "64px", marginRight: "16px" }}
              />
              <span style={{ color: "white" }}>Playlist {playlist}</span>
            </Button>
          </Box>
        ))}
      </Box>

      <Typography variant="h4" sx={{ mb: 3, color: "white" }}>
        Made for you
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {[1, 2, 3, 4, 5].map((playlist) => (
          <Box
            key={playlist}
            sx={{
              flex: "1 1 calc(25% - 16px)", // 4 items per row with gap
              maxWidth: "calc(25% - 16px)",
            }}
          >
            <Box
              sx={{
                bgcolor: "#333",
                p: 2,
                borderRadius: "8px",
                transition: "background-color 0.3s",
                "&:hover": { bgcolor: "#444" },
              }}
            >
              <img
                src={`/placeholder.svg?height=200&width=200&text=Cover+${playlist}`}
                alt={`Playlist ${playlist}`}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "8px",
                }}
              />
              <Typography variant="h6" sx={{ color: "white" }}>
                Daily Mix {playlist}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Your daily music mix
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

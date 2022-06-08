import { useAlbums } from "../hooks/common";
import { Box, Paper } from "@mui/material";
import { Typography } from "@mui/material";

export default function Albums() {
  const { albums } = useAlbums();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {albums.map((album) => (
        <Paper
          key={album.id}
          sx={{
            backgroundColor: "salmon",
            width: "35%",
            p: 2,
          }}
        >
          <Typography
            variant="body2"
            component="p"
            sx={{
              py: 1,
              backgroundColor: "white",
              borderRadius: "4px 4px 0 0",
              px: 1,
            }}
          >
            user ID:
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              {album.userId};
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              py: 1,
              borderBottom: "1px solid white",
              borderRadius: "0 0 4px 4px ",
              color: "white",
              px: 1,
            }}
          >
            user Title:
            <Typography
              variant="body2"
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              {album.title};
            </Typography>
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

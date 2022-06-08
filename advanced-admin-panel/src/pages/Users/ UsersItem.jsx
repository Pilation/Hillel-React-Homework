import { Typography, Paper, Box, Button } from "@mui/material";

export default function UsersItem({ data }) {
  const typographyWrapper = (obj) => {
    const wrapedText = [];
    const wrapedInParagraph = (obj) => {
      for (const key in obj) {
        if (typeof obj[key] !== "object") {
          wrapedText.push(
            <Typography
              variant="body2"
              component="p"
              sx={{
                p: 1,
                backgroundColor: "white",
                borderRadius: 1,
              }}
              key={obj[key]}
            >
              <Typography
                variant="body2"
                component="span"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {key}
                {": "}
              </Typography>
              <Typography variant="body2" component="span">
                {obj[key]} {";"}
              </Typography>
            </Typography>
          );
        } else {
          wrapedInParagraph(obj[key]);
        }
      }
    };
    wrapedInParagraph(obj);
    return wrapedText.reverse();
  };

  return (
    <Paper
      sx={{
        p: 2,
        maxWidth: "25%",
        width: "100%",
        minWidth: 330,
        backgroundColor: "salmon",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {typographyWrapper(data)}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "auto",
        }}
      >
        <Button
          // onClick={goBack}
          variant="contained"
          sx={{
            backgroundColor: "salmon",
            color: "white",
            border: "1px solid white",
          }}
          size="medium"
        >
          Edit
        </Button>
        <Button
          // onClick={goBack}
          variant="contained"
          sx={{
            backgroundColor: "salmon",
            color: "white",
            border: "1px solid white",
          }}
          size="medium"
        >
          Delete
        </Button>
      </Box>
    </Paper>
  );
}

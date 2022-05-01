import { useCallback, Fragment } from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";

export default function RenderAnswers({ answers }) {
  const wrappedAnswers = useCallback(() => {
    const pWrapedAnswers = answers.map((el) => (
      <Fragment key={el.question}>
        <Typography variant="body1" component="p" sx={{ my: 1 }}>
          {el.question}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ mb: 1 }}
          color="primary"
        >
          Answer: {el.value}
        </Typography>
        <Divider />
      </Fragment>
    ));
    return pWrapedAnswers;
  }, [answers]);

  return <>{wrappedAnswers()}</>;
}

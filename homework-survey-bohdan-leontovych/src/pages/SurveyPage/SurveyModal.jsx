import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RenderAnswers from "./RenderAnswers";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  border: "1px solid #000",
  boxShadow: 2,
  p: 4,
};

export default function SurveyModal({
  open,
  handleClose,
  answers,
  handleSubmit,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please check your answers
            </Typography>
            <Box>
              <RenderAnswers id="modal-modal-description" answers={answers} />
            </Box>
            <Typography
              variant="body1"
              component="p"
              sx={{ mt: 2, fontWeight: "medium" }}
            >
              If everything is fine, please click on Submit. If you want to
              change your answers, click on Cancel
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 4,
              }}
            >
              <Button onClick={handleClose} variant="outlined" color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

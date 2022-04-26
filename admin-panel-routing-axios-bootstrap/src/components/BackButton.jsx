import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Button onClick={goBack} variant="primary">
      Back
    </Button>
  );
};

export { BackButton };

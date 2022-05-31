import { useNavigate } from "react-router-dom";
import { Button, Image, Container } from "react-bootstrap";
import "./Ads.scss";

const Ads = ({ button }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="ads py-5">
        <Image
          className="ads__image"
          src="https://images.pexels.com/photos/1086711/pexels-photo-1086711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Button
          onClick={() =>
            navigate(button === "Mock Test" ? "/mock-test" : "sign-up")
          }
        >
          {button}
        </Button>
      </div>
    </Container>
  );
};

export default Ads;

import { Card, Container } from "react-bootstrap";
import "./Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Darshan",
    image: "",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis assumenda possimus explicabo eligendi! Nesciunt, repellendus?",
  },
  {
    id: 2,
    name: "Prashant",
    image: "",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis assumenda possimus explicabo eligendi! Nesciunt, repellendus?",
  },
  {
    id: 2,
    name: "Prashant",
    image: "",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis assumenda possimus explicabo eligendi! Nesciunt, repellendus?",
  },
];

const Testimonials = () => {
  return (
    <div className="wrapper py-5">
      <Container>
        <div className="testimonials">
          {testimonials.map(({ id, name, image, review }) => (
            <Card className="my-3 p-3 rounded testimonials__card">
              <Card.Img src={image} variant="top" />

              <Card.Body>
                <Card.Title>
                  <strong>{name}</strong>
                </Card.Title>
                <Card.Text as="h6">{review}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;

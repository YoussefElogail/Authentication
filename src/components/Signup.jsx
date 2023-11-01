import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Signup</h2>
          <Form className="d-flex flex-column gap-4">
            <Form.Group>
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password:</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="confirm-password">
                Confirm password:
              </Form.Label>
              <Form.Control
                type="password"
                id="confirm-password"
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">
          Log In
        </Link>
      </div>
    </>
  );
};

export default Signup;

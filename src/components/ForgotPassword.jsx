import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset your password</h2>

          <Form className="d-flex flex-column gap-4">
            <Form.Group>
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100">
            Reset password
            </Button>
          </Form>
          <div className="w-100 text-center mt-4">
            <Link to="/login">
              Log In
            </Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        {"Don't have an account?"} <Link to="/signup">Signup</Link>
      </div>
    </>
  );
};

export default ForgotPassword;

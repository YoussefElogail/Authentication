import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const emailRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox to change your password")
    } catch {
      setError("This email is incorrect");
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset your password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter your email"
                ref={emailRef}
              />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
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

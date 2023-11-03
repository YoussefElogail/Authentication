import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const redirectPath = location.state?.path || "/"
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath, {replace : true});
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
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

            <Form.Group>
              <Form.Label htmlFor="password">Password:</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter your password"
                ref={passwordRef}
              />
            </Form.Group>

            <Button disabled={loading} variant="primary" type="submit" className="w-100">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-4">
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        {"Don't have an account?"} <Link to="/signup">Signup</Link>
      </div>
    </>
  );
};

export default Login;

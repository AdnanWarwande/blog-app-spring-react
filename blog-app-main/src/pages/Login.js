import { useState } from "react";
import { toast } from "react-toastify";
import { Label, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Row, Button } from "reactstrap";
import Base from "../components/Base";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { useContext } from "react";

const Login = () => {
  const userContextData = useContext(userContext);
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    setLoginDetail({
      ...loginDetail,
      [field]: event.target.value,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (loginDetail.username.trim() === "" || loginDetail.password.trim() === "") {
      toast.error("Username or Password is required!");
      return;
    }

    loginUser(loginDetail)
      .then((data) => {
        doLogin(data, () => {
          userContextData.setUser({
            data: data.user,
            login: true,
          });
          navigate("/user/dashboard");
        });
        toast.success("Login Success");
      })
      .catch((error) => {
        if (error.response && (error.response.status === 400 || error.response.status === 404)) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on server!");
        }
      });
  };

  return (
    <Base>
      <Container className="pt-5 mb-5">
        <Row className="justify-content-center">
          <Col sm={6}>
            <Card className="dark-theme-card">
              <CardHeader>
                <h3 className="text-center mb-0">Login</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>
                  <div className="text-center">
                    <Button color="primary">Login</Button>
                    <Button color="secondary" onClick={handleReset} className="ms-2">Reset</Button>
                  </div> 
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;

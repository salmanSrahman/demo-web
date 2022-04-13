import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { BiLockOpenAlt } from "react-icons/bi";

const Login = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={7} className="mx-auto">
            <div>
              <h1>Sign In !</h1>
            </div>
            <Row className="g-3">
              <Col xs={12} xl={4}>
                <div className="social-sign sign1">
                  <FcGoogle className="fs-2" />
                  <h5 className="d-inline-block ms-3 fw-bold">Google</h5>
                </div>
              </Col>
              <Col xs={12} xl={4}>
                <div className="social-sign sign2">
                  <SiFacebook className="fs-2 text-primary" />
                  <h5 className="d-inline-block ms-3 fw-bold">Facebook</h5>
                </div>
              </Col>
              <Col xs={12} xl={4}>
                <div className="social-sign sign3">
                  <ImGithub className="fs-2" />
                  <h5 className="d-inline-block ms-3 fw-bold">Github</h5>
                </div>
              </Col>
            </Row>
            <div className="or-style py-3">
              <p className="text-center fs-5 fw-bold">OR</p>
            </div>
          </Col>
          <Row>
            <Col md={7} className="mx-auto">
              <div className="login-form">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <BiLockOpenAlt />
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <input type="password" name="" id="" />

                  <Button
                    variant="primary"
                    type="submit"
                    className="d-block w-100"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

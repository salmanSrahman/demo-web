import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Register.css";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiLockOpenAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={7} className="mx-auto">
            <div>
              <h1>Get Started For Free!</h1>
            </div>
            <Row className="g-3">
              <Col xs={12} xl={4} className="g-4">
                <div className="social-sign sign1">
                  <FcGoogle className="fs-2" />
                  <h5 className="d-inline-block ms-3 fw-bold">Google</h5>
                </div>
              </Col>
              <Col xs={12} xl={4} className="g-4">
                <div className="social-sign sign2">
                  <SiFacebook className="fs-2 text-primary" />
                  <h5 className="d-inline-block ms-3 fw-bold">Facebook</h5>
                </div>
              </Col>
              <Col xs={12} xl={4} className="g-4">
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
            <Col md={7} className="mx-auto mt-3">
              <div className="login-form">
                <Form>
                  <Form.Group
                    className="mb-4 form-inner"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="form-icon">
                      <MdOutlineMarkEmailUnread className="fs-1 text-primary font-weight-light" />
                    </Form.Label>
                    <Form.Control
                      type="name"
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="Enter Your Full Name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4 form-inner"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="form-icon">
                      <MdOutlineMarkEmailUnread className="fs-1 text-primary font-weight-light" />
                    </Form.Label>
                    <Form.Control
                      type="email"
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="Enter Your Email Address"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4 form-inner"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="form-icon">
                      <BiLockOpenAlt className="fs-1 text-primary font-weight-light" />
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Choose Your Password"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4 form-inner"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="form-icon">
                      <BiLockOpenAlt className="fs-1 text-primary font-weight-light" />
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Your Password"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between">
                    <Link to="/home"></Link>
                    <Link to="/home">Already Have An Account?</Link>
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="d-block w-100 mt-4 d-flex justify-content-between px-4"
                  >
                    <span>Sign In</span>
                    <span>
                      <BsArrowRight className="fs-2" />
                    </span>
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

import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import { BsFillPersonCheckFill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/">Shop</CustomLink>
              <CustomLink to="/shop">Shop</CustomLink>
              <CustomLink to="/products">Products</CustomLink>
              <CustomLink to="/notfound">Dashboard</CustomLink>
              <CustomLink to="/dashboard">Dashboard</CustomLink>
            </Nav>
            <Button
              variant="outline-primary"
              as={Link}
              to="/login"
              className="ms-3"
            >
              <BsFillPersonCheckFill className="me-1" />
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

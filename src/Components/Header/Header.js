import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.config";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth).then(() => {});
  };
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto me-2 my-2 my-lg-0 nav-menu"
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
            <span className="fw-bold">
              {user?.email && (
                <Button
                  variant="outline-primary"
                  as={Link}
                  to="/login"
                  className="ms-3 fw-bold"
                >
                  <BsFillPersonCheckFill className="me-1" />
                  {user.displayName}
                </Button>
              )}
            </span>
            {!user?.email ? (
              <Button
                variant="outline-primary"
                as={Link}
                to="/login"
                className="ms-3 fw-bold"
              >
                <FaUserPlus className="me-1 fw-bold" />
                Login
              </Button>
            ) : (
              <Button
                variant="outline-danger"
                className="ms-3 fw-bold"
                as={Link}
                to="/home"
                onClick={handleLogOut}
              >
                <FaUserMinus className="me-1" />
                Logout
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

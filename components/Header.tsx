import React from "react";
import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data, status } = useSession();

  return (
    <Navbar bg="light">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>NextAuth Example</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as="div">
              {status === "authenticated" ? (
                <Button
                  onClick={() =>
                    signOut({ callbackUrl: "http://localhost:3000" })
                  }
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    signIn("github", {
                      callbackUrl: "http://localhost:3000/dashboard",
                    });
                  }}
                >
                  SignIn
                </Button>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

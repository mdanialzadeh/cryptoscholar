import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Navtop() {
  return (
    <Navbar
      variant="dark"
      expand="sm"
      collapseOnSelect={true}
      fixed="top"
      style={{
        boxShadow: "0 3px 4px 0 rgba(0,0,0,.2)",
        backdropFilter: "blur(900px)",
        background: "#00000070",
      }}
    >
      <Container>
        <Navbar.Brand
          style={{
            color: "#002370",
            fontSize: "1.4rem",
            fontWeight: "700",
          }}
        >
          <Link id="nava" className="newsnav" to="/home">
            <svg
              width="200"
              height="28.007954654638816"
              viewBox="0 0 200 28.007954654638816"
              class="css-1j8o68f"
            >
              <defs id="SvgjsDefs1714"></defs>
              <g
                id="SvgjsG1715"
                featurekey="nameFeature-0"
                transform="matrix(0.9861926854316049,0,0,0.9861926854316049,-1.1834310344165988,-11.43983176518273)"
                fill="#ffffff"
              >
                <path d="M29.28 39.76 l3.92 0 l0 0.24 l-12 0 l0 -0.24 l3.84 0 l-5.04 -11.76 l-9.6 0 l-5.04 11.76 l3.84 0 l0 0.24 l-8 0 l0 -0.24 l3.92 0 c2.0267 -4.72 4.0468 -9.4068 6.06 -14.06 s4.02 -9.3532 6.02 -14.1 l1.62 3.78 l1.16 2.68 l0.9 2.08 l0.86 2.02 l1.04 2.46 l1.46 3.4 l2.1 4.88 z M10.52 27.759999999999998 l9.36 0 l-4.68 -10.92 z M47 39.76 l0 0.24 l-12 0 l0 -0.24 l3.88 0 l0 -15.76 l-3.88 0 l0 -0.24 l8.12 0 l0 16 l3.88 0 z M41 20 c-0.58668 0 -1.0867 -0.20668 -1.5 -0.62 s-0.62 -0.91332 -0.62 -1.5 s0.20668 -1.0867 0.62 -1.5 s0.91332 -0.62 1.5 -0.62 s1.0867 0.20668 1.5 0.62 s0.62 0.91332 0.62 1.5 s-0.20668 1.0867 -0.62 1.5 s-0.91332 0.62 -1.5 0.62 z M61.120000000000005 30.96 c0.08 0.64 0.2666 1.46 0.55992 2.46 s0.79332 1.9733 1.5 2.92 s1.68 1.7534 2.92 2.42 s2.8467 1 4.82 1 c0.8 0 1.56 -0.15332 2.28 -0.46 s1.3467 -0.72668 1.88 -1.26 s0.95332 -1.16 1.26 -1.88 s0.46 -1.48 0.46 -2.28 l0 -8 c0 -0.74668 -0.08668 -1.4 -0.26 -1.96 s-0.4 -1.0467 -0.68 -1.46 s-0.59332 -0.76 -0.94 -1.04 s-0.70668 -0.51332 -1.08 -0.7 c-0.88 -0.42668 -1.8533 -0.66668 -2.92 -0.72 c-0.77332 -0.02668 -1.4666 -0.18668 -2.08 -0.48 c-0.53332 -0.26668 -1.0066 -0.68 -1.42 -1.24 s-0.62 -1.36 -0.62 -2.4 s0.20668 -1.8333 0.62 -2.38 s0.87332 -0.95336 1.38 -1.22 s0.97336 -0.42 1.4 -0.46 s0.66668 -0.06 0.72 -0.06 c0.02668 0 0.26 0.02 0.7 0.06 s0.91332 0.18668 1.42 0.44 s0.96668 0.66 1.38 1.22 s0.62 1.36 0.62 2.4 c0 0.58668 -0.20668 1.0867 -0.62 1.5 s-0.91332 0.62 -1.5 0.62 s-1.0867 -0.20668 -1.5 -0.62 s-0.62 -0.91332 -0.62 -1.5 s0.20668 -1.0867 0.62 -1.5 s0.91332 -0.62 1.5 -0.62 c0.74668 0 1.32 0.30668 1.72 0.92 c-0.18668 -0.66668 -0.48 -1.1867 -0.88 -1.56 s-0.81332 -0.64 -1.24 -0.8 c-0.48 -0.18668 -1.0133 -0.29336 -1.6 -0.32004 l-0.62 0.06 l-1.34 0.42 l-1.32 1.16 l-0.6 2.24 c0 0.98668 0.2 1.74 0.6 2.26 s0.84 0.9 1.32 1.14 c0.56 0.29332 1.2133 0.45332 1.96 0.48 c1.3867 0 2.6934 0.26668 3.92 0.8 s2.3 1.2533 3.22 2.16 s1.6467 1.98 2.18 3.22 s0.8 2.5533 0.8 3.94 c0 1.4133 -0.26668 2.7333 -0.8 3.96 s-1.26 2.2934 -2.18 3.2 s-1.9933 1.6267 -3.22 2.16 s-2.5334 0.8 -3.92 0.8 c-1.68 0 -3.0933 -0.24668 -4.24 -0.74 s-2.0934 -1.1066 -2.84 -1.84 s-1.3267 -1.54 -1.74 -2.42 s-0.71332 -1.6933 -0.9 -2.44 s-0.3 -1.3734 -0.34 -1.88 s-0.06 -0.77336 -0.06 -0.80004 c0 -0.58668 0.20668 -1.0867 0.62 -1.5 s0.91332 -0.62 1.5 -0.62 s1.0867 0.20668 1.5 0.62 s0.62 0.91332 0.62 1.5 s-0.20668 1.0867 -0.62 1.5 s-0.91332 0.62 -1.5 0.62 c-0.8 0 -1.4 -0.34668 -1.8 -1.04 z M92.04 23.76 c0.42668 0 0.87332 0.0534 1.34 0.16008 s0.9 0.26668 1.3 0.48 s0.73332 0.5 1 0.86 s0.4 0.79332 0.4 1.3 c0 0.4 -0.14668 0.74 -0.44 1.02 s-0.64 0.42 -1.04 0.42 s-0.74 -0.14 -1.02 -0.42 s-0.42 -0.62 -0.42 -1.02 s0.14 -0.74 0.42 -1.02 s0.62 -0.42 1.02 -0.42 c0.34668 0 0.65336 0.10668 0.92004 0.32 c-0.32 -0.50668 -0.84 -0.87336 -1.56 -1.1 s-1.36 -0.34 -1.92 -0.34 c-1.0933 0 -2.0266 0.36668 -2.8 1.1 s-1.16 1.66 -1.16 2.78 l0 8 c0 1.0933 0.37332 2.0133 1.12 2.76 s1.6667 1.12 2.76 1.12 c0.58668 0 1.24 -0.1 1.96 -0.3 s1.2533 -0.56668 1.6 -1.1 c-0.26668 0.21332 -0.57336 0.32 -0.92004 0.32 c-0.4 0 -0.74 -0.14668 -1.02 -0.44 s-0.42 -0.62664 -0.42 -0.99996 c0 -0.4 0.14 -0.74668 0.42 -1.04 s0.62 -0.44 1.02 -0.44 c0.37332 0 0.71332 0.14668 1.02 0.44 s0.46 0.64 0.46 1.04 c0 0.69332 -0.18668 1.2266 -0.56 1.6 s-0.8 0.64664 -1.28 0.81996 s-0.94 0.27332 -1.38 0.3 s-0.74 0.04 -0.9 0.04 c-1.12 0 -2.1733 -0.21332 -3.16 -0.64 s-1.8467 -1.0067 -2.58 -1.74 s-1.3133 -1.5933 -1.74 -2.58 s-0.64 -2.04 -0.64 -3.16 c0 -1.68 0.26668 -3.04 0.8 -4.08 s1.2066 -1.86 2.02 -2.46 s1.7 -1.0133 2.66 -1.24 s1.8667 -0.34 2.72 -0.34 z M121.28 39.76 l0.000039062 0.24004 l-12 0 l0 -0.24 l3.88 0 l0 -15.76 c-0.66668 0 -1.36 0.12 -2.08 0.36 s-1.42 0.54668 -2.1 0.92 s-1.3267 0.79332 -1.94 1.26 s-1.16 0.92668 -1.64 1.38 l0 12.08 l-8.12 0 l0 -0.24 l3.88 0 l0 -27.76 l-3.88 0 l0 -0.24 l8.12 0 l0 15.88 c0.53332 -0.50668 1.12 -0.99336 1.76 -1.46 s1.3 -0.88 1.98 -1.24 s1.3667 -0.64668 2.06 -0.86 s1.3866 -0.32 2.08 -0.32 c1.2 0 2.1867 0.38668 2.96 1.16 s1.16 1.76 1.16 2.96 l0 11.88 l3.88 0 z M134.48000000000002 27.880000000000003 c0 -0.53332 -0.1 -1.04 -0.3 -1.52 s-0.48 -0.89332 -0.84 -1.24 s-0.77332 -0.62 -1.24 -0.82 s-0.96668 -0.3 -1.5 -0.3 c-1.0933 0 -2.0133 0.37332 -2.76 1.12 s-1.12 1.6667 -1.12 2.76 l0 8 c0 1.0933 0.37332 2.0133 1.12 2.76 s1.6667 1.12 2.76 1.12 c0.53332 0 1.0333 -0.1 1.5 -0.3 s0.88 -0.47332 1.24 -0.82 s0.64 -0.76 0.84 -1.24 s0.3 -0.98668 0.3 -1.52 l0 -8 z M130.60000000000002 23.76 c1.12 0 2.1734 0.21328 3.16 0.63996 s1.8467 1.0067 2.58 1.74 s1.3133 1.5933 1.74 2.58 s0.64 2.04 0.64 3.16 s-0.21332 2.1667 -0.64 3.14 s-1.0134 1.8333 -1.76 2.58 s-1.6067 1.3334 -2.58 1.76 s-2.02 0.64 -3.14 0.64 c-1.1733 0 -2.26 -0.23332 -3.26 -0.7 s-1.86 -1.0867 -2.58 -1.86 s-1.28 -1.64 -1.68 -2.6 s-0.6 -1.9467 -0.6 -2.96 c0 -1.12 0.21332 -2.1733 0.64 -3.16 s1.0067 -1.8467 1.74 -2.58 s1.5933 -1.3133 2.58 -1.74 s2.04 -0.64 3.16 -0.64 z M148.04000000000002 39.76 l3.88 0 l0 0.24 l-12 0 l0 -0.24 l3.88 0 l0 -27.76 l-3.88 0 l0 -0.24 l8.12 0 l0 28 z M165.12 27.880000000000003 c0 -0.53332 -0.1 -1.04 -0.3 -1.52 s-0.48 -0.89332 -0.84 -1.24 s-0.77332 -0.62 -1.24 -0.82 s-0.96668 -0.3 -1.5 -0.3 s-1.04 0.1 -1.52 0.3 s-0.89332 0.48 -1.24 0.84 s-0.62 0.77332 -0.82 1.24 s-0.3 0.96668 -0.3 1.5 l0 8.04 c0 1.2 0.32668 2.1467 0.98 2.84 s1.62 1.04 2.9 1.04 c0.77332 0 1.4933 -0.22 2.16 -0.66 s1.1467 -1.0333 1.44 -1.78 c0.13332 -0.37332 0.21332 -0.69332 0.24 -0.96 s0.04 -0.42668 0.04 -0.48 l0 -8.04 z M173.24 39.76 l0.000078124 0.24 l-8.12 0 l0 -1 c-0.58668 0.29332 -1.2134 0.53332 -1.88 0.72 s-1.3334 0.28 -2 0.28 c-1.52 0 -2.8 -0.3 -3.84 -0.9 s-1.88 -1.3267 -2.52 -2.18 s-1.0933 -1.74 -1.36 -2.66 s-0.4 -1.7133 -0.4 -2.38 c0 -1.12 0.21332 -2.1733 0.64 -3.16 s1.0067 -1.8467 1.74 -2.58 s1.5933 -1.3133 2.58 -1.74 s2.04 -0.64 3.16 -0.64 c1.3867 0 2.68 0.33332 3.88 1 l0 -1 l4.24 0 l0 16 l3.88 0 z M186.44 23.76 c1.0133 0.02668 1.8001 0.24676 2.3601 0.66008 s0.97332 0.88664 1.24 1.42 c0.29332 0.61332 0.46664 1.2933 0.51996 2.04 c0 0.58668 -0.20668 1.0867 -0.62 1.5 s-0.91332 0.62 -1.5 0.62 s-1.0867 -0.20668 -1.5 -0.62 s-0.62 -0.91332 -0.62 -1.5 s0.20668 -1.0867 0.62 -1.5 s0.91332 -0.62 1.5 -0.62 c0.34668 0 0.66 0.08 0.94 0.24 s0.52668 0.36 0.74 0.6 c-0.08 -0.26668 -0.20668 -0.55336 -0.38 -0.86004 s-0.40664 -0.59336 -0.69996 -0.86004 s-0.65332 -0.48 -1.08 -0.64 s-0.93336 -0.24 -1.52 -0.24 c-1.2 0 -2.1467 0.37332 -2.84 1.12 s-1.04 1.68 -1.04 2.8 l0 11.84 l3.8 0 l0 0.24 l-11.92 0 l0 -0.24 l3.88 0 l0 -15.76 l-3.88 0 l0 -0.24 l8.12 0 l0 2.84 c0.08 -0.29332 0.21332 -0.60664 0.4 -0.93996 s0.42668 -0.64 0.72 -0.92 s0.66664 -0.51332 1.12 -0.7 s1 -0.28 1.64 -0.28 z M204 33.88 c0 1.3067 -0.29984 2.4067 -0.89984 3.3 s-1.3533 1.5733 -2.26 2.04 s-1.8934 0.70668 -2.96 0.72 s-2.0534 -0.2 -2.96 -0.64 s-1.66 -1.1067 -2.26 -2 s-0.9 -2.0333 -0.9 -3.42 c0 -0.58668 0.20668 -1.0867 0.62 -1.5 s0.91332 -0.62 1.5 -0.62 s1.0867 0.20668 1.5 0.62 s0.62 0.91332 0.62 1.5 s-0.20668 1.0867 -0.62 1.5 s-0.91332 0.62 -1.5 0.62 c-0.74668 0 -1.3334 -0.30668 -1.76 -0.92 c0.08 0.42668 0.23332 0.91336 0.46 1.46 s0.55336 1.06 0.98004 1.54 s0.99336 0.88 1.7 1.2 s1.58 0.48 2.62 0.48 c0.53332 0 0.98 -0.18 1.34 -0.54 s0.54 -0.80668 0.54 -1.34 l0 -8 c0 -0.50668 -0.16668 -0.94668 -0.5 -1.32 s-0.79332 -0.56 -1.38 -0.56 c-0.53332 0 -0.94 -0.10668 -1.22 -0.32 s-0.48668 -0.45332 -0.62 -0.72 c-0.16 -0.29332 -0.25332 -0.65332 -0.28 -1.08 c0.02668 -0.4 0.12 -0.74668 0.28 -1.04 c0.13332 -0.26668 0.34 -0.51336 0.62 -0.74004 s0.68668 -0.34 1.22 -0.34 c0.61332 0 1.12 0.20668 1.52 0.62 s0.6 0.91332 0.6 1.5 c0 0.32 -0.11332 0.58668 -0.34 0.8 s-0.48668 0.32 -0.78 0.32 c-0.32 0 -0.58668 -0.10668 -0.8 -0.32 s-0.32 -0.48 -0.32 -0.8 c0 -0.29332 0.10668 -0.55332 0.32 -0.78 s0.48 -0.34 0.8 -0.34 c0.13332 0 0.25332 0.02668 0.36 0.08 l0.32 0.16 c-0.13332 -0.24 -0.32 -0.46668 -0.56 -0.68 s-0.61332 -0.32 -1.12 -0.32 c-0.48 0 -0.84668 0.1 -1.1 0.3 s-0.44664 0.42 -0.57996 0.66 c-0.13332 0.29332 -0.2 0.6 -0.2 0.92 c0 0.34668 0.06668 0.66668 0.2 0.96 c0.13332 0.24 0.32664 0.45332 0.57996 0.64 s0.62 0.28 1.1 0.28 c1.1467 0.02668 2.16 0.26668 3.04 0.72 c0.37332 0.18668 0.74664 0.42668 1.12 0.72 s0.70664 0.66 0.99996 1.1 s0.52664 0.95332 0.69996 1.54 s0.26 1.2667 0.26 2.04 z"></path>
              </g>
            </svg>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link eventKey={1} href="">
              <Link id="nava" className="homenav" to="/home">
                Home
              </Link>{" "}
            </Nav.Link>
            <Nav.Link eventKey={2} href="">
              <Link id="nava" className="newsnav" to="/news">
                News
              </Link>{" "}
            </Nav.Link>
            {/*
     <Nav.Link eventKey={3} href=""><Link  id="nava" className="aboutnav" to="/about">About</Link> </Nav.Link>
     */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navtop;

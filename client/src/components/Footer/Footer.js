// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.fixant.com">
              Denver
            </NavLink>
          </NavItem>
         
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made by{" "}
          <a
            href="https://www.fixant.com"
            target="_blank"
            rel="noreferrer"
          >
            Denver
          </a>{" "}
          for a better sales system.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

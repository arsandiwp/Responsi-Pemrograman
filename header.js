import { Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import Train from '../assets/img/Train.png'
import { useContext, useState } from "react";
import Login from "../pages/login";
import Daftar from "../pages/daftar";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

function Header () {
    const [showLogin, setShowLogin] = useState(false);
    const [showDaftar, setShowDaftar] = useState(false);
    const [state, dispatch] = useContext(UserContext);

    const logout = () => {
      dispatch({
        type: 'LOGOUT'
      })
    }

    return (
      <>
        <Navbar className="shadow bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold">
              <Link to="/">
                <img
                  src={Train}
                  className="d-inline-block align-top"
                  alt="Brand"
                />{" "}
                Land <span className="text-warning ">Tick</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end gap-3">
              <>
                { state.isLogin ?(
                  <>
                    {/* <img src={keranjang} alt="logo" style={{maxWidth:"35px",marginRight:"40px"}} /> */}
                    <NavDropdown className="ronded-circle" id={`offcanvasNavbarDropdown-expand-lg`}>
                    {/* <Link to="/profile">  */}
                        <NavDropdown.Item href="#action4"><img src="" alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/> Profile</NavDropdown.Item>
                    {/* </Link> */}
                            <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logout} href="/"><img src="" alt="logo" style={{maxheight:"50px", marginRight:"20px"}}/>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <Button variant="outline-warning" className="bg-gradient px-4" onClick={() => setShowDaftar(true)}>Daftar</Button>
                    <Button variant="warning" className="bg-gradient px-4" onClick={() => setShowLogin(true)}>Login</Button>
                  </>
                )}
              </>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Login
        show={showLogin}
        showLogin={setShowLogin}
        showDaftar={setShowDaftar} 
        />
        <Daftar 
        show={showDaftar}
        showDaftar={setShowDaftar}
        />
      </>
    ); 
};

export default Header;
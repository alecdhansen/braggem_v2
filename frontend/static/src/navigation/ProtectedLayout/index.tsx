import "../Header/HeaderNav.css";
import { Link, useOutlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { handleError } from "../../utils";
import { Toast, whoseHandIsItAnyway } from "./utils";
import { HamburgerButton, HamburgerContainer, HeaderContainer } from "./style";
//Bootstrap
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
//Npm
import Cookies from "js-cookie";
import Swal from "sweetalert2";
//React Icons
import { HiOutlineMenu } from "react-icons/hi";

export const ProtectedLayout = () => {
  const { user, logout }: any = useAuth();
  const outlet = useOutlet();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const logoutUser = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(user),
    };
    const response = await fetch("/dj-rest-auth/logout/", options).catch(
      handleError
    );
    if (!response) {
      throw new Error("Oops! Something went wrong");
    } else {
      const data = await response.json();
      Cookies.remove("Authorization", `Token${" "}${data.key}`);
      Toast.fire({
        icon: "warning",
        title: "You are now logged out.",
      });
      handleClose();
    }
    logout();
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header />

      {user?.right_handed ? (
        <HamburgerContainer>
          <HamburgerButton padding="20px 20px 10px 0px" onClick={handleShow}>
            <HiOutlineMenu />
          </HamburgerButton>
        </HamburgerContainer>
      ) : (
        <HamburgerContainer>
          <HamburgerButton padding="20px 0px 10px 20px" onClick={handleShow}>
            <HiOutlineMenu />
          </HamburgerButton>
        </HamburgerContainer>
      )}

      <HeaderContainer>
        <Offcanvas
          placement={whoseHandIsItAnyway(user)}
          show={show}
          onHide={handleClose}
          responsive="md"
        >
          <Offcanvas.Header
            closeButton
            closeVariant="white"
            className="offcanvasheader"
          ></Offcanvas.Header>

          <Offcanvas.Body className="offcanvasbody">
            <Nav.Item className="navlink">
              <Link to={`/home/${user?.username}/`} className="link">
                <button
                  className={
                    window.location.href.includes(`/home/${user?.username}/`)
                      ? "navbtnactive"
                      : "navbtn"
                  }
                  onClick={handleClose}
                >
                  Profile
                </button>
              </Link>
            </Nav.Item>
            <Nav.Item className="navlink">
              <Link to={"leaderboard"}>
                <button
                  className={
                    window.location.href.includes("leaderboard")
                      ? "navbtnactive"
                      : "navbtn"
                  }
                  onClick={handleClose}
                >
                  Leaderboard
                </button>
              </Link>
            </Nav.Item>
            <Nav.Item className="navlink">
              <Link to={"/home/games/"} className="linkto">
                <button
                  type="button"
                  autoFocus
                  className={
                    window.location.href.includes("/home/games/")
                      ? "navbtnactive"
                      : "navbtn"
                  }
                  onClick={handleClose}
                >
                  Home
                </button>
              </Link>
            </Nav.Item>
            <Nav.Item className="navlink">
              <Link to={"headtohead"}>
                <button
                  className={
                    window.location.href.includes("headtohead")
                      ? "navbtnactive"
                      : "navbtn"
                  }
                  onClick={handleClose}
                >
                  Head to Head
                </button>
              </Link>
            </Nav.Item>
            <Nav.Item className="navlink">
              <button className="navbtn" onClick={() => logoutUser()}>
                Logout
              </button>
            </Nav.Item>
          </Offcanvas.Body>
        </Offcanvas>
      </HeaderContainer>
      {outlet}
    </>
  );
};

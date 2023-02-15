import "./HeaderNav.css";
import { useAuth } from "../../hooks/useAuth";
import { Circle, Container, CurveHead } from "./style";

const Header = () => {
  const { user } = useAuth();
  return (
    <Container>
      <CurveHead>
        <Circle />
        <h2 className="headertitle">Braggem</h2>
        {user ? (
          <div className="courtlogo">
            <img
              style={{ width: "100%" }}
              src={require(`../../media/${user?.favorite_team}.png`)}
              alt=""
            ></img>
          </div>
        ) : null}
      </CurveHead>
    </Container>
  );
};
export default Header;

import styled from "styled-components";

export const ExpiredNoticeContainer = styled.div`
  text-align: center;
  padding: 0px;
  border-radius: 0.25rem;
  margin: 0.5rem;
  top: 0%;
  position: absolute;
  &:span {
    font-size: 2.5rem;
    font-weight: bold;
    color: #dc3232;
    text-shadow: 0.3px 0.3px 0.8px black;
  }
  &:p {
    font-size: 1.5rem;
  }
`;

export const ShowCounterContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.25rem;
  padding: 0px 0.65rem 0 0.65rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  &:span {
    font-family: "Bebas Neue";
    font-size: 20px;
    line-height: 1.5rem;
  }
`;

export const CountdownLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1.75rem;
  padding: 3px;
  text-decoration: none;
`;

export const CountdownContainer = styled.div`
  line-height: 1.25rem;
  padding: 0px 0.65rem 0 0.65rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  &:span {
    font-family: "Bebas Neue";
    font-size: 20px;
    line-height: 1.5rem;
  }
`;

export const ColorRangeContainer = styled.div`
  -webkit-animation: whirl-color-range 0.5s infinite ease;
  animation: whirl-color-range 0.5s infinite ease;
  content: "";
  height: 20px;
  -webkit-transform: translate(-30px, -20px);
  transform: translate(-30px, -20px);
  width: 10px;
  margin-bottom: 30px;

  @keyframes whirl-color-range {
    0% {
      -webkit-box-shadow: 0px 20px 0 0 #25374f, 15px 20px 0 0 #30618c,
        30px 20px 0 0 #5f96c7, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
      box-shadow: 0px 20px 0 0 #25374f, 15px 20px 0 0 #30618c,
        30px 20px 0 0 #5f96c7, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
    }
    20% {
      -webkit-box-shadow: 0px 20px 0 0 #30618c, 15px 20px 0 0 #5f96c7,
        30px 20px 0 0 #fdf9fe, 45px 20px 0 0 white, 60px 20px 0 0 #25374f;
      box-shadow: 0px 20px 0 0 #30618c, 15px 20px 0 0 #5f96c7,
        30px 20px 0 0 #fdf9fe, 45px 20px 0 0 white, 60px 20px 0 0 #25374f;
    }
    40% {
      -webkit-box-shadow: 0px 20px 0 0 #5f96c7, 15px 20px 0 0 #fdf9fe,
        30px 20px 0 0 white, 45px 20px 0 0 #25374f, 60px 20px 0 0 #30618c;
      box-shadow: 0px 20px 0 0 #5f96c7, 15px 20px 0 0 #fdf9fe,
        30px 20px 0 0 white, 45px 20px 0 0 #25374f, 60px 20px 0 0 #30618c;
    }
    60% {
      -webkit-box-shadow: 0px 20px 0 0 #fdf9fe, 15px 20px 0 0 white,
        30px 20px 0 0 #25374f, 45px 20px 0 0 #30618c, 60px 20px 0 0 #5f96c7;
      box-shadow: 0px 20px 0 0 #fdf9fe, 15px 20px 0 0 white,
        30px 20px 0 0 #25374f, 45px 20px 0 0 #30618c, 60px 20px 0 0 #5f96c7;
    }
    80% {
      -webkit-box-shadow: 0px 20px 0 0 white, 15px 20px 0 0 #25374f,
        30px 20px 0 0 #30618c, 45px 20px 0 0 #5f96c7, 60px 20px 0 0 #fdf9fe;
      box-shadow: 0px 20px 0 0 white, 15px 20px 0 0 #25374f,
        30px 20px 0 0 #30618c, 45px 20px 0 0 #5f96c7, 60px 20px 0 0 #fdf9fe;
    }
    100% {
      -webkit-box-shadow: 0px 20px 0 0 #25374f, 15px 20px 0 0 #30618c,
        30px 20px 0 0 #5f96c7, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
      box-shadow: 0px 20px 0 0 #25374f, 15px 20px 0 0 #30618c,
        30px 20px 0 0 #5f96c7, 45px 20px 0 0 #fdf9fe, 60px 20px 0 0 white;
    }
  }
`;

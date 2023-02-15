import styled from "styled-components";

export const HamburgerContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    align-items: center;
    background-color: var(--navyblue);
    z-index: 50;
  }
`;

export const HamburgerButton = styled.button<{ padding?: string }>`
  position: sticky;
  top: 0;
  background-color: var(--navyblue);
  border: none;
  color: #fff;
  display: flex;
  font-size: 40px;
  padding: ${({ padding }) => padding};
  visibility: hidden;
  @media (max-width: 768px) {
    visibility: visible;
  }
`;

export const HeaderContainer = styled.div.attrs(() => ({
  className: "col-12",
}))`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 40;
  background-color: var(--navyblue);
  margin: 30px 0px 60px 0px;
  @media (max-width: 768px) {
    margin: 0px;
  }
`;

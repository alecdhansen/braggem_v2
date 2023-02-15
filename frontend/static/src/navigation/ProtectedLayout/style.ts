import { Nav, Offcanvas } from "react-bootstrap";
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

export const OffcanvasHeader = styled(Offcanvas.Header)`
  background-color: var(--navyblue);
  width: 100%;
`;

export const OffcanvasBody = styled(Offcanvas.Body)`
  @media (max-width: 768px) {
    background-color: var(--navyblue);
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & :nth-child(1) {
    order: 4;
  }
  & :nth-child(2) {
    order: 2;
  }
  & :nth-child(3) {
    order: 1;
  }
  & :nth-child(4) {
    order: 3;
  }
  & :nth-child(5) {
    order: 5;
    padding-bottom: 30px;
  }
`;

export const ActiveButton = styled.button`
  background-color: var(--navyblue);
  border: none;
  border-bottom: 3px solid var(--navyblue);
  padding: 6px 80px 3px 80px;
  font-family: "Bebas Neue", cursive;
  font-size: 24px;
  border-bottom: 3px solid #30618c;
  color: #fff;
  @media (max-width: 768px) {
    border-bottom: 3px solid var(--navyblue);
    padding: 6px 60px 3px 60px;
    font-size: 40px;
  }
`;

export const Button = styled.button`
  background-color: var(--navyblue);
  border: none;
  border-bottom: 3px solid var(--navyblue);
  padding: 6px 80px 3px 80px;
  font-family: "Bebas Neue", cursive;
  font-size: 24px;
  color: #fff;
  &:hover {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 3px solid #30618c;
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-in-out;
  }
  &:focus {
    border-bottom: 3px solid #30618c;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-in-out;
  }
  @media (max-width: 1160px) {
    padding: 6px 40px 3px 40px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const NavItem = styled(Nav.Item)`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

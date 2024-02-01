import styled from "styled-components"

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  padding: 10px 80px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.$changeBackground ? "#000000" : "transparent"};
  transition: background-color 0.2s ease-in-out;

  img {
    width: 100px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 1;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 70px;
`

export const Li = styled.li`
  font-weight: 600;
  font-size: 20px;
  position: relative;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.$isActive ? "100%" : "0")};
    background-color: #189b20;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`

import styled, { css } from "styled-components"

const buttonStyles = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    color: #ff0000;
    background-color: #ffffff;
  }
`

export const WhiteButton = styled.button`
  ${buttonStyles}
`

export const RedButton = styled.button`
  ${buttonStyles}

  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 28px -3px rgba(255, 0, 0, 1);

  &:hover {
    box-shadow: 0px 0px 28px 5px rgba(255, 0, 0, 1);
    background: #ff0000;
    color: #ffffff;
  }
`

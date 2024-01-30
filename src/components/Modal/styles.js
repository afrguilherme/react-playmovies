import styled from "styled-components"

export const Background = styled.div`
  height: 100%;
  width: 100%;
  max-height: 100vh;
  max-width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background-color: #000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 30px;
  max-width: 1200px;

  iframe {
    border: none;
  }
`

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`

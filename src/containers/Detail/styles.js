import styled, { keyframes } from "styled-components"

const scale = keyframes`
from{
    transform: scale(0)
}
to{
    transform: scale(1);
}
`

export const Background = styled.div`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  height: 50vh;
  background-position: initial;
  background-repeat: no-repeat;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1500px;
  margin-top: -100px;
`

export const Poster = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 430px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }
`

export const Info = styled.div`
  padding: 20px;
  z-index: 99;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }

  p {
    font-weight: 700;
    color: #ffffff;
    margin: 20px 0;
  }
`

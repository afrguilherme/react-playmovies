import styled from "styled-components"

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    max-width: 1500px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.49);
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin: 30px 0;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.49);
  }
`

export const Poster = styled.div`
  z-index: 3;

  img {
    width: 300px;
    border-radius: 30px;
  }
`

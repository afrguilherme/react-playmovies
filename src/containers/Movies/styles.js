import styled from "styled-components"

export const Container = styled.div`
  padding: 100px 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`

export const ContainerMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-bottom: 150px;
`

export const Title = styled.h2`
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 20px;
  margin-left: 80px;
  text-align: left;
  width: 100%;
  text-shadow: 2px 4px 2px rgba(95, 95, 95, 0.6);
`

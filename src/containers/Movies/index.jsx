import { useState, useEffect } from "react"
import { ContainerMovies, Container, Title } from "./styles"
import {
  getMovies,
  getTopMovies,
  getUpComingMovies,
} from "../../services/getData"
import Card from "../../components/Card"

function Movies() {
  const [popularMovies, setPopularMovies] = useState()
  const [ratedMovies, setRatedMovies] = useState()
  const [upComingMovies, setUpcomingMovies] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovies(), getTopMovies(), getUpComingMovies()])
        .then(([movies, topMovies, upComingMovies]) => {
          setPopularMovies(movies)
          setRatedMovies(topMovies)
          setUpcomingMovies(upComingMovies)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      <Container>
        <Title>Mais avaliados</Title>
        <ContainerMovies>
          {ratedMovies &&
            ratedMovies.map((movie) => <Card key={movie.id} item={movie} />)}
        </ContainerMovies>

        <Title>Em alta</Title>
        <ContainerMovies>
          {popularMovies &&
            popularMovies.map((movie) => <Card key={movie.id} item={movie} />)}
        </ContainerMovies>

        <Title>Em breve</Title>
        <ContainerMovies>
          {upComingMovies &&
            upComingMovies.map((movie) => <Card key={movie.id} item={movie} />)}
        </ContainerMovies>
      </Container>
    </>
  )
}

export default Movies

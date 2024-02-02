import { useState, useEffect } from "react"
import { Container } from "./styles"
import { getMovies, getTopMovies } from "../../services/getData"

function Movies() {
  const [popularMovies, setPopularMovies] = useState()
  const [ratedMovies, setRatedMovies] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovies(), getTopMovies()])
        .then(([movie, topMovies]) => {
          setPopularMovies(movie)
          setRatedMovies(topMovies)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  console.log(ratedMovies)

  return (
    <Container>
      <div>Filmes</div>
    </Container>
  )
}

export default Movies

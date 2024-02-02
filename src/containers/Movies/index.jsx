import { useState, useEffect } from "react"
import { Container, Background, Info } from "./styles"
import { getMovies, getTopMovies } from "../../services/getData"
import { getImages } from "../../utils/getImages"

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

  return (
    <>
      {ratedMovies && (
        <Background $img={getImages(ratedMovies[0].backdrop_path)} />
      )}
      <Container>
        <Info>
          <h1>{ratedMovies[0].title}</h1>
          <p>{ratedMovies[0].overview}</p>
        </Info>
      </Container>
    </>
  )
}

export default Movies

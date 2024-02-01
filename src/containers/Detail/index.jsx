import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Background, Poster, Info } from "./styles"
import { getImages } from "../../utils/getImages"

import {
  getMovieById,
  getMovieVideos,
  getMovieCredits,
  getMovieSimilar,
} from "../../services/getData"

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movie, videos, credits, similar]) => {
          console.log({ movie, videos, credits, similar })
          setMovie(movie)
          setMovieVideos(videos)
          setMovieCredits(credits)
          setMovieSimilar(similar)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Poster>
              <img src={getImages(movie.poster_path)} />
            </Poster>
            <Info>
              <h2>{movie.title}</h2>
              <div>Gêneros</div>
              <p>{movie.overview}</p>
              <div>Créditos</div>
            </Info>
          </Container>
        </>
      )}
    </>
  )
}

export default Detail

import { useEffect, useState } from "react"
import { Container, Background, CloseButton } from "./styles"
import api from "../../services/api"

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get(`/movie/${movieId}/videos`)

      console.log(results[1])

      setMovie(results[1])
    }
    getMovies()
  }, [])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal

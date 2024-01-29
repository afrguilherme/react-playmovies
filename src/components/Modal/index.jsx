import { useEffect } from "react"
import { Container } from "./styles"
import api from "../../services/api"

function Modal({ movieId }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get(`/movie/${movieId}/videos`)

      console.log(results)

      setMovie(results)
    }
    getMovies()
  }, [])

  return (
    <Container>
      <div>{movieId}</div>
    </Container>
  )
}

export default Modal

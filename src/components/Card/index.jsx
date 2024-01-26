import { Container } from "./styles"
import { getImages } from "../../utils/getImages"

function Card({ item }) {
  return (
    <Container>
      <img src={getImages(item.poster_path)} />
      <h3>{item.original_title}</h3>
    </Container>
  )
}

export default Card

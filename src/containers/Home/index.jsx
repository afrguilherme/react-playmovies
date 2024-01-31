import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from "./styles.js"
import Button from "../../components/Button"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Slider from "../../components/Slider"
import { getImages } from "../../utils/getImages"
import Modal from "../../components/Modal"
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from "../../services/getData"

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeople, setTopPeople] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      setMovie(await getMovies())
      setTopMovies(await getTopMovies())
      setTopSeries(await getTopSeries())
      setPopularSeries(await getPopularSeries())
      setTopPeople(await getTopPeople())
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red>
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Series"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Series Populares"} />
      )}
      {topPeople && <Slider info={topPeople} title={"Top Artistas"} />}
    </>
  )
}

export default Home

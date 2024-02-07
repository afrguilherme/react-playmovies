import { useState, useEffect } from "react"
import { ContainerMovies, Container, Title } from "./styles"
import { getPopularSeries, getTopSeries } from "../../services/getData"
import Card from "../../components/Card"

function Series() {
  const [popularSeries, setPopularSeries] = useState()
  const [ratedSeries, setRatedSeries] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([getPopularSeries(), getTopSeries()])
        .then(([series, ratedSeries]) => {
          setPopularSeries(series)
          setRatedSeries(ratedSeries)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      <Container>
        <Title>Em alta</Title>
        <ContainerMovies style={{ marginBottom: "150px" }}>
          {popularSeries &&
            popularSeries.map((series) => (
              <Card key={series.id} item={series} />
            ))}
        </ContainerMovies>

        <Title>Mais avaliados</Title>
        <ContainerMovies>
          {ratedSeries &&
            ratedSeries.map((series) => <Card key={series.id} item={series} />)}
        </ContainerMovies>
      </Container>
    </>
  )
}

export default Series

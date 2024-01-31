import api from "./api"

// Requisições de dados da api.

export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular")

  return results[0]
}

export async function getTopMovies() {
  const {
    data: { results },
  } = await api.get("/movie/top_rated")

  return results
}

export async function getTopSeries() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated")

  return results
}

export async function getPopularSeries() {
  const {
    data: { results },
  } = await api.get("/tv/popular")

  return results
}

export async function getTopPeople() {
  const {
    data: { results },
  } = await api.get("/person/popular")

  return results
}

// Requisição de filmes específicos pelo id.

export async function getMovie(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`)

  return results[0]
}
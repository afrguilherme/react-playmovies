import { useState } from "react"
import Logo from "../../assets/logo.png"

import { Container, Menu, Li } from "./styles"

import { Link, useLocation, useNavigate } from "react-router-dom"

function Header() {
  const { pathname } = useLocation()
  const [changeBackground, setChangeBackground] = useState(false)
  const navigate = useNavigate()

  window.onscroll = () => {
    if (window.pageYOffset > 200) {
      setChangeBackground(true)
    } else {
      setChangeBackground(false)
    }
  }

  return (
    <Container $changeBackground={changeBackground}>
      <img onClick={() => navigate("/")} src={Logo} alt="header-logo" />
      <Menu>
        <Li $isActive={pathname === "/"}>
          <Link to="/">Home</Link>
        </Li>
        <Li $isActive={pathname.includes("filmes")}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li $isActive={pathname.includes("series")}>
          <Link to="/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header

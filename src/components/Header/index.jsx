import Logo from "../../assets/logo.png"

function Header() {
  return (
    <div>
      <img
        src={Logo}
        alt="header-logo"
        style={{ width: "100px", background: "transparent" }}
      />
    </div>
  )
}

export default Header

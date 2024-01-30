import { WhiteButton, RedButton } from "./styles"

function Button({ children, red, ...props }) {
  return (
    <>
      {red ? (
        <RedButton {...props}>{children}</RedButton>
      ) : (
        <WhiteButton {...props}>{children}</WhiteButton>
      )}
    </>
  )
}

export default Button

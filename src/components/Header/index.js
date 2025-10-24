import { HeaderContainer, HeaderDiv, HeaderLogo } from "./styles.js"
import { Location } from "../Location/index.js"
import { Cart } from "../Cart/index.js"
import Image from "../../assets/Logo.svg"

const Header = ({ quantity }) => {
  return (
    <HeaderContainer>
      <HeaderLogo src={ Image }/>
      <HeaderDiv>
        <Location /> 
        <Cart quantity={quantity}/>
      </HeaderDiv>
    </HeaderContainer>
  )
}

export { Header } 
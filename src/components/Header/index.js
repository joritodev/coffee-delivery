import { HeaderContainer, HeaderDiv, HeaderLogo } from "./styles.js"
import { Location } from "../Location/index.js"
import { Cart } from "../Cart/index.js"
import Image from "../../assets/Logo.svg"
import { useNavigate } from "react-router-dom"

const Header = ({ quantity }) => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderLogo src={ Image } onClick={() => navigate('/')} style={{ cursor: 'pointer' }}/>
      <HeaderDiv>
        <Location /> 
        <Cart quantity={quantity}/>
      </HeaderDiv>
    </HeaderContainer>
  )
}

export { Header } 
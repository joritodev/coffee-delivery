import { AboutContainer, Benefits, BenefitsText, Text, Title } from "./styles.js"
import { ShoppingCartIcon, TimerIcon, PackageIcon, CoffeeIcon } from "@phosphor-icons/react"
import Banner from "../../assets/Banner.svg"
const AboutUs = () => {
  return (
    <AboutContainer>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Text>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Text>
        <Benefits>
          <div>
            <div className="cart">
              <ShoppingCartIcon size={16} color="#fafafa" weight="fill" />
            </div>
            <BenefitsText>Compra simples e segura</BenefitsText>
          </div>
          <div>
            <div className="package">
              <PackageIcon size={16} color="#fafafa" weight="fill" />
            </div>
            <BenefitsText>Embalagem mantém o café intacto</BenefitsText>
          </div>
          <div>
            <div className="timer">
              <TimerIcon size={16} color="#fafafa" weight="fill" />
            </div>
            <BenefitsText>Entrega rápida e rastreada</BenefitsText>
          </div>
          <div>
            <div className="coffee">
              <CoffeeIcon size={16} color="#fafafa" weight="fill" />
            </div>
            <BenefitsText>O café chega fresquinho até você</BenefitsText>
          </div>
        </Benefits>
      </div>
      <img src={Banner} alt="Banner Coffee Delivery" />
    </AboutContainer>
  )
}

export { AboutUs }
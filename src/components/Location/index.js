import { MapPinIcon } from "@phosphor-icons/react";
import { Locale, LocationContainer } from "./styles.js"
const Location = () => {
  return (
    <LocationContainer>
      <MapPinIcon size={22} color="#8007f8" weight="fill" />
      <Locale>Fortaleza, CE</Locale>
    </LocationContainer>
  )
}

export { Location }
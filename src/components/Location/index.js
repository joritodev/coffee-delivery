import { useState, useEffect } from "react";
import { MapPinIcon } from "@phosphor-icons/react";
import { Locale, LocationContainer } from "./styles.js"

const Location = () => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        if (data.city && data.region_code) {
          setLocation(`${data.city}, ${data.region_code}`);
        } else {
          setLocation(null);
        }
      } catch (error) {
        console.error('Erro ao buscar localização:', error);
        setLocation(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, []);

  if (isLoading) {
    return (
      <LocationContainer>
        <MapPinIcon size={22} color="#8007f8" weight="fill" />
        <Locale>Carregando...</Locale>
      </LocationContainer>
    )
  }

  if (!location) {
    return (
      <LocationContainer>
        <MapPinIcon size={22} color="#8007f8" weight="fill" />
        <Locale>Não encontrado</Locale>
      </LocationContainer>

    )
  }

  return (
    <LocationContainer>
      <MapPinIcon size={22} color="#8007f8" weight="fill" />
      <Locale>{location}</Locale>
    </LocationContainer>
  )
}

export { Location }
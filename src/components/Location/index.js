import { useState, useEffect } from "react"; // Importa os hooks do React
import { MapPinIcon } from "@phosphor-icons/react";
import { Locale, LocationContainer } from "./styles.js"

const Location = () => {
  // Estado para armazenar a localização (ex: "Porto Alegre, RS")
  const [location, setLocation] = useState(null);
  
  // Estado para sabermos se a busca está em andamento
  const [isLoading, setIsLoading] = useState(true);

  // useEffect para buscar a localização assim que o componente for montado
  useEffect(() => {
    // Define uma função assíncrona para fazer a chamada de API
    const fetchLocation = async () => {
      try {
        // Chama a API de geolocalização por IP
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // Verifica se a API retornou a cidade e o estado
        if (data.city && data.region_code) {
          // Formata e salva a localização no estado
          setLocation(`${data.city}, ${data.region_code}`);
        } else {
          // Se não encontrar, define como nulo
          setLocation(null);
        }
      } catch (error) {
        console.error('Erro ao buscar localização:', error);
        setLocation(null); // Define como nulo em caso de erro
      } finally {
        // Independente de sucesso ou erro, marca como não-carregando
        setIsLoading(false);
      }
    };

    fetchLocation(); // Executa a função
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  // ------ Lógica de Renderização ------

  // 1. Durante o carregamento
  if (isLoading) {
    return (
      <LocationContainer>
        {/* Usamos o mesmo ícone, mas um texto de "Carregando..." */}
        <MapPinIcon size={22} color="#8007f8" weight="fill" />
        <Locale>Carregando...</Locale>
      </LocationContainer>
    )
  }

  // 2. Se deu erro ou não encontrou a localização
  if (!location) {
    return null; // Não renderiza nada para não quebrar o layout
  }

  // 3. Se deu tudo certo (sucesso)
  return (
    <LocationContainer>
      <MapPinIcon size={22} color="#8007f8" weight="fill" />
      {/* Exibe a localização dinâmica que veio da API */}
      <Locale>{location}</Locale>
    </LocationContainer>
  )
}

export { Location }
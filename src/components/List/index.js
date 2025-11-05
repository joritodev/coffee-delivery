import { ListContainer, Title, ListGrid} from "./styles.js"
import { Card } from "../Card"
import data from "../../data.json";

const List = () => {
  return (
    <ListContainer>
      <Title>Nossos cafés</Title>
      <ListGrid >
        {
          data.map(item => (
            <Card name={item.name} type={item.type} image={item.image} description={item.description} price={item.price}/>
          ))
        }
      </ListGrid>

    </ListContainer>
  )
}

export { List }
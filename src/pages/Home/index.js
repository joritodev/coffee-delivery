import { Header } from "../../components/Header";
import { AboutUs } from "../../components/AboutUs"
import { List } from "../../components/List"
import { HomeContainer } from "./styles";

function App() {
  return (
    <HomeContainer>
      <Header />
      <AboutUs />
      <List />
    </HomeContainer>
  );
}

export default App;

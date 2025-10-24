import { Header } from "../../components/Header";
import { AboutUs } from "../../components/AboutUs"
import { List } from "../../components/List"
import { CartProvider } from "../../contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <AboutUs />
        <List />
      </div>
    </CartProvider>
  );
}

export default App;

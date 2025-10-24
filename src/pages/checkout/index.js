import { Header } from "../../components/Header"
import { Form } from "../../components/Form"
import { CartProvider } from "../../contexts/CartContext";

function Checkout() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Form />
      </div>
    </CartProvider>
  );
}

export default Checkout;
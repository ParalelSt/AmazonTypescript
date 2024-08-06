import { ItemCartContainer } from "./ItemCart.styled";
import CartNav from "./CartNav";
import CartContent from "./CartComponents/CartContent";

function ItemCart() {
  return (
    <>
      <ItemCartContainer>
        <CartNav></CartNav>
        <CartContent></CartContent>
      </ItemCartContainer>
    </>
  );
}

export default ItemCart;

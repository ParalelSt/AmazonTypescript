import { GlobalStyles } from "./Components/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import ItemCart from "./Components/ItemCart";
import Error404 from "./Components/Error404";
import { SignUp } from "./Components/Sign_up/SignUp";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Content></Content>}></Route>
        <Route path="/item-cart" element={<ItemCart></ItemCart>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      </Routes>
    </>
  );
}

export default App;

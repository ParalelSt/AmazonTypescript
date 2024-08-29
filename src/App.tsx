import { GlobalStyles } from "./Components/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import ItemCart from "./Components/ItemCart";
import Error404 from "./Components/Error404";
import { SignUp } from "./Components/Sign_up/SignUp";
import { SignIn } from "./Components/CartComponents/Sign_in/SignIn";

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Navbar></Navbar>
      <Routes>
        <Route path="/AmazonTypescript/" element={<Content></Content>}></Route>
        <Route
          path="/AmazonTypescript/item-cart"
          element={<ItemCart></ItemCart>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
        <Route
          path="/AmazonTypescript/sign-up"
          element={<SignUp></SignUp>}
        ></Route>
        <Route
          path="/AmazonTypescript/sign-in"
          element={<SignIn></SignIn>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

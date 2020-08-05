import React from "react";
import AddProductForm from "../components/AddProductForm";
import {ProductList} from "../components/Product";
import styled from "styled-components";

const Home = () => {
  const [cart, setCart] = React.useState([
  ]);

  function removeFromCart(index) {
    setCart(cart.filter((item, i) => i !== index));
  }

  function changeCartItemCount(index, count) {
    cart[index].count = count;
    setCart(cart.map((item, i) => {
      if (index === i) item.count = count;
      return item
    }))
  }

  function addToCart(item) {
    setCart(cart.concat([item]))
  }

  return (
    <MainBox>
      <Box>
        <AddProductForm onAdd={addToCart} />
      </Box>
      <Box>
        <ProductList
          cart={cart}
          onRemove={removeFromCart}
          onCountChange={changeCartItemCount}
        />

      </Box>
    </MainBox>
  )
};


export default Home;

const MainBox = styled.div`
  display: flex;
  flex: 400px;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`
const Box = styled.div`
  display: flex;
  width: 50%;
  height: 400px;
  align-items: center;
  justify-content: space-around;
`;

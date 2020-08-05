import React from "react";
import {connect} from "react-redux";
import AddProductForm from "../components/AddProductForm";
import {ProductList} from "../components/Product";
import styled from "styled-components";

const Home = (props) => {
  /*const [cart, setCart] = React.useState([
    {
      id:1,
      title: "apple",
      price: '2',
      count: 10,
      img:PinapleImg
    }
  ]);*/

  /*function removeFromCart(index) {
    props.removeProductFromCart(index);
    // setCart(cart.filter((item, i) => i !== index));
  }

  function changeCartItemCount(index, count) {
    props.changeProductCount({index, count});
    // cart[index].count = count;
    // setCart(cart.map((item, i) => {
    //   if (index === i) item.count = count;
    //   return item
    // }))
  }

  function addToCart(item) {
    props.addProductToCart(item);
    // setCart(cart.concat([item]))
  }
*/
  return (
    <MainBox>
      <Box>
        <AddProductForm />
      </Box>
      <Box>
        <ProductList
          /*cart={props.cartStorage.cart}
          onRemove={removeFromCart}
          onCountChange={changeCartItemCount}*/
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

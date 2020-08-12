import React, { useEffect } from 'react';
import { connect } from "react-redux";
import CounterInput from './CounterInput';
import ImageSelector from './ImageSelector';
import styled from "styled-components";
import { addProductToCart, fetchProducts } from "../redux";

function AddProductForm({productsData, fetchProducts, addToCart}) {
  const initialState = {
    count: 1,
    imageId: 1,
    title: '',
    price: '',
    id: Math.floor(Math.random() * (10000 - 1) + 1),
  };

  useEffect(() => {
    fetchProducts()
  }, [])

  const [product, setProduct] = React.useState(initialState)

  function changeProduct(obj) {
    setProduct({...product, ...obj})
  }

  function addProduct(event) {
    event.preventDefault();
    addToCart(product);
    setProduct(initialState);
  }

  return (
    <form style={wrapperStyle} onSubmit={addProduct}>
      <div>Add product to your cart list</div>
      <input
        value={product.title}
        style={TextInputStyle}
        onChange={(e) => changeProduct({title: e.target.value})}
        placeholder="Product Name"
      />
      <input
        value={product.price}
        style={TextInputStyle}
        onChange={(e) => changeProduct({price: e.target.value})}
        placeholder="Product Price"
      />
      <CenterBox>
        <CounterInput
          min={1}
          max={99}
          count={product.count}
          onCountChange={count => changeProduct({count})}
        />
      </CenterBox>
      <CenterBox>
        <ImageSelector
          products={productsData}
          onChange={selected => changeProduct({img: selected.src, imageId: selected.imageId})}/>
      </CenterBox>
      <CenterBox>
        <button type="submit">Add to List</button>
      </CenterBox>
    </form>
  )
}

const TextInputStyle = {
  width: '100%',
  backgroundColor: '#34495e',
  border: 'none',
  margin: 5,
  padding: '5px 0px',
  height: 25,
};

const CenterBox = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: space-between;
`;

const wrapperStyle = {
  width: "100%",
  margin: '0px 40px'

};
const mapStateToProps = (state) => {
  return {
    productsData: state.product.products
  }
};

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addToCart: (product) => dispatch(addProductToCart(product))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
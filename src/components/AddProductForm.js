import React from 'react';
import CounterInput from './CounterInput';
import ImageSelector from './ImageSelector';
import styled from "styled-components";
import imagesArray from "./ImageSelector/imagesArray";

function AddProductForm({onAdd}) {
  const initialState = {
    count:1,
    imageId: 1,
    title: '',
    price: '',
    id: Math.floor(Math.random() * (10000 - 1) + 1),
  }
  const [product, setProduct] = React.useState(initialState)

  function changeProduct(obj) {

    setProduct({...product, ...obj})
  }

  function addProduct(event) {
    event.preventDefault();
    onAdd(product);
    setProduct(initialState)
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
          onChange={selected => changeProduct({ imageId: selected.imageId})}/>
      </CenterBox>
      <CenterBox>
        <button type="submit">Add to List</button>
      </CenterBox>
    </form>
  );
};

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
`
const wrapperStyle = {
  width: "100%",
  margin: '0px 40px'

};
export default AddProductForm;
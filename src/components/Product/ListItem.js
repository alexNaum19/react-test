import React from "react";
import CounterInput from "../CounterInput";
import {BsFillTrashFill} from "react-icons/bs";
import {BsLink45Deg} from "react-icons/bs";
import ImagesArr from '../ImageSelector/imagesArray'

export default function ListItem({product, onCountChange, onRemove, onProfileShow, index}) {
  return (
    <div style={wrapperStyle}>
      <div style={imageBoxStyle} className="image-box">
        <div><img src={ImagesArr[product.imageId - 1]}/></div>
      </div>
      <div style={columnBoxStyle}>
        <div className="margin-10"> Buy {product.title}</div>
        <div className="counter">
          <CounterInput
            min={1}
            max={99}
            count={product.count}
            onCountChange={count => onCountChange({index, count})}
          />
        </div>
        <div className="margin-10">Total:{(+product.price) * product.count} $</div>
      </div>
      <div>
        <button style={btnStyle} onClick={() => onRemove(index)}>Delete</button>
        <button onClick={() => onProfileShow(product)}>Profile</button>
      </div>
    </div>
  )
}

const wrapperStyle = {
  display: 'flex',
  backgroundColor: '#34495e',
  margin: 5,
  justifyContent: 'space-between'
};

const imageBoxStyle = {
  margin: '40px 35px'
};
const columnBoxStyle = {
  display: 'flex',
  flexFlow: 'column'
};

const btnStyle = {
  cursor: 'pointer',
  marginRight: '2px',
  order: 1,
};
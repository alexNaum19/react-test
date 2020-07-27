import React from "react";
import ImagesArr from '../ImageSelector/imagesArray'

export default function ProductProfile(props) {
  return (
    <div style={wrapperStyle}>
      <div> Buy {props.title}</div>
      <div className="image-box"><img src={ImagesArr[props.imageId - 1]}/> </div>
      <div>Count: {props.count}</div>
      <div>Price: {props.price}</div>
      <div>Total:{(+props.price) * props.count } $</div>
      <div>
        <button style={btnStyle} onClick={props.onProfileShow}>Back to list</button></div>
    </div>
  )
}

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor:'#34495e',
  margin: 5,
  justifyContent:'space-around',
  minHeight:'223px'
};

const btnStyle = {
  cursor: 'pointer',
  marginRight: '2px',
  order: 1,
};
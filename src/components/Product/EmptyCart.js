import React from "react";

export default function EmptyCart(props) {
  return (
    <div style={wrapperStyle}>
      Cart is empty
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
import React from "react";
import ListItem from "./ListItem";
import EmptyCart from "./EmptyCart";
import ProductProfile from "./ProductProfile";

export default function ProductList(props) {
  const [activeProductProfile, setActiveProduct] = React.useState({});

  function showProfile(product) {
    setActiveProduct(product || {})
  }

  const classes = ['list-box'];
  const blockClasses = ['list-box-block'];

  return (
    <div style={wrapperStyle}>
      <div className={blockClasses.join(' ')}>Product List</div>
      {activeProductProfile.id
        ? <ProductProfile className={blockClasses.join(' ')} {...activeProductProfile} onProfileShow={showProfile}/>
        : props.cart.length ?
          <div className={classes.join(' ')}>
            {props.cart.map((product, index) => (
              <ListItem
                index={index}
                product={product}
                key={product.id}
                onCountChange={props.onCountChange}
                onRemove={props.onRemove}
                onProfileShow={showProfile}
              />
            ))}
          </div>
          : <EmptyCart className={blockClasses.join(' ')}/>}
      <div
        className={blockClasses.join(' ')}>Total: {props.cart.reduce((acc, cur) => acc + (+cur.price * cur.count), 0)} $
      </div>
    </div>
  )
}

const wrapperStyle = {
  width: "100%",
  margin: '0px 40px',
  alignItems: 'center',
};
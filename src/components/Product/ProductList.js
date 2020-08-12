import React from "react";
import { connect } from 'react-redux'
import ListItem from "./ListItem";
import EmptyCart from "./EmptyCart";
import ProductProfile from "./ProductProfile";
import {changeProductCount, removeProductFromCart} from "../../redux";

function ProductList(props) {
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
        : props.cartData.length ?
          <div className={classes.join(' ')}>
            {props.cartData.map((product, index) => (
              <ListItem
                index={index}
                product={product}
                key={product.id}
                onCountChange={props.changeCartItemCount}
                onRemove={props.removeFromCart}
                onProfileShow={showProfile}
              />
            ))}
          </div>
          : <EmptyCart className={blockClasses.join(' ')}/>}
      <div
        className={blockClasses.join(' ')}>Total: {props.cartData.reduce((acc, cur) => acc + (+cur.price * cur.count), 0)} $
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (index) => dispatch(removeProductFromCart(index)),
    changeCartItemCount: (params) => dispatch(changeProductCount(params))
  }
}

function mapStateToProps(state) {
  return {
    cartData: state.cart.items
  }
}

const wrapperStyle = {
  width: "100%",
  margin: '0px 40px',
  alignItems: 'center',
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
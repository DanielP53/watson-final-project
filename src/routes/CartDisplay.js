import React, { Component } from 'react';
import ProductDetail from '../Components/ProductDetail';
import { ImageList, ImageListItem } from '@mui/material';


class CartDisplay extends Component {
    constructor(props) {
        super();
        this.state = { products: props.cart};
    }
    
    render() {
        console.log(this.props);
        return (
            <div id="cart-list">
                <ImageList cols={3} style={{padding: '16px'}}>
                    {this.state.products.map((item,index)=> (
                        <ProductDetail removeFromCart={this.props.removeFromCart} id={item} key={index} />
                    ))}
                </ImageList>
            </div>
        );
    }
}

export default CartDisplay;
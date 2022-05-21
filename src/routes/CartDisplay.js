import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import { ImageList, ImageListItem } from '@mui/material';


class CartDisplay extends Component {
    constructor(props) {
        super();
        this.state = { products: props.cart};
    }
    
    render() {
        return (
            <div id="cart-list">
                <ImageList cols={3} style={{padding: '16px'}}>
                    {this.state.products.map((item)=> (
                        <ProductDetail removeFromCart={this.props.removeFromCart} id={item} key={item} />
                    ))}
                </ImageList>
            </div>
        );
    }
}

export default CartDisplay;
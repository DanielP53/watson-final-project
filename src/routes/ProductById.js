import * as React from "react";
import {useParams} from "react-router-dom";
import ProductDetail from '../Components/ProductDetail';

export default function ProductById(props) {
  const { productId } = useParams();

  return <ProductDetail addToCart={props.addToCart} id={productId} key={productId} />
}
import React, { Component } from "react";
import "./Products.scss";

class Products extends Component {
  render() {
    const products = [
      {
        img: "https://vtcoder-html6.surge.sh/img/icoin.png",
        title: "Lite Coin",
        rating: "",
        textWarning: "",
        percent: "30.5%",
        day: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        social: "",
      },
    ];
    return (
      <div>
        products
        {/* {products.map((item, index) => {
          item.img;
        })} */}
      </div>
    );
  }
}

export default Products;

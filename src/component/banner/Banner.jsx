import React, { Component } from "react";
import "./Banner.scss";

class Banner extends Component {
  render() {
    return (
      <>
        <img
          src="https://vtcoder-html6.surge.sh/img/bg-banner02.jpg"
          alt=""
          className="imgBanner"
        />
        <div className="banner-content">
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cup
            <br /> datat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>

          <button className="btn-tokens">Buy Tokens</button>
          <button className="btn-paper">White paper</button>
        </div>
      </>
    );
  }
}

export default Banner;

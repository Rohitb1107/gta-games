import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

const Product = () => {
  const [apparelData, setapparelData] = useState([]);

  useEffect(() => {
    axios
      .get("https://obscure-citadel-15133.herokuapp.com/gear/apparel")
      .then((res) => {
        setapparelData(res.data.gear);
      });
  }, []);

  return (
    <>
      <div id="header-part">
        <p>Header</p>
      </div>

      <div id="product-part">
        <div id="product-left-part">
          <div id="main-img-part">
            <img
              src="https://images.ctfassets.net/wn7ipiv9ue5v/19GBNCkQy8yIwIvtOK3B1X/448fc6ae949264e1a32a56a4b0621ecf/GTAV_Tshirt_LosSantosBlkMen_Front_01.jpg?w=1920&h=&fm=webp&q="
              alt=""
            />
          </div>
          <div id="other-img-part">
            <img
              src="https://images.ctfassets.net/wn7ipiv9ue5v/19GBNCkQy8yIwIvtOK3B1X/448fc6ae949264e1a32a56a4b0621ecf/GTAV_Tshirt_LosSantosBlkMen_Front_01.jpg?w=1920&h=&fm=webp&q="
              alt=""
            />
            <img
              src="https://images.ctfassets.net/wn7ipiv9ue5v/hsxoa0n6vSVeacRQ3bNX0/306820948a00c522342f27645a51ce67/RSW_0014_GTAV_Tshirt_LosSantosBlkMen_Front_01.jpg?w=1920&h=&fm=webp&q="
              alt=""
            />
          </div>
        </div>
        <div id="product-right-part">
          <div id="prod-head">
            <p>Grand Theft Auto V Black Los Santos Tee</p>
          </div>
          <div id="prod-desc">
            <p>
              This soft black 100% cotton tee features a prominent white “Los
              Santos” logo on its front and a small Rockstar Games logo just
              below the neck line on the back. This tee is also available in
              white.
            </p>
          </div>
          <div id="prod-price">
            <p>€19.99</p>
          </div>
          <div id="user-gender">
            <p>Select Gender</p>
          </div>
          <div id="user-gender-btn">
            <div id="mens-btn">Men's</div>
            <div id="womens-btn">Women's</div>
          </div>
          <div id="user-size">
            <p>Select Size</p>
          </div>
          <div id="user-size-btn">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
            <span>XXXL</span>
          </div>
          <div id="buy-add-btn">
            <div id="buy-btn">Buy Now</div>
            <div id="add-btn">Add to cart</div>
          </div>
        </div>
      </div>

      <div id="apparel-items-part">
        <div id="apparel-heading-part">
          <p class="apparel-heading-rohit">Realted Products</p>
          <p>SEE ALL</p>
        </div>
        <div id="all-card-container">
          {apparelData.map((curElem) => {
            return (
              <div>
                <div id="apparel-items-content">
                  <div id="apparel-item-card">
                    <div id="apparel-item-img-part">
                      <img src={curElem.image} alt="" />
                    </div>
                    <div id="apparel-item-title-part">
                      <p>{curElem.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;

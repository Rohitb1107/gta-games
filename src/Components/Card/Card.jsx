import React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";


function Card() {
  const [productData, setproductData] = useState([]);

  const getData = async () => {
    const url = "https://obscure-citadel-15133.herokuapp.com/gear/apparel";
    const response = await fetch(url);
    const data = await response.json();
    const realData = data.gear;
    setproductData(realData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="apparel-items-part">
        <div id="apparel-heading-part">
          <p class="apparel-heading-rohit">Apparel</p>
          <p>SEE ALL</p>
        </div>
        <div id="all-card-container">
          {productData.map((curElem) => {
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
}

export default Card;

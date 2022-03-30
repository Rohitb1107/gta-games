import React, { useEffect, useState } from "react";
import "./card.css";

function Card() {
  const [productData, setproductData] = useState([]);

  const getData = async () => {
    const url = "https://obscure-citadel-15133.herokuapp.com/gear/apparel";
    const response = await fetch(url);
    setproductData(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      {productData.map((curElem) => {
        return (
          <div>
            <div id="apparel-items-content">
              <div id="apparel-item-card">
                <div id="apparel-item-img-part">
                  <img
                    src="https://images.ctfassets.net/wn7ipiv9ue5v/6R7V40Po1eQftrNZBVasyf/857fbb045e4bb7b72dfc7d1d5c16e4ea/LAN_Tshirt_Mugshot_Front_01.jpg?w=1920&h=&fm=webp&q="
                    alt=""
                  />
                </div>
                <div id="apparel-item-title-part">
                  <p>{curElem.name}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;

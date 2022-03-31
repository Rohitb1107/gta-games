import React, { useEffect } from "react";
import axios from "axios";

const ComA = () => {
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://obscure-citadel-15133.herokuapp.com/gear/apparel"
      );
      const data = res.data.gear;
      console.log(data);
    }
    getData();
  });

  return (
    <>
      <h1>Pokemon</h1>
    </>
  );
};

export default ComA;

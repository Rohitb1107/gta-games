// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Card/card.css";

// function PosterCard() {
//   const [posterData, setposterData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://obscure-citadel-15133.herokuapp.com/gear/posters")
//       .then((res) => {
//         setposterData(res.data.gear);
//       });
//   }, []);

//   return (
//     <>
//       <div id="apparel-items-part">
//         <div id="apparel-heading-part">
//           <p class="apparel-heading-rohit">Posters</p>
//           <p>SEE ALL</p>
//         </div>
//         <div id="all-card-container">
//           {posterData.map((curElem) => {
//             return (
//               <div>
//                 <div id="apparel-items-content">
//                   <div id="apparel-item-card">
//                     <div id="apparel-item-img-part">
//                       <img src={curElem.image} alt="" />
//                     </div>
//                     <div id="apparel-item-title-part">
//                       <p>{curElem.name}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default PosterCard;

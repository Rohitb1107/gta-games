import { Routes, Route } from "react-router-dom";
import AllCard from "../Card/Card";
import Product from "../Product/Product";
import SeeAllApparel from "../SeeAll/SeeAll.apparel";
import SeeAllCollect from "../SeeAll/SeeAll.collect";
import SeeAllPoster from "../SeeAll/SeeAll.posters";

function RoutesHandle() {
  return (
    <>
      <AllCard />
      {/* <Product /> */}
      {/* <SeeAllApparel /> */}
      {/* <SeeAllCollect /> */}
      {/* <SeeAllPoster /> */}

      {/* <Routes>
        <Route exact path="/" component={<AllCard />} />
        <Route path="/product" component={<Product />} />
      </Routes> */}
    </>
  );
}

export default RoutesHandle;

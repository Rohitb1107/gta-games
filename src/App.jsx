import AllCard from "./Components/Card/Card";
import Product from "./Components/Product/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <AllCard /> */}
      <Product />

      {/* <Routes>
        <Route exact path="/" component={AllCard} />
        <Route exact path="/:id" component={Product} />
      </Routes> */}
    </>
  );
}

export default App;

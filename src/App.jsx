import AllCard from "./Components/Card/Card";
import Product from "./Components/Product/Product";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <AllCard />
      {/* <Product /> */}

      <Switch>
        <Route></Route>
      </Switch>
    </>
  );
}

export default App;

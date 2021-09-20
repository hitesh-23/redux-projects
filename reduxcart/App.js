import react from "react";
import Header from "./containers/Header";
import { BrowserRouter as Route, Switch, Router } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/productDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route> 404 Not found </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;

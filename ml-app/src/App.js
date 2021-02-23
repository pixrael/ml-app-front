import './mixings.scss';
import './App.scss';
import Searchbox from './components/searchBox/Searchbox';
import Breadcrum from './components/breadcrum/Breadcrum';
import ProductDetails from './components/product/product-details/product-details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListWrapper from './components/product/product-list/product-list-wrapper';

function App() {



  function onReceivedResults(keyword, history) {
    history.push(`/items?search=${keyword}`);
  }

  function onSelectedProduct(res, keyword, history) {
    // TODO
  }

  return (
    <Router>
      <div>
        <Searchbox onReceivedResults={onReceivedResults} />
        <Breadcrum />
        <Switch>
          <Route path="/items" >
            <ProductListWrapper />
          </Route>
          <Route path="/items/:id" exact >
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './mixings.scss';
import './App.scss';

import Searchbox from './components/searchBox/Searchbox';
import Breadcrum from './components/breadcrum/Breadcrum';
import ProductListWrapper from './components/product/product-list/product-list-wrapper';
import ProductDetailsWrapper from './components/product/product-details/product-details-wrapper';

function App() {

  function onReceivedResults(keyword, history) {
    history.push(`/items?search=${keyword}`);
  }

  function onSelectedProduct(id, history) {
    history.push(`/items/${id}`);
  }

  return (
    <Router>
      <div>
        <Searchbox onReceivedResults={onReceivedResults} />
        <Breadcrum />
        <Switch>
          <Route path="/items/:id" exact >
            <ProductDetailsWrapper />
          </Route>
          <Route path="/items" >
            <ProductListWrapper onSelectedProduct={onSelectedProduct} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

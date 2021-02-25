import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './mixings.scss';
import './App.scss';

import mercadoLibreIcon from './assets/Logo_ML.png';
import Searchbox from './components/searchBox/Searchbox';
import BreadCrumWrapper from './components/breadcrum/BreadcrumWrapper';
import ProductListWrapper from './components/product/product-list/product-list-wrapper';
import ProductDetailsWrapper from './components/product/product-details/product-details-wrapper';

function App() {

  useEffect(() => {
    document.title = `Mercado Libre Argentina`;

    const favicon = document.querySelector('[rel=icon]');
    favicon.href = mercadoLibreIcon;

  }, []);

  function onReceivedResults(keyword, history) {
    history.push(`/items?search=${keyword}`);
  }

  function onSelectedProduct(id, history) {
    history.push(`/items/${id}`);
  }

  const [categoryPath, setCategoryPath] = useState([]);

  function onChangeCategoryPath(categoryPath) {
    setCategoryPath(categoryPath);
  }

  return (
    <Router>
      <div>
        <Searchbox onReceivedResults={onReceivedResults} />
        <Switch>
          <Route path="/items/:id" exact >
            <BreadCrumWrapper categoryPath={categoryPath} />
            <ProductDetailsWrapper onChangeCategoryPath={onChangeCategoryPath} />
          </Route>
          <Route path="/items" >
            <BreadCrumWrapper categoryPath={categoryPath} />
            <ProductListWrapper onSelectedProduct={onSelectedProduct} onChangeCategoryPath={onChangeCategoryPath} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

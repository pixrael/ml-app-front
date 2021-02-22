import { useState } from 'react';
import './mixings.scss';
import './App.scss';
import Searchbox from './components/searchBox/Searchbox';
import ProductList from './components/product/product-list/product-list';
import Breadcrum from './components/breadcrum/Breadcrum';

function App() {

  const [searchResults, setSearchResults] = useState({ searchResults: [] });

  function onReceivedResults(res) {
    setSearchResults({ searchResults: res });
  }

  return (
    <div>
      <Searchbox onReceivedResults={onReceivedResults} />
      <Breadcrum />
      <ProductList searchResults={searchResults.searchResults} />
    </div>
  );
}

export default App;

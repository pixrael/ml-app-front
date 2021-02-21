import './mixings.scss';
import './App.scss';
import Searchbox from './components/searchBox/Searchbox';
import ProductList from './components/product/product-list/product-list';
import Breadcrum from './components/breadcrum/Breadcrum';

function App() {
  return (
    <div>
      <Searchbox />
      <Breadcrum />
      <ProductList />
    </div>
  );
}

export default App;

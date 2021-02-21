import './mixings.scss';
import './App.scss';
import Searchbox from './components/searchBox/Searchbox';
import ProductItem from './components/product/product-item/product-item'
import Breadcrum from './components/breadcrum/Breadcrum';

function App() {
  return (
    <div>
      <Searchbox />
      <Breadcrum />
      <ProductItem imgUrl="https://k33.kn3.net/taringa/9/C/4/B/7/0/gallonegro60/D59.jpg" />
    </div>
  );
}

export default App;

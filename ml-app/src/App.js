import './mixings.scss';
import './App.scss';
import Searchbox from './searchBox/Searchbox';
import Product from './product/product'
import Breadcrum from './breadcrum/Breadcrum';

function App() {
  return (
    <div>
      <Searchbox />
      <Breadcrum />
      <Product imgUrl="https://k33.kn3.net/taringa/9/C/4/B/7/0/gallonegro60/D59.jpg" />
    </div>
  );
}

export default App;

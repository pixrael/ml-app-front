import logo from './logo.svg';
import './App.scss';
import Searchbox from './searchBox/Searchbox';
import Product from './product/product'
import Breadcrum from './breadcrum/Breadcrum';

function App() {
  return (
    <div>
      <Searchbox />
      <Breadcrum />
      <Product />
    </div>
  );
}

export default App;

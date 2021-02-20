import './Searchbox.scss';
import logo from '../assets/logo.png';
import { BsSearch } from 'react-icons/bs';

function Searchbox() {
    return (
        <div className="nav-bar" >
            <div className="search-block">
                <img className="logo" src={logo} />
                <input placeholder="Nunca dejes de buscar" className="search-input" type="text" />
                <button className="button-search"><BsSearch /></button>
            </div>
        </div>
    );
}

export default Searchbox;
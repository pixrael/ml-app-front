import './Searchbox.scss';
import logo from '../assets/logo.png';

function Searchbox() {
    return (
        <div className="nav-bar" >
            <div className="search-block">
                <img className="logo" src={logo} />
                <input placeholder="Nunca dejes de buscar" className="search-input" type="text" />
                <button>Search</button>
            </div>
        </div>
    );
}

export default Searchbox;
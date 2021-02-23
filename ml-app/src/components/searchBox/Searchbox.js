import './Searchbox.scss';
import logo from '../../assets/logo.png';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Searchbox(props) {
    const [keyword, setKeyword] = useState('');
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        props.onReceivedResults(keyword, history);
    }

    return (
        <div className="nav-bar" >
            <div className="search-block">
                <img className="logo" src={logo} />
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Nunca dejes de buscar"
                        className="search-input"
                        type="text"
                        onChange={event => setKeyword(event.target.value)}
                        value={keyword} />
                    <button className="button-search"><BsSearch /></button>
                </form>
            </div>
        </div>
    );
}

export default Searchbox;
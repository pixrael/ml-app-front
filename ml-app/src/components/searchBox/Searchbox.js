import './Searchbox.scss';
import logo from '../../assets/logo.png';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';

function Searchbox(props) {

    const [keyword, setKeyword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('keyboard ', keyword);

        const resp = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${keyword}`);

        props.onReceivedResults(resp.data.results);
        
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
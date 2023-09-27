import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navbar() {

    const [query, setQuery] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value);

    }
    return (
        <nav>
            <ul>
                <li>
                    <input placeholder="Search"
                        value={query}
                        onChange={handleSearchChange} />
                </li>


                <li>
                    <button>Cart</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
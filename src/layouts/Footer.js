import { NavLink } from 'react-router-dom';
export function Footer(props) {

    return (
        <footer className="App-footer">
            <ul>
                <li>
                    <NavLink to="/about" className="Nav-el">O nas</NavLink >
                </li>
                <li>
                    <NavLink to="/contact" className="Nav-el" >Kontakt</NavLink >
                </li>
            </ul>
        </footer>
    )
}
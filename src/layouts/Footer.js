import { NavLink } from 'react-router-dom';

export function Footer(_props) {
    return (
        <footer className="App-footer">
            <ul>
                <li>
                    <NavLink to="/about" className="Nav-el">O nas</NavLink >
                </li>
                <li>
                    <NavLink to="/contact" className="Nav-el" >Kontakt</NavLink >
                </li>
                <li>
                    <a href="https://iconscout.com/icons/graduation" target="_blank" rel="noreferrer">Graduation Icon</a> by <a href="https://iconscout.com/contributors/amit-jakhu">Amit Jakhu</a> on <a href="https://iconscout.com">IconScout</a>
                </li>
            </ul>
        </footer>
    )
}
import css from './NavigationBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import Search from './../Search/Search';
import PropTypes from 'prop-types';

function NavigationBar({ searchText }) {
    const location = useLocation();

    return (
        <div className={css.navigationBar}>
            {location.pathname !=='/' && <Link to="/" >Go Back</Link>}
            {location.pathname ==='/' &&<Search searchText={searchText}/>}
        </div>
    )
}

NavigationBar.propTypes = {
    searchText: PropTypes.string
}

export default NavigationBar;
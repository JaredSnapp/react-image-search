import css from './Photo.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Photo options:
// webformatURL
// previewURL
// largeImageURL

function Photo({ photo }) {
    return (
        <div>
            {photo && (
                <Link to={`/photoDetails/${photo.id}`} className={css.link}><img src={photo.previewURL} alt={photo.id}/></Link>
            )}
        </div>
    )
}

Photo.propTypes = {
    photo: PropTypes.object
}

export default Photo;


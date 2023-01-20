import css from './PhotoList.module.css';
import Photo from './../Photo/Photo';
import PropTypes from 'prop-types';

function PhotoList({ photos }) {
    return (
        <div className={css.container}>
            {photos ? photos.map((photo) => (<Photo key={photo.id} photo={photo}/>)): (<p>No Photos</p>)}
        </div>
    )
}

PhotoList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object)
}

export default PhotoList;


import css from './PhotoDetails.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPhoto } from './../utils/Fetch';

function PhotoDetails() {
    const params = useParams();
    const [photo, setPhoto] = useState({});

    useEffect(() => {
        async function getPhotoDetails(id) {
            const res = await fetchPhoto(id);
            setPhoto(res);
        }
        
        getPhotoDetails(params.photoId);
    }, [params.photoId])
    
    return (
        <div>
            {photo && (
                <div className={css.container}>
                    <img src={photo.webformatURL} alt={photo.id}/>
                    <h3>Posted By: {photo.user}</h3>
                    <p>Tags: {photo.tags}</p>
                    <p>Views: {photo.views} Likes: {photo.likes}</p>

                </div>
            )}
        </div>
    )
}

export default PhotoDetails;


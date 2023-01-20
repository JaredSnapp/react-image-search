import config from './../config.js';

async function fetchPhotos(query) {
    let data = {}

    try {
      const res = await fetch(`https://pixabay.com/api/?key=${config.APIKey}&q=${query}&image_type=photo`)
      data = await res.json();
    } catch(err) {
      console.error(err)
    }

    return data.hits;
}

async function fetchPhoto(id) {
    let data = {};
    try {
        const res = await fetch(`https://pixabay.com/api/?key=${config.APIKey}&id=${id}&image_type=photo`)
        data = await res.json();
    } catch(err) {
        console.error(err);
    }

    return data.hits[0];
}

export { fetchPhotos, fetchPhoto }
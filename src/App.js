import './App.css';
import PhotoList from './PhotoList/PhotoList';
import PhotoDetails from './PhotoDetails/PhotoDetails';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import { fetchPhotos } from './utils/Fetch';


function App() {
  const [photos, setPhotos] = useState([]);

  async function searchPhotos(query) {
    const res = await fetchPhotos(encodeURIComponent(query));
    setPhotos(res);
  }

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await fetchPhotos('');
      setPhotos(photos);
    }

    getPhotos();
  }, [])
  
  return (
    <div className="App">
      <Router >
        <NavigationBar searchText={searchPhotos}/>
        <Routes>
          <Route path="/" element={<PhotoList photos={photos}/>} />
          <Route path='/photoDetails/:photoId' element={<PhotoDetails />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

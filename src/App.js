import React, { useState } from 'react';
import './App.css';
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";

const axios = require('axios');
const API_KEY = "AIzaSyAyrpbJRQ9C6LgkCwCkgzG1welKjI1UlhI";


function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoSearch = (term) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';
  
    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };
  
    axios.get(url, { params: params })
      .then(response => {
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <SearchBar videoSearch={videoSearch} />
      <VideoDetail video={selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => setSelectedVideo(selectedVideo)}
        videos={videos} 
      />
    </div>
  );
}

export default App;
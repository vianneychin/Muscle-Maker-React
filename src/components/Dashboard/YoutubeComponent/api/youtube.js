import axios from 'axios'

// const KEY = 'AIzaSyCk_MNZ4xDATVR7jw8_fM97zEiMEzgSXf4'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
import axios from 'axios'
const KEY = 'AIzaSyA0HA48vQw3u4ZdLk-KM92Apvx-DWhWuH0'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
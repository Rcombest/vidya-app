import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '823462bede8a43429324b13b4bdae998'
  }
})
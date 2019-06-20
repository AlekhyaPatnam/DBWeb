import axios from 'axios'
let options = {}

// The server-side needs a full url to works
if (!process.SERVER_BUILD) {
}

export default axios.create(options)
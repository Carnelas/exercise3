import axios from 'axios';

class MessageApp {
    constructor() {
        this.service = axios.create({
            baseURL: `http://localhost:9001`
        })
    }
}

SendMessage = (destination, body) => {
    return this.service.post('/message', {destination, body})
    .then(response => response.data)
    .catch(error => error.response)
}

export default MessageApp
import axios from 'axios';

class MessageApp {
    constructor() {
        this.service = axios.create({
            baseURL: `http://messageapp:3000/message`
        })
    }
}

message = (destination, body) => {
    return this.service.post('/message', {destination, body})
    .then(response => response.data)
}


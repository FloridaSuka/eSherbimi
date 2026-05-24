import axios from 'axios';

const SERVER_BASE_URL = 'http://localhost:3000'; 
axios.post(`${SERVER_BASE_URL}/api/greet`, { name: 'John' })
    .then(response => {
        console.log('Server Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    export default axios;

const express =require('express');



const axios =require('axios');
const { response } = require('express');

const app =express();

const PORT =process.env.PORT || 3000;

app.get('/', (req, res) => {
    

    axios.get('https://api.github.com/users/lev-choubine')
    .then(response => {
        // Print inside of terminal
        // console.log(response.data); 
        const levObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(levObject);
        res.send(levObject)
    });
});






app.listen(PORT, () => { 
    console.log('port is running')})
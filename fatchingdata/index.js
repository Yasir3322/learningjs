import axios from 'axios';

axios.get("https://api.github.com/users").then(res =>{
    res.forEach(rec =>{
        console.log(rec.login);
    })
})
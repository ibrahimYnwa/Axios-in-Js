$(function () {

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            let element = $("ul");
            response.data.forEach(el => {
                element.append(`<li>${el.title}</li>`)
            });
        })
        .catch(function (error) {
            console.log(error);
        });

    // const axios = require('axios');

    // axios.get('').then(resp => {

    //     console.log(resp);
    // });


});
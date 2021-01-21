const fetch = require("node-fetch");
let curl = "https://artii.herokuapp.com/make?text=curl++this"
fetch(curl)
    .then(response => {


        return response.text()

    })
    .then(text => console.log(text))
    .catch(reason => console.log(`error becuase ${reason}`))

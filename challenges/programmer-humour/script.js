fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    document.querySelector("img").src = data.img;
         console.log(data)
    })
    .catch(function (err) {
        console.log(err);
    })

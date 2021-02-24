// document.body.style.fontSize = "100px";
function getImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let ul = document.querySelector("ul");
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = data.message;
            img.classList = "img";
            li.appendChild(img);
            ul.appendChild(li);

        })
        .catch(function (err) {
            console.log(err);
        });


}
let input = document.getElementById("button");
input.addEventListener("click", getImage);









//  list = document.getElementById("list");
// for (let attribute in dogData) {
//     let li = document.createElement("li");
//     li.textContent = dogData[attribute];
//     list.appendChild(li)
// }
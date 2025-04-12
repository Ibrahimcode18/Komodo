const animals = [
    { name: "Komodo-Dragon", image: "/static/images/cardMatch/icons8-lizard-48.png" },
    { name: "Sumatran-Tiger", image: "/static/images/cardMatch/icons8-tiger-48.png" },
    { name: "Javan-Rhino", image: "/static/images/cardMatch/icons8-rhinoceros-48.png" },
    { name: "Deer", image: "/static/images/cardMatch/icons8-deer-48.png" },
    { name: "Sumatran-elephant", image: "/static/images/cardMatch/icons8-elephant-48.png" },
    { name: "Monkey", image: "/static/images/cardMatch/icons8-monkey-48.png" },
    { name: "Orangutan", image: "/static/images/cardMatch/icons8-orangutan-48.png" },
    { name: "Eagle", image: "/static/images/cardMatch/icons8-eagle-48.png" },
    { name: "Komodo-Dragon", image: "/static/images/cardMatch/icons8-lizard-48.png" },
    { name: "Sumatran-Tiger", image: "/static/images/cardMatch/icons8-tiger-48.png" },
    { name: "Javan-Rhino", image: "/static/images/cardMatch/icons8-rhinoceros-48.png" },
    { name: "Deer", image: "/static/images/cardMatch/icons8-deer-48.png" },
    { name: "Sumatran-elephant", image: "/static/images/cardMatch/icons8-elephant-48.png" },
    { name: "Monkey", image: "/static/images/cardMatch/icons8-monkey-48.png" },
    { name: "Orangutan", image: "/static/images/cardMatch/icons8-orangutan-48.png" },
    { name: "Eagle", image: "/static/images/cardMatch/icons8-eagle-48.png" }
];
var count = 0;
const shuffledAnimals = animals.sort(() => (Math.random() > 0.5) ? 2 : -1);
for (var i = 0; i < shuffledAnimals.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${shuffledAnimals[i].image}" alt="${shuffledAnimals[i].name}">`;

    card.onclick = function() {
        this.classList.add("boxOpen")
        count++;
        setTimeout(function(){
            if(document.querySelectorAll(".boxOpen").length > 1){
                if(document.querySelectorAll(".boxOpen")[0].innerHTML == 
                document.querySelectorAll(".boxOpen")[1].innerHTML){
                    document.querySelectorAll(".boxOpen")[0].classList.add
                    ("boxMatch") 
                    document.querySelectorAll(".boxOpen")[1].classList.add
                    ("boxMatch")

                    document.querySelectorAll(".boxOpen")[1].classList.remove
                    ("boxOpen")
                    document.querySelectorAll(".boxOpen")[0].classList.remove
                    ("boxOpen")

                    if(document.querySelectorAll(".boxMatch").length == 
                    animals.length) {
                    document.querySelector("h2").innerHTML = "You Win in " + count + " clicks!!!";
                    }
                } else {
                    document.querySelectorAll(".boxOpen")[1].classList.remove
                    ("boxOpen")
                    document.querySelectorAll(".boxOpen")[0].classList.remove
                    ("boxOpen")
                }
            }
        },500)
    }
    document.querySelector('.game').appendChild(card);
}
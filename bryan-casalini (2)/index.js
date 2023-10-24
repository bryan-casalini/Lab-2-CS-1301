document.addEventListener('DOMContentLoaded',postData);
console.log(document.location.search);
const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get('fname');
const amount = params.get('amount');
const brand = params.getAll('brand');
const flavor = params.get('flavor');
const size = params.get('size');

console.log(flavor);
console.log(size);

let characters;
let image;
let cl;

if (flavor == 'Regular' && size == '500ml'){
    characters = 'Your taste is characteristic of a regular person';
    image = 'images/coke500ml.gif';
    cl= 'red';
} else if (flavor == 'Regular' && size == 'Can'){
    characters = 'Your taste is characteristic of chill person';
    image = 'images/coca.gif';
    cl= '#8D2828';
} else if (flavor == 'Regular' && size == 'Can-mini'){
    characters = 'Your taste is characteristic of an impatient person';
    image = 'images/mini.gif';
    cl= 'red';
} else if (flavor == 'Regular' && size == '2-Liter'){
    characters = 'Your taste is characteristic of a party machine';
    image = 'images/2.png';
    cl= 'red';
} else if (flavor == 'Cherry' && size == '500ml'){
    characters = 'Your taste is characteristic of a person with great taste';
    image = 'images/cherry.gif';
    cl = '#73164B';
} else if (flavor == 'Cherry' && size == 'Can'){
    characters = 'Your taste is characteristic of a put together person?';
    image = 'images/cherry.gif';
    cl = '#73164B';
} else if (flavor == 'Cherry' && size == 'Can-mini'){
    characters = 'Your taste is characteristic of a busy person';
    image = 'images/cherry.gif';
    cl = '#73164B';
} else if (flavor == 'Cherry' && size == '2-Liter'){
    characters = 'Your taste is characteristic of a selfish person';
    image = 'images/cherry.gif';
    cl = '#73164B';
} else if (flavor == 'Diet' && size == '500ml'){
    characters = "You believe it doesn't harm your health";
    image = 'images/diet.gif';
    cl = '#ABAFB3';
} else if (flavor == 'Diet' && size == 'Can'){
    characters = 'You had no other options, huh';
    image = 'images/diet.gif';
    cl = '#ABAFB3';
} else if (flavor == 'Diet' && size == 'Can-mini'){
    characters = 'You regret all of your choices';
    image = 'images/diet.gif';
    cl = '#ABAFB3';
} else if (flavor == 'Diet' && size == '2-Liter'){
    characters = 'You want to watch the world burn';
    image = 'images/diet.gif';
    cl = '#ABAFB3';
} else if (flavor == 'Zero' && size == '500ml'){
    characters = 'You are a great person';
    image = 'images/zero.gif';
    cl = 'black';
} else if (flavor == 'Zero' && size == 'Can'){
    characters = 'You enjoy other sugars';
    image = 'images/zero.gif';
    cl = 'black';
} else if (flavor == 'Zero' && size == 'Can-mini'){
    characters = 'You are the person that says, one soda is ok';
    image = 'images/zero.gif';
    cl = 'black';
} else if (flavor == 'Zero' && size == '2-Liter'){
    characters = 'You are considerate';
    image = 'images/zero.gif';
    cl = 'black';
} else{
    characters = "You didn't even try"
    image = 'images/suck.gif';
    cl = 'red';  
}


function postData(){
    const container = document.getElementById('results');
    document.body.style.backgroundColor= cl;
    container.innerHTML = `<h1 style="text-align:center;color:white">${characters}.</h1>
                          <img src = "${image}" class='center'></img>`;
}
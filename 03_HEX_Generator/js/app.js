const colors = ["green", "red", "rgba(133,122,100)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener('click', function() {
 // test in F12 >>>  console.log(document.body);
    //get random number between 0 - 3 (because array, we need 2 since first item has 0)
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);    
}


// jshint esversion: 7
//Can't get my javascript to work with my html, javascripts
//its been a few years since i took 111 so my html/javascript skills are rusty
//i think theres a typo in my javascript or my html making everything not work
//but i cannot find the cause
//define helper functions here

let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
}
//Define controller
let controller = () => {
  let target,
    die1,
    die2,
    rollCount = 0,
    die1URL,
    die2URL,
    imgElem1,
    imgElem2,
    msg;

  target = document.querySelector("input").value;
  console.log(target);

  do {
    die1 = rollDie();
    die2 = rollDie();
    //die1 = rollDie();
    console.log(die1);
    //die2 = rollDie();
    console.log(die2);
    //increment roll counter
    rollCount += 1;
    //log dice and counter
    //console.log(`${die1} ${die2} ${rollCount}`);
  } while (die1 + die2 != target);
  //update image on webpage
  die1URL = `images/die${die1}.gif`;
  console.log(die1URL);
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  console.log(die2URL);
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);

  //Display number of rolls on webpage
  msg = `You hit your number in ${rollCount} rolls!`;
  document.querySelector("div").innerHTML = msg;
  rollCount = 0;
}
//Register contoller after DOM is complete
window.addEventListener("Load", () => {
  //select button
  let button = document.querySelector("button");
  //register click handler for webpage
  button.addEventListener("click", controller);
});

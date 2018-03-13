
let card = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let simbols = ["Espadas","Corazones","Diamantes","Treboles"];
let a = (Math.floor(Math.random()*(12-0))+0);
let a2 = (Math.floor(Math.random()*(4-0))+0);


document.getElementById("cards").innerHTML = card[a];
console.log (card[a])
console.log(document.getElementById("cards"))


switch (simbols[a2]) {
  case "Espadas":
  document.getElementById("arriba").innerHTML = '&spades;';
document.getElementById("abajo").innerHTML ='&spades;';
  break;
  case "Corazones":
  document.getElementById("arriba").innerHTML ='&hearts;';
document.getElementById("abajo").innerHTML ='&hearts;';
  break;
  case "Diamantes":
  document.getElementById("arriba").innerHTML ='&diams;';
document.getElementById("abajo").innerHTML ='&diams;';
  break; 
  case "Treboles":
  document.getElementById("arriba").innerHTML ='&clubs;';
document.getElementById("abajo").innerHTML ='&clubs;';
    break;
}



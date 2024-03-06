let a = prompt("Enter numbers to fly into the air "); //deqiqe ucun
let second = a * 60; //toplam saniye
let timer = document.querySelector("#counter");
let title = document.querySelector("#title");
let backgroundImg = document.querySelector("body");

setInterval(start, 100);

function start() {
  if (second <= 0) {
    clearInterval(start);
    timer.innerHTML =
      "The bomb exploded, we wish you a safe trip:<i class='bx bx-wink-smile'></i>";
    timer.style.background = "red ";
    timer.style.color = "yellow";
    backgroundImg.style.backgroundImage = "url(../İmg/bombaAtom.jpg)";
    title.style.display = "none";
  } else {
    second--;
    title.innerHTML = "The countdown has begun !";
    title.style.color = "red";

    const day = Math.floor(second / 3600 / 24); //yuvarlaqlasdirir
    const hour = Math.floor(second / 3600) % 24; //yuvarlaqlasdirir
    const minute = Math.floor(second / 60) % 60; //yuvarlaqlasdirir
    const san = Math.floor(second % 60); //yuvarlaqlasdirir

    timer.innerHTML = `Time : ${format(day)} day / ${format(hour)}  hour / ${format(minute)}  minute / ${format(san)} san`;
  }
}

// 1 gun = 24 saata == 24 * 60 deq == 24 * 60 * 60 san
// 1 saat = 60 deq == 60 * 60 san

function format(b) {
  return b < 10 ? `0${b}` : b; //
}

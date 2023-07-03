let simbols = ["♦", "♥", "♠", "♣"];
let values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "K",
  "Q",
  "J",
  "A",
];
let randomIndexForSimbols = Math.floor(Math.random() * 4);
let randomIndexForValues = Math.floor(Math.random() * 14);

window.onload = function() {
  let simbolDivs = document.getElementsByName("simbol");
  simbolDivs.forEach((element) => {
    element.innerText = simbols[randomIndexForSimbols];
    if (randomIndexForSimbols == 0 || randomIndexForSimbols == 1) {
      element.classList.add("red-simbol");
    }
  });

  let valueDiv = document.getElementById("value");
  valueDiv.innerText = values[randomIndexForValues];
};

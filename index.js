const flip = document.getElementById("flip");
const resultSpan = document.getElementById("result");
const coin = document.getElementById("coin");

flip.addEventListener("click", function () {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  resultSpan.innerHTML = "";
  setTimeout(function () {
    resultSpan.innerHTML = result;
    coin.src = "images/" + result.toLowerCase() + ".png";
  }, 250);
});
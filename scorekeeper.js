const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const selectScore = document.querySelector("#selectScore");
let count1 = 0;
let count2 = 0;
let maxScore = parseInt(selectScore.value);

selectScore.addEventListener("change", function () {
    maxScore = parseInt(this.value);
    h1.innerText = `${count1 = 0} - ${count2 = 0}`;
});
player1.addEventListener("click", function () {
    h1.innerText = `${count1 += 1} - ${count2}`;
    if (maxScore === count1) {
        player1.setAttribute('disabled', '');
        player2.setAttribute('disabled', '');
        h1.innerHTML = `<span class="green">${count1}</span> - <span class="red">${count2}</span>`;
    }
});
player2.addEventListener("click", function () {
    h1.innerText = `${count1} - ${count2 += 1}`;
    if (maxScore === count2) {
        player1.setAttribute('disabled', '');
        player2.setAttribute('disabled', '');
        h1.innerHTML = `<span class="red">${count1}</span> - <span class="green">${count2}</span>`;
    }
});
resetButton.addEventListener("click", function () {
    h1.innerText = `${count1 = 0} - ${count2 = 0}`;
    player1.removeAttribute('disabled');
    player2.removeAttribute('disabled');
    h1.style.color = "black";
});
console.log(player1);
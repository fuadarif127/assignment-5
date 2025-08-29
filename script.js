const mainHeart = document.getElementsByClassName("main-heart");
for (const heart of mainHeart) {
  heart.addEventListener("click", function () {
    const heartMain = document.getElementById("nav-heart").innerText;
    let NavHeart = Number(heartMain) + 1;
    document.getElementById("nav-heart").innerText = NavHeart;
  });
}

const maincopy = document.getElementsByClassName("copy-btn");

for (const copy of maincopy) {
  copy.addEventListener("click", function () {
    const navCopy = document.getElementById("nav-copy").innerText;
    let copyNav = Number(navCopy) + 1;
    document.getElementById("nav-copy").innerText = copyNav;
    const hotline = copy.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(hotline).then(() => {
      alert("Number Copied: " + hotline);
    });
  });
}

const mainCoin = document.getElementsByClassName("call-btn");
for (const coin of mainCoin) {
  coin.addEventListener("click", function () {
    const navCoin = Number(document.getElementById("nav-coin").innerText);
    let newNavCoin = navCoin - 20;
    if (navCoin >= 20) {
      document.getElementById("nav-coin").innerText = newNavCoin;
      const hotline = coin.parentNode.parentNode.children[3].innerText;

      const emergencyName = coin.parentNode.parentNode.children[1].innerText;
      alert(`📞 Calling ${emergencyName} ${hotline}...... `);
      const container = document.getElementById("history-container");
      const divElement = document.createElement("div");
      const time = new Date().toLocaleTimeString("en-US");
      divElement.innerHTML = `<div
                class="flex justify-between items-center bg-[#fafafa] rounded-lg p-4 mt-4"
              >
                <div>
                  <h1 class="font-bold">${emergencyName}</h1>
                  <p>${hotline}</p>
                </div>
                <div>${time}</div>
              </div>`;
      container.append(divElement);
    } else {
      alert("❌ You don't have enough coin to call ");
    }
  });
}

document.getElementById("clear-history").addEventListener("click", function () {
  let history = document.getElementById("history-container");
  history.innerHTML = " ";
});

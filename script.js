const mainHeart = document.getElementsByClassName("main-heart");
console.log(mainHeart);
for (const heart of mainHeart) {
  heart.addEventListener("click", function () {
    const heartOfMain = document.getElementById("nav-heart").innerText;
    let NavHeart = Number(heartOfMain) + 1;
    document.getElementById("nav-heart").innerText = NavHeart;
  });
}

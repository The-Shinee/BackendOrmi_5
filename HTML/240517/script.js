const title = document.querySelector(".hello h1")
console.log(title)

title.innerText = "뭐야이건"

console.dir(title)

function handle() {
    console.log(event.eventPhase);
    title.style.color = "blue";
}

function mouseEnterh1() {
    console.log(event.eventPhase);
    title.innerText = "on mouse"
}
function mouseleaveh1() {
    console.log(event.eventPhase);
    title.innerText = "mouse is gone"
}

title.addEventListener("click", handle, true);
title.addEventListener("mouseenter", mouseEnterh1, false);
title.addEventListener("mouseleave", mouseleaveh1, false);
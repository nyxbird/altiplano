let red, gray, blue, green;
let reds = [1, 2, 1, 2, 0];
let grays = [1, 1, 2, 2, 3, 4];
let blues = [1, 2, 3, 4, 0, 0];
let greens = [1, 2, 3, 4, 0];

addEventListener("load", ()=>{
    red = document.getElementById("red");
    gray = document.getElementById("gray");
    blue = document.getElementById("blue");
    green = document.getElementById("green");
});

addEventListener("mousedown", roll);
addEventListener("touchstart", roll);


function roll(e) {
    console.log("!");
    for(let i = 0; i < 30; ++i) {
        setTimeout(reroll, (i*(i+1)/2+1)*5);
    }
}

function reroll() {
    console.log("!!");
    let r = Math.floor(Math.random()*5);
    red.src = reds[r]==0?"":`imgs/red/${reds[r]}.png`;
    r = Math.floor(Math.random()*6);
    gray.src = grays[r]==0?"":`imgs/gray/${grays[r]}.png`;
    r = Math.floor(Math.random()*6);
    blue.src = blues[r]==0?"":`imgs/blue/${blues[r]}.png`;
    r = Math.floor(Math.random()*5);
    green.src = greens[r]==0?"":`imgs/green/${greens[r]}.png`;
}
const STRINGS = [
  "加油 !!",
  "加油加油 !!",
  "加油 !!",
  "加油加油 !!",
  "u are intelligent 🧠",
  "ur a tough cookie 🍪",
  "ur a tough cookie 🍪",
  "ur a TOUGH cookie 🍪",
  "ur a TOUGH cookie 🍪",
  "ur a TOUGH cookie 🍪",
  "ur a TOUGHHHHH cookie 🍪",
  "ur a TOUGHHHHH cookie 🍪",
  "never give up !!",
  "push through, ur almost there !!",
  "加油 💪",
  "加油 🙏",
  "加油 ⛽",
  "加油 💪",
  "加油 🙏",
  "加油 ⛽",
  "加油加油 💪",
  "加油加油 🙏",
  "加油加油 ⛽",
  "把油加满 ⛽",
  "把油加满 ⛽ (ง •_•)ง",
  "把油加满 ⛽😋",
  "把油加满 ⛽😋",
  "不要放弃 🙏",
  "不要放弃 🤩",
  "不要放弃 (ง •_•)ง",
  "不要放弃 (ง •_•)ง",
  "get up and do 10 jumping jacks",
  "do 10 jumping jacks rn",
  "do 10 jumping jacks rn >:))",
  "prayin for u 🙏",
  "im rooting for u !! (ง •_•)ง",
  "加油 (ง •_•)ง",
  "dont forget to rest (晚安)",
  "dont forget to rest (晚安)",
  "tomorrow is a new day !! (早安)",
  "tomorrow is a new day (早安)",
  "u super got this :))",
  "u super got this :))",
  "u can do ittt",
  "u can do it 💪",
  "1000000% u got it",
  "1000000% u got it 💪",
  "u got this for sure",
  "lightwork 💪",
  "super lightwork 💪",
  "ur so cooking 👩‍🍳",
  "ur soo cooking 👩‍🍳",
  "remember why u started 😤",
  "⛽ ⛽ ⛽",
  "⛽ ⛽ ⛽",
  "⛽ ⛽ ⛽ ⛽ ⛽ ⛽ ⛽ ⛽ ( x 8 )",
  "⛽ ⛽ ⛽ ⛽ ⛽ ⛽ ⛽ ⛽ ( x 8 )",
  "⛽ ⛽ ⛽ ⛽ ⛽ ⛽ ⛽ ⛽ ( x 8 )",
  "u 8 that up ✨",
  "you 8 that up 😋",
  "keep goin u got it 😋 😋",
  "never back down ur a tough cookie !! 💪 🍪",
  "the end is near 🤩",
  "if the win is not for u, who else could it possibly be for ???",
  "加油 😋",
  "u are intelligent 🧠",
  "ur a tough cookie 🍪",
  "u are intelligent 🧠",
  "ur a tough cookie 🍪",
  "orthogonal multidimensional fencing 🤺",
  "orthogonal multidimensional fencing 🤺",
  "orthogonal multidimensional fencing 🤺",
  "you can see the light !! ✨",
  "you can see the light !! 🙏",
  "and at last, i see, the lighttt 🤩✨",
  "GENUINELY you are smart btw 😋",
  "GENUINELY you are super smart btw 🧠",
  "ur not alone 🙏✨",
  "you are not alone ✨😋",
  "we're all here for u !! 😋",
  "we're all here for ya !! 😋",
  "we're all here for ya !! 😋",
  "🍮 🍮 🍮",
  "🍮 🍮",
  "🍮 🍮",
  "remember to hydrate 💧 + 1",
  "remember to hydrate 💧 + 1",
  "remember to drink wwater btw",
  "don't forget to drink some wwater",
  "drink 3 sips of water right now :]",
  "drink 3 sips of water right now :]",
  "drink 3 sips of water right now :]",
  "加油 :]]",
  "加油 :]",
  "加油加油 :]]",
  "你一定可以的 !! 🙏",
  "你一定可以的 !! ⛽",
  "你一定可以的 !! (ง •_•)ง",
  "it will be okay :)",
  "it will be okay :]]",
  "at the end of the day, it will all work out 😌",
  "it will be okay !!",
  "at the end of the day, it will all work out 😋",
  "everything will work out !!",
  "everything will be alright 😌",
  "happy ending imminent 😌",
  "happy ending IMMINENT !!!",
  "happy ending IMMINENT 😋🙏"
];

const button = document.getElementById("imageButton");
const burstLayer = document.getElementById("burstLayer");

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function spawnPop(text, originX, originY) {
  const el = document.createElement("div");
  el.className = "pop";
  el.textContent = text;

  const angle = Math.random() * Math.PI * 2;
  const dist = randInt(80, 160);
  const dx = Math.cos(angle) * dist;
  const dy = Math.sin(angle) * dist;

  el.style.setProperty("--x", `${originX}px`);
  el.style.setProperty("--y", `${originY}px`);
  el.style.setProperty("--dx", `${dx}px`);
  el.style.setProperty("--dy", `${dy}px`);

  burstLayer.appendChild(el);

  requestAnimationFrame(() => {
    el.classList.add("animate");
  });

  el.addEventListener(
    "animationend",
    () => {
      el.remove();
    },
    { once: true }
  );
}

function doClickFeedback() {
  button.classList.remove("pulse");
  void button.offsetWidth;
  button.classList.add("pulse");
}

button.addEventListener("click", (e) => {
  doClickFeedback();

  const chosen = pickRandom(STRINGS);

  const rect = button.getBoundingClientRect();
  const clickX = e.clientX ?? rect.left + rect.width / 2;
  const clickY = e.clientY ?? rect.top + rect.height / 2;

  const x =
    clickX >= rect.left && clickX <= rect.right ? clickX : rect.left + rect.width / 2;
  const y =
    clickY >= rect.top && clickY <= rect.bottom ? clickY : rect.top + rect.height / 2;

  spawnPop(chosen, x, y);
});

button.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    button.click();
  }
});



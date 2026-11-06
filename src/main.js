const wallpaper = document.querySelector("#wallpaper");
const dateEl = document.querySelector("#date");
const clockEl = document.querySelector("#clock");

const dateFormat = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const timeFormat = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
  minute: "2-digit",
});

function tick() {
  const now = new Date();
  dateEl.textContent = dateFormat.format(now);
  clockEl.textContent = timeFormat.format(now);
}

function schedule() {
  tick();
  setTimeout(schedule, 1000 - (Date.now() % 1000));
}

schedule();

fetch(
  "https://bing.biturl.top/?resolution=3840&format=json&index=0&mkt=random",
)
  .then((response) => response.json())
  .then((body) => {
    if (typeof body.url === "string" && body.url) wallpaper.src = body.url;
  })
  .catch(() => {});

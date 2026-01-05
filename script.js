function updateDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, "0");

  const formattedDateTime = `${month} ${day} ${year}\n${hours}:${minutes}:${seconds}:${milliseconds}`;
  document.getElementById("datetime").textContent = formattedDateTime;
}

setInterval(updateDateTime, 1);
updateDateTime();

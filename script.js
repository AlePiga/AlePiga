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

let clickme = document.getElementById("clickme");
let links = document.getElementById("links");
let nsetn = document.getElementById("nsetn");

clickme.addEventListener("click", function () {
	if (clickme.textContent === "Nsetn•••• Oirao Ivook") {
		clickme.textContent = "Hi! This website is under development";
		nsetn.style.display = "none";
		links.style.display = "block";
		document.title = "alepiga.pages.dev";
	} else if (clickme.textContent === "Hi! This website is under development") {
		clickme.textContent = "Nsetn•••• Oirao Ivook";
		nsetn.style.display = "block";
		links.style.display = "none";
		document.title = "WIRE WIRE SELF";
	}
});

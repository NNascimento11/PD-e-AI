const containers =
document.querySelectorAll(".accordion");

for (const container of containers) {
  const titles = container.querySelectorAll(".entry .title");

for (const title of titles) {
  title.addEventListener("click", function(ev) {
    const entries = container.querySelectorAll(".entry");
    entries.forEach(el => el.classList.remove("expanded"));
    const entry = ev.target.parentElement;
    entry.classList.add("expanded");
});
}
}


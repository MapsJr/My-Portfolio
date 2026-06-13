window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {
loader.classList.add("hide");
}, 1500);

});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{
threshold:0.2
});

document.querySelectorAll(".hidden").forEach(el => {
observer.observe(el);
});

document.querySelectorAll(".project-card").forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = (x / rect.width - 0.5) * 10;
const rotateX = (0.5 - y / rect.height) * 10;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave", () => {

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});
const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const base = document.getElementById("base");
let root = document.documentElement;

function changeSpacing() {
    root.style.setProperty("--spacing", `${this.value}px`);
    //console.log(spacing.value);
}
function changeBlur() {
    root.style.setProperty("--blur", `${this.value}px`)
}
function changeBase() {
    //console.log(this.value);
    root.style.setProperty("--base", this.value);

}

spacing.addEventListener("input", changeSpacing);
blur.addEventListener("input", changeBlur);
base.addEventListener("input", changeBase);

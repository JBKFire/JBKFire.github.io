const button = document.getElementById("myButton");
const message = document.getElementById("hi");

button.addEventListener("click", () => {
    message.textContent = "hi";
});

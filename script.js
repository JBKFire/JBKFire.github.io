const input = document.getElementById("input");
const output = document.getElementById("output");

const encodeButton = document.getElementById("encode");
const clearButton = document.getElementById("clear");
const copyButton = document.getElementById("copy");

function encodeToHex(text) {
    let result = "";
    for (const character of text) {
        const code = character.codePointAt(0);
        if (code <= 0xFF) {
            result += "\\x" + code.toString(16).padStart(2, "0");
        } else {
            result += "\\u{" + code.toString(16) + "}";
        }
    }
    return result;
}

encodeButton.addEventListener("click", () => {
    output.value = encodeToHex(input.value);
});

clearButton.addEventListener("click", () => {
    input.value = "";
    output.value = "";
});
copyButton.addEventListener("click", async () => {
    if (!output.value) return;

    await navigator.clipboard.writeText(output.value);

    const originalText = copyButton.textContent;
    copyButton.textContent = "Copied!";

    setTimeout(() => {
        copyButton.textContent = originalText;
    }, 1200);
});

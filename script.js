"use strict";

var input = document.getElementById("input");
var output = document.getElementById("output");
var encodeButton = document.getElementById("encode");
var clearButton = document.getElementById("clear");
var copyButton = document.getElementById("copy");

function encodeToHex(text) {
    var result = "";

    for (var i = 0; i < text.length; i++) {
        var code = text.charCodeAt(i);

        result += "\\x" + code.toString(16).padStart(2, "0");
    }

    return result;
}

encodeButton.addEventListener("click", function () {
    output.value = encodeToHex(input.value);
});

clearButton.addEventListener("click", function () {
    input.value = "";
    output.value = "";
});

copyButton.addEventListener("click", function () {
    if (output.value === "") {
        return;
    }

    navigator.clipboard.writeText(output.value).then(function () {
        copyButton.textContent = "Copied!";

        setTimeout(function () {
            copyButton.textContent = "Copy";
        }, 1200);
    });
});

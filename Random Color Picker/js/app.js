function showPage() 
{
    if (document.readyState !== "complete") 
    {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#page-loader").style.visibility = "visible";
    } else 
    {
        setTimeout(function () 
        {
            document.querySelector("#page-loader").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
        }, 3000);
    }
}

document.onreadystatechange = showPage;

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateColor() {
    const randomColor = getRandomColor();
    const colorbox = document.getElementById("colorbox");
    const colorhexcode = document.getElementById("colorhexcode");

    colorbox.style.backgroundColor = randomColor;
    colorhexcode.innerHTML = `<p>${randomColor}</p>`;
}

function copyToClipboard() {
    const colorhexcode = document.getElementById("colorhexcode");
    const textArea = document.createElement("textarea");
    textArea.value = colorhexcode.textContent.trim();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Hex code copied to clipboard!");
}

document.getElementById("generateButton").addEventListener("click", updateColor);

document.getElementById("copyButton").addEventListener("click", copyToClipboard);

updateColor();

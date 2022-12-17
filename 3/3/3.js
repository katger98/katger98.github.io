function pArea1(height, base) {
    document.getElementById("terulet").value = String(height * base);
}

function pArea2(a, b, angle) {
    let radians = angle * Math.PI / 180;
    document.getElementById("terulet").value = a * b * Math.sin(radians);
}
function random3() {
    const strings = new Array();
    for (let i = 0; i < 7; i++) {
        strings[i] = prompt("Adj meg egy stringet");
    }
    document.getElementById("all").innerHTML = strings;
    document.getElementById("random").innerHTML = getMultipleRandom(strings, 3);

}

function getMultipleRandom(array, x) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, x);
}
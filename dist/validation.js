$(document).ready(function () {
    $("#sponsor").validate({
        rules: {
            vnev: "required",
            knev: "required",
            emil: {
                required: true,
                email: true
            },
            szam: "required",
            amount: "required",
            penz: "required",
        },
        messages: {
            knev: "<br> Írja be a keresztnevét!",
            vnev: "<br> Írja be a vezetéknevét!",
            emil: {
                email: "<br> Kérem valós email címet adjon meg!",
                required: "<br> Kérem adjon meg egy email cimet!"
            },
            amount: "<br> Kérem adjon meg egy összeget!",
            penz: "Kérem válasszon egy pénznemet!",
            szam: "<br> Kérem adja hány hónapig!"
        },
    });
});
function updatet(x) {
    document.getElementById("szam").value = x;
}
function updater(x) {
    if (x > 18 || x < 3) {
        alert("Kérem adjon meg egy számot 3 és 18 között!");
    }
    else {
        document.getElementById("month").value = x;
    }
}
function szamolj(ho, ossz) {
    if (document.getElementById("eur").checked) {
        document.getElementById("eredmeny").value = String(ho * ossz) + " Euro";
    }
    if (document.getElementById("huf").checked) {
        document.getElementById("eredmeny").value = String(ho * ossz * 420) + " Forint";
    }
}
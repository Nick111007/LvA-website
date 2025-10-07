var images = ["images/LVA1.png" ,"images/LVA2.png", "images/reCAPTCHA.png" ,"images/Duolingo.png" ];
var index = 0;
var btn = true;

function changeImage(delta) {
    index += delta;
    index += images.length;
    index %= images.length;
    document.getElementById("picture").src = images[index];

    document.getElementById("imageinc").innerHTML = "Image " +( index +1)+ " of 4";
}
function toggleMode() {

    if (btn) {


        document.getElementById("darkbtn").innerHTML = "☀️";

    } else {
        document.getElementById("darkbtn").innerHTML = "🌙";

    }
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    btn = !btn;
}
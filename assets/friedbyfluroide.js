const friedbyfluoride = document.getElementById("theloveilost");
const incel = document.getElementById("incel");
const suicidal = document.getElementById("suicidall");
const emo = document.getElementById("profile");

function incelcore() {
    friedbyfluoride.play();
    incel.classList.add("fadeout");
}

const savedVolume = localStorage.getItem("sus");
if (savedVolume !== null) {
    friedbyfluoride.volume = parseFloat(savedVolume);
    suicidal.value = friedbyfluoride.volume * 10000;
} else {
    friedbyfluoride.volume = suicidal.value / 10000;
}

suicidal.addEventListener("input", function() {
    friedbyfluoride.volume = this.value / 10000;
    localStorage.setItem("sus", friedbyfluoride.volume);
});

emo.addEventListener("click", function() {
    const bpm = 285; // estimate of bpm
    function makeitsowhenyouclickitstartsdancing() {
        emo.classList.add("dancing1");
        setTimeout(function() {
            emo.classList.add("dancing2");
            setTimeout(function() {
                emo.classList.remove("dancing1", "dancing2");
                setTimeout(makeitsowhenyouclickitstartsdancing, 0);
            }, bpm / 2);
        }, bpm / 2);
    }
    makeitsowhenyouclickitstartsdancing();
});
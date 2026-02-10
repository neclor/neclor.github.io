const alphabeth = [
    "A", "Á", "ä", "B", "C", "Č", "D", "Ď", "Dz", "Dž", "E", "É", "F", "G", "H", "Ch",
    "I", "Í", "J", "K", "L", "Ĺ", "Ľ", "M", "N", "Ň", "O", "Ó", "Ô", "P", "Q", "R", "Ŕ",
    "S", "Š", "T", "Ť", "U", "Ú", "V", "W", "X", "Y", "Ý", "Z", "Ž"
];
const vowels = ["A","Á","Ä","E","É","I","Í","O","Ó","Ô","U","Ú","Y","Ý"];

const grid = document.getElementById("lettersGrid");
const player = document.getElementById("audioPlayer");

alphabeth.forEach(letter => {
    const btn = document.createElement("button");
    btn.classList.add("letter");

    if (vowels.includes(letter.toUpperCase())) btn.classList.add("vowel");
    else btn.classList.add("consonant");

    btn.textContent = letter;

    btn.addEventListener("click", () => {
    player.src = `sounds/${letter}.mp3`;
    player.play();
    });

    grid.appendChild(btn);
});

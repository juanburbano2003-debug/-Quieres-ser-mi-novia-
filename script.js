const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const title = document.getElementById("title");
const img = document.getElementById("mainImage");
const heartsContainer = document.getElementById("hearts");


let yesSize = 1;

const phrases = [

"¿Estás segura?",
"Piensalo otra vez",
"No seas cruel 😢",
"Por favor 🥺",
"Última oportunidad",
"Di que sí ❤️"

]

const images = [
    "./assets/images/no1.jpg",
    "./assets/images/no2.jpg",
    "./assets/images/no3.jpg",
    "./assets/images/no4.jpg",
    "./assets/images/no5.jpg",
    "./assets/images/no6.jpg",
    "./assets/images/no7.jpg",
    "./assets/images/no8.jpg",
    "./assets/images/no9.gif",
];

let imgIndex =0;

noBtn.addEventListener("mouseover", () => {

    const width = window.innerWidth - noBtn.offsetWidth;
    const height = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * width;
    const randomY = Math.random() * height;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    const randomPhrase = phrases[Math.floor(Math.random()*phrases.length)];
    noBtn.innerText = randomPhrase;

    yesSize += 1;
    yesBtn.style.transform = `scale(${yesSize})`;

    // cambiar imagen
    img.src = images[imgIndex];
    imgIndex++;

    if(imgIndex >= images.length){
        imgIndex = 0;
    }

});

yesBtn.addEventListener("click",()=>{

    img.src="./assets/images/Si2.gif"

    title.innerText="Sabía que dirías que sí ❤️"

    
    yesBtn.style.display="none"

    noBtn.style.display="none"
    for(let i=0;i<3;i++){
    createHearts()
    }

});

/* corazones */

function createHearts(){

    for(let i=0;i<25;i++){

        const heart = document.createElement("div")

        heart.classList.add("heart")

        heart.innerHTML="❤️"

        heart.style.left=Math.random()*100+"vw"

        heart.style.bottom="-20px"

        heart.style.fontSize=(Math.random()*20+20)+"px"

        heartsContainer.appendChild(heart);

        setTimeout(()=>{
            heart.remove()
        },3000)

    }

};
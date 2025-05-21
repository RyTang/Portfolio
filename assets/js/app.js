// scroll to top function
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
})

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
        burger.checked = false;
    })
);


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

var currentTab;
let pauseOnInteraction = false;
let rotationTimer = null;

function opentab(tabName, isAuto = false) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabName + "_tab").classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");

    currentTab = tabName;
    if (!pauseOnInteraction & !isAuto) {
        pauseOnInteraction = true;
        clearInterval(rotationTimer);
        setTimeout(() => {
            pauseOnInteraction = false;
        }, 15000); // 15 seconds
    }
}

function rotatetab(){
    if (pauseOnInteraction) {
        return;
    }
    var currentIndex = 0;
    if (currentTab){
            for (var tabcontent of tabcontents){
            if (tabcontent.id === currentTab) {
                break;
            }
            currentIndex++;
        }
    }
    const wantedIndex = (currentIndex + 1) % tablinks.length
    opentab(tabcontents[wantedIndex].id, true);
}


setInterval(rotatetab, 5000)
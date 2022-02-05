//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

//Revelar animação
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
});

//Home delay
sr.reveal(".button", { delay: 200 });
sr.reveal(".linguagensProjeto", { delay: 400 });
sr.reveal(".imagem-espaco-delay", { delay: 200 });
sr.reveal(".imagem-iuri-delay", { delay: 600 });
sr.reveal(".scroll-delay", { delay: 1000 });
//Sobre mim delay
sr.reveal(".imagem-delay", {});
sr.reveal(".titulo-delay", { delay: 200 });
sr.reveal(".descricao-delay", { delay: 400 });
sr.reveal(".cards-interval", { interval: 400 });

//Animação conhecimentos
var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "HTML is a markup-based language, where we mark up elements to define what information the page will display. <br><br> 3 years of experience";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "CSS is a “layered” style sheet language created for the purpose of styling HTML pages. <br><br> 3 years of experience";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript is a structured, multi-paradigm, weak dynamically typed, high-level scripting interpreted programming language. <br><br> 2 years of experience";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "MySQL is a Relational Database Management Systems (RDBMS) with a client-server model.<br><br> 1 year of experience";
});

document.querySelector(".sass").addEventListener("mouseover", function () {
  texto1.innerHTML =
  "Python is a high-level, dynamic, interpreted, modular, cross-platform, object-oriented programming language.<br><br> 4 years of experience"; 
  
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "C++ is a mid-level programming language, based on the C language.<br><br> 1 year of experience";
  });

document.querySelector(".next").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Java is a type of programming language created and marketed by Sun Microsystems since 1995. It is defined as an object-oriented language.<br><br> 3 years of experience";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "It is a managed cloud storage service that uses APIs (or VPC endpoints) to store and retrieve data.<br><br> 1 year of experience";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `< Passe o mouse no card para ler >`;
  });
}

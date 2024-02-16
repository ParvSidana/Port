/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//MENU HIDDEN

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll(".nav_link");

const removeMenu = () => {
  navMenu.classList.remove("show-menu");
};

navLinks.forEach((elem) => {
  elem.addEventListener("click", removeMenu);
});

/*=============== SHADOW HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SKILLS ===============*/

const skillsContent = document.querySelectorAll(".skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass == "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((elem) => {
  elem.addEventListener("click", toggleSkills);
});

/*=============== EMAIL JS ===============*/

const contactForm = document.querySelector("#contact-form"),
  contactText = document.querySelector("#contact-status");

const emailSend = (elem) => {
  elem.preventDefault();

  // emailjs.sendForm('contact_service', 'contact_form', this)
  // .then(function() {
  //     console.log('SUCCESS!');
  // }, function(error) {
  //     console.log('FAILED...', error);
  // });
  //service-id ,//template-id, #id_form, public -key
  emailjs
    .sendForm(
      "service_n4wvc68",
      "template_vk4uc7s",
      "#contact-form",
      "kscDUh91L-E2cIEU8"
    )
    .then(
      () => {
        contactText.innerHTML = "Message Sent Successfully :)";

        //removing mess after a time

        setTimeout(() => {
          contactText.innerHTML = "";
        }, 5000);

        //clear input fields
        contactForm.reset();
      },
      //failed functn
      () => {
        contactText.innerHTML = "Message Failed(Error occurred) :(";
      }
    );
};

contactForm.addEventListener("submit", emailSend);

/*=============== SHOW SCROLL UP ===============*/

const showScroll = () => {
  const scrollUp = document.querySelector("#scroll-up");
  //when scrollup greater than 350 height of viewport

  this.scrollY >= 350
    ? scrollUp.classList.add("show_scroll")
    : scrollUp.classList.remove("show_scroll");
};

window.addEventListener("scroll", showScroll);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((elem) => {
    // console.log(elem.getAttribute('id'));
    // console.log(elem.offsetHeight);
    // console.log(elem.offsetTop - 58);
    // console.log(scrollDown);

    const sectionHeight = elem.offsetHeight,
      sectionId = elem.getAttribute("id"),
      sectionTop = elem.offsetTop - 64,
      sectionClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("present_sec");
    } else {
      sectionClass.classList.remove("present_sec");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.querySelector("#theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "ri-sun-line";

// const selectedTheme = localStorage.getItem('selected-theme'),
// selectedIcon = localStorage.getItem('selected-icon');

// const getCurrentTheme = ()=>{
//     document.body.classList.contains(darkTheme) ? 'dark':'light';
// }
// const getCurrentIcon = ()=>{
//     themeButton.classList.contains(iconTheme) ? 'ri-moon-line':'ri-sun-line';
// }

// if(selectedTheme){
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
//     themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' :'remove'](iconTheme);
// }

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // localStorage.setItem('selected-theme',getCurrentTheme());
  // localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home_perfil, .contact_mail, .about_cv`, { origin: "right" });

sr.reveal(
  `.home_name, .home_info ,  .contact_social, .contact_data,.about_buttons .button,.projects_card`,
  { origin: "left" }
);

sr.reveal(`.about_info`, { origin: "bottom" });

sr.reveal(`.skills_text, .skill_container`, { origin: "right" });
sr.reveal(`.about_buttons`, { opacity: 0.5 });
sr.reveal(`.about_container .section__title-1`, { origin: "top" });

sr.reveal(`.projects_card`, { interval: 100 });



  const btn = document.getElementById("theme");
  const icon = btn.querySelector("i");
    if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    icon.classList.replace("fa-moon", "fa-sun");
    
  } else {
    document.body.classList.remove("light");
    icon.classList.replace("fa-sun", "fa-moon");
   
  }


  btn.onclick = () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      icon.classList.replace("fa-moon", "fa-sun");
      img.src = "home final.png";
    } else {
      localStorage.setItem("theme", "dark");
      icon.classList.replace("fa-sun", "fa-moon");
      img.src = "home final.png";
    }
  };
  // navbr
const links = document.querySelectorAll(".navlinks a");
const hover = document.querySelector(".hover");

function moveHover(el){
  hover.style.width = el.offsetWidth + "px";
  hover.style.left = el.offsetLeft + "px";
}


const activeLink = document.querySelector(".navlinks a[data-active]");
if(activeLink) moveHover(activeLink);

// mouse hover
links.forEach(link=>{
  link.addEventListener("mouseenter", ()=> moveHover(link));
});
const icons = document.querySelectorAll(".icon-circle i");
icons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.color = "#fff";
    icon.parentElement.style.background = "#3390ff";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#fff";
    icon.parentElement.style.background = "#4da6ff";
  });
});

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(cardTop < screenHeight - 100){
      card.classList.add("show");
    }
  });
});



 const car = document.querySelectorAll('.card');

  car.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-12px) scale(1.04)';
      card.style.boxShadow = '0 20px 60px rgba(77,166,255,0.25)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 15px 40px rgba(0,0,0,0.6)';
    });
  });



const c = document.querySelectorAll('.card');

c.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.04)';

    if(document.body.classList.contains('light')){
      card.style.boxShadow = '0 25px 60px rgba(74, 36, 144, 0.6)';
    } else {
      card.style.boxShadow = '0 20px 60px rgba(77,166,255,0.25)';
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    if(document.body.classList.contains('light')){
      card.style.boxShadow = '0 12px 30px rgba(74,36,144,0.25)';
    } else {
      card.style.boxShadow = '0 15px 40px rgba(0,0,0,0.6)';
    }
  });
});

/*const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 150,
            sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 50,
  reset: true,
});

sr.reveal(".left-animate", { origin: "left" });
sr.reveal(".fade-in", { interval: 100 });

const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container"); 



window.addEventListener("scroll", () =>{
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
        // jab window.scrollY ki value bottomContainerEl ki top ki value + navbar ki height ki value + margin jo bottomContainer me tha , in 3no ki value ko cross kr raha hai to uska color change ho jaya ga
    }
    else{
        navbarEl.classList.remove("active")
    }
});
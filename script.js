window.onscroll = function() 
{

const button = document.getElementById("scrollToTopBtn");
button.style.display = window.scrollY >200 ? "block" : "none";

}

function scrollToTop() 
{

window.scrollTo
({

top: 0, behavior: 'smooth'    

})

}



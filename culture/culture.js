const cul=document.querySelectorAll(".culture");

for(let i=0;i<cul.length;i++){
    const cult=cul[i];
  cult.addEventListener("click", function(){
const indian=cult.nextElementSibling;
indian.classList.toggle("show");

    })
};









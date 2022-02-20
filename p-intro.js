

const hobby=document.querySelectorAll(".pushable");

for(let i=0;i<hobby.length;i++){
    const hb=hobby[i];
  hb.addEventListener("click", function(){
const indian=hb.nextElementSibling;
indian.classList.toggle("show");

    })
};


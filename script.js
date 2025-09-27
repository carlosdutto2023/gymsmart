const pesa=document.getElementById("pesa");
 const barralateral =document. querySelector(".barra-lateral");
 const span=document.querySelectorAll("span");
 pesa.addEventListener("click",()=>{
 barralateral.classlist.toggle("mini-barra-lateral");
 span.classlist.toggle("oculto");
 
});
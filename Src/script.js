let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");

/*
const nameVisibile = () => {
firstName.style.display ="block";
firstName.style.width = "50%";
lastName.style.display = "block";
lastName.style.width = "50%"
}
document.body.addEventListener("load", nameVisibile());
*/
document.getElementById("certs").onclick = function() {
    document.getElementById("certs").classList.toggle('show');
}
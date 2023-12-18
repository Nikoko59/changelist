const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  listing();
});

// déclaration de variable
let chose1;
let chose2;
let chose3;

//  function listing jouant les alert et prompt permettant les modifications de listes en jouant la function actuaList();
function listing() {
  alert("Modifier la liste ");
  chose1 = prompt("saisir l'activité 1 : ");
  chose2 = prompt("saisir l'activité 2 : ");
  chose3 = prompt("saisir l'activité 3 : ");
  actualList();
}

// function actuaList() , pointage des "ID" de la list assignation à choose
function actualList() {
  document.getElementById("list1").innerHTML = chose1;
  document.getElementById("list2").innerHTML = chose2;
  document.getElementById("list3").innerHTML = chose3;
}


let comptuer = 0
const valeur = document.getElementById("valeur")
const plus = document.getElementById("plus")
const reset = document.getElementById("reset")
const moins = document.getElementById("moins")

function afficher (comptuer){
    valeur.textContent = comptuer
}
plus.addEventListener("click" , function(){
    comptuer ++
    afficher(comptuer)
})
moins.addEventListener("click" , function(){
    if(comptuer > 0){
        comptuer --
    }
    afficher(comptuer)
})
reset.addEventListener("click", function() {
    comptuer = 0;
    afficher(comptuer);
})
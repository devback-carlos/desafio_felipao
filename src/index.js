let nomeHeroi = "Carlos"
let quantXp = 6.700
let nivel

if (quantXp < 1.000){
    nivel = "Ferro"
}else if (quantXp >= 1.001 && quantXp <= 2.000){
    nivel = "Bronze"
}else if (quantXp >= 2.001 && quantXp <= 5.000){
    nivel = "Prata"
}else if (quantXp >= 5.001 && quantXp <= 7.000){
    nivel = "Ouro"
}else if (quantXp >= 7.001 && quantXp <= 8.000){
    nivel = "Platina"
}else if (quantXp >= 8.001 && quantXp <= 9.000){
    nivel = "Ascendente"
}else if (quantXp >= 9.001 && quantXp <= 10.000){
    nivel = "Imortal"
}else if (quantXp >= 10.001){
    nivel = "Radiante"
}
    console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel)

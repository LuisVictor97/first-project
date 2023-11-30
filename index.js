//definindo o nome e quantidade de XP do herói
let nomeHero = "Charizard"
let quantidadeXp = "5500"

// utilizando uma estrutura de decisão para definir o nível do herói
let nivelHero = ""

if(quantidadeXp <= 1000){
    nivelHero = "Ferro"
}else if(quantidadeXp >= 1001 && quantidadeXp <= 2000 ){
    nivelHero = "Bronze"
}else if(quantidadeXp >= 2001 && quantidadeXp <= 3000){    
    nivelHero = "Prata"
}else if(quantidadeXp >= 3001 && quantidadeXp <= 4000){
    nivelHero = "Ouro"
}else if(quantidadeXp >= 4001 && quantidadeXp <= 5000){
    nivelHero = "Platina"
}else if(quantidadeXp >= 5001 && quantidadeXp <= 6000){
    nivelHero = "Ascendente"
}else if(quantidadeXp >= 6001 && quantidadeXp <= 7000){
    nivelHero = "Imortal"
}else if(quantidadeXp >= 7001 && quantidadeXp <= 8000){
    nivelHero = "Radiante"
}else{
    nivelHero = "Radiante"
}

console.log("O Herói de nome " + nomeHero + "está no nível " + nivelHero)  
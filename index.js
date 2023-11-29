//definindo o nome e quantidade de XP do herói
let nomeHero = "Charizard"
let quantidadeXp = "1000"

// utilizando uma estrutura de decisão para definir o nível do herói
let nivelHero = ""

if(quantidadeXp <= 1000){
    nivelHero = "Ferro"
}else if(quantidadeXp >= 1001 && quantidadeXp <= 2000 ){
    nivelHero = "Bronze"
}else if(quantidadeXp >=2001 && quantidadeXp <= 3000){    
    nivelHero = "Prata"
}else{
    nivelHero = "Radiante"
}

console.log("O Herói de nome " + nomeHero + "está no nível " + nivelHero)  
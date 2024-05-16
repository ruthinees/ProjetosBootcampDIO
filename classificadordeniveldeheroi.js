//Criando matriz de herois com seus nomes
let herois = [
  ["IRELIA"],
  ["SETT"],
  ["APHELIUS"],
  ["SHACO"],
  ["DIANA"],
  ["LISSANDRA"],
  ["HECARIM"],
  ["AHRI"],
  ["KINDRED"],
  ["ASHE"]
]

//Array para armazenar as experiências aleatórias
let experienciasale = [];

//Gerando xp aleatórias
for(let i = 0; i < herois.length; i++){
  let xp = Math.floor(Math.random() * 20001)
  experienciasale.push(xp)
}

//Fazendo um looping para testar valores de niveis
for(let i = 0; i < herois.length; i++){
  let xp = experienciasale[i]
  let nivel = ""

  //Condições para cada nivel 
  if(xp <= 1000){
    nivel = "FERRO"
  }
  else if(xp > 1000 && xp <= 2000){
    nivel = "BRONZE"
  }
  else if(xp > 2000 && xp <= 5000){
    nivel = "PRATA"
  }
  else if(xp > 5000 && xp <= 7000){
    nivel = "OURO"
  }
  else if(xp > 7000 && xp <= 8000){
    nivel = "PLATINA"
  }
  else if(xp > 8000 && xp <= 9000){
    nivel = "ASCENDENTE"
  }
  else if(xp > 9000 && xp <= 10000){
    nivel = "IMORTAL"
  }
  else{
    nivel = "RADIANTE"
  }

  //Mostrando, para cada campeao, seu nível baseado na quantidade de xp
  console.log("O Héroi de nome:",herois[i][0], "está no nível: ", nivel)
}
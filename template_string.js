/*
 Raul Nascimento tem 43 anos, pesa 78 kg
 tem 1.70 de altura e seu IMC é 23.123412341
 Raul Nascimento nasceu em 1977. 
 */

 const nome = 'Raul';
 const sobrenome = 'Nascimento';
 const idade = 43;
 const peso = 78;
 const altura = 1.70;
 let imc;
 let anoNascimento;

 imc = peso / (altura * altura);
 anoNascimento = 2020 - idade;

 console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
 console.log(`tem ${altura} de altura e seu IMC é ${imc}`);
 console.log(`${nome} nasceu em ${anoNascimento}.`);
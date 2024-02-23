// //Exercicio 1

const shopList = {
    "Maçã": 5,
    "Banana": 3,
    "Leite": 4,
    "Pão": 10
  };
  
  console.log("Banana" in shopList);
  console.log(shopList["Banana"]);
  
  shopList["Banana"] = 6;
  delete shopList["Banana"];
  
  console.log(shopList);
  
  //Exercicio 2

 
let agenda = [
    { nome: "João", telefone: "123456789", email: "joao@gmail.com" },
    { nome: "Maria", telefone: "987654321", email: "maria@gmail.com" },
    { nome: "Carlos", telefone: "555444333", email: "carlos@gmail.com" }
  ];
  
  
  console.log("Agenda de Contatos:");
  agenda.forEach(function(contato) {
    console.log("Nome:", contato.nome);
    console.log("Telefone:", contato.telefone);
    console.log("Email:", contato.email);
    console.log("--------------------");
  });

  //Exercicio 3

  let dicionarioDeSinonimos = {
    feliz: ["alegre", "contente", "satisfeito"],
    triste: ["melancólico", "abatido", "deprimido"],
    bom: ["ótimo", "excelente", "maravilhoso"]
  };
  
  console.log("Sinônimos de 'feliz':", dicionarioDeSinonimos.feliz);
  console.log("Sinônimos de 'triste':", dicionarioDeSinonimos.triste);
  console.log("Sinônimos de 'bom':", dicionarioDeSinonimos.bom);
  
  //Exercicio 4

  const dicionarioDeSinonimos2 = new Map();

dicionarioDeSinonimos2.set('Feliz', ["alegre", "contente", "satisfeito"]);
dicionarioDeSinonimos2.set('Triste', ["melancólico", "abatido", "deprimido"]);
dicionarioDeSinonimos2.set('Bom', ["ótimo", "excelente", "maravilhoso"]);


console.log("Sinônimos de 'Feliz':", dicionarioDeSinonimos2.get('Feliz'));
console.log("Sinônimos de 'Triste':", dicionarioDeSinonimos2.get('Triste'));
console.log("Sinônimos de 'Bom':", dicionarioDeSinonimos2.get('Bom'));

//Exercicio 5

const pessoa = {
    nome: "Fulano",
    idade: 20,
    cidade: "Rio de Janeiro"
  };
  
  const temMaisDeDezoitoAnos = pessoa.idade >= 18;
  const naoEhDeSaoPaulo = pessoa.cidade.toLowerCase() !== "são paulo";
  
  console.log("Tem 18 anos ou mais?", temMaisDeDezoitoAnos);
  console.log("Não é de São Paulo?", naoEhDeSaoPaulo);
  
  //Exercicio 6

  const aluno = {
    nome: "João",
    nota1: 8,
    nota2: 7
  };
  
  
  const media = (aluno.nota1 + aluno.nota2) / 2;
  
 
  const aprovado = media >= 7;
  
  console.log("Média das notas:", media);
  console.log("Aprovado?", aprovado);
  
  //Exercicio 7

  const frutas = new Map();

frutas.set("Maçã", 2.50);
frutas.set("Banana", 1.80);
frutas.set("Pêra", 3.00);
frutas.set("Uva", 3.00);

const macaMaisCaraQueBanana = frutas.get("Maçã") > frutas.get("Banana");


const peraNaoCustaMesmoQueUva = frutas.get("Pêra") !== frutas.get("Uva");

console.log("A maçã é mais cara que a banana?", macaMaisCaraQueBanana);
console.log("A pêra não custa o mesmo que a uva?", peraNaoCustaMesmoQueUva)

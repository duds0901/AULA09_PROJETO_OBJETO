//criar uma variavel do tipo objeto
let pessoa = {
    nome: 'Duda',
    sobrenome: 'Moro',
    idade: '17',
    altura: '1,63',
    cargo: 'estudante'
};
//condumindo o objeto todo
console.log(pessoa);
//consumindo uma das caracteristicas do objeto
console.log(pessoa.nome);
console.log(pessoa.altura);

let carro = {
    nome: 'Brasília',
    cor: 'amarela',
    potencia: '80cv'

};

//acessar 2 propriedades ao mesmo tempo
console.log(carro.nome+" "+carro.cor);

let usuarios =[
    {nome:'Albertina', cargo:'Programador', status:'ativo'},
    {nome:'Pedro', cargo:'Engenheiro de Software', status:'ativo'},
    {nome:'Luiza', cargo:'Estagiário', status:'inativo'}
];

//consumindo o array
console.log(usuarios);

//acessando um objeto específico
console.log(usuarios[2]);

//acessando uma carecterística específica dentro do objeto
console.log(usuarios[2].nome);




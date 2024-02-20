//pegar os dados do formulario

const fname = document.getElementById("fname");
const ename = document.getElementById("ename");
const tname = document.getElementById("tname");

//Para "ouvir" o click do botão, usamos o addEventListener

const btnSubmit = document.getElementById("btn");

//Criar uma lista vazia

const data = [];

btnSubmit.addEventListener('click', function (event) {
    //Não deixa o formulário se comportar como padrão, ou seja, 
    //enviar os dados para próxima página/requisição
    event.preventDefault();

    const pessoa = {
        nome: fname.value,
        endereco: ename.value,
        fone: tname.value,

        favoritos: [
            {
                titulo: "A nova casa",
                autor:"Juca bala",
                ano:2025,
                genero:"Aventura"
            }
        ]
    };

    data.push(pessoa);

    console.log(data);

    console.log(pessoa);

    console.log("======================================");

    console.log(pessoa.favoritos);

    // console.log(fname.value);
    // console.log(ename.value);
    // console.log(tname.value);

    const dados = [
        fname.value,
        ename.value,
        tname.value
    ];

    console.log(dados);
}); 

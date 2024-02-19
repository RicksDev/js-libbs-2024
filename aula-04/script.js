//pegar os dados do formulario

const fname = document.getElementById("fname");

//Para ouvir o click do botão, usamos o addEventListener

const btnSubmit = document.getElementById("btn");

btnSubmit.addEventListener('click', function (event) {
    //Não deixa o formulário se comportar como padrão, ou seja, 
    //enviar os dados para próxima página/requisição
    event.preventDefault();

    console.log(fname.value);
    console.log(lname.value);
}); 
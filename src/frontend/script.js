const form = document.getElementById('animalForm');
const listaAnimais = document.getElementById('ListaAnimais');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const raca = document.getElementById('raca').value;
    const porte = document.getElementById('porte').value;
    const descricao = document.getElementById('descricao').value;



try {

    const response = await fetch(`http://localhost:5500/api/animais/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({nome, idade, raca, porte, descricao})
    })

    if(response.ok) {
        alert("cadastro com sucesso!");

    } else {
        alert("erro ao cadastrar!")
    }

} catch {
    console.error('Erro', error);
    alert("erro ao cadastrar!");
}
});

async function carregarAnimais() {
    try {

        const response =  await fetch('http://localhost:5500/api/animais');
        const animais = await response.json();

        listaAnimais.innerHTML = '';

        animais.forEach(animal => {
            const li = document.createElement('li');
            li.innerHTML = `Nome: ${animal.nome} </br> 
            Idade: ${animal.idade} 
            <button class="detalhes-btn" data-id="${animal._id}">Detalhes</button>`
            listaAnimais.appendChild(li);

        });

        const detalhesBtn = document.querySelectorAll('.detalhes-btn');
        detalhesBtn.forEach(botao => {
            botao.addEventListener('click', () => {
                const id = botao.getAttribute('data-id');
                obterDetalhesAnimal(id);
            });
        })

    } catch (error){

        console.error('erro ao buscar animais', error)
    }
}

async function obterDetalhesAnimal(id) {
    console.log("detalhes:  ", id)
    try {

        const response = await fetch(`http://localhost:5500/api/animais/${id}`);

        if(!response.ok) {
            console.error("erro na resposta da API", response.status);
            return;
        }
        const animal = await response.json();
        exibirDetalhes(animal);

    } catch (error) {
        console.error("Erro ao buscar detalhes do animal");
    }
}


function exibirDetalhes(animal) {
    const detalhesAnimal = document.getElementById('detalhesAnimal');
    detalhesAnimal.innerHTML = `
    <p>Nome: ${animal.nome}</p>
    <p>Raça: ${animal.raca}</p>
    <p>Porte: ${animal.porte}</p>
    <p>Descrição: ${animal.descricao}</p>`
}

async function removerAnimais() {
    try {

        const response = await fetch('http://localhost:5500/api/animais', {
            method: 'DELETE'
        });

        if(response.ok) {
            alert("Animais removidos com sucesso!");
        } else {
            alert("Erro ao remover animais!");
        }
        carregarAnimais();

        const detalhesAnimal = document.getElementById('detalhesAnimal');
        detalhesAnimal.innerHTML = '';
    } catch (error) {
        console.error("Erro ao remover todos os animais!", error);

    }
}



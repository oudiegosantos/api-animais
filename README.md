# API de Gerenciamento de Animais

Este projeto consiste em uma API RESTful desenvolvida com Node.js, Express e MongoDB para gerenciar informações de animais.

## Tecnologias Utilizadas

* Node.js
* Express
* MongoDB
* Mongoose

## Pré-requisitos

* Node.js (versão 14 ou superior)
* npm (gerenciador de pacotes do Node.js)
* MongoDB (local ou MongoDB Atlas)

## Configuração do Ambiente

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd <NOME_DO_SEU_REPOSITORIO>
    ```

3.  **Instale as dependências do backend:**

    ```bash
    npm install
    ```

4.  **Configure o MongoDB:**

    * **MongoDB Local:**
        * Certifique-se de que o MongoDB esteja instalado e em execução na sua máquina.
        * Crie um banco de dados chamado `animais`.
    * **MongoDB Atlas:**
        * Crie uma conta no MongoDB Atlas ([https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)).
        * Crie um cluster e obtenha a string de conexão.
        * Crie um banco de dados chamado `animais`.

5.  **Crie um arquivo `.env` na pasta `src`:**

    * Adicione a string de conexão do MongoDB ao arquivo `.env`:

    ```
    MONGODB_URI=<SUA_STRING_DE_CONEXAO>
    ```

    * Substitua `<SUA_STRING_DE_CONEXAO>` pela sua string de conexão do MongoDB.

## Executando o Projeto

1.  **Navegue até a pasta `src`:**

    ```bash
    cd src
    ```

2.  **Inicie o servidor:**

    ```bash
    npm start
    ```

3.  A API estará disponível em `http://localhost:5500/api`.

## Rotas da API

* **GET /animais:** Lista todos os animais.
* **POST /animais:** Cadastra um novo animal.
* **GET /animais/:id:** Obtém informações de um animal específico.
* **DELETE /animais/:id:** Remove um animal.

## Exemplos de Uso

Você pode usar ferramentas como Postman ou Insomnia para testar as rotas da API.

## Estrutura do Projeto

api-animais/ ├── src/ │ ├── controladores/ │ │ └── animalControllers.js │ ├── modelos/ │ │ └── animal.js │ ├── rotas/ │ │ └── animalRoutes.js │ ├── server.js │ └── .env ├── pacote.json ├── pacote-lock.json └── README.md


## Informações Adicionais

* Certifique-se de que o MongoDB esteja em execução antes de iniciar o servidor.
* O arquivo `.env` não deve ser enviado para o GitHub. Adicione-o ao `.gitignore`.

## Contato

Se você tiver alguma dúvida ou problema, entre em contato comigo em <SEU_EMAIL>.
Instruções Detalhadas:

Substitua os placeholders:
<URL_DO_SEU_REPOSITORIO>: Pela URL do seu repositório GitHub.
<NOME_DO_SEU_REPOSITORIO>: Pelo nome da pasta do seu repositório.
<SUA_STRING_DE_CONEXAO>: Pela sua string de conexão do MongoDB.
<SEU_EMAIL>: Pelo seu endereço de e-mail.
Adicione o arquivo .env ao .gitignore:
Crie um arquivo .gitignore na raiz do seu projeto.
Adicione .env ao arquivo .gitignore.
Organize seu repositório:
Certifique-se de que a estrutura de pastas do seu projeto corresponda à estrutura descrita no README.

# Projeto Backend

O projeto constitui em API RestFull em que podemos Criar, Ler, Atualizar e Deletar (CRUD). 

## As Tecnologias utilizadas

- **Node.js**: fornece a possibilidade de executar JS em um servidor.

- **Express.js**: cria rotas de api

- **Dotenv**: cria configurações com mais facilidade e segurança.

- **Nodemon**: configura o nosso ambiente de desenvolvimento.

- **MySQL**: Armazenamento dos dados.

- **Sequelize**: configura a interação com o mysql para a criação das estruturas de: Banco de Dados, Tabelas e Inserções de Valores.

- **JWT**: Token gerado para fins de segurança das rotas das APIs.

- **JEST**: Ambiente de testagem dos códigos criados no nosso projeto.

- **Swagger**: Faz o design, ou seja, fazer a modelagem, a documentar e até gerar código para desenvolvimento de APIs.

## Estrutura de diretório
```
back-drip/
│   │ 
│   ├── __teste__/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│  
├── .env
├── .gitignore
├──  app.js
└──  association.js
├──  jest.config.js
├──  README.md
└──  server.js


```

### Configurando o Backend Node.js

Para iniciar o projeto é necessário configurar o package.json :

```
npm i
```

### 1. Para rodar o projeto, é preciso apenas baixar e instalar as dependências:

1 - Abra o Terminal para dá os seguintes comandos:

```
npm i bcrypt dotenv express jsonwebtoken mysql2 sequelize swagger-jsdoc swagger-ui-express

```
2 - Confira no seu package.json se está descrito desta forma:
```json
 "dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mysql2": "^3.11.0",
    "sequelize": "^6.37.3",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.1"
  },
```

3 - Agora para ver se o projeto está funcionando dê este comando:

```
node app.js
```

### 2. Para rodar o JEST é necessário baixar as depêndencias descritas:

1 - Dependências dev para rodar os testes:
```
npm i --save-dev jest supertest
```
2- Confira no package-json se está exatamente assim:
```json
"devDependencies": {
    "jest": "^29.7.0",
    "supertest": "^7.0.0"
}
```

 - **Jest**: Para executar os testes.

 - **Supertest**: Para facilitar a simulação de requisições HTTP nos testes da API.



3 - Abra o 'package.json' e adicione em 'scripts', a linha:

```json
 "scripts": {
    "start": "node app.js",
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
},
```

4 - Abra o Terminal e rode o projeto no modo teste:

```
npm test
```


## Objetivo do Projeto Backend

O objetivo deste projeto é aplicar os conhecimentos adquiridos no curso de Desenvolvedor Web Full Stack, integrando ferramentas e tecnologias do Backend para consolidar o aprendizado e formar desenvolvedores completos.



## Membros do Projeto

|                                               Profile                                                |       Nome Completo        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------------------------------------------------------------------------------------------: | :------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     [<img src="https://avatars.githubusercontent.com/u/146147231?v=4" height="90px">](https://github.com/souzadevofic)     |   Alisson Silva de Souza       |                                                                                                                                                                                                                                  
| [<img src="https://avatars.githubusercontent.com/u/88554119?v=4" height="90px">](https://github.com/vanessaadev) |   Vanessa de Araujo do Nascimento   |
|   [<img src="https://avatars.githubusercontent.com/u/172999556?v=4" height="90px">](https://github.com/DevRDone)   | Ronald da Costa Oliveira |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |


                                                      



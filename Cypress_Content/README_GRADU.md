# QualidadeSoftware
Repositório da matéria de S206 - Qualidade de Software 28/09/22

## Executar o projeto já existente
```
Faça um clone do projeto ou baixe como .zip
git clone

Abra o projeto no Visual Studio, por exemplo, caso queira visualizar o código.

Inicie o cypress pela linha de comando (precisa estar dentro do diretório raiz do projeto):
Opção 1: ./node_modules/.bin/cypress open

Opção 2: .\node_modules\.bin\cypress open

Escolha qual navegador deseja abrir.

Para gerar o relatório + video basta rodar specs por linha de comando (precisa estar dentro do diretório raiz do projeto):
Opção 1: ./node_modules/.bin/cypress run --spec 'cypress/e2e/trabalho.cy.js'

Opção 2: .\node_modules\.bin\cypress run --spec 'cypress\e2e\trabalho.cy.js'

```



## Começar um projeto do zero até o relatório final
```
Criar o diretório inicial e indicar para o node que o diretório é um projeto
npm init

Baixar as dependencias do projeto (caso já tenha baixado o código do git)
npm install

Abrir cypress pela linha de comando:
./node_modules/.bin/cypress open

Rodar specs por linha de comando:
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'

Para gerar um report HTML, siga os 4 passos abaixo:

1. Adicionando as dependências necessárias para gerar o reporte de testes:
npm i --save-dev cypress-mochawesome-reporter
	
2. Modificar o arquivo cypress.config.js:
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

3. Adicionar em cypress/support/e2e.js:
import 'cypress-mochawesome-reporter/register';

4. Rodar specs pela linha de comando:
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'

```

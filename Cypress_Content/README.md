# Cypress
![Cypress](https://img.shields.io/badge/Cypress-E2E-green?logo=cypress)


## 🛠️ Softwares Necessários

Softwares necessários:

* **Node.js**
* **Visual Studio Code (VSCode)**
* **Git Bash** *(opcional)*

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone 
```

### 2️⃣ Abrir o projeto no VSCode

Certifique-se que está dentro da pasta que contém os códigos do Cypress

### 3️⃣ Instalar as dependências

```bash
npm install cypress --save-dev
```
"--save-dev" => instalar somente como dependências de desenvolvimento

---

## 🧪 Executando os Testes com Cypress

### Abrir o Cypress

```bash
npx cypress open
```

### Executar todos os testes

```bash
npx cypress run
```

### Executar testes de uma pasta específica

```bash
npx cypress run --spec "cypress/e2e/nome-da-pasta/**"
```

---

## 🚀 Iniciando um Novo Projeto

Para criar um novo projeto do zero:

```bash
npm init
```

---

## 📊 Gerando Report HTML dos Testes

Siga os passos abaixo para configurar e gerar o relatório HTML utilizando **Mochawesome**.

### 1️⃣ Instalar as dependências necessárias

```bash
npm i --save-dev cypress-mochawesome-reporter
```

### 2️⃣ Modificar o arquivo `cypress.config.js`

```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
```

### 3️⃣ Adicionar no arquivo `cypress/support/e2e.js`

```js
import 'cypress-mochawesome-reporter/register';
```

### 4️⃣ Executar os testes via linha de comando

```bash
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

Após a execução, o **relatório HTML** será gerado automaticamente na pasta de reports configurada.

### 5️⃣ Adicionar video no relatório 
Escreva isto dentro de e2e:{} no arquivo cypress/support/e2e.js
```bash
    chromeWebSecurity: false,
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: true,
```

---
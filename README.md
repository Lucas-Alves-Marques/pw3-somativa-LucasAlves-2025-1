# 📚 Libri - Sistema de Gerenciamento de Livros

Este projeto é uma aplicação web Full Stack desenvolvida como atividade prática avaliativa durante o curso **Técnico em Desenvolvimento de Sistemas**. O principal propósito desta somativa foi compreender, estruturar e integrar o desenvolvimento de uma interface dinâmica utilizando **React.js** no front-end com uma API robusta utilizando o ORM **Sequelize** (com Node.js, Express e MySQL) no back-end.

---

## 🔍 Contextualização do Projeto

No contexto acadêmico da disciplina de **Programação Web III (PW3)**, o projeto foi concebido para fixar conceitos fundamentais do desenvolvimento moderno de software, como:
- Criação de APIs RESTful usando Express.
- Abstração e manipulação de banco de dados relacional (MySQL) através de um **ORM (Object-Relational Mapping)**, no caso o **Sequelize**.
- Desenvolvimento de interfaces de usuário componentizadas, reativas e com gerenciamento de rotas usando **React.js** e **React Router DOM**.
- Comunicação assíncrona entre cliente e servidor utilizando o protocolo HTTP.

---

## 🛠️ Tecnologias Utilizadas

### **Back-end (API)**
* **Node.js** — Ambiente de execução JavaScript do lado do servidor.
* **Express.js** — Framework minimalista para criação das rotas e serviços da API.
* **Sequelize** — ORM utilizado para modelagem das tabelas, relacionamentos (`HasMany` / `BelongsTo`) e operações de CRUD no banco de dados.
* **MySQL2** — Driver de conexão com o banco de dados MySQL.
* **Cors** — Middleware para permitir requisições de diferentes origens (cross-origin).
* **Nodemon** — Ferramenta utilitária para reinicialização automática do servidor durante o desenvolvimento.

### **Front-end**
* **React.js** — Biblioteca JavaScript para construção da interface de usuário baseada em componentes.
* **Vite** — Ferramenta de build rápida e moderna para desenvolvimento front-end.
* **React Router DOM** — Roteador declarativo para navegação entre páginas da aplicação SPA.
* **React Icons** — Pacote de ícones utilizado para enriquecer a experiência visual.
* **CSS Modules / Vanilla CSS** — Estilização personalizada de componentes de forma modular.

---

## 📁 Estrutura de Diretórios

O projeto é dividido de forma clara em duas partes principais:

```text
pw3-somativa-LucasAlves-2025-1/
├── Backend/                 # Servidor Node.js + Express + Sequelize
│   ├── database/            # Conexão com banco de dados e script SQL
│   │   ├── Banco_de_Livro.sql
│   │   └── database.js
│   ├── model/               # Definição dos modelos do Sequelize (Livro e Categoria)
│   │   ├── modelCategoria.js
│   │   └── modelLivro.js
│   ├── route/               # Rotas e controladores da API
│   │   ├── routesCategoria.js
│   │   └── routesLivro.js
│   ├── index.js             # Ponto de entrada do servidor backend
│   └── package.json         # Dependências do backend
│
└── FrontEnd/                # Aplicação cliente React + Vite
    ├── public/              # Arquivos estáticos públicos
    ├── src/                 # Código-fonte da aplicação React
    │   ├── assets/          # Imagens e recursos estáticos
    │   ├── Components/      # Componentes reutilizáveis (Form, BookCard, Layout)
    │   │   ├── Pages/       # Páginas do fluxo CRUD (Home, CreateBook, ListBook, Details, etc.)
    │   │   └── Layout/      # Componentes estruturais (Navbar, Container)
    │   ├── App.jsx          # Gerenciamento de rotas e estrutura principal
    │   ├── main.jsx         # Ponto de entrada do React
    │   └── index.css        # Estilos globais
    ├── vite.config.js       # Configurações do Vite
    └── package.json         # Dependências do frontend
```

---

## 🚀 Funcionalidades

### **Operações CRUD de Livros (`tbl_livro`):**
* **Cadastrar Livro:** Permite adicionar novos títulos ao banco de dados associando-os a uma das categorias disponíveis.
* **Listagem Geral:** Exibição dinâmica de todos os livros salvos.
* **Visualização de Detalhes:** Acesso a informações detalhadas de um livro específico.
* **Atualização:** Edição dos dados cadastrais do livro (Nome, Autor, Descrição).
* **Exclusão:** Remoção segura de registros de livros.

### **Relacionamento e Integridade:**
* Associação do modelo de **Livro** com o modelo de **Categoria** (chave estrangeira no banco gerenciada automaticamente pelo Sequelize).

---

## ⚙️ Instruções de Configuração e Execução

### **1. Banco de Dados**
1. Certifique-se de possuir o **MySQL Server** instalado e rodando em sua máquina local.
2. Crie o banco de dados executando a query abaixo ou importando o arquivo SQL:
   ```sql
   CREATE DATABASE bd_libri_api;
   ```
3. Utilize o arquivo [Banco_de_Livro.sql](file:///c:/Users/y_ron/Downloads/Lucas_Alves/Eu/pw3-somativa-LucasALves-2025-1/Backend/database/Banco_de_Livro.sql) para inserir as categorias padrão necessárias para o funcionamento inicial.
4. Ajuste as credenciais de acesso ao MySQL (host, porta, usuário e senha) no arquivo de configuração da conexão: [database.js](file:///c:/Users/y_ron/Downloads/Lucas_Alves/Eu/pw3-somativa-LucasALves-2025-1/Backend/database/database.js).

---

### **2. Executando o Back-end (API)**
Abra um terminal na pasta raiz do projeto e siga os passos abaixo:

```bash
# Navegar até a pasta Backend
cd Backend

# Instalar as dependências necessárias
npm install

# Iniciar o servidor de desenvolvimento
npm start
```
O console exibirá que o servidor está rodando em `http://localhost:5000`.

---

### **3. Executando o Front-end (Interface)**
Abra outro terminal (ou nova aba) na raiz do projeto:

```bash
# Navegar até a pasta FrontEnd
cd FrontEnd

# Instalar as dependências necessárias
npm install

# Iniciar o servidor Vite local
npm run dev
```
A interface do usuário estará disponível no endereço local exibido no terminal (geralmente `http://localhost:5173`).

---

## 🎓 Aprendizados Adquiridos

* Prática em estruturar aplicações em camadas separando o front-end e o back-end (arquitetura desacoplada).
* Manipulação prática de banco de dados sem escrita direta de comandos SQL complexos através do Sequelize ORM.
* Entendimento prático de fluxo de estados, componentes controlados e consumo de APIs rest no ecossistema do React.
* Configuração e uso de rotas dinâmicas com parâmetros pela URL.

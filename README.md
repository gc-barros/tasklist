# 📝 Lista de Tarefas | WLS Soluções 

✍ <em>Resolução do desafio para estágio em desenvolvimento front-end da WLS Soluções</em>

## 🗂 Índice

* [Sobre o projeto](#book-sobre-o-projeto)
  * [Principais tecnologias](#computer-principais-tecnologias)
  * [Requisitos](#dart-requisitos)
  * [Extras](#zap-extras)
* [Instalação](#bricks-instalação)
  * [Pré-requisitos](#construction-pré-requisitos)
  * [Front-end](#sparkles-front-end)
    * [Instalando dependências](#construction-instalando-dependências)
    * [Iniciando o front-end](#arrow_forward-iniciando-o-front-end)
* [Autor](#man_technologist-autor)

## :book: Sobre o projeto

#### 🔗 Confira em: https://wls-tasklist.vercel.app/

<table>
  <tr>
    <td>Tela inicial</td>
    <td>Lista de tarefas</td>
  </tr>
  <tr>
    <td>
      <a href="https://wls-tasklist.vercel.app/" target="_blank">
        <img width="500" alt="Tela inicial" src="https://raw.githubusercontent.com/gc-barros/tasklist/main/public/assets/img/tasklist-home.jpg">
      </a>
    </td>
    <td>
      <a href="https://wls-tasklist.vercel.app/" target="_blank">
        <img width="500" alt="Lista de tarefas" src="https://raw.githubusercontent.com/gc-barros/tasklist/main/public/assets/img/tasklist.jpg">
      </a>
    </td>
  </tr>
 </table>

### :computer: Principais tecnologias:

* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org)
* [React.js](https://reactjs.org/docs/getting-started.html)
* [Sass](https://sass-lang.com/)
* [MUI](https://mui.com/pt/)
* [Axios](https://axios-http.com/ptbr/)

Além dessas, foram utilizadas outras bibliotecas para resolver problemas específicos, como adicionar ícones, ilustrações animadas e transição entre páginas: [NProgress](https://ricostacruz.com/nprogress/), [React Icons](https://react-icons.github.io/react-icons/), [Lottie React](https://www.npmjs.com/package/lottie-react) e [Normalize.css](https://necolas.github.io/normalize.css/).

### :dart: Requisitos:

- [x] Design personalizado, utilizando um [projeto no Figma](https://www.figma.com/file/HaV0NHg9rl6V63ejYBfEic/Cineperfil?node-id=0%3A1) como referência de UI.
- [x] Consultar a [API disponibilizada](https://chronos.compraqui.app/swagger/index.html) para buscar as informações.
- [x] Listar tarefas.
- [x] Incluir uma nova tarefa.
- [x] Remover uma tarefa.
- [x] Editar uma tarefa.
- [x] Documentar seu projeto.
- [x] Utilizar boas práticas de programação.
- [x] Utilizar TypeScript.
- [x] Adicionar validação nos campos dos formulários, seguindo as regras
apresentadas no modelo da documentação do back end.

### :zap: Extras:

- [x] Utilizar SSR e SSG (NextJs).
- [x] Página extra: tela inicial da aplicação.
- [x] Exibir os dados inseridos na página inicial diretamente no menu lateral da Lista de Tarefas.
- [x] Procurar por tarefas cadastradas, utilizando o campo de busca. 
- [x] Alterar o status de uma tarefa clicando diretamente sobre ela, através do botão "Em progresso / Concluído". 
- [x] Excluir todas as tarefas cadastradas, através do botão "Limpar tarefas".
- [x] Ilustrações animadas. 
- [x] Deploy da aplicação na Vercel. 
- [x] Responsividade para vários tamanhos de tela.
- [x] Compatibilidade entre navegadores. 
- [ ] Realizar gerência de estado com Redux (utilizar redux toolkit).


## :bricks: Instalação

### :construction: Pré-requisitos

Clone este repositório:
```bash
$ git clone https://github.com/gc-barros/wls-tasklist.git
```

Entre na pasta `wls-tasklist`
```bash
$ cd wls-tasklist
```

🚨 Se você não possui o git na sua máquina, instale-o [aqui](https://git-scm.com/downloads).

## :sparkles: Front-end

### :construction: Instalando dependências

Na pasta `wls-tasklist`, instale as dependências utilizando o seguinte comando:

```bash
$ npm install
# or
$ yarn
```

### :arrow_forward: Iniciando o front-end

Inicie o servidor de desenvolvimento para visualizar a aplicação:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

## :man_technologist: Autor

<table>
  <tr>
    <td align="center">
      <a href="https://www.barrosdev.com.br/" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/87779356?v=4" width="100px;" alt="Foto do Iuri Silva no GitHub"/><br>
        <sub>
          <b>Gabriel Barros</b>
        </sub>
      </a>
    </td>

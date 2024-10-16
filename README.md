# Sistema Verdes Mares: Frontend Coding Test

## Desenvolvedor José Alberto

## Como rodar o projeto

```bash
    #inicialmente utilize um git clone no repositório
    git clone https://github.com/Jose-Alberto-Rodrigues-Neto/job-frontend-developer.git

    #logo após entre no folder onde a aplicaçãoe web se encontra
    cd technology-news

    #após verificar que você se encontra no folder correto, no caso 'technology-news', será necessário instalar as dependências do projeto
    npm install

    #logo após, crie um arquivo .env dentro do folder 'technology'-news e siga o exemplo do .env.example

    #por fim, após verificar que todos os passos estão corretos rode o projeto
    npm run dev

```

## Escolha das stacks

- `Next.js` e `React.js` (possu bastante experência com Next.js, utilizei vizando aumentar minha produtividade e qualidade do desenvolvimeto, pois facilita em muitas coisas (ex: Rotas Dinâmicas, Navegação entre páginas, etc.))

- `TailwindCss` (a escolha do TailwindCss foi meramente para aumentar minha velocidade de desenvolvimento, acredito que não precisar sair do componente enquanto estou desenvolvendo ele agiliza em muito a velocidade do código, além de utilizar simplificações do prórpio CSS)

- `TypeScript` (modals e componentes bem tipados facilitam muito no momento de reutilizar eles, seja para fazer uma requisição ao backend, quanto para criar listas de componentes de forma dinâmica e com uma margem de erro menor, por isso normalmente escolho utilizar TypeScript como linguagem principal de desenvolvimento)

- `Axios` (utilizei axios para lidar com as requisições pois tenho mais experiência com essa estratégia)


## Checklist de Requisitos

### Requisitos Funcinais
- [x] Deve ser possível listar as notícias mais recentes em ordem cronológica;
- [x] Deve ser possível listar as notícias com `thumbnail`, `heading`, `description`, `author`, `image`, `category` e `source`;
- [x] Deve ser possível acessar a notícia pelo `slug`;
- [x] Deve ser possível o usuário buscar notícias desejada pelo `heading`;
- [ ] Deve ser possível o usuário buscar notícia por `author`;
- [x] Deve ser possível o usuário ler uma notícia;
- [x] Deve ser possível salvar um `id` da notíca lida;
      
### Regras de negócio
- [ ] O usuário não pode ler mais que 2 vezes a mesma notícia;
- [ ] O usuário não pode ler uma notícia com o JavaScript desabilitado;
- [ ] O usuário não pode ler uma notícia em modo anônimo;
- [x] O usuário não poderá acessar uma página de categoria (***`observação`***: como criei um página de categoria, decidi criar uma forma do usuário conseguir ver as páginas de categoria ao criar um contexto que torna o usuário em um usuário premium);
- [x] O usuário não poderá acessar uma página de author;
- [x] O usuário deverá ser redirecionado para página principal quando tentar acessar a página de categoria;
      
### Requisitos não-funcionais
- [x] Dynamic Routes: o `slug` da notícida deve ser: `/[category]/[heading]-[id]`
- [x] O `id` da notícia lida precisam estar persistidos em `localStorage`;
- [x] O `id` da notícia persistida em `localStorage`, deve ser retornado quando passado o nome da chave `articles_read`;
- [x] A lista de notícias deve estar paginadas com 20 itens por página; (***`observação`***: utilizei uma paginação fixa de 5 pois o máximo de objetos que a api deixava requisitar era até o número 100 e como na páginação temos 20 artigos por página, o máximo que a api poderia me retornar sempre seria 5, pois após o 5 ela não deixava eu fazer a requisição utilizando a páginação própria da api)
- [x] A lista de notícias deve exibir as últimas notícias em ordem cronológica;
- [ ] O usuário com JavaScript desabilitado no Browser deverá ser direcionado para page-block;
- [ ] O usuário em aba anônimo no Browser deverá ser direcionado para page-block;
- [ ] O usuário com mais de 10 leituras diferentes deverá ser direcionado para page-block;

### Observações

Levando em conta que alguns requisitos não estavam no mockup, como a página de categorias e página de favoritos, tomei a liberdade para desenvolver elas de uma forma que eu achasse satisfatória, além de encontrar formas práticas de acessar esses novos caminhos e que não quebrassem a experiência do usuário

---
## Desafio

![Desktop](desktop.jpg)

## Apresentação
Olá e bem-vindo ao teste prático para vaga de Frontend developer. Neste teste, você terá a oportunidade de **demonstrar** suas habilidades e criatividade na construção de uma aplicação web que proporcionará uma experiência de leitura de notícias.

No Sistema Verdes Mares, cada candidato é um protagonista em potencial, independentemente do seu ponto de partida. Aplicamos o mesmo teste para todas as vagas, desde as mais iniciantes até as mais avançadas. Não se trata apenas de avaliar habilidades técnicas, mas sim de reconhecer o seu comprometimento, paixão e vontade de evoluir.

Queremos que todos os nossos candidatos sintam-se valorizados e encorajados a darem o seu melhor. Se você está se candidatando para uma posição mais iniciante, veja isso como uma oportunidade de mostrar o seu potencial e crescer junto conosco. Não se preocupe com comparações, pois cada jornada é única. Concentre-se em mostrar sua capacitadade e determinação.

Fazemos isso com a esperança de que os iniciantes compreendam o tipo de profissional que buscamos em nosso time. Se você está se candidatando para uma vaga inicial, não se preocupe, apenas dê o seu melhor.

## Objetivo
Desenvolver uma aplicação frontend que exiba as últimas notícias sobre tecnologia em `ordem da publicação`. Além disso, deve incluir um `sistema de busca` para que os usuários encontrar o artigo baseado no title e author do seu interesse. 

## O desafio
Você irá construir a nossa próxima aplicação de listagem e busca de notícias usando a API do NewsAPI. É uma aplicação simples, onde iremos listar as últimas notícias publicadas e buscar por um determinado título ou author para termos acesso a leitura desejada.

Nossa idea da interface é listar as últimas 20 notícias publicadas e ordenadas por data da publicação, onde deverá exibir da mais recente para mais antiga. Além da listagem das notícias, gostaríamos de mostrar algumas informações sobre a elas, como o `thumbnail`, `heading`, `category`, `author` e `publishedAt`. Esses dados você conseguirá extrair da API do NewsAPI. 

Já no mode da leitura do artigo, teremos algumas regras de negócio para controle da visualização do conteúdo, consulte os [requisitos](#requisitos) para mais informações. 

Por fim, deveremos ter um campo de busca no centro da tela, que ao ser acionado com o título do artigo ou author, retornaremos uma listagem com algums notícias relacionadas ao termo da busca. 

### Instruções
1. Crie um fork deste repositório e desenvolva sua solução nele.
2. Siga [esse protótipo](https://www.figma.com/design/r8ci3MkvQguiborxJanNuv/Frontend-Developer?node-id=16-97&t=6dBy6MaTFvVmUiNF-1)
3. Utilize o README do seu repositório para documentar sua abordagem, decisões, tecnologias utilizadas e instruções para execução do projeto.
4. Ao concluir o desafio, envie-nos o link do seu repositório para revisão no email: desenvolvimento@verdesmares.com.br
5. No e-mail, descreva o assunto dessa forma: Frontend developer - {your-name} 

### ⏲️ Prazo
Não definimos um prazo rígido para a conclusão do teste, pois valorizamos mais a qualidade do trabalho do que a velocidade. No entanto, acreditamos que este desafio pode ser concluído em cerca de 48 horas de trabalho. Caso não consiga, não tem problema. Envie o teste com o checklist das tarefas que você conseguiu finalizar. 
Estamos ansiosos para ver sua solução e esperamos que você aproveite este desafio para demonstrar seu talento e paixão pelo desenvolvimento frontend. Boa sorte!

### 💡 Dicas
- Construímos alguns requisitos necessários para o seu desenvolvimento. 
- Você também deverá seguir o nosso protótipo através desse [Figma](https://www.figma.com/design/r8ci3MkvQguiborxJanNuv/Frontend-Developer?node-id=0-1&t=6dBy6MaTFvVmUiNF-1)
- Você pode gerar seu próprio tokens para consumir a NewsAPI, mas se quiser usar a nossa, segue ela: 29eae89ffe6d4d589c9c8f24f7ebab73
- Leia atentamente a documentação antes de implementar, você encontrará mais informações aqui: https://newsapi.org/docs 

## Requisitos
### Requisitos Funcinais
- [x] Deve ser possível listar as notícias mais recentes em ordem cronológica;
- [x] Deve ser possível listar as notícias com `thumbnail`, `heading`, `description`, `author`, `image`, `category` e `source`;
- [x] Deve ser possível acessar a notícia pelo `slug`;
- [x] Deve ser possível o usuário buscar notícias desejada pelo `heading`;
- [ ] Deve ser possível o usuário buscar notícia por `author`;
- [x] Deve ser possível o usuário ler uma notícia;
- [x] Deve ser possível salvar um `id` da notíca lida;
      
### Regras de negócio
- [ ] O usuário não pode ler mais que 2 vezes a mesma notícia;
- [ ] O usuário não pode ler uma notícia com o JavaScript desabilitado;
- [ ] O usuário não pode ler uma notícia em modo anônimo;
- [x] O usuário não poderá acessar uma página de categoria;
- [x] O usuário não poderá acessar uma página de author;
- [x] O usuário deverá ser redirecionado para página principal quando tentar acessar a página de categoria;
      
### Requisitos não-funcionais
- [x] Dynamic Routes: o `slug` da notícida deve ser: `/[category]/[heading]-[id]`
- [x] O `id` da notícia lida precisam estar persistidos em `localStorage`;
- [x] O `id` da notícia persistida em `localStorage`, deve ser retornado quando passado o nome da chave `articles_read`;
- [x] A lista de notícias deve estar paginadas com 20 itens por página;
- [x] A lista de notícias deve exibir as últimas notícias em ordem cronológica;
- [ ] O usuário com JavaScript desabilitado no Browser deverá ser direcionado para page-block;
- [ ] O usuário em aba anônimo no Browser deverá ser direcionado para page-block;
- [ ] O usuário com mais de 10 leituras diferentes deverá ser direcionado para page-block;

# Critérios para avaliação
## O que nós esperamos do seu teste
- Ver na solução a utilização de um framework da sua escolha, mas por aqui já utilizamos o VanillaJS, ReactJS, VueJS e LitJS. 
- Utilize o framework da melhor forma possível (metodologia/estrutura).
- Tambér ver a utilização de `dependency managers`. Tais como: `npm`, `yarn` e `pnpm`
- Utilização de um `bundler JavaScript`. Tais como: webpack, parceljs e vitejs
- HTML escrito da maneira semântica possível (HTML5/5.1)
- Stylesheets: utilize as melhoers práticas com CSS3/CSS4. Exeplique sua decisão por metodologia/estrutura/frameworks. Apenas não use `SASS`. ;)

## O que nós não gostaríamos
- Descobrir que não foi você quem fez seu teste;
- Ver commits grandes, sem muita explicação nas mensagens em seu repositório;
- Encontrar um um commit com as dependências de NPM;

## O que avaliaremos de seu teste
- Histórico de commits do git
- As instruções de como rodar o projeto
- Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código
- Alcance dos objetivos propostos
- Componentização e extensibilidade dos componentes Javascript


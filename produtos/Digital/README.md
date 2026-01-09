Landing Page — E-book Digital

Landing page responsiva desenvolvida para captura de leads e distribuição de conteúdo digital, com foco em usabilidade, organização de código e boas práticas de desenvolvimento front-end.

Este projeto demonstra domínio de estrutura semântica, validação de formulários, comunicação com APIs e preocupação com experiência do usuário.

Visão Geral

A aplicação consiste em uma landing page funcional para download de e-book, contendo formulário validado, envio assíncrono de dados e feedback visual ao usuário.
O código foi escrito de forma clara, modular e fácil de manter, permitindo rápida adaptação para diferentes campanhas ou produtos digitais.

Funcionalidades

Estrutura HTML semântica e bem organizada

Layout totalmente responsivo (mobile, tablet e desktop)

Formulário de captura de leads com validação de dados

Envio assíncrono de informações via Fetch API

Feedback visual de sucesso, erro e estado de carregamento

Máscara automática para telefone no padrão brasileiro

Código limpo, comentado e de fácil leitura

Estrutura do Projeto
landing-page/
├── index.html      # Estrutura HTML da aplicação
├── styles.css      # Estilos, layout e responsividade
├── script.js       # Validação de formulário e comunicação com API
└── README.md       # Documentação do projeto


A separação de responsabilidades foi aplicada para garantir organização, clareza e manutenção simples.

Como Executar o Projeto

Abra o arquivo index.html diretamente no navegador
ou

Hospede os arquivos em qualquer servidor web estático

Nenhuma dependência externa é necessária para execução.

Configuração do Backend

Para funcionamento completo, é necessário configurar o endpoint responsável por receber os dados do formulário.

No arquivo script.js, substitua a URL de exemplo pelo endpoint real:

const response = await fetch('https://api.exemplo.com/ebook/download', {
  // configurações da requisição
});


O backend deve estar preparado para receber requisições no formato JSON.

Personalização
Conteúdo

Textos e títulos podem ser alterados diretamente no index.html

Estilo

As cores e temas visuais são controlados por variáveis CSS no styles.css, facilitando a adaptação para diferentes marcas

Validações

As regras de validação estão centralizadas no script.js e podem ser ajustadas conforme a necessidade do projeto

Dados Enviados

O formulário envia os seguintes dados no formato JSON:

{
  "name": "Nome do usuário",
  "email": "email@exemplo.com",
  "phone": "(00) 00000-0000",
  "timestamp": "2024-01-01T12:00:00.000Z"
}

Responsividade

O layout foi projetado seguindo abordagem mobile-first e testado para os seguintes breakpoints:

Mobile: 320px ou superior

Tablet: 768px ou superior

Desktop: 1024px ou superior

Validação de Formulário

Nome: mínimo de 3 e máximo de 100 caracteres

E-mail: validação de formato

Telefone:

Máscara automática no padrão brasileiro

Aceita números com 10 ou 11 dígitos

A validação ocorre em tempo real, proporcionando melhor experiência ao usuário.

Tecnologias Utilizadas

HTML5 — Estrutura semântica

CSS3 — Layout responsivo e variáveis CSS

JavaScript (ES6+) — Lógica, validação e interatividade

Fetch API — Comunicação assíncrona com backend

Boas Práticas Aplicadas

Separação clara de responsabilidades

Código legível e comentado

Uso de padrões modernos de JavaScript

Preocupação com experiência do usuário

Estrutura preparada para fácil escalabilidade

Observações Técnicas

O backend deve permitir requisições CORS

Recomenda-se o uso de HTTPS em produção

Para uso comercial, considere adicionar política de privacidade e termos de uso em conformidade com a LGPD

Licença

Projeto livre para uso pessoal e comercial.

Considerações Finais

Este projeto foi desenvolvido com foco em qualidade de código, clareza estrutural e aplicação prática, servindo tanto como solução real de landing page quanto como demonstração técnica para fins de portfólio.
Landing Page — Padoca da Nona

Landing page institucional desenvolvida para uma padaria artesanal fictícia, com foco em identidade visual, usabilidade e comunicação clara para pequenos negócios locais.
O projeto foi construído utilizando HTML, CSS e JavaScript puro, sem dependência de frameworks, priorizando controle total do código, organização e boas práticas.

Visão Geral

A Padoca da Nona representa um negócio tradicional que valoriza processo, cuidado e tempo — conceitos refletidos tanto na narrativa quanto na implementação técnica do projeto.

A landing page apresenta informações institucionais, catálogo de produtos e um formulário de contato funcional com validação completa e envio assíncrono de dados.

Funcionalidades Implementadas
    Navegação
    Menu responsivo com toggle para dispositivos móveis
    Fechamento automático do menu ao selecionar um item
    Rolagem suave entre seções (smooth scroll)
    Estrutura semântica utilizando header, nav, section e footer

Conteúdo Institucional
    Seção hero com mensagem clara e CTA direto
    Apresentação da história da padaria
    Destaque para diferenciais do processo artesanal
    Grid de produtos organizado e responsivo

Formulário de Contato
    Validação de campos obrigatórios
    Validação de nome, telefone, e-mail e mensagem
    Máscara de telefone no padrão brasileiro
    Feedback visual de erro em tempo real
    Envio de dados via Fetch API
    Estados de loading, sucesso e erro
    Scroll automático para mensagens de feedback

Experiência do Usuário

    Layout responsivo (mobile-first)
    Hierarquia visual clara
    Animações e transições suaves
    Tipografia alinhada ao conceito artesanal
    Interface acessível e legível em diferentes tamanhos de tela

Tecnologias Utilizadas

    HTML5 — Estrutura semântica e acessível
    CSS3 — Layout responsivo, Grid, variáveis CSS e animações
    JavaScript (ES6+) — Interações, validação de formulário e Fetch API
    Google Fonts — Tipografia personalizada

Estrutura do Projeto
/
├── index.html      # Estrutura principal da página
├── styles.css      # Estilos, layout e responsividade
├── script.js       # Interações, validação e envio do formulário
└── README.md       # Documentação do projeto

Como Executar Localmente

Clone ou baixe este repositório
Abra o arquivo index.html em um navegador moderno
Ou utilize um servidor local:

# Python
python -m http.server 8000

# Node.js
npx http-server

Integração com Backend

O envio do formulário está preparado para integração com uma API real.
Atualmente, utiliza um endpoint de teste (jsonplaceholder.typicode.com) para simular o envio de dados.

Para integrar com um backend próprio, basta substituir a URL no arquivo script.js:

fetch('https://sua-api.com/contato', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
});

Compatibilidade

Chrome e Edge (versões recentes)
    Firefox (versões recentes)
    Safari (desktop e mobile)
    Dispositivos móveis Android e iOS

Objetivo do Projeto
    Este projeto foi desenvolvido com foco em:
    Boas práticas de front-end
    Código limpo e legível
    Separação clara de responsabilidades
    Simulação de um cenário real de site institucional para pequenos negócios
    Construção de portfólio profissional

Licença

Projeto livre para uso pessoal e comercial.

Desenvolvido por Codetria.
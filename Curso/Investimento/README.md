# Landing Page - Curso Online de Investimento

## Descrição

Landing page moderna, responsiva e funcional para curso online de investimentos. Desenvolvida com foco em conversão e experiência do usuário, ideal para captação de leads e inscrições.

O projeto demonstra a criação de uma página única com formulário de inscrição validado e envio de dados via Fetch API.

## ✅ Checklist de Funcionalidades

- [x] Estrutura HTML organizada
- [x] Layout responsivo (mobile e desktop)
- [x] Texto claro (copy simples)
- [x] Botão de CTA funcionando
- [x] Formulário com validação
- [x] Envio via fetch
- [x] Feedback de sucesso/erro
- [x] Código limpo e comentado
- [x] README pronto

## Funcionalidades

- **Página única (landing page)** com seções bem definidas
- **Layout totalmente responsivo** (mobile-first, adaptável para tablet e desktop)
- **Seções de apresentação** com proposta de valor clara
- **Formulário de inscrição** com validação em tempo real
- **Validação de campos** (nome, e-mail, telefone)
- **Formatação automática** de telefone brasileiro
- **Envio de dados via Fetch API**
- **Feedback visual** de sucesso ou erro no envio
- **Menu mobile** com toggle
- **Scroll suave** entre seções
- **CTAs estratégicos** para conversão

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com variáveis CSS e flexbox/grid
- **JavaScript (ES6+)** - Validação, formatação e envio de formulário

## Estrutura do Projeto

```
Curso/Investimento/
├── index.html      # Estrutura HTML principal
├── styles.css      # Estilos e layout responsivo
├── script.js       # Validação e envio do formulário
├── package.json    # Configuração do projeto
└── README.md       # Documentação
```

## Como Executar

### Opção 1: Abrir diretamente no navegador
1. Clone o repositório ou baixe os arquivos
2. Abra o arquivo `index.html` em um navegador moderno

### Opção 2: Usar servidor local (recomendado)

#### Com npm:
```bash
npm install
npm start
```

#### Com Python:
```bash
python -m http.server 8000
```

#### Com PHP:
```bash
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## Configuração do Formulário

O formulário está configurado para enviar dados via Fetch API. Para funcionar em produção, você precisa:

1. **Substituir o endpoint** no arquivo `script.js` (linha ~200):
   ```javascript
   const endpoint = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

2. **Opções de backend**:
   - [Formspree](https://formspree.io/) - Serviço gratuito para formulários
   - [Netlify Forms](https://www.netlify.com/products/forms/) - Se hospedar no Netlify
   - Backend próprio (Node.js, PHP, Python, etc.)

## Validações Implementadas

- **Nome**: Obrigatório, mínimo 3 caracteres
- **E-mail**: Obrigatório, formato válido
- **Telefone**: Obrigatório, formato brasileiro (00) 00000-0000
- **Mensagem**: Opcional

## Responsividade

A landing page é totalmente responsiva com breakpoints em:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## Seções da Landing Page

1. **Hero** - Apresentação principal com CTA
2. **Sobre o Curso** - Proposta de valor e diferenciais
3. **Conteúdo** - O que será aprendido no curso
4. **CTA Section** - Chamada para ação intermediária
5. **Formulário** - Inscrição com validação
6. **Footer** - Informações finais

## Personalização

### Cores
As cores podem ser alteradas nas variáveis CSS no arquivo `styles.css`:
```css
:root {
    --color-primary: #2563eb;
    --color-secondary: #10b981;
    /* ... */
}
```

### Conteúdo
Todo o conteúdo textual está no arquivo `index.html` e pode ser facilmente editado.

## O que este projeto NÃO inclui

- Back-end próprio
- Banco de dados
- Autenticação
- Painel administrativo
- Animações complexas
- SEO avançado (meta tags básicas incluídas)
- Deploy em produção (instruções básicas no README)

## Observações

Este projeto possui escopo fechado e objetivo, sendo indicado como exemplo de landing page profissional para cursos online, MVPs, validação de ideias ou presença online.

## Autoria

Projeto desenvolvido por **Codetria** — Soluções Digitais & Desenvolvimento Web.

Código aberto para fins de estudo e demonstração.

## Licença

MIT License - Sinta-se livre para usar e modificar conforme necessário.

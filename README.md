# Landing Page - CodeTria

Uma landing page moderna, responsiva e totalmente funcional com formulário de contato validado e integração via Fetch API.

## 📋 Características

- ✅ **Estrutura HTML organizada** - Código semântico e bem estruturado
- ✅ **Layout responsivo** - Funciona perfeitamente em mobile e desktop
- ✅ **Texto claro** - Copy simples e direto ao ponto
- ✅ **Botão de CTA funcionando** - Navegação suave para o formulário
- ✅ **Formulário com validação** - Validação em tempo real de todos os campos
- ✅ **Envio via Fetch** - Integração com API usando Fetch API
- ✅ **Feedback de sucesso/erro** - Mensagens visuais claras para o usuário
- ✅ **Código limpo e comentado** - Fácil manutenção e compreensão
- ✅ **README completo** - Documentação detalhada do projeto

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com variáveis CSS e Flexbox/Grid
- **JavaScript (ES6+)** - Validação e integração com API
- **Fetch API** - Comunicação com backend

## 📁 Estrutura de Arquivos

```
Landing_Page/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS responsivos
├── script.js           # Lógica JavaScript e validações
└── README.md          # Documentação do projeto
```

## 🎨 Seções da Landing Page

1. **Header/Navegação** - Menu fixo no topo com links de navegação
2. **Hero Section** - Banner principal com título e CTA
3. **Features Section** - Destaque dos principais benefícios
4. **CTA Section** - Chamada para ação intermediária
5. **Contact Form** - Formulário de contato completo
6. **Footer** - Rodapé com informações de copyright

## 📝 Formulário de Contato

O formulário inclui os seguintes campos:

- **Nome Completo** (obrigatório, 2-50 caracteres)
- **E-mail** (obrigatório, formato válido)
- **Telefone** (obrigatório, formato brasileiro com máscara)
- **Mensagem** (obrigatório, 10-500 caracteres)

### Validações Implementadas

- ✅ Validação em tempo real (on blur)
- ✅ Validação antes do envio
- ✅ Mensagens de erro específicas por campo
- ✅ Máscara automática para telefone brasileiro
- ✅ Feedback visual de campos com erro

## 🔧 Como Usar

### 1. Abrir a Landing Page

Simplesmente abra o arquivo `index.html` em seu navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

### 2. Configurar o Endpoint da API

Por padrão, o formulário está configurado para usar `https://httpbin.org/post` (serviço de teste).

Para usar sua própria API, edite o arquivo `script.js` na linha onde está definido `API_URL`:

```javascript
// Linha ~200 em script.js
const API_URL = 'https://sua-api.com/endpoint';
```

### 3. Personalizar o Design

As cores e estilos podem ser facilmente personalizados através das variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #10b981;
    /* ... outras variáveis */
}
```

## 📱 Responsividade

A landing page é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop** (> 768px) - Layout completo com grid de 3 colunas
- **Tablet** (481px - 768px) - Layout adaptado com grid de 1 coluna
- **Mobile** (< 480px) - Layout otimizado para telas pequenas

## 🎯 Funcionalidades JavaScript

### Validação de Formulário

- Validação individual de cada campo
- Mensagens de erro específicas
- Validação completa antes do envio
- Limpeza automática de erros ao corrigir

### Máscara de Telefone

- Formatação automática: `(00) 00000-0000`
- Suporta telefones com 10 ou 11 dígitos
- Validação de formato brasileiro

### Envio via Fetch

- Envio assíncrono usando Fetch API
- Tratamento de erros
- Feedback visual durante o carregamento
- Mensagens de sucesso/erro

### Navegação Suave

- Scroll suave para seções
- Links de navegação funcionais
- Botões CTA que levam ao formulário

## 🔒 Segurança

- Validação tanto no cliente quanto no servidor (recomendado)
- Sanitização de dados antes do envio
- Proteção contra XSS básica

## 📊 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Opera (últimas versões)
- ✅ Navegadores mobile

## 🛠️ Personalização

### Alterar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Cor principal */
    --secondary-color: #10b981;    /* Cor secundária */
    --text-dark: #1f2937;          /* Cor do texto */
    /* ... */
}
```

### Alterar Textos

Edite diretamente no arquivo `index.html` os textos desejados.

### Adicionar Campos ao Formulário

1. Adicione o campo HTML em `index.html`
2. Adicione a validação em `script.js`
3. Adicione os estilos em `styles.css` se necessário

## 📈 Próximos Passos (Opcional)

- [ ] Integração com backend real
- [ ] Adicionar Google Analytics
- [ ] Implementar testes automatizados
- [ ] Adicionar animações CSS
- [ ] Otimização de imagens
- [ ] SEO avançado
- [ ] Integração com serviços de email

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.

## 👨‍💻 Desenvolvido por

CodeTria - Transformando ideias em realidade

---

**Nota:** Para produção, certifique-se de:
- Configurar um endpoint de API real
- Implementar validação no servidor
- Adicionar proteção CSRF
- Configurar HTTPS
- Testar em diferentes navegadores e dispositivos

// ============================================
// MENU MOBILE TOGGLE
// ============================================

function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) {
        return; // Elementos não encontrados
    }

    // Toggle menu mobile
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Inicializar quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// MÁSCARA DE TELEFONE
// ============================================

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
    }
    
    e.target.value = value;
});

// ============================================
// VALIDAÇÃO DO FORMULÁRIO
// ============================================

const form = document.getElementById('contatoForm');
const nomeInput = document.getElementById('nome');
const telefoneInputField = document.getElementById('telefone');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');

// Função para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para validar telefone (mínimo 10 dígitos)
function validateTelefone(telefone) {
    const digits = telefone.replace(/\D/g, '');
    return digits.length >= 10;
}

// Função para mostrar erro
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
}

// Função para limpar erro
function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
}

// Validação em tempo real
nomeInput.addEventListener('blur', () => {
    const nomeError = document.getElementById('nomeError');
    if (nomeInput.value.trim().length < 3) {
        showError(nomeInput, nomeError, 'Nome deve ter pelo menos 3 caracteres');
    } else {
        clearError(nomeInput, nomeError);
    }
});

telefoneInputField.addEventListener('blur', () => {
    const telefoneError = document.getElementById('telefoneError');
    if (!validateTelefone(telefoneInputField.value)) {
        showError(telefoneInputField, telefoneError, 'Telefone inválido');
    } else {
        clearError(telefoneInputField, telefoneError);
    }
});

emailInput.addEventListener('blur', () => {
    const emailError = document.getElementById('emailError');
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'E-mail inválido');
    } else {
        clearError(emailInput, emailError);
    }
});

mensagemInput.addEventListener('blur', () => {
    const mensagemError = document.getElementById('mensagemError');
    if (mensagemInput.value.trim().length < 10) {
        showError(mensagemInput, mensagemError, 'Mensagem deve ter pelo menos 10 caracteres');
    } else {
        clearError(mensagemInput, mensagemError);
    }
});

// ============================================
// ENVIO DO FORMULÁRIO VIA FETCH
// ============================================

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Limpar mensagens anteriores
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validar todos os campos
    let isValid = true;

    // Validar nome
    const nomeError = document.getElementById('nomeError');
    if (nomeInput.value.trim().length < 3) {
        showError(nomeInput, nomeError, 'Nome deve ter pelo menos 3 caracteres');
        isValid = false;
    } else {
        clearError(nomeInput, nomeError);
    }

    // Validar telefone
    const telefoneError = document.getElementById('telefoneError');
    if (!validateTelefone(telefoneInputField.value)) {
        showError(telefoneInputField, telefoneError, 'Telefone inválido');
        isValid = false;
    } else {
        clearError(telefoneInputField, telefoneError);
    }

    // Validar email
    const emailError = document.getElementById('emailError');
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'E-mail inválido');
        isValid = false;
    } else {
        clearError(emailInput, emailError);
    }

    // Validar mensagem
    const mensagemError = document.getElementById('mensagemError');
    if (mensagemInput.value.trim().length < 10) {
        showError(mensagemInput, mensagemError, 'Mensagem deve ter pelo menos 10 caracteres');
        isValid = false;
    } else {
        clearError(mensagemInput, mensagemError);
    }

    if (!isValid) {
        return;
    }

    // Preparar dados do formulário
    const formData = {
        nome: nomeInput.value.trim(),
        telefone: telefoneInputField.value.trim(),
        email: emailInput.value.trim(),
        mensagem: mensagemInput.value.trim()
    };

    // Mostrar loading
    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    try {
        // Simular envio para API (substitua pela URL real da sua API)
        // Exemplo: const response = await fetch('https://sua-api.com/contato', { ... })
        
        // Por enquanto, simulando uma requisição
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Sucesso
            successMessage.style.display = 'flex';
            form.reset();
            
            // Scroll para a mensagem de sucesso
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            throw new Error('Erro ao enviar formulário');
        }
    } catch (error) {
        // Erro
        console.error('Erro:', error);
        errorMessage.style.display = 'flex';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } finally {
        // Remover loading
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

// ============================================
// TRADUÇÃO / LANGUAGE TOGGLE
// ============================================

const translations = {
    pt: {
        'page-title': 'Padoca da Nona - Pães que Respeitam o Tempo',
        'nav-historia': 'A Padoca',
        'nav-tradicional': 'Sobre',
        'nav-produtos': 'Produtos',
        'nav-contato': 'Contato',
        'hero-title': 'Pães que respeitam o tempo',
        'hero-subtitle': 'Sabores que atravessam gerações',
        'hero-cta': 'Faça seu pedido',
        'sobre-title': 'Nossa História',
        'sobre-p1': 'A Padoca da Nona nasceu da cozinha de casa, das receitas passadas de mão em mão e do costume de acordar cedo para cuidar da massa como quem cuida da família.',
        'sobre-p2': 'Há mais de 10 anos, servimos nossos clientes com pães frescos, doces feitos à mão com receitas próprias saídas direto dos cadernos de receita da Nona. Usando os mesmos ingredientes e técnicas de preparo.',
        'sobre-p3': 'Produzimos todos os dias para que cada cliente leve para casa mais do que pão. Daqui você leva história, aconchego e sabor de verdade.',
        'features-title': 'Nosso Jeito Tradicional de Fazer',
        'feature-1-title': 'Ingredientes Simples e Naturais',
        'feature-1-desc': 'Selecionamos farinhas, ovos e fermentos de qualidade, sem atalhos e sem excessos.',
        'feature-2-title': 'Produção Artesanal com fermentação natural',
        'feature-2-desc': 'Cada pão é moldado à mão, seguindo receitas tradicionais da família.',
        'feature-3-title': 'Fresco Todos os Dias',
        'feature-3-desc': 'Começamos antes do amanhecer para garantir fornadas quentinhas pela manhã.',
        'produtos-title': 'Nossos Produtos',
        'produto-1-title': 'Pães Artesanais',
        'produto-1-desc': 'Pão francês, pão de leite, pão doce, pão caseiro e receitas sazonais feitas diariamente.',
        'produto-2-title': 'Doces Caseiros',
        'produto-2-desc': 'Bolos simples, tortas tradicionais, sobremesas feitas como em casa.',
        'produto-3-title': 'Salgados',
        'produto-3-desc': 'Coxinhas, empadas, pastéis e salgados assados, preparados no dia.',
        'produto-4-title': 'Café',
        'produto-4-desc': 'Café coado na hora e bebidas quentes para acompanhar o pão recém-saído do forno.',
        'produto-1-alt': 'Pães Artesanais',
        'produto-2-alt': 'Doces Caseiros',
        'produto-3-alt': 'Salgados',
        'produto-4-alt': 'Café',
        'contato-title': 'Fale com a Padoca',
        'contato-subtitle': 'Faça seu pedido, consulte disponibilidade ou tire suas dúvidas.<br>Estamos a disposição para atender você.',
        'form-nome-label': 'Nome completo *',
        'form-nome-placeholder': 'Seu nome',
        'form-telefone-label': 'Telefone *',
        'form-telefone-placeholder': '(00) 00000-0000',
        'form-email-label': 'E-mail *',
        'form-email-placeholder': 'seu@email.com',
        'form-mensagem-label': 'Mensagem ou pedido *',
        'form-mensagem-placeholder': 'Conte-nos o que você precisa ou faça seu pedido aqui...',
        'form-submit': 'Enviar mensagem',
        'form-loading': 'Enviando...',
        'success-message': 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        'error-message': 'Ops! Algo deu errado. Tente novamente ou entre em contato pelo telefone.',
        'footer-title': 'Onde Estamos',
        'footer-address': 'Rua Exemplo, 123 — Bairro Centro',
        'footer-phone': 'Telefone: (00) 0000-0000',
        'footer-copyright': '&copy; Codetria. Todos os direitos reservados.',
        'val-nome': 'Nome deve ter pelo menos 3 caracteres',
        'val-telefone': 'Telefone inválido',
        'val-email': 'E-mail inválido',
        'val-mensagem': 'Mensagem deve ter pelo menos 10 caracteres',
    },
    en: {
        'page-title': 'Padoca da Nona - Bread that Respects Time',
        'nav-historia': 'The Bakery',
        'nav-tradicional': 'About',
        'nav-produtos': 'Products',
        'nav-contato': 'Contact',
        'hero-title': 'Bread that respects time',
        'hero-subtitle': 'Flavors that cross generations',
        'hero-cta': 'Place your order',
        'sobre-title': 'Our Story',
        'sobre-p1': 'Padoca da Nona was born in the home kitchen, from recipes passed hand to hand and the habit of waking up early to care for the dough like caring for family.',
        'sobre-p2': 'For over 10 years, we have served our customers with fresh bread, handmade sweets made from recipes straight from Nona\'s recipe notebooks. Using the same ingredients and preparation techniques.',
        'sobre-p3': 'We produce daily so every customer takes home more than bread. From here you take history, comfort, and real flavor.',
        'features-title': 'Our Traditional Way',
        'feature-1-title': 'Simple, Natural Ingredients',
        'feature-1-desc': 'We select quality flours, eggs, and yeasts — no shortcuts, no excess.',
        'feature-2-title': 'Artisanal Production with natural fermentation',
        'feature-2-desc': 'Each bread is hand-shaped, following traditional family recipes.',
        'feature-3-title': 'Fresh Every Day',
        'feature-3-desc': 'We start before dawn to ensure warm batches every morning.',
        'produtos-title': 'Our Products',
        'produto-1-title': 'Artisanal Breads',
        'produto-1-desc': 'French bread, milk bread, sweet bread, homemade bread, and seasonal recipes made daily.',
        'produto-2-title': 'Homemade Sweets',
        'produto-2-desc': 'Simple cakes, traditional pies, desserts made just like home.',
        'produto-3-title': 'Savory Snacks',
        'produto-3-desc': 'Chicken croquettes, patties, pastries, and baked snacks prepared daily.',
        'produto-4-title': 'Coffee',
        'produto-4-desc': 'Freshly brewed coffee and hot beverages to accompany fresh-from-the-oven bread.',
        'produto-1-alt': 'Artisanal Breads',
        'produto-2-alt': 'Homemade Sweets',
        'produto-3-alt': 'Savory Snacks',
        'produto-4-alt': 'Coffee',
        'contato-title': 'Talk to Padoca',
        'contato-subtitle': 'Place your order, check availability, or ask your questions.<br>We are here to serve you.',
        'form-nome-label': 'Full name *',
        'form-nome-placeholder': 'Your name',
        'form-telefone-label': 'Phone *',
        'form-telefone-placeholder': '(00) 00000-0000',
        'form-email-label': 'Email *',
        'form-email-placeholder': 'your@email.com',
        'form-mensagem-label': 'Message or order *',
        'form-mensagem-placeholder': 'Tell us what you need or place your order here...',
        'form-submit': 'Send message',
        'form-loading': 'Sending...',
        'success-message': 'Message sent successfully! We will get back to you soon.',
        'error-message': 'Oops! Something went wrong. Please try again or contact us by phone.',
        'footer-title': 'Where We Are',
        'footer-address': 'Example Street, 123 — Downtown',
        'footer-phone': 'Phone: (00) 0000-0000',
        'footer-copyright': '&copy; Codetria. All rights reserved.',
        'val-nome': 'Name must have at least 3 characters',
        'val-telefone': 'Invalid phone number',
        'val-email': 'Invalid email',
        'val-mensagem': 'Message must have at least 10 characters',
    }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (translations[lang][key]) {
            el.alt = translations[lang][key];
        }
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = lang === 'pt'
            ? 'Padaria artesanal com receitas tradicionais. Pães frescos, doces caseiros e sabores que atravessam gerações.'
            : 'Artisanal bakery with traditional recipes. Fresh bread, homemade sweets, and flavors that cross generations.';
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    updateValidationMessages(lang);
}

function initLangToggle() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    langToggle.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (!btn) return;

        const lang = btn.getAttribute('data-lang');
        if (lang === currentLang) return;

        changeLanguage(lang);
    });
}

function updateValidationMessages(lang) {
    const errorMap = {
        'nomeError': 'val-nome',
        'telefoneError': 'val-telefone',
        'emailError': 'val-email',
        'mensagemError': 'val-mensagem'
    };

    Object.keys(errorMap).forEach(id => {
        const el = document.getElementById(id);
        if (el && el.textContent && el.textContent.trim() !== '') {
            el.textContent = translations[lang][errorMap[id]] || el.textContent;
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        changeLanguage(currentLang);
        initLangToggle();
    });
} else {
    changeLanguage(currentLang);
    initLangToggle();
}

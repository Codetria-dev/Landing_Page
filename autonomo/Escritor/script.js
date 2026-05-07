/**
 * ============================================
 * LANDING PAGE - SCRIPT PRINCIPAL
 * ============================================
 *
 * Funcionalidades:
 * - Sistema bilíngue (EN/PT)
 * - Validação de formulário em tempo real
 * - Máscara de telefone
 * - Envio de formulário via fetch API
 * - Feedback visual de sucesso/erro
 * - Scroll suave para seções
 */

// ============================================
// TRADUÇÕES
// ============================================

const translations = {
    en: {
        meta: {
            title: "Fiódor Dostoiévski - Freelance Writer",
            description: "Professional writing for those who need to communicate with clarity, purpose, and authenticity"
        },
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            contact: "Contact"
        },
        hero: {
            title: "Turn ideas into words that connect.",
            subtitle: "Professional writing for those who need to communicate with clarity, purpose, and authenticity.",
            cta: "Let's talk"
        },
        about: {
            title: "Writing tailored for real projects.",
            description: "I work as a freelance writer developing clear, objective texts aligned with each project's identity. From institutional content to creative writing, my focus is turning ideas into messages that resonate with readers."
        },
        services: {
            title: "How I can help",
            content: {
                title: "Content Writing",
                desc: "Institutional texts, articles, presentations, and digital materials."
            },
            revision: {
                title: "Review & Editing",
                desc: "Clarity, tone, cohesion, and grammar adjustments."
            },
            strategic: {
                title: "Strategic Writing",
                desc: "Content designed to inform, engage, or guide decisions."
            }
        },
        diff: {
            title: "Why work with me",
            clarity: "Clear and objective communication",
            audience: "Writing adapted to your audience",
            simple: "Simple and organized process",
            deadlines: "On-time delivery",
            details: "Attention to detail and context"
        },
        cta: {
            text: "Every project has a voice. Let's find yours.",
            button: "Request contact"
        },
        contact: {
            title: "Let's talk about your project",
            description: "Tell us about your idea and I'll get in touch to understand how I can help."
        },
        form: {
            name: {
                label: "Full Name *",
                placeholder: "Your full name"
            },
            email: {
                label: "Email *",
                placeholder: "your@email.com"
            },
            phone: {
                label: "Phone *",
                placeholder: "(00) 00000-0000"
            },
            message: {
                label: "Message *",
                placeholder: "Tell us about your project..."
            },
            submit: "Send message"
        },
        validation: {
            name: "Name must be between 2 and 50 characters and contain only letters",
            email: "Please enter a valid email",
            phone: "Phone must have 10 or 11 digits",
            message: "Message must be between 10 and 500 characters",
            nameRequired: "Full name is required (2-50 characters)",
            emailRequired: "Valid email is required",
            phoneRequired: "Valid phone is required (10 or 11 digits)",
            messageRequired: "Message is required (10-500 characters)",
            formError: "Please correct the errors in the form before submitting.",
            success: "Message sent successfully! We'll be in touch soon.",
            error: "Error sending message. Please try again or contact us directly."
        },
        footer: {
            line1: "Codetria — Digital Solutions & Web Development",
            line2: "Landing page project for independent professionals."
        }
    },
    pt: {
        meta: {
            title: "Fiódor Dostoiévski - Escritor Autônomo",
            description: "Escrita profissional para quem precisa comunicar com clareza, propósito e autenticidade"
        },
        nav: {
            home: "Início",
            about: "Sobre",
            services: "Serviços",
            contact: "Contato"
        },
        hero: {
            title: "Transforme ideias em palavras que conectam.",
            subtitle: "Escrita profissional para quem precisa comunicar com clareza, propósito e autenticidade.",
            cta: "Vamos conversar"
        },
        about: {
            title: "Escrita sob medida para projetos reais.",
            description: "Atuo como escritor autônomo desenvolvendo textos claros, objetivos e alinhados à identidade de cada projeto. Do conteúdo institucional à escrita criativa, meu foco é transformar ideias em mensagens que fazem sentido para quem lê."
        },
        services: {
            title: "Como posso ajudar",
            content: {
                title: "Escrita de conteúdos",
                desc: "Textos institucionais, artigos, apresentações e materiais digitais."
            },
            revision: {
                title: "Revisão e edição",
                desc: "Ajuste de clareza, tom, coesão e correção gramatical."
            },
            strategic: {
                title: "Escrita estratégica",
                desc: "Conteúdos pensados para informar, engajar ou orientar decisões."
            }
        },
        diff: {
            title: "Por que trabalhar comigo",
            clarity: "Comunicação clara e objetiva",
            audience: "Escrita adaptada ao seu público",
            simple: "Processo simples e organizado",
            deadlines: "Entregas dentro do prazo",
            details: "Atenção aos detalhes e contexto"
        },
        cta: {
            text: "Cada projeto tem uma voz. Vamos encontrar a sua.",
            button: "Solicitar contato"
        },
        contact: {
            title: "Vamos falar sobre seu projeto",
            description: "Conte um pouco sobre sua ideia e entrarei em contato para entender como posso ajudar."
        },
        form: {
            name: {
                label: "Nome Completo *",
                placeholder: "Seu nome completo"
            },
            email: {
                label: "E-mail *",
                placeholder: "seu@email.com"
            },
            phone: {
                label: "Telefone *",
                placeholder: "(00) 00000-0000"
            },
            message: {
                label: "Mensagem *",
                placeholder: "Conte-nos sobre seu projeto..."
            },
            submit: "Enviar mensagem"
        },
        validation: {
            name: "Nome deve ter entre 2 e 50 caracteres e conter apenas letras",
            email: "Por favor, insira um email válido",
            phone: "Telefone deve ter 10 ou 11 dígitos",
            message: "Mensagem deve ter entre 10 e 500 caracteres",
            nameRequired: "Nome completo é obrigatório (2-50 caracteres)",
            emailRequired: "Email válido é obrigatório",
            phoneRequired: "Telefone válido é obrigatório (10 ou 11 dígitos)",
            messageRequired: "Mensagem é obrigatória (10-500 caracteres)",
            formError: "Por favor, corrija os erros no formulário antes de enviar.",
            success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            error: "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente."
        },
        footer: {
            line1: "Codetria — Soluções Digitais & Desenvolvimento Web",
            line2: "Projeto de landing page para profissional autônomo."
        }
    }
};

// ============================================
// ESTADO DO IDIOMA
// ============================================

let currentLang = 'en';

/**
 * Retorna o texto traduzido para a chave informada
 * @param {string} key - Chave no formato "section.key"
 * @returns {string} - Texto traduzido
 */
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }
    return value;
}

/**
 * Atualiza todos os elementos com data-i18n no DOM
 */
function updateLanguage() {
    // Atualiza elementos de texto
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = t(key);
        if (translated === key) return;
        if (el.tagName === 'META') {
            el.setAttribute('content', translated);
        } else {
            el.textContent = translated;
        }
    });

    // Atualiza placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translated = t(key);
        if (translated === key) return;
        el.placeholder = translated;
    });

    // Atualiza o lang da tag html
    document.documentElement.lang = currentLang;
}

// ============================================
// INICIALIZAÇÃO (registrada antes de qualquer
// código que possa falhar)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o idioma padrão
    updateLanguage();
    // Limpa erros do formulário
    clearAllErrors();

    // Toggle de idioma
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'pt' : 'en';
            langToggle.textContent = currentLang.toUpperCase();
            updateLanguage();
        });
    }

    // Adiciona smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Adiciona smooth scroll aos botões CTA
    document.querySelectorAll('.btn--cta').forEach(btn => {
        btn.addEventListener('click', () => {
            const contactSection = document.getElementById('contato');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ============================================
// CONSTANTES E ELEMENTOS DOM (protegido)
// ============================================

let form, formFeedback, submitBtn, submitText, submitLoader;
let nameInput, emailInput, phoneInput, messageInput;
let nameError, emailError, phoneError, messageError;

try {
    form = document.getElementById('contactForm');
    formFeedback = document.getElementById('formFeedback');
    submitBtn = form?.querySelector('button[type="submit"]');
    submitText = document.getElementById('submitText');
    submitLoader = document.getElementById('submitLoader');

    // Campos do formulário
    nameInput = document.getElementById('name');
    emailInput = document.getElementById('email');
    phoneInput = document.getElementById('phone');
    messageInput = document.getElementById('message');

    // Elementos de erro
    nameError = document.getElementById('nameError');
    emailError = document.getElementById('emailError');
    phoneError = document.getElementById('phoneError');
    messageError = document.getElementById('messageError');
} catch (e) {
    console.warn('Form elements not found:', e);
}

// ============================================
// FUNÇÕES DE VALIDAÇÃO
// ============================================

/**
 * Valida o nome completo
 * @param {string} name - Nome a ser validado
 * @returns {boolean} - true se válido
 */
function validateName(name) {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;
    return nameRegex.test(name.trim());
}

/**
 * Valida o email
 * @param {string} email - Email a ser validado
 * @returns {boolean} - true se válido
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Valida o telefone (formato brasileiro)
 * @param {string} phone - Telefone a ser validado
 * @returns {boolean} - true se válido
 */
function validatePhone(phone) {
    // Remove caracteres não numéricos
    const cleanPhone = phone.replace(/\D/g, '');
    // Aceita telefone com 10 ou 11 dígitos (com ou sem DDD)
    return cleanPhone.length >= 10 && cleanPhone.length <= 11;
}

/**
 * Valida a mensagem
 * @param {string} message - Mensagem a ser validada
 * @returns {boolean} - true se válido
 */
function validateMessage(message) {
    return message.trim().length >= 10 && message.trim().length <= 500;
}

// ============================================
// FUNÇÕES DE EXIBIÇÃO DE ERRO
// ============================================

/**
 * Exibe erro em um campo específico
 * @param {HTMLElement} errorElement - Elemento onde exibir o erro
 * @param {HTMLElement} inputElement - Campo de input relacionado
 * @param {string} message - Mensagem de erro
 */
function showError(errorElement, inputElement, message) {
    errorElement.textContent = message;
    inputElement.classList.add('error');
}

/**
 * Remove erro de um campo específico
 * @param {HTMLElement} errorElement - Elemento de erro
 * @param {HTMLElement} inputElement - Campo de input relacionado
 */
function clearError(errorElement, inputElement) {
    errorElement.textContent = '';
    inputElement.classList.remove('error');
}

/**
 * Limpa todos os erros do formulário
 */
function clearAllErrors() {
    if (!nameError) return;
    clearError(nameError, nameInput);
    clearError(emailError, emailInput);
    clearError(phoneError, phoneInput);
    clearError(messageError, messageInput);
    hideFeedback();
}

/**
 * Exibe feedback de sucesso ou erro
 * @param {string} key - Chave de tradução para a mensagem
 * @param {string} type - Tipo: 'success' ou 'error'
 */
function showFeedback(key, type) {
    if (!formFeedback) return;
    const message = t(key);
    formFeedback.textContent = message;
    formFeedback.className = `form__feedback ${type}`;
    formFeedback.style.display = 'block';

    // Scroll para o feedback
    formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Oculta o feedback
 */
function hideFeedback() {
    if (!formFeedback) return;
    formFeedback.style.display = 'none';
    formFeedback.className = 'form__feedback';
}

// ============================================
// MÁSCARA DE TELEFONE
// ============================================

/**
 * Aplica máscara de telefone brasileiro
 * @param {string} value - Valor a ser formatado
 * @returns {string} - Telefone formatado
 */
function formatPhone(value) {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');

    // Aplica máscara conforme o tamanho
    if (numbers.length <= 2) {
        return numbers ? `(${numbers}` : '';
    } else if (numbers.length <= 6) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
}

// Event listener para máscara de telefone
phoneInput?.addEventListener('input', (e) => {
    e.target.value = formatPhone(e.target.value);
    clearError(phoneError, phoneInput);
});

// ============================================
// VALIDAÇÃO EM TEMPO REAL
// ============================================

// Validação do nome
nameInput?.addEventListener('blur', () => {
    const value = nameInput.value.trim();
    if (value && !validateName(value)) {
        showError(nameError, nameInput, t('validation.name'));
    } else {
        clearError(nameError, nameInput);
    }
});

nameInput?.addEventListener('input', () => {
    if (nameInput.value.trim()) {
        clearError(nameError, nameInput);
    }
});

// Validação do email
emailInput?.addEventListener('blur', () => {
    const value = emailInput.value.trim();
    if (value && !validateEmail(value)) {
        showError(emailError, emailInput, t('validation.email'));
    } else {
        clearError(emailError, emailInput);
    }
});

emailInput?.addEventListener('input', () => {
    if (emailInput.value.trim()) {
        clearError(emailError, emailInput);
    }
});

// Validação do telefone
phoneInput?.addEventListener('blur', () => {
    const value = phoneInput.value;
    if (value && !validatePhone(value)) {
        showError(phoneError, phoneInput, t('validation.phone'));
    } else {
        clearError(phoneError, phoneInput);
    }
});

// Validação da mensagem
messageInput?.addEventListener('blur', () => {
    const value = messageInput.value.trim();
    if (value && !validateMessage(value)) {
        showError(messageError, messageInput, t('validation.message'));
    } else {
        clearError(messageError, messageInput);
    }
});

messageInput?.addEventListener('input', () => {
    if (messageInput.value.trim()) {
        clearError(messageError, messageInput);
    }
});

// ============================================
// VALIDAÇÃO COMPLETA DO FORMULÁRIO
// ============================================

/**
 * Valida todos os campos do formulário
 * @returns {boolean} - true se todos os campos são válidos
 */
function validateForm() {
    let isValid = true;
    if (!nameInput) return false;

    // Valida nome
    if (!nameInput.value.trim() || !validateName(nameInput.value)) {
        showError(nameError, nameInput, t('validation.nameRequired'));
        isValid = false;
    }

    // Valida email
    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
        showError(emailError, emailInput, t('validation.emailRequired'));
        isValid = false;
    }

    // Valida telefone
    if (!phoneInput.value || !validatePhone(phoneInput.value)) {
        showError(phoneError, phoneInput, t('validation.phoneRequired'));
        isValid = false;
    }

    // Valida mensagem
    if (!messageInput.value.trim() || !validateMessage(messageInput.value)) {
        showError(messageError, messageInput, t('validation.messageRequired'));
        isValid = false;
    }

    return isValid;
}

// ============================================
// ENVIO DO FORMULÁRIO
// ============================================

/**
 * Prepara os dados do formulário para envio
 * @returns {Object} - Objeto com os dados formatados
 */
function getFormData() {
    return {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value,
        message: messageInput.value.trim(),
        timestamp: new Date().toISOString()
    };
}

/**
 * Ativa o estado de carregamento do botão
 */
function setLoadingState(isLoading) {
    if (!submitBtn) return;
    if (isLoading) {
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        submitLoader.style.display = 'inline-block';
    } else {
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoader.style.display = 'none';
    }
}

/**
 * Envia o formulário via fetch API
 * @param {Object} formData - Dados do formulário
 */
async function submitForm(formData) {
    // URL do endpoint - substitua pela sua URL real
    // Para testes, você pode usar um serviço como https://httpbin.org/post
    const API_URL = 'https://httpbin.org/post';

    try {
        setLoadingState(true);
        clearAllErrors();

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const result = await response.json();

        // Simula sucesso (httpbin retorna os dados enviados)
        showFeedback('validation.success', 'success');
        form?.reset();

        // Opcional: redirecionar após sucesso
        // setTimeout(() => {
        //     window.location.href = '/obrigado.html';
        // }, 2000);

    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        showFeedback('validation.error', 'error');
    } finally {
        setLoadingState(false);
    }
}

// Event listener do formulário
form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Valida o formulário antes de enviar
    if (!validateForm()) {
        showFeedback('validation.formError', 'error');
        return;
    }

    // Prepara e envia os dados
    const formData = getFormData();
    await submitForm(formData);
});

// ============================================
// FUNÇÕES DE NAVEGAÇÃO
// ============================================

/**
 * Scroll suave para o formulário de contato
 */
function scrollToForm() {
    const contactSection = document.getElementById('contato');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

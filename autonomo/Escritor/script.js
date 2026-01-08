/**
 * ============================================
 * LANDING PAGE - SCRIPT PRINCIPAL
 * ============================================
 * 
 * Funcionalidades:
 * - Validação de formulário em tempo real
 * - Máscara de telefone
 * - Envio de formulário via fetch API
 * - Feedback visual de sucesso/erro
 * - Scroll suave para seções
 */

// ============================================
// CONSTANTES E ELEMENTOS DOM
// ============================================

const form = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const submitBtn = form.querySelector('button[type="submit"]');
const submitText = document.getElementById('submitText');
const submitLoader = document.getElementById('submitLoader');

// Campos do formulário
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

// Elementos de erro
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const messageError = document.getElementById('messageError');

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
    clearError(nameError, nameInput);
    clearError(emailError, emailInput);
    clearError(phoneError, phoneInput);
    clearError(messageError, messageInput);
    hideFeedback();
}

/**
 * Exibe feedback de sucesso ou erro
 * @param {string} message - Mensagem a exibir
 * @param {string} type - Tipo: 'success' ou 'error'
 */
function showFeedback(message, type) {
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
phoneInput.addEventListener('input', (e) => {
    e.target.value = formatPhone(e.target.value);
    clearError(phoneError, phoneInput);
});

// ============================================
// VALIDAÇÃO EM TEMPO REAL
// ============================================

// Validação do nome
nameInput.addEventListener('blur', () => {
    const value = nameInput.value.trim();
    if (value && !validateName(value)) {
        showError(nameError, nameInput, 'Nome deve ter entre 2 e 50 caracteres e conter apenas letras');
    } else {
        clearError(nameError, nameInput);
    }
});

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim()) {
        clearError(nameError, nameInput);
    }
});

// Validação do email
emailInput.addEventListener('blur', () => {
    const value = emailInput.value.trim();
    if (value && !validateEmail(value)) {
        showError(emailError, emailInput, 'Por favor, insira um email válido');
    } else {
        clearError(emailError, emailInput);
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim()) {
        clearError(emailError, emailInput);
    }
});

// Validação do telefone
phoneInput.addEventListener('blur', () => {
    const value = phoneInput.value;
    if (value && !validatePhone(value)) {
        showError(phoneError, phoneInput, 'Telefone deve ter 10 ou 11 dígitos');
    } else {
        clearError(phoneError, phoneInput);
    }
});

// Validação da mensagem
messageInput.addEventListener('blur', () => {
    const value = messageInput.value.trim();
    if (value && !validateMessage(value)) {
        showError(messageError, messageInput, 'Mensagem deve ter entre 10 e 500 caracteres');
    } else {
        clearError(messageError, messageInput);
    }
});

messageInput.addEventListener('input', () => {
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
    
    // Valida nome
    if (!nameInput.value.trim() || !validateName(nameInput.value)) {
        showError(nameError, nameInput, 'Nome completo é obrigatório (2-50 caracteres)');
        isValid = false;
    }
    
    // Valida email
    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
        showError(emailError, emailInput, 'Email válido é obrigatório');
        isValid = false;
    }
    
    // Valida telefone
    if (!phoneInput.value || !validatePhone(phoneInput.value)) {
        showError(phoneError, phoneInput, 'Telefone válido é obrigatório (10 ou 11 dígitos)');
        isValid = false;
    }
    
    // Valida mensagem
    if (!messageInput.value.trim() || !validateMessage(messageInput.value)) {
        showError(messageError, messageInput, 'Mensagem é obrigatória (10-500 caracteres)');
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
        showFeedback('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
        
        // Opcional: redirecionar após sucesso
        // setTimeout(() => {
        //     window.location.href = '/obrigado.html';
        // }, 2000);
        
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        showFeedback(
            'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente.',
            'error'
        );
    } finally {
        setLoadingState(false);
    }
}

// Event listener do formulário
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Valida o formulário antes de enviar
    if (!validateForm()) {
        showFeedback('Por favor, corrija os erros no formulário antes de enviar.', 'error');
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

// ============================================
// INICIALIZAÇÃO
// ============================================

// Limpa erros ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    clearAllErrors();
    
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
});

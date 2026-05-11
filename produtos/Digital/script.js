/**
 * ============================================
 * LANDING PAGE - SCRIPT PRINCIPAL
 * ============================================
 * Funcionalidades:
 * - Navegação sticky com shadow on scroll
 * - Menu mobile toggle
 * - FAQ accordion
 * - Validação de formulário em tempo real
 * - Envio via fetch API
 * - Máscara de telefone
 */

// ============================================
// STICKY NAV SCROLL EFFECT
// ============================================
const nav = document.querySelector('.sticky-nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function handleNavScroll() {
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// ============================================
// MOBILE NAV TOGGLE
// ============================================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ============================================
// FAQ ACCORDION
// ============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Fecha todos
        faqItems.forEach(other => {
            other.classList.remove('active');
            other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Abre o clicado se estava fechado
        if (!isActive) {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// ============================================
// FORMULÁRIO
// ============================================

// Seletores DOM
const form = document.getElementById('downloadForm');
const submitButton = document.getElementById('submitButton');
const buttonLoader = document.getElementById('buttonLoader');
const buttonText = submitButton.querySelector('.button-text');
const formMessage = document.getElementById('formMessage');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');

/**
 * Validação de nome
 */
function validateName(name) {
    if (!name || name.trim().length < 3) {
        return 'Nome deve ter pelo menos 3 caracteres';
    }
    if (name.trim().length > 100) {
        return 'Nome muito longo (máximo 100 caracteres)';
    }
    return null;
}

/**
 * Validação de e-mail
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return 'E-mail inválido';
    }
    return null;
}

/**
 * Validação de telefone (opcional)
 */
function validatePhone(phone) {
    if (!phone || phone.trim() === '') {
        return null;
    }
    const phoneNumbers = phone.replace(/\D/g, '');
    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
        return 'Telefone inválido (deve ter 10 ou 11 dígitos)';
    }
    return null;
}

/**
 * Máscara de telefone brasileiro
 */
function maskPhone(value) {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) {
        return numbers ? `(${numbers}` : '';
    } else if (numbers.length <= 7) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
}

/**
 * Exibe erro no campo
 */
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

/**
 * Remove erro do campo
 */
function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

/**
 * Validação em tempo real dos campos
 */
nameInput.addEventListener('blur', () => {
    const error = validateName(nameInput.value);
    if (error) {
        showError(nameInput, nameError, error);
    } else {
        clearError(nameInput, nameError);
    }
});

emailInput.addEventListener('blur', () => {
    const error = validateEmail(emailInput.value);
    if (error) {
        showError(emailInput, emailError, error);
    } else {
        clearError(emailInput, emailError);
    }
});

phoneInput.addEventListener('input', (e) => {
    e.target.value = maskPhone(e.target.value);
    const error = validatePhone(e.target.value);
    if (error) {
        showError(phoneInput, phoneError, error);
    } else {
        clearError(phoneInput, phoneError);
    }
});

phoneInput.addEventListener('blur', () => {
    const error = validatePhone(phoneInput.value);
    if (error) {
        showError(phoneInput, phoneError, error);
    } else {
        clearError(phoneInput, phoneError);
    }
});

/**
 * Limpa mensagens de erro ao começar a digitar
 */
nameInput.addEventListener('input', () => {
    if (nameInput.classList.contains('error')) {
        clearError(nameInput, nameError);
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('error')) {
        clearError(emailInput, emailError);
    }
});

/**
 * Exibe mensagem de feedback
 */
function showMessage(message, type = 'success') {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type} show`;

    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (type === 'success') {
        setTimeout(() => {
            formMessage.classList.remove('show');
        }, 5000);
    }
}

/**
 * Limpa mensagem de feedback
 */
function clearMessage() {
    formMessage.classList.remove('show');
    formMessage.textContent = '';
}

/**
 * Validação completa do formulário
 */
function validateForm() {
    let isValid = true;

    const nameErrorMsg = validateName(nameInput.value);
    if (nameErrorMsg) {
        showError(nameInput, nameError, nameErrorMsg);
        isValid = false;
    }

    const emailErrorMsg = validateEmail(emailInput.value);
    if (emailErrorMsg) {
        showError(emailInput, emailError, emailErrorMsg);
        isValid = false;
    }

    const phoneErrorMsg = validatePhone(phoneInput.value);
    if (phoneErrorMsg) {
        showError(phoneInput, phoneError, phoneErrorMsg);
        isValid = false;
    }

    return isValid;
}

/**
 * Estado de loading do botão
 */
function setLoading(loading) {
    if (loading) {
        submitButton.disabled = true;
        buttonLoader.style.display = 'inline-block';
        buttonText.textContent = 'Enviando...';
    } else {
        submitButton.disabled = false;
        buttonLoader.style.display = 'none';
        buttonText.textContent = 'Receber o e-book';
    }
}

/**
 * Envio do formulário via fetch
 */
async function submitForm(formData) {
    try {
        // IMPORTANTE: Substitua pela URL real do endpoint
        const response = await fetch('https://api.exemplo.com/ebook/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        return {
            success: false,
            error: error.message || 'Erro ao processar solicitação. Tente novamente.'
        };
    }
}

/**
 * Handler do submit do formulário
 */
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    clearMessage();

    if (!validateForm()) {
        showMessage('Por favor, corrija os erros no formulário.', 'error');
        return;
    }

    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim() || null,
        timestamp: new Date().toISOString(),
    };

    setLoading(true);

    const result = await submitForm(formData);

    setLoading(false);

    if (result.success) {
        showMessage('E-book enviado com sucesso! Verifique seu e-mail.', 'success');
        setTimeout(() => {
            form.reset();
            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(phoneInput, phoneError);
        }, 2000);
    } else {
        showMessage(
            result.error || 'Erro ao enviar formulário. Por favor, tente novamente.',
            'error'
        );
    }
});

/**
 * Inicialização
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page carregada com sucesso!');
    nameInput.focus();
});

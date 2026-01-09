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

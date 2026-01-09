/**
 * ============================================
 * LANDING PAGE - CURSO DE INVESTIMENTO
 * Script principal com validação e envio de formulário
 * ============================================
 */

// ============================================
// MENU MOBILE TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav__menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
});

// ============================================
// SCROLL SUAVE PARA FORMULÁRIO
// ============================================
function scrollToForm() {
    const formSection = document.getElementById('inscricao');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Foca no primeiro campo após scroll
        setTimeout(() => {
            const firstInput = document.getElementById('name');
            if (firstInput) {
                firstInput.focus();
            }
        }, 500);
    }
}

// ============================================
// VALIDAÇÃO DE FORMULÁRIO
// ============================================

/**
 * Valida formato de e-mail
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Valida formato de telefone brasileiro
 * Aceita: (00) 00000-0000 ou (00) 0000-0000
 */
function validatePhone(phone) {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return phoneRegex.test(phone);
}

/**
 * Formata telefone enquanto o usuário digita
 */
function formatPhone(input) {
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    
    if (value.length > 0) {
        if (value.length <= 2) {
            value = `(${value}`;
        } else if (value.length <= 7) {
            value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        } else if (value.length <= 10) {
            value = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6)}`;
        } else {
            value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
        }
    }
    
    input.value = value;
}

/**
 * Valida um campo individual
 */
function validateField(fieldId, value, fieldType) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    const inputElement = document.getElementById(fieldId);
    let isValid = true;
    let errorMessage = '';

    // Remove classes de erro anteriores
    if (inputElement) {
        inputElement.classList.remove('error');
    }
    if (errorElement) {
        errorElement.textContent = '';
    }

    // Validação por tipo de campo
    switch (fieldType) {
        case 'name':
            if (!value.trim()) {
                isValid = false;
                errorMessage = 'Nome é obrigatório';
            } else if (value.trim().length < 3) {
                isValid = false;
                errorMessage = 'Nome deve ter pelo menos 3 caracteres';
            }
            break;

        case 'email':
            if (!value.trim()) {
                isValid = false;
                errorMessage = 'E-mail é obrigatório';
            } else if (!validateEmail(value.trim())) {
                isValid = false;
                errorMessage = 'E-mail inválido';
            }
            break;

        case 'phone':
            if (!value.trim()) {
                isValid = false;
                errorMessage = 'Telefone é obrigatório';
            } else if (!validatePhone(value.trim())) {
                isValid = false;
                errorMessage = 'Telefone inválido. Use o formato: (00) 00000-0000';
            }
            break;

        case 'message':
            // Mensagem é opcional, então não precisa validar
            break;
    }

    // Exibe erro se houver
    if (!isValid && errorElement && inputElement) {
        inputElement.classList.add('error');
        errorElement.textContent = errorMessage;
    }

    return isValid;
}

/**
 * Valida todo o formulário
 */
function validateForm(formData) {
    let isValid = true;

    // Valida cada campo
    isValid = validateField('name', formData.get('name'), 'name') && isValid;
    isValid = validateField('email', formData.get('email'), 'email') && isValid;
    isValid = validateField('phone', formData.get('phone'), 'phone') && isValid;

    return isValid;
}

// ============================================
// EVENT LISTENERS DE VALIDAÇÃO EM TEMPO REAL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    // Validação em tempo real para nome
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            validateField('name', this.value, 'name');
        });
    }

    // Validação em tempo real para e-mail
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            validateField('email', this.value, 'email');
        });
    }

    // Formatação e validação em tempo real para telefone
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhone(this);
        });
        phoneInput.addEventListener('blur', function() {
            validateField('phone', this.value, 'phone');
        });
    }
});

// ============================================
// ENVIO DO FORMULÁRIO VIA FETCH
// ============================================

/**
 * Exibe feedback de sucesso ou erro
 */
function showFeedback(message, type) {
    const feedbackElement = document.getElementById('formFeedback');
    
    if (feedbackElement) {
        feedbackElement.textContent = message;
        feedbackElement.className = `form__feedback ${type}`;
        feedbackElement.style.display = 'block';

        // Scroll para o feedback
        feedbackElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Remove feedback após 5 segundos (apenas em caso de sucesso)
        if (type === 'success') {
            setTimeout(() => {
                feedbackElement.style.display = 'none';
            }, 5000);
        }
    }
}

/**
 * Limpa o formulário após envio bem-sucedido
 */
function resetForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.reset();
        
        // Remove classes de erro
        const errorInputs = form.querySelectorAll('.form__input.error');
        errorInputs.forEach(input => input.classList.remove('error'));
        
        // Limpa mensagens de erro
        const errorMessages = form.querySelectorAll('.form__error');
        errorMessages.forEach(error => error.textContent = '');
    }
}

/**
 * Envia o formulário
 */
async function submitForm(formData) {
    const submitButton = document.querySelector('.btn--submit');
    const submitText = document.getElementById('submitText');
    const submitLoader = document.getElementById('submitLoader');

    // Mostra loading
    if (submitButton) {
        submitButton.disabled = true;
    }
    if (submitText) {
        submitText.style.display = 'none';
    }
    if (submitLoader) {
        submitLoader.style.display = 'inline-block';
    }

    try {
        // URL do endpoint - SUBSTITUA pela sua URL real
        // Para desenvolvimento, você pode usar um serviço como https://formspree.io ou criar seu próprio endpoint
        const endpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // SUBSTITUA pelo seu endpoint
        
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message') || 'N/A'
            })
        });

        // Remove loading
        if (submitText) {
            submitText.style.display = 'inline';
        }
        if (submitLoader) {
            submitLoader.style.display = 'none';
        }
        if (submitButton) {
            submitButton.disabled = false;
        }

        if (response.ok) {
            // Sucesso
            showFeedback('Inscrição realizada com sucesso! Em breve você receberá um e-mail com mais informações.', 'success');
            resetForm();
        } else {
            // Erro do servidor
            const errorData = await response.json();
            throw new Error(errorData.error || 'Erro ao processar inscrição');
        }
    } catch (error) {
        // Erro de rede ou outro erro
        console.error('Erro ao enviar formulário:', error);
        
        // Remove loading
        if (submitText) {
            submitText.style.display = 'inline';
        }
        if (submitLoader) {
            submitLoader.style.display = 'none';
        }
        if (submitButton) {
            submitButton.disabled = false;
        }

        // Mostra mensagem de erro amigável
        showFeedback(
            'Ops! Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente ou entre em contato conosco diretamente.',
            'error'
        );
    }
}

// ============================================
// HANDLER DO SUBMIT DO FORMULÁRIO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault(); // Previne envio padrão

            // Coleta dados do formulário
            const formData = new FormData(form);

            // Valida formulário
            if (!validateForm(formData)) {
                showFeedback('Por favor, corrija os erros no formulário antes de enviar.', 'error');
                return;
            }

            // Envia formulário
            await submitForm(formData);
        });
    }
});

// ============================================
// SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '') {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

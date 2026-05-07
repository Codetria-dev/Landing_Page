/**
 * ============================================
 * LANDING PAGE - CURSO DE INVESTIMENTO
 * Script principal com validação e envio de formulário
 * ============================================
 */

// ============================================
// SISTEMA DE TRADUÇÃO EN / PT
// ============================================

const translations = {
    pt: {
        // Nav
        nav_home: 'Início',
        nav_about: 'Sobre o Curso',
        nav_content: 'Conteúdo',
        nav_enroll: 'Inscreva-se',
        // Hero
        hero_title: 'Aprenda a investir e construa seu patrimônio com consistência',
        hero_subtitle: 'O Investe Vida é um curso prático para quem quer começar a investir mesmo com pouco dinheiro, entender como o mercado funciona e tomar decisões conscientes desde o primeiro passo.',
        hero_cta: 'Quero começar agora',
        // About
        about_title: 'Por que escolher o Investe Vida',
        about_text_1: 'O Investe Vida foi criado para quem está começando do zero e quer aprender a investir com segurança e clareza.',
        about_text_2: 'Sem linguagem complicada.\nSem promessas irreais.\nSem necessidade de grandes valores para iniciar.',
        about_text_3: 'Aqui você aprende o que realmente importa para construir patrimônio de forma consistente ao longo do tempo.',
        // Highlight
        highlight_text: 'Aqui, investir não é sobre sorte ou fórmulas milagrosas.\nÉ sobre método, disciplina e tempo.',
        highlight_cta: 'Começar agora',
        // Proof
        proof_label_students: 'Alunos',
        proof_label_approval: 'Aprovação',
        proof_label_online: 'Online',
        proof_text: 'Mais de 5.000 alunos já deram o primeiro passo rumo a uma vida financeira mais organizada e consciente.',
        // Features
        features_title: 'O que torna este curso diferente',
        feature_1_title: 'Conteúdo essencial e descomplicado',
        feature_1_desc: 'Você aprende desde os fundamentos até estratégias práticas, entendendo o "porquê" de cada decisão.',
        feature_2_title: 'Comece com pouco dinheiro',
        feature_2_desc: 'Mostramos como iniciar seus investimentos respeitando sua realidade financeira atual.',
        feature_3_title: 'Foco no longo prazo',
        feature_3_desc: 'Nada de atalhos perigosos. O objetivo é construir patrimônio com segurança e constância.',
        feature_4_title: 'Didática clara e prática',
        feature_4_desc: 'Explicações simples, exemplos reais e exercícios para aplicar imediatamente.',
        feature_5_title: 'Professores com experiência real',
        feature_5_desc: 'Instrutores que atuam no mercado e ensinam com base em prática, não em promessas.',
        feature_6_title: 'Acesso vitalício ao conteúdo',
        feature_6_desc: 'Estude no seu ritmo, revise quando quiser e acompanhe sua evolução ao longo do tempo.',
        // Content
        content_title: 'O que você vai aprender',
        content_1_title: 'Fundamentos dos investimentos',
        content_1_desc: 'Entenda como funciona o mercado financeiro, seus conceitos principais e os tipos de investimento disponíveis.',
        content_2_title: 'Planejamento financeiro pessoal',
        content_2_desc: 'Aprenda a organizar suas finanças, definir metas claras e criar uma base sólida antes de investir.',
        content_3_title: 'Renda fixa e renda variável',
        content_3_desc: 'Conheça as principais opções, seus riscos e quando cada uma faz sentido para seus objetivos.',
        content_4_title: 'Gestão de risco e diversificação',
        content_4_desc: 'Aprenda a proteger seu dinheiro e montar uma carteira equilibrada, adequada ao seu perfil.',
        content_5_title: 'Estratégias para iniciantes',
        content_5_desc: 'Estratégias simples, realistas e aplicáveis desde o início da sua jornada como investidor.',
        content_6_title: 'Materiais de apoio',
        content_6_desc: 'Planilhas, calculadoras e ferramentas para acompanhar seus investimentos com mais clareza.',
        // Objections
        objections_title: 'Dúvidas comuns antes de começar',
        objection_1_q: '"Preciso ter muito dinheiro para começar?"',
        objection_1_a: '→ Não. O curso ensina como iniciar com valores acessíveis.',
        objection_2_q: '"Preciso entender de mercado financeiro?"',
        objection_2_a: '→ Não. O conteúdo foi pensado para quem está começando do zero.',
        objection_3_q: '"É muito técnico?"',
        objection_3_a: '→ Não. A linguagem é simples, direta e focada na prática.',
        // CTA
        cta_title: 'Comece hoje mesmo',
        cta_text_1: 'Você não precisa ser especialista para começar.\nPrecisa apenas dar o primeiro passo da forma certa.',
        cta_text_2: 'Comece hoje a construir uma relação mais consciente com o seu dinheiro e dê início à formação do seu patrimônio.',
        cta_cta: 'Garantir minha vaga',
        // Form
        form_title: 'Inscreva-se agora',
        form_description: 'Preencha o formulário abaixo e receba todas as informações do curso diretamente no seu e-mail.',
        form_label_name: 'Nome Completo *',
        form_placeholder_name: 'Seu nome completo',
        form_label_email: 'E-mail *',
        form_placeholder_email: 'seu@email.com',
        form_label_phone: 'Telefone *',
        form_placeholder_phone: '(00) 00000-0000',
        form_label_message: 'Por que você quer aprender a investir? (Opcional)',
        form_placeholder_message: 'Conte-nos sobre seus objetivos...',
        form_submit: 'Confirmar inscrição',
        form_privacy: 'Seus dados estão seguros. Não enviamos spam.',
        // Form validation errors
        form_error_name_required: 'Nome é obrigatório',
        form_error_name_min: 'Nome deve ter pelo menos 3 caracteres',
        form_error_email_required: 'E-mail é obrigatório',
        form_error_email_invalid: 'E-mail inválido',
        form_error_phone_required: 'Telefone é obrigatório',
        form_error_phone_invalid: 'Telefone inválido. Use o formato: (00) 00000-0000',
        form_feedback_success: 'Inscrição realizada com sucesso! Em breve você receberá um e-mail com mais informações.',
        form_feedback_error_submit: 'Ops! Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente ou entre em contato conosco diretamente.',
        form_feedback_error_validation: 'Por favor, corrija os erros no formulário antes de enviar.',
        // Footer
        footer_title: 'Investe Vida — Curso Online de Investimentos',
        footer_credits: 'Desenvolvido por Codetria — Soluções Digitais & Desenvolvimento Web',
        footer_legal: 'Ao se inscrever, você concorda com o uso dos seus dados conforme nossa política de privacidade.'
    },
    en: {
        // Nav
        nav_home: 'Home',
        nav_about: 'About the Course',
        nav_content: 'Content',
        nav_enroll: 'Enroll',
        // Hero
        hero_title: 'Learn to invest and build your wealth consistently',
        hero_subtitle: 'Investe Vida is a practical course for those who want to start investing even with little money, understand how the market works, and make conscious decisions from the very first step.',
        hero_cta: 'I want to start now',
        // About
        about_title: 'Why choose Investe Vida',
        about_text_1: 'Investe Vida was created for those starting from scratch who want to learn to invest safely and clearly.',
        about_text_2: 'No complicated language.\nNo unrealistic promises.\nNo need for large amounts to start.',
        about_text_3: 'Here you learn what really matters to build wealth consistently over time.',
        // Highlight
        highlight_text: 'Here, investing is not about luck or miracle formulas.\nIt\'s about method, discipline, and time.',
        highlight_cta: 'Start now',
        // Proof
        proof_label_students: 'Students',
        proof_label_approval: 'Approval',
        proof_label_online: 'Online',
        proof_text: 'Over 5,000 students have already taken the first step toward a more organized and conscious financial life.',
        // Features
        features_title: 'What makes this course different',
        feature_1_title: 'Essential and straightforward content',
        feature_1_desc: 'You learn from the fundamentals to practical strategies, understanding the "why" behind each decision.',
        feature_2_title: 'Start with little money',
        feature_2_desc: 'We show you how to start investing while respecting your current financial reality.',
        feature_3_title: 'Long-term focus',
        feature_3_desc: 'No dangerous shortcuts. The goal is to build wealth safely and consistently.',
        feature_4_title: 'Clear and practical teaching',
        feature_4_desc: 'Simple explanations, real examples, and exercises to apply immediately.',
        feature_5_title: 'Teachers with real experience',
        feature_5_desc: 'Instructors who work in the market and teach based on practice, not promises.',
        feature_6_title: 'Lifetime access to content',
        feature_6_desc: 'Study at your own pace, review whenever you want, and track your progress over time.',
        // Content
        content_title: 'What you will learn',
        content_1_title: 'Investment fundamentals',
        content_1_desc: 'Understand how the financial market works, its main concepts, and the types of investments available.',
        content_2_title: 'Personal financial planning',
        content_2_desc: 'Learn to organize your finances, set clear goals, and create a solid foundation before investing.',
        content_3_title: 'Fixed income and variable income',
        content_3_desc: 'Get to know the main options, their risks, and when each makes sense for your goals.',
        content_4_title: 'Risk management and diversification',
        content_4_desc: 'Learn to protect your money and build a balanced portfolio suited to your profile.',
        content_5_title: 'Strategies for beginners',
        content_5_desc: 'Simple, realistic strategies you can apply from the start of your investment journey.',
        content_6_title: 'Support materials',
        content_6_desc: 'Spreadsheets, calculators, and tools to track your investments with more clarity.',
        // Objections
        objections_title: 'Common questions before starting',
        objection_1_q: '"Do I need a lot of money to start?"',
        objection_1_a: '→ No. The course teaches you how to start with affordable amounts.',
        objection_2_q: '"Do I need to understand the financial market?"',
        objection_2_a: '→ No. The content is designed for those starting from scratch.',
        objection_3_q: '"Is it too technical?"',
        objection_3_a: '→ No. The language is simple, direct, and focused on practice.',
        // CTA
        cta_title: 'Start today',
        cta_text_1: 'You don\'t need to be an expert to start.\nYou just need to take the first step the right way.',
        cta_text_2: 'Start today building a more conscious relationship with your money and begin forming your wealth.',
        cta_cta: 'Secure my spot',
        // Form
        form_title: 'Enroll now',
        form_description: 'Fill out the form below and receive all course information directly in your email.',
        form_label_name: 'Full Name *',
        form_placeholder_name: 'Your full name',
        form_label_email: 'Email *',
        form_placeholder_email: 'your@email.com',
        form_label_phone: 'Phone *',
        form_placeholder_phone: '(00) 00000-0000',
        form_label_message: 'Why do you want to learn to invest? (Optional)',
        form_placeholder_message: 'Tell us about your goals...',
        form_submit: 'Confirm enrollment',
        form_privacy: 'Your data is safe. We don\'t send spam.',
        // Form validation errors
        form_error_name_required: 'Name is required',
        form_error_name_min: 'Name must be at least 3 characters',
        form_error_email_required: 'Email is required',
        form_error_email_invalid: 'Invalid email',
        form_error_phone_required: 'Phone is required',
        form_error_phone_invalid: 'Invalid phone. Use format: (00) 00000-0000',
        form_feedback_success: 'Registration successful! You will soon receive an email with more information.',
        form_feedback_error_submit: 'Oops! An error occurred processing your registration. Please try again or contact us directly.',
        form_feedback_error_validation: 'Please correct the errors in the form before submitting.',
        // Footer
        footer_title: 'Investe Vida — Online Investment Course',
        footer_credits: 'Developed by Codetria — Digital Solutions & Web Development',
        footer_legal: 'By signing up, you agree to the use of your data according to our privacy policy.'
    }
};

let currentLang = localStorage.getItem('investeLang') || 'pt';

function t(key) {
    return translations[currentLang] && translations[currentLang][key] !== undefined
        ? translations[currentLang][key]
        : (translations['pt'][key] || key);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('investeLang', lang);

    // Update all data-i18n text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Update all data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update toggle button text
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.textContent = lang.toUpperCase();
    }

    // Update html lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

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

    // Inicializa o idioma salvo
    setLanguage(currentLang);

    // Toggle de idioma
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            setLanguage(newLang);
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
                errorMessage = t('form_error_name_required');
            } else if (value.trim().length < 3) {
                isValid = false;
                errorMessage = t('form_error_name_min');
            }
            break;

        case 'email':
            if (!value.trim()) {
                isValid = false;
                errorMessage = t('form_error_email_required');
            } else if (!validateEmail(value.trim())) {
                isValid = false;
                errorMessage = t('form_error_email_invalid');
            }
            break;

        case 'phone':
            if (!value.trim()) {
                isValid = false;
                errorMessage = t('form_error_phone_required');
            } else if (!validatePhone(value.trim())) {
                isValid = false;
                errorMessage = t('form_error_phone_invalid');
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
        // Endpoint de produção deve ser configurado antes do deploy
        // Para desenvolvimento, você pode usar um serviço como https://formspree.io ou criar seu próprio endpoint
        const endpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // SUBSTITUA pelo seu endpoint real
        
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
            showFeedback(t('form_feedback_success'), 'success');
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
            t('form_feedback_error_submit'),
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
                showFeedback(t('form_feedback_error_validation'), 'error');
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

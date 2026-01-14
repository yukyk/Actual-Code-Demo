class SignUpForm {
    constructor() {
        this.form = document.getElementById('signupForm');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.numberInput = document.getElementById('number');
        this.successMessage = document.getElementById('successMessage');
        
        this.init();
    }
    
    init() {
        FormUtils.addSharedAnimations();
        FormUtils.setupFloatingLabels(this.form);
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.nameInput.addEventListener('input', () => this.validateField('name'));
        this.emailInput.addEventListener('input', () => this.validateField('email'));
        this.numberInput.addEventListener('input', () => this.validateField('number'));
        
        // Navigate to login page
        const loginLink = document.getElementById('loginLink');
        if (loginLink) {
            loginLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = '/login.html';
            });
        }
        
        FormUtils.addEntranceAnimation(this.form.closest('.login-card'), 100);
    }
    
    validateField(fieldName) {
        const input = document.getElementById(fieldName);
        const value = input.value.trim();
        let validation;
        
        FormUtils.clearError(fieldName);
        
        if (fieldName === 'name') {
            validation = FormUtils.validateName(value);
        } else if (fieldName === 'email') {
            validation = FormUtils.validateEmail(value);
        } else if (fieldName === 'number') {
            validation = FormUtils.validateNumber(value);
        }
        
        if (!validation.isValid && value !== '') {
            FormUtils.showError(fieldName, validation.message);
            return false;
        } else if (validation.isValid) {
            FormUtils.showSuccess(fieldName);
            return true;
        }
        
        return true;
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const name = this.nameInput.value.trim();
        const email = this.emailInput.value.trim();
        const number = this.numberInput.value.trim();
        
        const nameValid = this.validateField('name');
        const emailValid = this.validateField('email');
        const numberValid = this.validateField('number');
        
        if (!nameValid || !emailValid || !numberValid) {
            FormUtils.showNotification('Please fix the errors below', 'error', this.form);
            return;
        }
        
        const submitBtn = this.form.querySelector('.login-btn');
        submitBtn.classList.add('loading');
        
        try {
            const result = await FormUtils.signUp(name, email, number);
            
            // Show success message
            this.showSuccess();
            
        } catch (error) {
            FormUtils.showNotification(error.message || 'Sign up failed. Please try again.', 'error', this.form);
        } finally {
            submitBtn.classList.remove('loading');
        }
    }
    
    showSuccess() {
        this.form.style.display = 'none';
        
        this.successMessage.classList.add('show');
        
        setTimeout(() => {
            FormUtils.showNotification('Account created successfully!', 'success', this.successMessage);
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SignUpForm();
});


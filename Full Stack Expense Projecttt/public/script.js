
class BasicLoginForm {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        this.passwordToggle = document.getElementById('passwordToggle');
        this.successMessage = document.getElementById('successMessage');
        
        this.init();
    }
    
    init() {

        FormUtils.addSharedAnimations();
        FormUtils.setupFloatingLabels(this.form);
        FormUtils.setupPasswordToggle(this.passwordInput, this.passwordToggle);
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.emailInput.addEventListener('input', () => this.validateField('email'));
        this.passwordInput.addEventListener('input', () => this.validateField('password'));
        
        FormUtils.addEntranceAnimation(this.form.closest('.login-card'), 100);
    }
    
    validateField(fieldName) {
        const input = document.getElementById(fieldName);
        const value = input.value.trim();
        let validation;
        
        FormUtils.clearError(fieldName);
        
        if (fieldName === 'email') {
            validation = FormUtils.validateEmail(value);
        } else if (fieldName === 'password') {
            validation = FormUtils.validatePassword(value);
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
        
        const email = this.emailInput.value.trim();
        const password = this.passwordInput.value.trim();
        
        const emailValid = this.validateField('email');
        const passwordValid = this.validateField('password');
        
        if (!emailValid || !passwordValid) {
            FormUtils.showNotification('Please fix the errors below', 'error', this.form);
            return;
        }
        
        const submitBtn = this.form.querySelector('.login-btn');
        submitBtn.classList.add('loading');
        
        try {
            await FormUtils.simulateLogin(email, password);
            
            this.showSuccess();
            
        } catch (error) {
            FormUtils.showNotification(error.message, 'error', this.form);
        } finally {
            submitBtn.classList.remove('loading');
        }
    }
    
    showSuccess() {
        this.form.style.display = 'none';
        
        this.successMessage.classList.add('show');
        
        setTimeout(() => {
            FormUtils.showNotification('Redirecting to dashboard...', 'success', this.successMessage);
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BasicLoginForm();
});

const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    message.innerText = data.message;
});

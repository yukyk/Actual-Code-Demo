// Form Utilities for Sign Up Form
const FormUtils = {
    // Add shared animations
    addSharedAnimations() {
        // Animations are handled via CSS, this is a placeholder for any JS animations needed
    },

    // Setup floating labels
    setupFloatingLabels(form) {
        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
        
        inputs.forEach(input => {
            // Add has-value class if input has value on load
            if (input.value.trim() !== '') {
                input.classList.add('has-value');
            }

            // Handle focus/blur for floating labels
            input.addEventListener('focus', () => {
                input.classList.add('has-value');
            });

            input.addEventListener('blur', () => {
                if (input.value.trim() === '') {
                    input.classList.remove('has-value');
                }
            });

            // Also handle input event for real-time updates
            input.addEventListener('input', () => {
                if (input.value.trim() !== '') {
                    input.classList.add('has-value');
                } else {
                    input.classList.remove('has-value');
                }
            });
        });
    },

    // Setup password toggle visibility
    setupPasswordToggle(passwordInput, toggleButton) {
        if (!passwordInput || !toggleButton) return;

        toggleButton.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            
            const eyeIcon = toggleButton.querySelector('.eye-icon');
            if (eyeIcon) {
                eyeIcon.classList.toggle('show-password', isPassword);
            }
        });
    },

    // Validate email
    validateEmail(email) {
        if (!email || email.trim() === '') {
            return { isValid: false, message: 'Email is required' };
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { isValid: false, message: 'Please enter a valid email address' };
        }
        
        return { isValid: true, message: '' };
    },

    // Validate name
    validateName(name) {
        if (!name || name.trim() === '') {
            return { isValid: false, message: 'Name is required' };
        }
        
        if (name.trim().length < 2) {
            return { isValid: false, message: 'Name must be at least 2 characters' };
        }
        
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name.trim())) {
            return { isValid: false, message: 'Name should only contain letters and spaces' };
        }
        
        return { isValid: true, message: '' };
    },

    // Validate phone number
    validateNumber(number) {
        if (!number || number.trim() === '') {
            return { isValid: false, message: 'Phone number is required' };
        }
        
        // Remove spaces, dashes, and parentheses for validation
        const cleanedNumber = number.replace(/[\s\-\(\)]/g, '');
        
        // Check if it's all digits and has reasonable length (7-15 digits)
        const numberRegex = /^\d{7,15}$/;
        if (!numberRegex.test(cleanedNumber)) {
            return { isValid: false, message: 'Please enter a valid phone number' };
        }
        
        return { isValid: true, message: '' };
    },

    // Show error message
    showError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}Error`);
        const formGroup = document.getElementById(fieldName).closest('.form-group');
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        
        if (formGroup) {
            formGroup.classList.add('error');
        }
    },

    // Clear error message
    clearError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}Error`);
        const input = document.getElementById(fieldName);
        const formGroup = input ? input.closest('.form-group') : null;
        
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
        
        if (formGroup) {
            formGroup.classList.remove('error');
        }
    },

    // Show success state (remove error styling)
    showSuccess(fieldName) {
        this.clearError(fieldName);
    },

    // Show notification
    showNotification(message, type, container) {
        // Create notification element if it doesn't exist
        let notification = container.querySelector('.form-notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'form-notification';
            container.insertBefore(notification, container.firstChild);
        }
        
        notification.textContent = message;
        notification.className = `form-notification ${type}`;
        notification.style.display = 'block';
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    },

    // Sign up API call
    async signUp(name, email, number) {
        const res = await fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: name,
                email: email,
                number: number
            })
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Sign up failed');
        }

        return data;
    },

    // Login API call
    async login(email, password) {
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: email,
                password: password
            })
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Login failed');
        }

        return data;
    },

    // Add entrance animation
    addEntranceAnimation(element, delay = 0) {
        if (!element) return;
        
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }
};

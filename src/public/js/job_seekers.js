// job_seeker_specification_skills.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('jobSeekerForm');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Proceed with form submission
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            const response = await fetch('/jobSeekers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert('Job seeker profile created successfully.');
                this.reset();
            } else {
                alert('Error creating job seeker profile.');
            }
        }
    });

    function validateForm() {
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const skillsInput = document.getElementById('skills');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const skillsError = document.getElementById('skillsError');

        // Reset previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        skillsError.textContent = '';

        // Validate name
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required';
            isValid = false;
        }

        // Validate email
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email address';
            isValid = false;
        }

        // Validate skills
        if (!skillsInput.value.trim()) {
            skillsError.textContent = 'Skills are required';
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});


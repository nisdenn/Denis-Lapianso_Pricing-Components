document.addEventListener('DOMContentLoaded', () => {
    const billingToggle = document.getElementById('billing-toggle');
    const labelMonthly = document.getElementById('label-monthly');
    const labelYearly = document.getElementById('label-yearly');
    const amounts = document.querySelectorAll('.amount');

    // Initial state
    labelMonthly.classList.add('active');

    billingToggle.addEventListener('change', (e) => {
        const isYearly = e.target.checked;
        
        // Update Labels
        if (isYearly) {
            labelYearly.classList.add('active');
            labelMonthly.classList.remove('active');
        } else {
            labelMonthly.classList.add('active');
            labelYearly.classList.remove('active');
        }

        // Animate and update prices
        amounts.forEach(amount => {
            // Fade out
            amount.classList.add('fade-out');
            amount.classList.remove('fade-in');

            setTimeout(() => {
                // Update value while invisible
                const newValue = isYearly ? amount.getAttribute('data-yearly') : amount.getAttribute('data-monthly');
                amount.textContent = newValue;
                
                // Fade in
                amount.classList.remove('fade-out');
                amount.classList.add('fade-in');
            }, 300); // 300ms matches the CSS transition time
        });
    });
});

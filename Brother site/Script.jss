document.addEventListener('DOMContentLoaded', function() {
    const sendMailBtn = document.getElementById('sendMailBtn');

    if (sendMailBtn) {
        sendMailBtn.addEventListener('click', function() {
            // Adresse e-mail du destinataire
            const recipient = 'mokipolo80@gmail.com'; 
            // Sujet de l'e-mail
            const subject = 'Subject';
            // Corps du message (optionnel)
            const body = 'Enter something';
            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        });
    }
});

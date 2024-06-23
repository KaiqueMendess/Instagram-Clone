document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade de seguir/desseguir
    document.querySelectorAll('.follow').forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = button.textContent === 'Seguir' ? 'Seguindo' : 'Seguir';
        });
    });

    // Interações nos ícones de ação
    document.querySelectorAll('.post-actions .icon-like').forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('liked')) {
                icon.classList.remove('liked');
                icon.innerHTML = '&#9829;'; // Ícone de coração vazio
            } else {
                icon.classList.add('liked');
                icon.innerHTML = '&#9829;'; // Ícone de coração preenchido
            }
        });
    });

    // Alternar a exibição dos comentários
    document.querySelectorAll('.comments').forEach(commentLink => {
        commentLink.addEventListener('click', () => {
            const postFooter = commentLink.closest('.post-footer');
            const commentSection = postFooter.querySelector('.comment-section');
            commentSection.classList.toggle('visible');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var likeIcons = document.querySelectorAll('.like-icon');

    likeIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.classList.toggle('liked');
        });
    });
});

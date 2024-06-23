document.addEventListener('DOMContentLoaded', function() {
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
                icon.innerHTML = '<i class="fas fa-heart"></i>'; // Ícone de coração vazio
            } else {
                icon.classList.add('liked');
                icon.innerHTML = '<i class="fas fa-heart"></i>'; // Ícone de coração preenchido
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

    // Funcionalidade de curtir posts
    document.querySelectorAll('.like-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('liked');
        });
    });

    // Exibir stories em um modal
    const modal = document.getElementById("story-modal");
    const modalImg = document.getElementById("story-img");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll('.story img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Exemplo de alteração dinâmica das classes para simular o estado visto/não visto
    document.querySelectorAll('.story').forEach(story => {
        story.addEventListener('click', () => {
            story.classList.toggle('story-seen');
            story.classList.toggle('story-unseen');
        });
    });
});
// JavaScript para alternar o ícone de salvar
const saveIcon = document.getElementById('save-icon');

saveIcon.addEventListener('click', function() {
    // Toggle entre ícone de salvar (far fa-bookmark) e ícone salvo (fas fa-bookmark)
    saveIcon.querySelector('i').classList.toggle('far');
    saveIcon.querySelector('i').classList.toggle('fas');
    
    // Toggle entre classe não salvo e salvo
    saveIcon.classList.toggle('saved');
});


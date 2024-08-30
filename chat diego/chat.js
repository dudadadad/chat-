//sidebar
document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
        console.log('vapo');
        document.querySelector('.chat-sidebar-profile').classList.remove('active');
    }
});

//botao
document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        // Verifica se o dropdown está ativo
        if(this.parentElement.classList.contains('active')){
            this.parentElement.classList.remove('active');
        } else {
            // Fecha todos os dropdowns ativos
            document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
                i.classList.remove('active');
            });

            // Abre o dropdown atual
            this.parentElement.classList.add('active');
        }
    });
});

// fecha o dropdown quando clicar fora
document.addEventListener('click', function(e) {
    if(!e.target.closest('.conversation-item-dropdown')) {
        document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
            i.classList.remove('active');
        });
    }
});

document.querySelector('.conversation-form-input').addEventListener('input', function() {
    this.rows = this.value.split('\n').length;
});

document.querySelectorAll('[data-conversation]').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelectorAll('.conversation').forEach(function(i) {
            i.classList.remove('active')
        })
        document.querySelector(this.dataset.conversation).classList.add('active')
    })
});

document.querySelectorAll('.conversation-back').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        this.closest('.conversation').classList.remove('active')
        document.querySelector('.conversation-default').classList.add('active')
    })
});

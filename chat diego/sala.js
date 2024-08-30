document.addEventListener('DOMContentLoaded', function() {
    const chatRooms = document.querySelectorAll('.chat-rooms ul li');

    chatRooms.forEach(room => {
        room.addEventListener('click', function() {
            alert(`Você entrou na ${this.textContent}`);
        });
    });
});
